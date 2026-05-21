"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { GetPlanForm } from "./components/GetPlanForm"

export default function GetPlanPage() {
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
                    Fill the form, upload your photo, and complete payment
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-2xl"
            >
                <Suspense fallback={<Loader2 className="w-8 h-8 animate-spin" />}>
                    <GetPlanForm />
                </Suspense>
            </motion.div>
        </div>
    )
}