
"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, Sparkles, Star } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    },
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      {/* Animated Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-[-10%] w-[700px] h-[700px] rounded-full bg-secondary/5 blur-3xl opacity-60" 
        />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl opacity-50" 
        />
      </div>

      <main className="flex-1 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center mb-16 space-y-6"
            >
                <motion.div variants={itemVariants} className="inline-block relative">
                    <span className="relative flex items-center gap-2 mt-4 bg-secondary/20 text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full border border-secondary shadow-sm mx-auto w-fit">
                        <Sparkles className="w-4 h-4 fill-secondary" /> Simple Pricing, No Hidden Fees
                    </span>
                </motion.div>
                
                <motion.h1 
                    variants={itemVariants}
                    className="text-5xl md:text-6xl font-extrabold tracking-tight"
                >
                    Invest in Your <span className="text-secondary relative inline-block">Health<svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg></span>
                </motion.h1>
                
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    Choose the plan that fits your goals. One-time payment for lifetime access to your personalized diet plan.
                </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
                
                {/* Standard Plan */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative bg-card/80 backdrop-blur-sm rounded-[2rem] p-8 border hover:border-primary/30 transition-all duration-300 hover:shadow-xl group"
                >
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                        <p className="text-muted-foreground">Essential tools to restart your journey.</p>
                    </div>
                    
                    <div className="mb-8 items-end flex gap-2">
                        <span className="text-5xl font-extrabold tracking-tight">499 ETB</span>
                        <span className="text-muted-foreground mb-2">/ one-time</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {[
                            "Customized Meal Plan (PDF)",
                            "Grocery Shopping List",
                            "Calorie & Macro Breakdown",
                            "Email Support",
                            "Lifetime Access"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                                <div className="w-6 h-6 rounded-full bg-muted group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                                    <Check className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Button variant="outline" size="lg" className="w-full h-14 text-lg rounded-xl border-2 hover:bg-primary/5 hover:border-primary hover:text-primary" asChild>
                        <Link href="/get-plan?plan=standard">Select Standard</Link>
                    </Button>
                </motion.div>

                {/* Premium Plan */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-card to-secondary/5 rounded-[2rem] p-1 border-2 border-secondary shadow-2xl scale-105 z-10"
                >
                   <div className="absolute top-0 right-10 -translate-y-1/2 bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 text-sm z-20">
                      <Star className="w-4 h-4 fill-secondary-foreground" /> MOST POPULAR
                   </div>

                   <div className="bg-card rounded-[1.8rem] p-8 h-full relative overflow-hidden">
                        {/* Shimmer effect */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="mb-8 relative z-10">
                            <h3 className="text-3xl font-bold mb-2 text-primary">Premium Plan</h3>
                            <p className="text-muted-foreground">Comprehensive guide for maximum results.</p>
                        </div>
                        
                        <div className="mb-8 items-end flex gap-2 relative z-10">
                            <span className="text-6xl font-extrabold tracking-tight text-foreground">899 ETB</span>
                            <span className="text-muted-foreground mb-2">/ one-time</span>
                        </div>

                        <div className="space-y-4 mb-10 relative z-10">
                             <p className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Everything in Standard, plus:</p>
                             <ul className="space-y-4">
                                {[
                                    "Priority Email & Chat Support",
                                    "Weekly Check-ins & Adjustments",
                                    "Exclusive Recipe Book",
                                    "Restaurant Guide for Ethiopia",
                                    "Travel Nutrition Tips"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-md shadow-secondary/20">
                                            <Check className="w-3.5 h-3.5 text-secondary-foreground" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button size="lg" className="w-full h-14 text-lg font-bold rounded-xl shadow-xl shadow-secondary/20 bg-primary hover:bg-primary/90 hover:scale-[1.02] transition-all" asChild>
                            <Link href="/get-plan?plan=premium">Get Premium Access</Link>
                        </Button>
                   </div>
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
            >
                <p className="text-muted-foreground mb-4">Secure payment via Chapa. Need help deciding?</p>
                <Link href="/contact" className="text-primary font-semibold hover:underline">Contact our support team</Link>
            </motion.div>
        </div>
      </main>
    </div>
  )
}

