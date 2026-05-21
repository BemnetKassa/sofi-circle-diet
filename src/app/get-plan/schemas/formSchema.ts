import * as z from "zod"

export const formSchema = z.object({
    // Basic Info
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    telegramUsername: z.string().optional(),
    age: z.string().refine(
        (val) => !isNaN(Number(val)) && Number(val) > 0 && Number(val) < 120,
        { message: "Age must be a valid number between 1 and 120" }
    ),
    gender: z.string().min(1, "Please select a gender"),
    
    // Body Stats
    height: z.string().min(1, "Height is required"),
    weight: z.string().min(1, "Weight is required"),
    goal: z.string().min(1, "Please select a goal"),
    exerciseLevel: z.string().min(1, "Please select your exercise level"), // NEW FIELD
    dietaryPreferences: z.string().optional(),
    allergies: z.string().optional(),
    budget: z.string().min(1, "Please select a budget range"),
})

export type FormValues = z.infer<typeof formSchema>