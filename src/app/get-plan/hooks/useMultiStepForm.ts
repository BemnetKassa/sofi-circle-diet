import { useState } from "react"

export function useMultiStepForm(totalSteps: number) {
    const [step, setStep] = useState(1)
    const [direction, setDirection] = useState(0)

    const nextStep = () => {
        if (step < totalSteps) {
            setDirection(1)
            setStep(prev => prev + 1)
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setDirection(-1)
            setStep(prev => prev - 1)
        }
    }

    const goToStep = (stepNumber: number) => {
        if (stepNumber >= 1 && stepNumber <= totalSteps) {
            setDirection(stepNumber > step ? 1 : -1)
            setStep(stepNumber)
        }
    }

    return {
        step,
        direction,
        nextStep,
        prevStep,
        goToStep,
    }
}