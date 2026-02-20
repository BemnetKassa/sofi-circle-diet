"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Heart, Users, Leaf, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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

      <main className="flex-1 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
           <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center mb-20 space-y-6"
            >
                <div className="inline-block relative mt-8">
                   <motion.span 
                    variants={itemVariants}
                    className="relative flex items-center gap-2 bg-secondary/20 text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full border border-secondary shadow-sm mx-auto w-fit"
                   >
                    <Heart className="w-4 h-4 fill-secondary" /> Our Story & Mission
                  </motion.span>
                </div>
                
                <motion.h1 
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight"
                >
                    Empowering a <br/>
                    <span className="text-primary relative inline-block">
                        Healthier Ethiopia
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                        </svg>
                    </span>
                </motion.h1>
                
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                >
                    Sofi Circle Diet was born from a simple belief: healthy eating shouldn't mean giving up the foods you love. We bridge the gap between traditional Ethiopian cuisine and modern nutritional science.
                </motion.p>
            </motion.div>

            {/* Mission Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-background rotate-2 group"
                >
                     <Image 
                        src="/pictures/sofi1.png" 
                        alt="Healthy Ethiopian Food" 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                     <div className="absolute bottom-8 left-8 text-white max-w-xs">
                        <p className="font-bold text-2xl mb-2">Rooted in Tradition</p>
                        <p className="opacity-90">Celebrating our rich culinary heritage while promoting wellness.</p>
                     </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl font-bold text-foreground">More Than Just a Diet Plan</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We understand the unique challenges of maintaining a balanced diet in Ethiopia. From the ubiquity of Injera to the celebration feasts, food is central to our culture.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Our goal isn't to change who you are, but to give you the tools to make smarter choices. Whether you want to lose weight, gain muscle, or simply feel better, we provide personalized roadmaps that fit <em>your</em> life.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 pt-4">
                        {[
                            { title: "500+", sub: "Lives Changed" },
                            { title: "100%", sub: "Customized Plans" },
                            { title: "24/7", sub: "Support Access" },
                            { title: "4.9", sub: "Average Rating" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                                <h3 className="text-3xl font-bold text-primary">{stat.title}</h3>
                                <p className="text-muted-foreground font-medium">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Values Grid */}
            <div className="mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-muted-foreground text-lg">The principles that guide everything we do.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Users className="w-10 h-10 text-primary" />,
                            title: "Community First",
                            desc: "We build supportive communities where members uplift and motivate each other."
                        },
                        {
                            icon: <Target className="w-10 h-10 text-secondary-foreground" />,
                            title: "Personalization",
                            desc: "We believe in bio-individuality. One size does not fit all when it comes to nutrition."
                        },
                        {
                            icon: <Leaf className="w-10 h-10 text-green-600" />,
                            title: "Sustainability",
                            desc: "Promoting habits that are good for you and good for the planet."
                        }
                    ].map((val, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-[2rem] shadow-sm border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-6 text-foreground group-hover:scale-110 transition-transform duration-300">
                                {val.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{val.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[3rem] bg-gradient-to-r from-primary to-green-600 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
            >
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Ready to join the movement?</h2>
                    <p className="text-xl text-white/90 leading-relaxed">
                        Start your journey towards a healthier, happier you today. Let's rewrite your story together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button size="lg" variant="secondary" className="h-16 px-10 text-lg rounded-full shadow-lg hover:scale-105 transition-transform font-bold" asChild>
                            <Link href="/get-plan">Get Started Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-2 border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
      </main>
    </div>
  )
}
