"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { UseFormReturn } from "react-hook-form"
import { FormValues } from "../schemas/formSchema"
import { GOAL_OPTIONS, BUDGET_OPTIONS, EXERCISE_LEVEL_OPTIONS } from "../constants/formOptions"

interface Step2BodyStatsProps {
    form: UseFormReturn<FormValues>
}

export function Step2BodyStats({ form }: Step2BodyStatsProps) {
    const { register, setValue, formState: { errors } } = form

    return (
        <div className="grid gap-5">
            <div className="grid md:grid-cols-2 gap-5">
                <div className="grid gap-2">
                    <Label>Height (cm)</Label>
                    <Input
                        type="number"
                        {...register("height")}
                        placeholder="e.g., 170"
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
                        placeholder="e.g., 70"
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
                <Select onValueChange={(val) => setValue("goal", val)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select goal" />
                    </SelectTrigger>
                    <SelectContent>
                        {GOAL_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.goal && (
                    <p className="text-red-500 text-xs">
                        {errors.goal.message}
                    </p>
                )}
            </div>

            {/* NEW: Exercise Level Field */}
            <div className="grid gap-2">
                <Label>Exercise Level</Label>
                <Select onValueChange={(val) => setValue("exerciseLevel", val)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select your exercise level" />
                    </SelectTrigger>
                    <SelectContent>
                        {EXERCISE_LEVEL_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.exerciseLevel && (
                    <p className="text-red-500 text-xs">
                        {errors.exerciseLevel.message}
                    </p>
                )}
            </div>

            <div className="grid gap-2">
                <Label>Food Preferences</Label>
                <Input
                    {...register("dietaryPreferences")}
                    placeholder="Optional - e.g., vegetarian, vegan, keto"
                />
            </div>

            <div className="grid gap-2">
                <Label>Allergies</Label>
                <Input
                    {...register("allergies")}
                    placeholder="Optional - e.g., nuts, dairy, gluten"
                />
            </div>

            <div className="grid gap-2">
                <Label>Budget</Label>
                <Select onValueChange={(val) => setValue("budget", val)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                        {BUDGET_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.budget && (
                    <p className="text-red-500 text-xs">
                        {errors.budget.message}
                    </p>
                )}
            </div>
        </div>
    )
}