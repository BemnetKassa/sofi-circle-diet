"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Star, Sparkles, TrendingUp, Users, ShieldCheck, UserCheck, Leaf, Wallet, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Testimonies } from "@/components/testimonies"

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
      transition: { type: "spring" as const, stiffness: 50 }
    },
  }

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

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
        <section className="relative overflow-hidden">
             {/* Mobile Background Image */}
             <div className="absolute inset-0 lg:hidden z-0">
                <Image 
                    src="/pictures/sofi1.png" 
                    alt="Background" 
                    fill 
                    className="object-cover opacity-25" 
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
             </div>

            <div className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
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
              className="text-xl text-muted-foreground leading-relaxed max-w-xl"
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
                        src="/pictures/sofi1.png" 
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

        {/* Benefits/Features Grid */}
        <section className="py-24 px-6 bg-secondary/10 relative">
            <div className="absolute inset-0 bg-[url(/grid.svg)] opacity-5"></div>
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-primary">Sofi Circle Diet?</span></h2>
                    <p className="text-muted-foreground text-lg">We do not just give you a diet plan; we give you a lifestyle change that fits your reality in Ethiopia.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Users className="w-10 h-10 text-primary" />,
                            title: "Expert Reviewed",
                            desc: "Every plan is reviewed by certified nutrition experts to ensure safety and effectiveness."
                        },
                        {
                            icon: <TrendingUp className="w-10 h-10 text-secondary" />,
                            title: "Real Results",
                            desc: "Designed for sustainable weight loss or gain, not quick fixes that do not last."
                        },
                        {
                            icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
                            title: "100% Safe",
                            desc: "We prioritize your health with balanced meals tailored to your specific needs."
                        }
                    ].map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-border/50 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Comparison/Transformation Section */}
        <section className="py-24 px-6 overflow-hidden">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                        <Sparkles className="w-4 h-4" /> Life transformation
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        Join the <span className="text-primary">Circle</span> &
                        <span className="text-secondary relative ">
                            Change Your Life
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Experience a complete wellness transformation with a plan designed just for you. No rigid diets, just healthy living tailored to your taste.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-1 relative flex justify-center"
                    >
                         {/* Video without fancy frame */}
                        <motion.div 
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-md mx-auto z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-white cursor-pointer"
                        >
                            <video 
                                id="transformation-video"
                                src="/videos/person1.mp4" 
                                autoPlay 
                                muted 
                                loop 
                                playsInline
                                className="block w-full h-auto object-cover"
                            />
                        </motion.div>
                        {/* Decorative background for video */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-2"
                    >
                        <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden">
                            {/* Background decorations */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

                             <h3 className="text-2xl font-bold mb-8">What You Get With Sofi Circle</h3>

                             <ul className="space-y-4 mb-10">
                                {[
                                    { text: "Personally reviewed by experts", icon: <UserCheck className="w-5 h-5 text-primary" /> },
                                    { text: "Ethiopian cuisine & ingredients", icon: <Leaf className="w-5 h-5 text-green-600" /> },
                                    { text: "Budget-friendly daily meals", icon: <Wallet className="w-5 h-5 text-amber-600" /> },
                                    { text: "Easy to follow PDF format", icon: <FileText className="w-5 h-5 text-blue-600" /> },
                                    { text: "One-time payment, lifetime access", icon: <CheckCircle className="w-5 h-5 text-purple-600" /> }
                                ].map((item, i) => (
                                    <motion.li 
                                        key={i} 
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i + 0.3 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-4 bg-gray-50/80 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 text-primary">
                                            {item.icon}
                                        </div>
                                        <span className="font-semibold text-gray-800">{item.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="pt-2 border-t border-gray-100">
                                <Button className="w-full text-lg h-14 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all" asChild>
                                    <Link href="/get-plan" className="flex items-center justify-center gap-2">
                                        Start Your Journey Now <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </Button>
                                <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                                    <ShieldCheck className="w-3 h-3" /> 100% Satisfaction Guaranteed
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative overflow-hidden flex items-center justify-center text-white isolate">
            {/* Background Color Layer */}
            <div className="absolute inset-0 bg-primary -z-30"></div>

            {/* Background Animations (Testimonies) */}
            <div className="absolute inset-0 py-8 z-0 mt-60 opacity-100 flex flex-col justify-center ">
               <Testimonies />
            </div>

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px] -z-10"></div>
            
            {/* Gradient Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none -z-20"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none -z-20"></div>
            
            <div className="container mx-auto text-center relative z-20 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Ready to Change Your Life?</h2>
                <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">Join hundreds of others in Ethiopia who found their path to health with Sofi Circle Diet.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="h-16 px-12 text-xl rounded-full font-bold shadow-2xl hover:scale-105 transition-transform" asChild>
                        <Link href="/get-plan">Get My Custom Plan</Link>
                    </Button>
                </div>
                <p className="mt-8 opacity-70 text-sm">One-time payment • Lifetime access • Money-back guarantee</p>
            </div>
        </section>
      </main>
    </div>
  )
}

