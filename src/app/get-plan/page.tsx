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
import { useState } from "react"
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"

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
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Form submitted:", data)
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const nextStep = async () => {
    let isValid = false
    if (step === 1) {
      isValid = await trigger(["firstName", "lastName", "email", "age", "gender"])
    } else if (step === 2) {
      isValid = await trigger(["height", "weight", "goal", "dietaryPreferences", "allergies", "budget"])
    }
    
    if (isValid) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20 p-6">
        <Card className="max-w-md w-full text-center py-10">
          <CardContent className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold">Request Received!</h2>
            <p className="text-muted-foreground">
              Thank you, {formValues.firstName}. We've received your body stats.
              Sofi will review your profile shortly.
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg w-full mt-4 border border-secondary/20">
              <p className="font-medium text-secondary-foreground text-sm">Next Step:</p>
              <p className="text-sm">Check your email for payment instructions.</p>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-muted/20 flex flex-col items-center">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Get Your Personalized Plan</h1>
        <p className="text-muted-foreground">Tell us about yourself so we can build the perfect diet for you.</p>
      </div>

      <Card className="max-w-2xl w-full">
        <CardHeader>
            <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                    {[1, 2, 3].map((s) => (
                        <div 
                            key={s} 
                            className={`w-8 h-1 rounded-full ${step >= s ? "bg-primary" : "bg-muted"}`}
                        />
                    ))}
                </div>
                <span className="text-sm text-muted-foreground">Step {step} of 3</span>
            </div>
          <CardTitle>
            {step === 1 && "Basic Information"}
            {step === 2 && "Body Stats & Goals"}
            {step === 3 && "Review & Submit"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Let's start with the basics."}
            {step === 2 && "Help us understand your body and what you want to achieve."}
            {step === 3 && "Please review your information before submitting."}
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" {...register("firstName")} placeholder="Enter your first name" />
                    {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" {...register("lastName")} placeholder="Enter your last name" />
                    {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="you@example.com" />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" type="number" {...register("age")} placeholder="25" />
                        {errors.age && <p className="text-red-500 text-xs">{errors.age.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label>Gender</Label>
                        <Select onValueChange={(val) => setValue("gender", val)} defaultValue={watch("gender")}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.gender && <p className="text-red-500 text-xs">{errors.gender.message}</p>}
                    </div>
                </div>
              </div>
            )}

            {/* Step 2: Body Stats */}
            {step === 2 && (
              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input id="height" type="number" {...register("height")} placeholder="175" />
                    {errors.height && <p className="text-red-500 text-xs">{errors.height.message}</p>}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" type="number" {...register("weight")} placeholder="70" />
                    {errors.weight && <p className="text-red-500 text-xs">{errors.weight.message}</p>}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label>Main Goal</Label>
                  <Select onValueChange={(val) => setValue("goal", val)} defaultValue={watch("goal")}>
                    <SelectTrigger>
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
                    <Input id="preferences" {...register("dietaryPreferences")} placeholder="e.g. Vegetarian, No Pork, Halal" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="allergies">Allergies (Optional)</Label>
                    <Input id="allergies" {...register("allergies")} placeholder="e.g. Peanuts, Dairy, Gluten" />
                </div>

                <div className="grid gap-2">
                  <Label>Weekly Food Budget</Label>
                  <Select onValueChange={(val) => setValue("budget", val)} defaultValue={watch("budget")}>
                    <SelectTrigger>
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
                <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <span className="text-muted-foreground">Name:</span>
                            <span className="font-medium text-right">{formValues.firstName} {formValues.lastName}</span>
                            
                            <span className="text-muted-foreground">Email:</span>
                            <span className="font-medium text-right">{formValues.email}</span>
                            
                            <span className="text-muted-foreground">Stats:</span>
                            <span className="font-medium text-right">{formValues.age} yrs, {formValues.height}cm, {formValues.weight}kg</span>
                            
                            <span className="text-muted-foreground">Goal:</span>
                            <span className="font-medium text-right capitalize">{formValues.goal?.replace("_", " ")}</span>

                            <span className="text-muted-foreground">Budget:</span>
                            <span className="font-medium text-right capitalize">{formValues.budget}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-primary/5 rounded border border-primary/20">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground/80">
                            By submitting, you agree to pay the one-time fee upon approval of your request.
                        </p>
                    </div>
                </div>
            )}

          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
            ) : (
                <Button variant="ghost" asChild>
                    <Link href="/">Cancel</Link>
                </Button>
            )}
            
            {step < 3 ? (
              <Button type="button" onClick={nextStep}>
                Next Step <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    "Submit Request"
                )}
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
