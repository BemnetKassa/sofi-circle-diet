"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  containerVariants: any
  itemVariants: any
}

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
}

export function HeroSection({ containerVariants, itemVariants }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
            src="/pictures/sofi4.webp" 
            alt="Hero Background" 
            fill 
            className="object-cover object-center opacity-100" 
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/40 to-background/90"></div>
      </div>

      <div className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8 z-10 relative text-left"
        >
          <motion.div variants={itemVariants} className="inline-block relative">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-secondary blur-lg opacity-30 rounded-full"
            />
            <span className="relative flex items-center gap-2 mt-4 bg-secondary/20 text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full border border-secondary shadow-sm">
              <Sparkles className="w-4 h-4 fill-secondary" /> #1 Personalized Nutrition in Ethiopia
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
          >
            Your Path to a <br />
            <span className="text-secondary relative inline-block">
              Healthier You
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span> <br />
            Starts Here.
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-foreground leading-relaxed max-w-xl"
          >
            Get a custom meal plan tailored to your body stats, goals, and budget. 
            Reviewed by experts, designed for <span className="font-semibold text-foreground bg-secondary/30 px-1 rounded">real results</span>.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/25 hover:scale-105 transition-transform duration-200" asChild>
              <Link href="/get-plan">
                  Get My Meal Plan <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/10 hover:border-secondary hover:text-secondary-foreground transition-all duration-200" asChild>
              <Link href="/pricing">
                View Sample Plan
              </Link>
            </Button>
          </motion.div>

          {/* Stats Strip */}
          <motion.div 
              variants={itemVariants}
              className="pt-8 flex flex-wrap gap-8 border-t border-border mt-8"
          >
              <div className="flex flex-col">
                  <span className="text-3xl font-bold">500+</span>
                  <span className="text-sm text-muted-foreground">Happy Clients</span>
              </div>
              <div className="flex flex-col">
                  <span className="text-3xl font-bold">100%</span>
                  <span className="text-sm text-muted-foreground">Customized</span>
              </div>
              <div className="flex flex-col">
                  <span className="text-3xl font-bold">4.9/5</span>
                  <span className="text-sm text-muted-foreground">Rating</span>
              </div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative hidden lg:block"
        >
            <motion.div 
              animate={floatAnimation}
              className="relative z-10 w-full max-w-[500px] mx-auto"
            >
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-background rotate-2 hover:rotate-0 transition-transform duration-500">
                   <Image 
                      src="/pictures/sofi8.webp" 
                      alt="Healthy Food" 
                      fill
                      className="object-cover"
                      priority
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                   <div className="absolute bottom-6 left-6 text-white">
                      <p className="font-bold text-lg">Fresh Ingredients</p>
                      <p className="text-sm opacity-90">Locally sourced</p>
                   </div>
                </div>
            </motion.div>
            
            {/* Decorative elements behind image */}
            <div className="absolute top-10 -right-10 w-full h-full bg-secondary/20 rounded-[2rem] -z-10 blur-xl rotate-6"></div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -right-12 text-primary opacity-20"
            >
               <Star className="w-32 h-32" />
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
