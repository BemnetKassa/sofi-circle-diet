"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Utensils, Star, Activity, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } as const

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Animated Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl opacity-60" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 100, 0], 
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl opacity-50" 
        />
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 text-center max-w-6xl mx-auto relative">
          
          {/* Floating decorative elements */}
          <motion.div 
            animate={floatAnimation} 
            className="absolute top-20 left-10 hidden lg:block text-secondary opacity-80"
          >
            <Star className="w-12 h-12 fill-secondary/20" />
          </motion.div>
          <motion.div 
             animate={{...floatAnimation, transition: { ...floatAnimation.transition, delay: 1.5 }}}
             className="absolute bottom-40 right-10 hidden lg:block text-primary opacity-60"
          >
            <div className="w-8 h-8 rounded-full border-4 border-current" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8 z-10 relative"
          >
            <motion.div variants={itemVariants} className="inline-block relative">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-secondary blur-lg opacity-30 rounded-full"
              />
              <span className="relative bg-secondary/20 text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full border border-secondary shadow-sm">
                ✨ #1 Personalized Nutrition in Ethiopia
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              Your Personalized Path to a <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-primary">Healthier You</span>
                <motion.svg 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewBox="0 0 300 15" 
                    className="absolute -bottom-2 left-0 w-full h-4 text-secondary -z-0"
                    fill="none"
                >
                    <motion.path d="M5 10 C100 0, 200 15, 295 5" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </motion.svg>
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Get a custom meal plan tailored to your body stats, goals, and budget. 
              Reviewed by experts, designed for <span className="font-semibold text-foreground bg-secondary/30 px-1 rounded">real results</span>.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center pt-8 items-center">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-xl shadow-primary/25 hover:scale-105 transition-transform duration-200">
                <Link href="/get-plan" className="flex items-center">
                    Get My Meal Plan <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full border-2 hover:bg-secondary/10 hover:border-secondary hover:text-secondary-foreground transition-all duration-200">
                View Sample Plan
              </Button>
            </motion.div>

            {/* TRUST INDICATORS */}
            <motion.div 
                variants={itemVariants}
                className="pt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground font-medium grayscale opacity-70"
            >
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Verified Experts</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>100% Custom</span>
                </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Benefits/Features */}
        <section className="py-24 px-6 bg-secondary/5">
            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl font-bold leading-tight">Why Choose <br/><span className="text-primary underline decoration-secondary decoration-4 underline-offset-4">Sofi Circle Diet?</span></h2>
                    
                    <ul className="space-y-6">
                        {[
                            "Personally reviewed by nutrition experts",
                            "Tailored to Ethiopian cuisine & ingredients",
                            "Budget-friendly options included",
                            "One-time payment, no hidden subscriptions"
                        ].map((item, i) => (
                            <motion.li 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                key={i} 
                                className="flex items-center gap-4 text-lg p-4 rounded-xl bg-background shadow-sm border border-transparent hover:border-secondary hover:shadow-md transition-all"
                            >
                                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                                <span className="font-medium">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <div className="pt-6">
                        <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg hover:shadow-xl transition-all">
                            <Link href="/get-plan">Start Your Journey Now</Link>
                        </Button>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-20 transform rotate-6 scale-105"></div>
                    <div className="bg-background aspect-square md:aspect-[4/3] rounded-3xl shadow-2xl flex items-center justify-center text-muted-foreground border-4 border-white dark:border-zinc-800 relative z-10 overflow-hidden">
                        <div className="text-center p-8 bg-muted/30 w-full h-full flex flex-col items-center justify-center">
                            <Utensils className="w-16 h-16 mb-4 text-muted-foreground/50" />
                            <p className="font-bold text-xl">Before & After</p>
                            <p className="text-sm text-slate-500 mt-2">Real results from real people</p>
                            
                            <div className="mt-8 flex gap-4">
                                <div className="w-20 h-20 bg-muted rounded-lg animate-pulse"></div>
                                <div className="w-20 h-20 bg-green-100 rounded-lg animate-pulse delay-150"></div>
                            </div>
                        </div>
                    </div>
                    {/* Floating pill */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-slate-100 dark:border-zinc-800"
                    >
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                            <span className="text-xl">💪</span>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Total Success</p>
                            <p className="font-bold text-lg">500+ Clients</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
      </main>
    </div>
  )
}
