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
import { GENDER_OPTIONS } from "../constants/formOptions"

interface Step1BasicInfoProps {
    form: UseFormReturn<FormValues>
}

export function Step1BasicInfo({ form }: Step1BasicInfoProps) {
    const { register, setValue, formState: { errors } } = form

    return (
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
                        onValueChange={(val) => setValue("gender", val)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                            {GENDER_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
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
    )
}