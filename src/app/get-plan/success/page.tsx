"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/50 to-secondary/10 p-6 relative overflow-hidden">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="w-full max-w-md"
        >
            <Card className="text-center py-12 border-primary/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardContent className="flex flex-col items-center gap-6 relative z-10">
                    <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-primary mb-2 shadow-inner"
                    >
                        <CheckCircle className="w-10 h-10" />
                    </motion.div>
                    
                    <div className="space-y-2">
                        <motion.h2 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl font-bold"
                        >
                            Payment Successful!
                        </motion.h2>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-muted-foreground"
                        >
                            Thank you for your purchase. We've received your payment and our nutritionists are already working on your plan.
                        </motion.p>
                    </div>

                    <div 
                        className="bg-secondary/10 p-5 rounded-xl w-full border border-secondary/20"
                    >
                        <p className="text-sm">Please check your email shortly. You'll receive your customized plan within 24-48 hours.</p>
                    </div>
                </CardContent>
                <CardFooter className="justify-center pt-2">
                    <Button asChild className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href="/">Return Home</Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    </div>
  )
}
