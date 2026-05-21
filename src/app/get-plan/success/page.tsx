"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  CheckCircle,
  Clock3,
} from "lucide-react"

import Link from "next/link"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export default function SubmissionSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/50 to-secondary/10 p-6 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <motion.div
        initial={{
          scale: 0.85,
          opacity: 0,
        }}

        animate={{
          scale: 1,
          opacity: 1,
        }}

        transition={{
          type: "spring",
          duration: 0.8,
        }}

        className="w-full max-w-md relative z-10"
      >
        <Card className="text-center py-12 border-primary/20 shadow-2xl overflow-hidden relative backdrop-blur-sm bg-card/90">
          
          {/* Top Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

          <CardContent className="flex flex-col items-center gap-6">
            
            {/* Success Icon */}
            <motion.div
              initial={{
                scale: 0,
                rotate: -180,
              }}

              animate={{
                scale: 1,
                rotate: 0,
              }}

              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}

              className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-inner"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>

            {/* Main Text */}
            <div className="space-y-3">
              <motion.h1
                initial={{
                  y: 20,
                  opacity: 0,
                }}

                animate={{
                  y: 0,
                  opacity: 1,
                }}

                transition={{
                  delay: 0.4,
                }}

                className="text-3xl font-black tracking-tight"
              >
                Request Submitted
              </motion.h1>

              <motion.p
                initial={{
                  y: 20,
                  opacity: 0,
                }}

                animate={{
                  y: 0,
                  opacity: 1,
                }}

                transition={{
                  delay: 0.5,
                }}

                className="text-muted-foreground leading-relaxed"
              >
                Your nutrition plan request and payment receipt
                were successfully submitted to our nutrition team.
              </motion.p>
            </div>

            {/* Status Box */}
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}

              animate={{
                y: 0,
                opacity: 1,
              }}

              transition={{
                delay: 0.6,
              }}

              className="w-full rounded-2xl border border-secondary/20 bg-secondary/10 p-5 text-left"
            >
              <div className="flex items-start gap-3">
                <Clock3 className="w-5 h-5 mt-0.5 text-secondary-foreground shrink-0" />

                <div className="space-y-2">
                  <p className="font-semibold text-secondary-foreground">
                    What Happens Next?
                  </p>

                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • Our nutritionist will verify your receipt
                    </li>

                    <li>
                      • Your body goals and preferences will be reviewed
                    </li>

                    <li>
                      • Your personalized plan will be prepared
                    </li>

                    <li>
                      • You’ll receive your plan within 24–48 hours
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </CardContent>

          <CardFooter className="justify-center pt-2">
            <Button
              asChild
              className="rounded-full px-8"
            >
              <Link href="/">
                Return Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}