"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"
import { Step1BasicInfo } from "./Step1BasicInfo"
import { Step2BodyStats } from "./Step2BodyStats"
import { Step3BodyImage } from "./Step3BodyImage"
import { Step4Payment } from "./Step4Payment"
import { StepIndicator } from "./StepIndicator"
import { formSchema, FormValues } from "../schemas/formSchema"
import { STEPS } from "../constants/formOptions"
import { useMultiStepForm } from "../hooks/useMultiStepForm"
import { useFormSubmission } from "../hooks/useFormSubmission"

export function GetPlanForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const planType = searchParams.get("plan") || "standard"
    const { step, direction, nextStep, prevStep, goToStep } = useMultiStepForm(4)
    const [bodyImage, setBodyImage] = useState<File | null>(null)
    const [receiptFile, setReceiptFile] = useState<File | null>(null)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gender: "",
            goal: "",
            budget: "",
        },
    })

    const { isSubmitting, onSubmit } = useFormSubmission({ planType, bodyImage, receiptFile })

    const handleNextStep = async () => {
        let isValid = false

        if (step === 1) {
            isValid = await form.trigger([
                "firstName", "lastName", "email",
                "telegramUsername", "age", "gender"
            ])
        }
        else if (step === 2) {
            isValid = await form.trigger([
                "height", "weight", "goal", "exerciseLevel", // Added exerciseLevel
                "dietaryPreferences", "allergies", "budget"
            ])
        }
        else if (step === 3) {
            isValid = true // Optional step - always valid
        }

        if (isValid && step < 4) {
            nextStep()
        }
    }

    const handleSkipStep3 = () => {
        setBodyImage(null)
        goToStep(4)
    }

    const handleSubmitClick = async () => {
        // Only validate receipt - body image is optional
        if (!receiptFile) {
            alert("Please upload your payment receipt before submitting.")
            return
        }

        const isValid = await form.trigger()
        if (isValid) {
            const data = form.getValues()
            await onSubmit(data, router)
        }
    }

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

    return (
        <Card className="shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-muted">
                <motion.div
                    className="h-full bg-primary"
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            <CardHeader>
                <StepIndicator currentStep={step} steps={STEPS} />
                <CardTitle className="text-2xl">{STEPS[step - 1].title}</CardTitle>
                <CardDescription>{STEPS[step - 1].desc}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 min-h-[450px]">
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
                            opacity: { duration: 0.2 },
                        }}
                        className="space-y-6"
                    >
                        {step === 1 && <Step1BasicInfo form={form} />}
                        {step === 2 && <Step2BodyStats form={form} />}
                        {step === 3 && (
                            <Step3BodyImage
                                bodyImage={bodyImage}
                                setBodyImage={setBodyImage}
                                onSkip={handleSkipStep3}
                            />
                        )}
                        {step === 4 && (
                            <Step4Payment
                                planType={planType}
                                receiptFile={receiptFile}
                                setReceiptFile={setReceiptFile}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </CardContent>

            <CardFooter className="flex justify-between border-t py-4">
                <div className="flex justify-between w-full">
                    {step > 1 ? (
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={prevStep}
                            className="gap-2"
                            disabled={isSubmitting}
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

                    {step < 4 ? (
                        <div className="flex gap-3">
                            {step === 3 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleSkipStep3}
                                    className="gap-2"
                                    disabled={isSubmitting}
                                >
                                    Skip & Continue
                                </Button>
                            )}
                            <Button
                                type="button"
                                onClick={handleNextStep}
                                className="gap-2"
                                disabled={isSubmitting}
                            >
                                Next Step
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    ) : (
                        <Button
                            type="button"
                            onClick={handleSubmitClick}
                            disabled={isSubmitting}
                            className="gap-2 min-w-[200px]"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    Submit Request
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}