
"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ClipboardCheck, CreditCard, FileDown, Search, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
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
      transition: { type: "spring" as const, stiffness: 50 }
    },
  }

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "1. Submit Your Stats",
      description: "Tell us about your body, lifestyle, and dietary preferences through our simple online form.",
      bg: "bg-primary/10",
      border: "border-primary/20",
      delay: 0
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-secondary" />,
      title: "2. Expert Review",
      description: "Our nutrition experts analyze your profile to create a balanced plan that meets your specific goals.",
      bg: "bg-secondary/10",
      border: "border-secondary/20",
      delay: 0.1
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "3. Secure Payment",
      description: "Make a one-time secure payment using your preferred local payment method via Chapa.",
      bg: "bg-primary/10",
      border: "border-primary/20",
      delay: 0.2
    },
    {
      icon: <FileDown className="w-8 h-8 text-secondary" />,
      title: "4. Receive Your Plan",
      description: "Get your personalized PDF meal plan delivered straight to your inbox within 24 hours.",
      bg: "bg-secondary/10",
      border: "border-secondary/20",
      delay: 0.3
    },
  ]

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative">
      {/* Animated Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl opacity-60" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl opacity-50" 
        />
      </div>

      <main className="flex-1 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-20 space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-block relative">
               <span className="relative flex items-center gap-2 mt-4 bg-secondary/20 text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full border border-secondary shadow-sm mx-auto w-fit">
                <Sparkles className="w-4 h-4 fill-secondary" /> Simple 4-Step Process
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              How It <span className="text-primary">Works</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Your journey to a healthier you is just a few clicks away. We have streamlined the process to make it effortless.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop - visual only */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10 border-t-2 border-dashed border-muted"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: step.delay }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <div className={`h-full bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center border ${step.border}`}>
                   {/* Background flush */}
                   <div className={`absolute inset-0 ${step.bg} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                   
                   <div className={`w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 border-4 border-white dark:border-zinc-800`}>
                      {step.icon}
                   </div>
                   
                   <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                   <p className="text-muted-foreground relative z-10 leading-relaxed">
                     {step.description}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
             <div className="bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/10 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-foreground">Ready to start your transformation?</h2>
                <Button size="lg" className="w-full sm:w-auto h-auto sm:h-14 py-4 sm:py-0 px-6 sm:px-10 text-base sm:text-lg rounded-full shadow-xl hover:shadow-primary/25 hover:scale-105 transition-transform bg-primary text-primary-foreground whitespace-normal" asChild>
                    <Link href="/get-plan" className="flex items-center justify-center">
                        Get Your Personalized Plan <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
                    </Link>
                </Button>
             </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

