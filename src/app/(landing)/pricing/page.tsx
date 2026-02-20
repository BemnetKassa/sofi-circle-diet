"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="py-24 px-6 min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Invest in your health with a plan that fits your budget. No recurring subscriptions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Card 1: Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-card rounded-3xl border p-8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
            <div className="text-4xl font-extrabold mb-6">499 ETB</div>
            <p className="text-muted-foreground mb-8">Perfect for getting started on your journey.</p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Customized Meal Plan (PDF)",
                "Shopping List",
                "Calorie & Macro Breakdown",
                "Basic Email Support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
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
            className="relative bg-card rounded-3xl border-2 border-primary p-8 shadow-2xl scale-105 z-10"
          >
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
            <div className="text-4xl font-extrabold mb-6 text-primary">899 ETB</div>
            <p className="text-muted-foreground mb-8">Comprehensive guide for serious results.</p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Everything in Standard",
                "Weekly Check-ins (1 Month)",
                "Recipe Guide & Cookbook",
                "Priority WhatsApp Support",
                "Restaurant Guide for Addis"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary fill-secondary/20" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full h-12 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40" asChild>
                <Link href="/get-plan?plan=premium">Select Premium</Link>
            </Button>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center bg-muted/30 p-8 rounded-2xl">
          <p className="text-sm text-muted-foreground">Prices are in Ethiopian Birr (ETB). Secure payment powered by Chapa.</p>
        </div>
      </div>
    </div>
  )
}
