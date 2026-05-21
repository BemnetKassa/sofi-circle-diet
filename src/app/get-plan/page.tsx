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

import {
    useState,
    useMemo,
    Suspense,
} from "react"

import {
    CheckCircle,
    ArrowRight,
    Loader2,
    ArrowLeft,
    Upload,
    Landmark,
} from "lucide-react"

import { useSearchParams } from "next/navigation"

import Link from "next/link"

import {
    AnimatePresence,
    motion,
} from "framer-motion"

const formSchema = z.object({
    firstName: z.string().min(2, "First name is required"),

    lastName: z.string().min(2, "Last name is required"),

    email: z.string().email("Invalid email address"),

    telegramUsername: z.string().optional(),

    age: z.string().refine(
        (val) => !isNaN(Number(val)) && Number(val) > 0,
        {
            message: "Age must be a valid number",
        }
    ),

    gender: z.string().min(1, "Please select a gender"),

    height: z.string().min(1, "Height is required"),

    weight: z.string().min(1, "Weight is required"),

    goal: z.string().min(1, "Please select a goal"),

    dietaryPreferences: z.string().optional(),

    allergies: z.string().optional(),

    budget: z.string().min(1, "Please select a budget range"),
})

type FormValues = z.infer<typeof formSchema>

function GetPlanContent() {
    const searchParams = useSearchParams()

    const planType = searchParams.get("plan") || "standard"

    const [step, setStep] = useState(1)

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [isSuccess, setIsSuccess] = useState(false)

    const [direction, setDirection] = useState(0)

    const [receiptFile, setReceiptFile] = useState<File | null>(null)

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
            budget: "",
        },
    })

    const formValues = watch()

    const onSubmit = async (data: FormValues) => {
        if (!receiptFile) {
            alert("Please upload your payment receipt.")
            return
        }

        setIsSubmitting(true)

        try {
            const formData = new FormData()

            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value)
            })

            formData.append("receipt", receiptFile)

            formData.append("planType", planType)

            formData.append("amount", String(planPrice))

            const response = await fetch("/api/telegram", {
                method: "POST",
                body: formData,
            })

            const result = await response.json()

            if (result.success) {
                setIsSuccess(true)
            } else {
                alert(result.message || "Failed to submit request.")
            }
        } catch (error) {
            console.error(error)
            alert("Something went wrong.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const nextStep = async () => {
        let isValid = false

        if (step === 1) {
            isValid = await trigger([
                "firstName",
                "lastName",
                "email",
                "telegramUsername",
                "age",
                "gender",
            ])
        }

        if (step === 2) {
            isValid = await trigger([
                "height",
                "weight",
                "goal",
                "dietaryPreferences",
                "allergies",
                "budget",
            ])
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
        {
            title: "Basic Information",
            desc: "Let's start with the basics.",
        },

        {
            title: "Body Stats & Goals",
            desc: "Help us understand your body.",
        },

        {
            title: "Bank Transfer",
            desc: "Upload your payment receipt.",
        },
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
            <div className="min-h-screen flex items-center justify-center bg-muted/20 p-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full max-w-md"
                >
                    <Card className="text-center py-10 shadow-xl">
                        <CardContent className="flex flex-col items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold">
                                    Submission Successful
                                </h2>

                                <p className="text-muted-foreground">
                                    Your request and payment receipt were sent
                                    successfully.
                                </p>

                                <p className="text-muted-foreground">
                                    The nutritionist will review your submission
                                    shortly.
                                </p>
                            </div>

                            <Button asChild>
                                <Link href="/">Back to Home</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen py-12 px-4 bg-muted/20 flex flex-col items-center justify-center">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mb-8 text-center max-w-lg"
            >
                <h1 className="text-3xl font-extrabold mb-3">
                    Get Your Personalized Plan
                </h1>

                <p className="text-muted-foreground">
                    Fill the form and upload your payment receipt.
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-2xl"
            >
                <Card className="shadow-xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-muted">
                        <motion.div
                            className="h-full bg-primary"
                            animate={{
                                width: `${(step / 3) * 100}%`,
                            }}
                        />
                    </div>

                    <CardHeader>
                        <div className="flex justify-between mb-6">
                            {steps.map((s, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center"
                                >
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= i + 1
                                            ? "bg-primary text-white"
                                            : "bg-muted"
                                            }`}
                                    >
                                        {step > i + 1 ? (
                                            <CheckCircle className="w-4 h-4" />
                                        ) : (
                                            i + 1
                                        )}
                                    </div>

                                    <span className="text-[10px] mt-2 uppercase">
                                        {s.title.split(" ")[0]}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <CardTitle className="text-2xl">
                            {steps[step - 1].title}
                        </CardTitle>

                        <CardDescription>
                            {steps[step - 1].desc}
                        </CardDescription>
                    </CardHeader>

                    <form>
                        <CardContent className="space-y-6 min-h-[350px]">
                            <AnimatePresence
                                mode="wait"
                                custom={direction}
                            >
                                <motion.div
                                    key={step}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        },
                                        opacity: { duration: 0.2 },
                                    }}
                                    className="space-y-6"
                                >
                                    {step === 1 && (
                                        <div className="grid gap-5">
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="grid gap-2">
                                                    <Label>First Name</Label>

                                                    <Input
                                                        {...register("firstName")}
                                                        placeholder="First name"
                                                    />

                                                    {errors.firstName && (
                                                        <p className="text-red-500 text-xs">
                                                            {errors.firstName.message}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="grid gap-2">
                                                    <Label>Last Name</Label>

                                                    <Input
                                                        {...register("lastName")}
                                                        placeholder="Last name"
                                                    />

                                                    {errors.lastName && (
                                                        <p className="text-red-500 text-xs">
                                                            {errors.lastName.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="grid gap-2">
                                                <Label>Email</Label>

                                                <Input
                                                    type="email"
                                                    {...register("email")}
                                                    placeholder="you@example.com"
                                                />

                                                {errors.email && (
                                                    <p className="text-red-500 text-xs">
                                                        {errors.email.message}
                                                    </p>
                                                )}
                                            </div>

                      //telegram user name
                                            <div className="grid gap-2">
                                                <Label>Telegram Username (Optional)</Label>

                                                <Input
                                                    {...register("telegramUsername")}
                                                    placeholder="@username"
                                                />

                                                <p className="text-xs text-muted-foreground">
                                                    This helps the nutritionist contact you faster.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="grid gap-2">
                                                    <Label>Age</Label>

                                                    <Input
                                                        type="number"
                                                        {...register("age")}
                                                    />

                                                    {errors.age && (
                                                        <p className="text-red-500 text-xs">
                                                            {errors.age.message}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="grid gap-2">
                                                    <Label>Gender</Label>

                                                    <Select
                                                        onValueChange={(val) =>
                                                            setValue("gender", val)
                                                        }
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select gender" />
                                                        </SelectTrigger>

                                                        <SelectContent>
                                                            <SelectItem value="male">
                                                                Male
                                                            </SelectItem>

                                                            <SelectItem value="female">
                                                                Female
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    {errors.gender && (
                                                        <p className="text-red-500 text-xs">
                                                            {errors.gender.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div className="grid gap-5">
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="grid gap-2">
                                                    <Label>Height (cm)</Label>

                                                    <Input
                                                        type="number"
                                                        {...register("height")}
                                                    />

                                                    {errors.height && (
                                                        <p className="text-red-500 text-xs">
                                                            {errors.height.message}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="grid gap-2">
                                                    <Label>Weight (kg)</Label>

                                                    <Input
                                                        type="number"
                                                        {...register("weight")}
                                                    />

                                                    {errors.weight && (
                                                        <p className="text-red-500 text-xs">
                                                            {errors.weight.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="grid gap-2">
                                                <Label>Main Goal</Label>

                                                <Select
                                                    onValueChange={(val) =>
                                                        setValue("goal", val)
                                                    }
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select goal" />
                                                    </SelectTrigger>

                                                    <SelectContent>
                                                        <SelectItem value="lose_fat">
                                                            Lose Fat
                                                        </SelectItem>

                                                        <SelectItem value="gain_muscle">
                                                            Gain Muscle
                                                        </SelectItem>

                                                        <SelectItem value="maintain">
                                                            Maintain
                                                        </SelectItem>

                                                        <SelectItem value="health">
                                                            General Health
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="grid gap-2">
                                                <Label>Food Preferences</Label>

                                                <Input
                                                    {...register("dietaryPreferences")}
                                                    placeholder="Optional"
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label>Allergies</Label>

                                                <Input
                                                    {...register("allergies")}
                                                    placeholder="Optional"
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label>Budget</Label>

                                                <Select
                                                    onValueChange={(val) =>
                                                        setValue("budget", val)
                                                    }
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select budget" />
                                                    </SelectTrigger>

                                                    <SelectContent>
                                                        <SelectItem value="low">
                                                            Low
                                                        </SelectItem>

                                                        <SelectItem value="medium">
                                                            Medium
                                                        </SelectItem>

                                                        <SelectItem value="high">
                                                            High
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <div className="space-y-6">
                                            <div className="p-5 rounded-xl border bg-muted/30">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Landmark className="w-5 h-5" />

                                                    <h3 className="font-bold text-lg">
                                                        Bank Transfer Information
                                                    </h3>
                                                </div>

                                                <div className="space-y-3 text-sm">
                                                    <div className="flex justify-between">
                                                        <span className="text-muted-foreground">
                                                            Bank
                                                        </span>

                                                        <span className="font-semibold">
                                                            Commercial Bank of Ethiopia
                                                        </span>
                                                    </div>

                                                    <div className="flex justify-between">
                                                        <span className="text-muted-foreground">
                                                            Account Name
                                                        </span>

                                                        <span className="font-semibold">
                                                            Sofi Nutrition
                                                        </span>
                                                    </div>

                                                    <div className="flex justify-between">
                                                        <span className="text-muted-foreground">
                                                            Account Number
                                                        </span>

                                                        <span className="font-semibold">
                                                            1000123456789
                                                        </span>
                                                    </div>

                                                    <div className="flex justify-between border-t pt-3">
                                                        <span className="font-bold">
                                                            Amount
                                                        </span>

                                                        <span className="font-black text-primary text-lg">
                                                            {planPrice} ETB
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-muted/30 p-5 rounded-xl border">
                                                <h4 className="font-semibold mb-4">
                                                    Upload Payment Receipt
                                                </h4>

                                                <Label className="mb-2 block">
                                                    Receipt Image / PDF
                                                </Label>

                                                <Input
                                                    type="file"
                                                    accept="image/*,.pdf"
                                                    onChange={(e) => {
                                                        const file =
                                                            e.target.files?.[0]

                                                        if (file) {
                                                            setReceiptFile(file)
                                                        }
                                                    }}
                                                />

                                                {receiptFile && (
                                                    <div className="flex items-center gap-2 mt-3 text-sm text-green-600">
                                                        <Upload className="w-4 h-4" />

                                                        <span>
                                                            {receiptFile.name}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                                                <p className="text-sm text-muted-foreground">
                                                    After submitting, your information
                                                    and payment receipt will be sent
                                                    directly to our nutritionist for manual verification.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </CardContent>

                        <CardFooter className="flex justify-between border-t py-4">
                            {step > 1 ? (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={prevStep}
                                    className="gap-2"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    asChild
                                >
                                    <Link href="/">Cancel</Link>
                                </Button>
                            )}

                            {step < 3 ? (
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    className="gap-2"
                                >
                                    Next Step
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit(onSubmit)}
                                    className="gap-2 min-w-[200px]"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Request
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            )}
                        </CardFooter>
                    </form>
                </Card>
            </motion.div >
        </div >
    )
}

export default function GetPlanPage() {
    return (
        <Suspense
            fallback={
                <div className="flex h-screen items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin" />
                </div>
            }
        >
            <GetPlanContent />
        </Suspense>
    )
}