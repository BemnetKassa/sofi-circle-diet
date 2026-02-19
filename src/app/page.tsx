"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, Utensils, Activity, FileText, Download, Star } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
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

      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="px-6 h-20 flex items-center border-b sticky top-0 bg-background/90 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="font-bold text-2xl flex items-center gap-2 group cursor-pointer">
          <motion.div 
            whileHover={{ rotate: 360, backgroundColor: "var(--secondary)" }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold shadow-lg"
          >
            S
          </motion.div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-700">Sofi Circle Diet</span>
        </div>
        <nav className="ml-auto flex gap-8 text-sm font-medium items-center">
          <div className="hidden md:flex gap-8">
            <Link href="#how-it-works" className="relative group">
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#pricing" className="relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </Link>
          </div>
          <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
            <Link href="/get-plan">Get My Meal Plan</Link>
          </Button>
        </nav>
      </motion.header>

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

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                  <h2 className="text-4xl font-bold mb-6">How It Works</h2>
                  <p className="text-xl text-muted-foreground">Simple steps to your new lifestyle. We've made it as easy as 1-2-3-4.</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Activity className="w-8 h-8" />,
                  title: "Submit Stats",
                  desc: "Fill in your height, weight, age, and goals.",
                  color: "bg-blue-500",
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Review",
                  desc: "Sofi reviews your profile personally.",
                  color: "bg-secondary",
                },
                {
                  icon: <Utensils className="w-8 h-8" />,
                  title: "Pay",
                  desc: "Secure one-time payment via Chapa.",
                  color: "bg-primary",
                },
                {
                  icon: <Download className="w-8 h-8" />,
                  title: "Receive Plan",
                  desc: "Get your PDF plan and start eating right!",
                  color: "bg-purple-500",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -10 }}
                  className="group bg-card p-8 rounded-2xl border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 ${step.color} opacity-5 rounded-bl-[100px] transition-transform group-hover:scale-150 duration-500`} />
                  
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-inner">
                    {step.icon}
                  </div>
                  <div className="absolute top-8 right-8 font-black text-6xl text-muted/20 select-none pointer-events-none">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
                            Start Your Journey Now
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

      <footer className="bg-slate-900 text-slate-300 py-16 px-6 relative overflow-hidden">
        {/* Footer decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto grid md:grid-cols-4 gap-12 relative z-10">
            <div className="space-y-4 col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 text-white font-bold text-2xl">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">S</div>
                    Sofi Circle Diet
                </div>
                <p className="text-slate-400 max-w-sm">
                    Empowering you to live a healthier life through personalized nutrition plans designed specifically for your body and lifestyle.
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                    <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
                    <li><Link href="#how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                </ul>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-6">Contact Us</h4>
                <ul className="space-y-3">
                    <li>support@soficirclediet.com</li>
                    <li>ADDIS ABABA, ETHIOPIA</li>
                    <li className="flex gap-4 mt-4">
                        {/* Social icons placeholder */}
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary transition-colors cursor-pointer"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Sofi Circle Diet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
