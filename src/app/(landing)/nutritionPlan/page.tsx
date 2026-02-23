
"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, Sparkles, Star, ArrowRight, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NutritionPlanPage() {
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

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative bg-background">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/pictures/DSC00749.webp" 
            alt="Healthy Lifestyle" 
            fill 
            className="object-cover object-center brightness-50 contrast-110" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-6"
            >
                <motion.div variants={itemVariants} className="inline-block">
                    <span className="bg-secondary/90 text-secondary-foreground text-xs font-black px-4 py-1.5 rounded-full border border-secondary shadow-lg uppercase tracking-widest">
                        Your Transformation Starts Here
                    </span>
                </motion.div>
                
                <motion.h1 
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl"
                >
                    Professional <span className="text-secondary italic">Nutrition</span> Plans
                </motion.h1>
                
                <motion.p 
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed"
                >
                    Scientifically backed, personally tailored, and designed for the Ethiopian lifestyle.
                </motion.p>
            </motion.div>
        </div>
      </section>

      <main className="flex-1 py-20 px-6 -mt-10 relative z-10">
        <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
                
                {/* Standard Plan */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative bg-card/60 backdrop-blur-xl rounded-[2.5rem] p-8 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group flex flex-col"
                >
                    <div className="relative h-64 mb-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
                        <Image 
                            src="/pictures/DSC00764.webp" 
                            alt="Standard Plan Meal Nutrition" 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-6">
                            <span className="text-white font-bold text-lg px-4 py-1 bg-black/30 backdrop-blur-md rounded-lg border border-white/20">Essential</span>
                        </div>
                    </div>

                    <div className="mb-8 relative z-10">
                        <h3 className="text-3xl font-black mb-3 tracking-tight">Standard Plan</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">Perfect for beginners looking for a clear, easy-to-follow guide to start their fitness journey.</p>
                    </div>
                    
                    <div className="mb-10 items-baseline flex gap-2">
                        <span className="text-5xl font-black tracking-tighter">4,000</span>
                        <span className="text-xl font-bold text-muted-foreground uppercase tracking-widest">ETB</span>
                    </div>

                    <ul className="space-y-5 mb-12 flex-1">
                        {[
                            "Customized 4-Week Meal Plan",
                            "Detailed Grocery Shopping List",
                            "Calorie & Macronutrient targets",
                            "Standard Transformation Guide",
                            "Lifetime access to your PDF"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-foreground/80 group-hover:text-foreground transition-colors font-semibold">
                                <div className="w-7 h-7 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-all duration-300">
                                    <Check className="w-4 h-4 text-primary" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Button variant="outline" size="lg" className="w-full h-16 text-xl font-black rounded-2xl border-2 hover:bg-primary/5 hover:border-primary hover:text-primary transition-all duration-300" asChild>
                        <Link href="/get-plan?plan=standard">SELECT STANDARD</Link>
                    </Button>
                </motion.div>

                {/* Premium Plan */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] p-1 shadow-[0_30px_60px_rgba(0,0,0,0.15)] md:scale-105 z-10 overflow-hidden"
                >
                   {/* Background Glow */}
                   <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] opacity-50"></div>
                   
                   <div className="absolute top-6 right-6 z-20">
                      <div className="bg-secondary text-secondary-foreground px-5 py-2 rounded-full font-black shadow-xl flex items-center gap-2 text-xs uppercase tracking-widest border-2 border-white/20">
                        <Star className="w-4 h-4 fill-secondary-foreground" /> BEST VALUE
                      </div>
                   </div>

                   <div className="bg-card rounded-[2.4rem] p-8 h-full relative overflow-hidden flex flex-col border border-secondary/20">
                        <div className="relative h-72 mb-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-secondary/30">
                            <Image 
                                src="/pictures/DSC00730.webp" 
                                alt="Premium Personalized Nutrition" 
                                fill 
                                className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent mix-blend-multiply opacity-40"></div>
                        </div>

                        <div className="mb-8 relative z-10">
                            <h3 className="text-4xl font-black mb-3 text-primary tracking-tighter">Premium Plan</h3>
                            <p className="text-muted-foreground font-semibold italic">The ultimate roadmap for those who are serious about achieving their dream physique.</p>
                        </div>
                        
                        <div className="mb-10 items-baseline flex gap-2 relative z-10">
                            <span className="text-6xl font-black tracking-tighter text-foreground">4,999</span>
                            <span className="text-2xl font-bold text-muted-foreground uppercase tracking-widest">ETB</span>
                        </div>

                        <div className="space-y-5 mb-12 relative z-10 flex-1">
                             <p className="font-black text-xs uppercase tracking-[0.2em] text-secondary mb-6 block border-b border-secondary/10 pb-2">EVERYTHING IN STANDARD, PLUS:</p>
                             <ul className="space-y-4">
                                {[
                                    "Priority 24/7 Support with Sofi",
                                    "Weekly Progress Review & Adjustments",
                                    "Premium Ethiopian Recipe eBook",
                                    "Restaurant & Social Eating Guide",
                                    "Travel & Busy Schedule Survival Nutriton"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 font-bold text-foreground">
                                        <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-lg shadow-secondary/30 border border-white/20">
                                            <Check className="w-4 h-4 text-secondary-foreground font-black" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button size="lg" className="w-full h-18 text-2xl font-black rounded-2xl shadow-2xl shadow-primary/30 bg-primary hover:bg-primary/90 hover:scale-[1.03] transition-all duration-300 py-8" asChild>
                            <Link href="/get-plan?plan=premium">GO PREMIUM NOW</Link>
                        </Button>
                   </div>
                </motion.div>
            </div>

            {/* Showcase Section */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-40 space-y-16"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight underline decoration-secondary decoration-4 underline-offset-8">What's Inside Your Plan?</h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">Detailed, beautiful, and easy to follow. Here is a sneak peek into our expertly crafted meal plans.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        { src: "/pictures/sofi1.png", alt: "Meal Breakdown" },
                        { src: "/pictures/sofi2.png", alt: "Nutritional Info" },
                        { src: "/pictures/sofi3.png", alt: "Shopping List" },
                        { src: "/pictures/sofi4.png", alt: "Daily Schedule" },
                        { src: "/pictures/sofi5.png", alt: "Portion Guide" }
                    ].map((img, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
                            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white group cursor-zoom-in"
                        >
                            <Image 
                                src={img.src} 
                                alt={img.alt} 
                                fill 
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-40 bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
            >
                <Image 
                    src="/pictures/DSC00768.webp" 
                    fill 
                    alt="Background" 
                    className="object-cover opacity-20"
                />
                <div className="relative z-10 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Ready to see <span className="text-primary italic">yourself</span> in the mirror differently?</h2>
                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-medium italic">"The best time to start was yesterday. The second best time is right now. Let's make it happen together."</p>
                    <div className="pt-6 w-full flex justify-center">
                        <Button size="lg" className="w-full sm:w-auto h-auto sm:h-20 py-6 sm:py-0 px-6 sm:px-12 text-lg sm:text-2xl font-black rounded-full shadow-2xl shadow-primary/40 bg-primary hover:scale-110 transition-transform whitespace-normal" asChild>
                            <Link href="/get-plan" className="flex items-center justify-center">
                                <span className="text-center">START YOUR TRANSFORMATION</span>
                                <ArrowRight className="ml-3 w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                            </Link>
                        </Button>
                    </div>
                    <div className="flex justify-center items-center gap-8 pt-10 border-t border-white/10 opacity-70">
                         <div className="flex items-center gap-2">
                             <ShieldCheck className="w-5 h-5 text-green-500" />
                             <span className="text-white text-sm font-bold tracking-widest uppercase">Secure Checkout</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                             <span className="text-white text-sm font-bold tracking-widest uppercase">Expert Verified</span>
                         </div>
                    </div>
                </div>
            </motion.div>

            <div className="mt-20 text-center">
                <p className="text-muted-foreground font-medium">Have questions before joining? We're here to help.</p>
                <Link href="/contact" className="text-primary font-bold hover:underline underline-offset-4 decoration-2">Chat with our support team</Link>
            </div>
        </div>
      </main>
    </div>
  )
}

