"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"

interface FormNavigationProps {
    step: number
    totalSteps: number
    onBack: () => void
    onNext: () => void
    isSubmitting: boolean
}

export function FormNavigation({ step, totalSteps, onBack, onNext, isSubmitting }: FormNavigationProps) {
    return (
        <div className="flex justify-between w-full">
            {step > 1 ? (
                <Button
                    type="button"
                    variant="ghost"
                    onClick={onBack}
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

            {step < totalSteps ? (
                <Button
                    type="button"
                    onClick={onNext}
                    className="gap-2"
                    disabled={isSubmitting}
                >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                </Button>
            ) : (
                <Button
                    type="submit"
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
    )
}