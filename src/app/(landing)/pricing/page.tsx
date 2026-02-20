
"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="py-24 px-6 min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground font-semibold text-sm mb-4"
          >
            Simple Pricing, No Hidden Fees
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold tracking-tight"
          >
            Invest in Your Health
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the plan that fits your goals. One-time payment for lifetime access to your personalized plan.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Card 1: Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-card rounded-3xl border p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            <div className="mb-6">
                <h3 className="text-2xl font-bold">Standard Plan</h3>
                <p className="text-muted-foreground mt-2">Essential tools to get started.</p>
            </div>
            <div className="mb-8">
                <span className="text-4xl font-extrabold">499 ETB</span>
                <span className="text-muted-foreground ml-2">/ one-time</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Customized Meal Plan (PDF)",
                "Shopping List",
                "Calorie & Macro Breakdown",
                "Basic Email Support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full h-12 text-lg rounded-xl" variant="outline" asChild>
                <Link href="/get-plan?plan=standard">Select Standard</Link>
            </Button>
          </motion.div>

          {/* Card 2: Premium Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative bg-card rounded-3xl border-2 border-primary p-8 shadow-2xl scale-105 z-10 h-full flex flex-col"
          >
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-bl-xl rounded-tr-lg">
              MOST POPULAR
            </div>
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary">Premium Plan</h3>
                <p className="text-muted-foreground mt-2">Comprehensive guide for serious results.</p>
            </div>
            <div className="mb-8">
                <span className="text-5xl font-extrabold text-foreground">899 ETB</span>
                <span className="text-muted-foreground ml-2">/ one-time</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Everything in Standard",
                "Weekly Check-ins (1 Month)",
                "Recipe Guide & Cookbook",
                "Priority WhatsApp Support",
                "Restaurant Guide for Addis"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary fill-secondary/20 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all" asChild>
                <Link href="/get-plan?plan=premium">Select Premium</Link>
            </Button>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 text-sm text-muted-foreground border">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Prices are in Ethiopian Birr (ETB). Secure payment powered by Chapa.
            </div>
        </div>
      </div>
    </div>
  )
}

