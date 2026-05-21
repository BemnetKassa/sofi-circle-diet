"use client"

import { CheckCircle } from "lucide-react"

interface Step {
    title: string
    desc: string
}

interface StepIndicatorProps {
    currentStep: number
    steps: Step[]
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
    return (
        <div className="flex justify-between mb-6">
            {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center flex-1">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            currentStep >= i + 1
                                ? "bg-primary text-white"
                                : "bg-muted"
                        }`}
                    >
                        {currentStep > i + 1 ? (
                            <CheckCircle className="w-4 h-4" />
                        ) : (
                            i + 1
                        )}
                    </div>
                    <span className="text-[10px] mt-2 uppercase text-center">
                        {step.title.split(" ")[0]}
                    </span>
                    {i < steps.length - 1 && (
                        <div className="hidden md:block w-full h-[2px] bg-muted mt-4 mx-2" />
                    )}
                </div>
            ))}
        </div>
    )
}