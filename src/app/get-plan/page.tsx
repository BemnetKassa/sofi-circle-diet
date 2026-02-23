"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState, useMemo } from "react"
import { CheckCircle, ArrowRight, Loader2, ArrowLeft, CreditCard } from "lucide-react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Age must be a valid number",
  }),
  gender: z.string().min(1, "Please select a gender"),
  height: z.string().min(1, "Height is required (cm)"),
  weight: z.string().min(1, "Weight is required (kg)"),
  goal: z.string().min(1, "Please select a goal"),
  dietaryPreferences: z.string().optional(),
  allergies: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
})

type FormValues = z.infer<typeof formSchema>

export default function GetPlanPage() {
  const searchParams = useSearchParams()
  const planType = searchParams.get("plan") || "standard"
  
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [direction, setDirection] = useState(0)

  const planPrice = useMemo(() => {
    return planType === "premium" ? 4999 : 4000
  }, [planType])

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     gender: "",
     goal: "",
     budget: ""
    }
  })

  const formValues = watch()

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
        const tx_ref = `tx-${Date.now()}-${Math.floor(Math.random() * 1000)}`
        
        const response = await fetch('/api/pay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                amount: planPrice,
                tx_ref: tx_ref,
                planType: planType
            }),
        })

        const result = await response.json()

        if (result.url) {
            // Redirect to Chapa checkout
            window.location.href = result.url
        } else {
            alert(result.message || "Failed to initialize payment")
        }
    } catch (error) {
        console.error("Payment Error:", error)
        alert("An error occurred during payment initialization.")
    } finally {
        setIsSubmitting(false)
    }
  }

  const nextStep = async () => {
    let isValid = false
    if (step === 1) {
      isValid = await trigger(["firstName", "lastName", "email", "age", "gender"])
    } else if (step === 2) {
      isValid = await trigger(["height", "weight", "goal", "dietaryPreferences", "allergies", "budget"])
    }
    
    if (isValid) {
      setDirection(1)
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    setDirection(-1)
    setStep(step - 1)
  }

  const steps = [
    { title: "Basic Information", desc: "Let's start with the basics." },
    { title: "Body Stats & Goals", desc: "Help us understand your body." },
    { title: "Review & Submit", desc: "Double check your details." }
  ]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/50 to-secondary/10 p-6 relative overflow-hidden">
        {/* Confetti-like background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 1 }} className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 1, delay: 0.2 }} className="absolute top-1/2 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="w-full max-w-md"
        >
            <Card className="text-center py-12 border-primary/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardContent className="flex flex-col items-center gap-6 relative z-10">
                    <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-primary mb-2 shadow-inner"
                    >
                        <CheckCircle className="w-10 h-10" />
                    </motion.div>
                    
                    <div className="space-y-2">
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl font-bold"
                        >
                            Request Received!
                        </motion.h2>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-muted-foreground"
                        >
                            Thank you, <span className="font-semibold text-foreground">{formValues.firstName}</span>. We've received your stats.
                            Sofi will review your profile shortly.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-secondary/10 p-5 rounded-xl w-full border border-secondary/20"
                    >
                        <p className="font-bold text-secondary-foreground text-sm flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-secondary inline-block" /> 
                            Next Step
                        </p>
                        <p className="text-sm mt-1">Check your email for payment instructions.</p>
                    </motion.div>
                </CardContent>
                <CardFooter className="justify-center pt-2">
                    <Button asChild className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href="/">Back to Home</Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-muted/20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div>

      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8 text-center max-w-lg z-10"
      >
        <h1 className="text-3xl font-extrabold mb-3 tracking-tight">Get Your Personalized Plan</h1>
        <p className="text-muted-foreground text-lg">Tell us about yourself so we can build the perfect diet for you.</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-2xl"
      >
        <Card className="border-border/50 shadow-xl bg-card/80 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-muted">
                <motion.div 
                    className="h-full bg-secondary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
            </div>

            <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-6 mt-2">
                    {steps.map((s, i) => (
                        <div key={i} className="flex flex-col items-center relative z-10">
                            <motion.div 
                                animate={{ 
                                    backgroundColor: step > i + 1 ? "var(--primary)" : step === i + 1 ? "var(--secondary)" : "var(--muted)",
                                    color: step === i + 1 ? "var(--secondary-foreground)" : step > i + 1 ? "var(--primary-foreground)" : "var(--muted-foreground)"
                                }}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300`}
                            >
                                {step > i + 1 ? <CheckCircle className="w-5 h-5" /> : i + 1}
                            </motion.div>
                            <span className="text-[10px] uppercase tracking-wider font-semibold mt-2 text-muted-foreground">{s.title.split(" ")[0]}</span>
                        </div>
                    ))}
                    {/* Progress line background */}
                    <div className="absolute top-[4.5rem] left-10 right-10 h-0.5 bg-muted -z-0 -translate-y-[2.6rem]" />
                </div>
                
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={step}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                    >
                        <CardTitle className="text-2xl">{steps[step-1].title}</CardTitle>
                        <CardDescription className="text-base mt-2">{steps[step-1].desc}</CardDescription>
                    </motion.div>
                </AnimatePresence>
            </CardHeader>
            
            <form 
                onSubmit={(e) => {
                    // Prevent submission if not on the final step
                    if (step < 3) {
                        e.preventDefault();
                        return;
                    }
                    handleSubmit(onSubmit)(e);
                }} 
                className="relative overflow-hidden"
            >
            <CardContent className="space-y-6 pt-6 min-h-[320px]">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={step}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="space-y-6"
                    >
                    {/* Step 1: Basic Info */}
                    {step === 1 && (
                    <div className="grid gap-5">
                        <div className="grid md:grid-cols-2 gap-5">
                        <div className="grid gap-2">
                            <Label htmlFor="firstName" className="text-sm font-semibold">First Name</Label>
                            <Input id="firstName" {...register("firstName")} placeholder="Enter your first name" className="bg-background/50 focus:bg-background transition-colors" />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="lastName" className="text-sm font-semibold">Last Name</Label>
                            <Input id="lastName" {...register("lastName")} placeholder="Enter your last name" className="bg-background/50 focus:bg-background transition-colors" />
                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                        </div>
                        </div>
                        
                        <div className="grid gap-2">
                        <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                        <Input id="email" type="email" {...register("email")} placeholder="you@example.com" className="bg-background/50 focus:bg-background transition-colors" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password" className="text-sm font-semibold">Create Password</Label>
                            <Input id="password" type="password" {...register("password")} placeholder="••••••••" className="bg-background/50 focus:bg-background transition-colors" />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="grid gap-2">
                                <Label htmlFor="age" className="text-sm font-semibold">Age</Label>
                                <Input id="age" type="number" {...register("age")} placeholder="25" className="bg-background/50 focus:bg-background transition-colors" />
                                {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-semibold">Gender</Label>
                                <Select onValueChange={(val) => setValue("gender", val)} defaultValue={watch("gender")}>
                                    <SelectTrigger className="bg-background/50">
                                        <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Step 2: Body Stats */}
                    {step === 2 && (
                    <div className="grid gap-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="grid gap-2">
                                <Label htmlFor="height">Height (cm)</Label>
                                <Input id="height" type="number" {...register("height")} placeholder="175" className="bg-background/50" />
                                {errors.height && <p className="text-red-500 text-xs">{errors.height.message}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="weight">Weight (kg)</Label>
                                <Input id="weight" type="number" {...register("weight")} placeholder="70" className="bg-background/50" />
                                {errors.weight && <p className="text-red-500 text-xs">{errors.weight.message}</p>}
                            </div>
                        </div>

                        <div className="grid gap-2">
                        <Label>Main Goal</Label>
                        <Select onValueChange={(val) => setValue("goal", val)} defaultValue={watch("goal")}>
                            <SelectTrigger className="bg-background/50 h-11">
                                <SelectValue placeholder="What do you want to achieve?" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="lose_fat">Lose Fat</SelectItem>
                                <SelectItem value="gain_muscle">Gain Muscle</SelectItem>
                                <SelectItem value="maintain">Maintain Weight</SelectItem>
                                <SelectItem value="health">General Health</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.goal && <p className="text-red-500 text-xs">{errors.goal.message}</p>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="preferences">Food Preferences (Optional)</Label>
                            <Input id="preferences" {...register("dietaryPreferences")} placeholder="e.g. Vegetarian, No Pork, Halal" className="bg-background/50" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="allergies">Allergies (Optional)</Label>
                            <Input id="allergies" {...register("allergies")} placeholder="e.g. Peanuts, Dairy, Gluten" className="bg-background/50" />
                        </div>

                        <div className="grid gap-2">
                        <Label>Weekly Food Budget</Label>
                        <Select onValueChange={(val) => setValue("budget", val)} defaultValue={watch("budget")}>
                            <SelectTrigger className="bg-background/50 h-11">
                                <SelectValue placeholder="Select your budget range" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="low">Low (Student Friendly)</SelectItem>
                                <SelectItem value="medium">Medium (Standard)</SelectItem>
                                <SelectItem value="high">High (Premium Ingredients)</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.budget && <p className="text-red-500 text-xs">{errors.budget.message}</p>}
                        </div>
                    </div>
                    )}

                    {/* Step 3: Review */}
                    {step === 3 && (
                        <div className="space-y-5">
                            <div className="bg-muted/30 p-6 rounded-xl space-y-4 border border-border/50">
                                <h4 className="font-semibold text-lg border-b pb-2 mb-2">Summary</h4>
                                <div className="grid grid-cols-2 gap-y-3 text-sm">
                                    <span className="text-muted-foreground">Name:</span>
                                    <span className="font-medium text-right text-foreground">{formValues.firstName} {formValues.lastName}</span>
                                    
                                    <span className="text-muted-foreground">Email:</span>
                                    <span className="font-medium text-right text-foreground">{formValues.email}</span>
                                    
                                    <span className="text-muted-foreground">Stats:</span>
                                    <span className="font-medium text-right text-foreground">{formValues.age} yrs, {formValues.height}cm, {formValues.weight}kg</span>
                                    
                                    <span className="text-muted-foreground">Goal:</span>
                                    <span className="font-medium text-right capitalize text-primary font-bold">{formValues.goal?.replace("_", " ")}</span>

                                    <span className="text-muted-foreground">Budget:</span>
                                    <span className="font-medium text-right capitalize text-foreground">{formValues.budget}</span>

                                    <div className="col-span-2 border-t pt-3 mt-1 flex justify-between items-center">
                                        <span className="font-bold text-lg">Total to Pay:</span>
                                        <span className="font-black text-2xl text-secondary">{planPrice} ETB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                                <CreditCard className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                                <p className="text-sm text-secondary-foreground/90 font-medium">
                                    You will be redirected to Chapa's secure payment portal to complete your purchase of the <span className="underline decoration-2">{planType}</span> plan.
                                </p>
                            </div>
                        </div>
                    )}
                    </motion.div>
                </AnimatePresence>
            </CardContent>
            <CardFooter className="flex justify-between bg-muted/20 py-4 px-6 border-t">
                {step > 1 ? (
                <Button type="button" variant="ghost" onClick={prevStep} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                ) : (
                    <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                        <Link href="/">Cancel</Link>
                    </Button>
                )}
                
                {step < 3 ? (
                <Button 
                    type="button" 
                    onClick={nextStep} 
                    className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
                >
                    Next Step <ArrowRight className="w-4 h-4" />
                </Button>
                ) : (
                <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="gap-2 min-w-[180px] bg-secondary hover:bg-secondary/90 text-secondary-foreground font-black shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transition-all hover:-translate-y-0.5"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Redirecting to Payment...
                        </>
                    ) : (
                        <>
                            Pay {planPrice} ETB <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </Button>
                )}
            </CardFooter>
            </form>
        </Card>
      </motion.div>
    </div>
  )
}
