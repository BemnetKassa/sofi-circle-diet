"use client"

import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import { Heart, Users, Leaf, ShieldCheck, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative font-sans">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 bg-background overflow-hidden pointer-events-none">
        <Image 
          src="/pictures/sofi-graphics.PNG" 
          alt="Background Texture" 
          fill 
          className="object-contain object-top mt-20 opacity-40 scale-100"
          quality={50}
        />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <main className="flex-1 pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
           
           {/* Hero / Intro Section */}
           <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center mb-24 max-w-4xl mx-auto"
            >
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground/80 text-sm font-semibold mb-8 border border-secondary/20">
                    <Star className="w-4 h-4 fill-secondary text-secondary" /> 
                    <span>Trusted by 10,000+ Ethiopians</span>
                </motion.div>
                
                <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-foreground"
                >
                    Redefining Wellness for <br className="hidden md:block"/>
                    <span className="text-secondary relative inline-block">
                        Every Ethiopian
                        <svg className="absolute w-full h-3 -bottom-2 left-0 text-secondary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                             <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                        </svg>
                    </span>
                </motion.h1>
                
                <motion.p 
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                >
                    We believe that health shouldn't cost you your heritage. <br className="hidden md:block" /> 
                    Sofi Circle Diet is more than a plan; it's a movement to harmonize 
                    modern nutrition with our rich traditions.
                </motion.p>
            </motion.div>

            {/* Why Sofi Circle Diet? - Detailed Explanation */}
            <div className="mb-32 space-y-32">
                 {/* Section 1: The Circle Concept */}
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                         <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
                         <Image 
                            src="/pictures/circle.PNG" 
                            alt="Healthy Ethiopian Food" 
                            width={600} 
                            height={400} 
                            className="rounded-[2.5rem] shadow-2xl relative z-10 border-4 border-background transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-primary/20"
                         />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-bold mb-2">THE CONCEPT</div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Why "The Circle"?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            In Ethiopian culture, everything revolves around the circle. We eat from a shared plate (Gebeta), we sit in circles for coffee ceremonies, and life itself is cyclical.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            <strong className="text-secondary">Sofi Circle Diet</strong> embraces this philosophy. It's not a linear path with a start and end date; it's a continuous cycle of nourishment, movement, and growth. We bring you into a circle of support where health becomes a shared, communal experience rather than an isolated struggle.
                        </p>
                    </motion.div>
                 </div>

                 {/* Section 2: Nutrition Philosophy */}
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 order-2 lg:order-1"
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-bold mb-2">OUR NUTRITION</div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Eat Cultural, Live Healthy</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Many diet plans ask you to abandon your heritage. They demonize Injera or demand ingredients you can't find in local markets. We believe this is wrong.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {[
                                "We optimize, we don't eliminate.",
                                "Learn portion control with traditional foods.",
                                "Recipes that use accessible, local ingredients.",
                                "Balanced macros tailored for Ethiopian staples."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-medium text-foreground/80">
                                    <Leaf className="w-5 h-5 text-secondary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
                         <Image 
                            src="/pictures/DSC00730.webp" 
                            alt="Preparation of healthy meal" 
                            width={600} 
                            height={400} 
                            className="rounded-[2.5rem] shadow-2xl relative z-10 border-4 border-background rotate-2 hover:rotate-0 transition-transform duration-500"
                         />
                         
                         {/* Maed Nutrition Tag */}
                         <div className="absolute -bottom-4 -right-4 z-20 bg-background/90 backdrop-blur-sm text-foreground px-5 py-2.5 rounded-full font-bold shadow-xl border border-secondary/20 flex items-center gap-2 animate-bounce hover:animate-none cursor-pointer">
                            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                            <span className="text-sm">Partnered with <span className="text-orange-500">Maed Nutrition</span></span>
                         </div>
                    </motion.div>
                 </div>
            </div>

            {/* Maed Nutrition Partnership - Convenience Focused */}
            <div className="mb-32 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-[3rem] transform -rotate-1 scale-105 opacity-50 group-hover:rotate-0 transition-all duration-500"></div>
                <div className="bg-card border border-border/50 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-center gap-16 backdrop-blur-sm">
                    
                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-orange-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-700">
                             <div className="bg-white p-4 rounded-3xl shadow-lg inline-block transform -translate-y-4 translate-x-4 absolute top-0 right-0 z-20">
                                <span className="text-2xl">⚡</span>
                             </div>
                             <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-[350px] flex items-center justify-center p-8">
                                <Image 
                                    src="/pictures/maed_logo.jpg" 
                                    alt="Maed Nutrition Logo" 
                                    width={600} 
                                    height={400} 
                                    className="object-contain w-full h-full"
                                />
                             </div>
                             <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2">
                                <span>No Cooking Required</span>
                             </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 text-left space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-bold uppercase tracking-wider mb-2">
                             Exclusive Partner
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Healthy Eating, <br/>
                            <span className="text-orange-500">Delivered.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We know life in Addis is busy. That's why we've partnered with <a href="https://maednutritions.com/" target="_blank" className="text-orange-600 font-bold hover:underline">Maed Nutrition</a> to bring our meal plans directly to your doorstep.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Get chef-prepared, macro-counted meals based on your Sofi Circle plan, delivered fresh daily. No shopping, no chopping, just results.
                        </p>
                        
                        <div className="pt-4 flex flex-wrap gap-4">
                            <Button size="lg" className="rounded-full bg-orange-500 hover:bg-orange-600 shadow-orange-200 shadow-xl" asChild>
                                <a href="https://maednutritions.com/" target="_blank">Order Your Meals</a>
                            </Button>
                            <Button size="lg" variant="ghost" className="rounded-full text-orange-600 hover:text-orange-700 hover:bg-orange-50" asChild>
                                <Link href="/contact">Learn How It Works</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet The Hero - CTA Section */}
            <section className="relative rounded-[3rem] bg-gradient-to-br from-[#1e1e1e] to-[#0f0f0f] text-white p-10 md:p-20 overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                      <Image src="/pictures/sofi9.webp" alt="Background Texture" fill className="object-cover" />
                 </div>
                 
                 <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-wider">
                            <Heart className="w-3 h-3 fill-secondary text-secondary" /> The Founder
                         </div>
                         <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Meet the Heart Behind <br/> The Movement
                         </h2>
                         <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                            Sofonias Assefa founded this platform with a simple belief: Everyone deserves to feel strong, healthy, and confident. Discover the story that started it all and the man guiding thousands to a better life.
                         </p>
                         
                         <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="rounded-full h-14 px-8 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-secondary/25 transition-all" asChild>
                                <Link href="/meet-the-hero">
                                    Read Hero's Story <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                         </div>
                    </div>
                    
                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
                         <Image 
                            src="/pictures/sofi9.webp" 
                            alt="Sofonias Assefa" 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-700" 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                         <div className="absolute bottom-6 left-6">
                            <p className="text-2xl font-bold font-serif italic text-white">"Your health is your greatest wealth."</p>
                            <p className="text-white/70 mt-2 text-sm uppercase tracking-widest font-semibold">- Sofonias</p>
                         </div>
                    </div>
                 </div>
            </section>

        </div>
      </main>
    </div>
  )
}
