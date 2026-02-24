"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { StorySlider } from "@/components/landing/story-slider"
import { ArrowLeft, Quote, Heart, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MeetTheHeroPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                 <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-5"></div>
                 {/* Yellow Blob for decoration */}
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
                 
                 <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/about" className="inline-flex items-center text-muted-foreground hover:text-secondary transition-colors mb-8 group font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to About
                    </Link>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-wider mb-6">
                                The Founder
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                                Meet <br/>
                                <span className="text-foreground relative inline-block">
                                    Sofonias
                                    <svg className="absolute w-full h-4 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" opacity="0.6" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 text-justify leading-relaxed border-l-4 border-secondary/50 pl-6">
                                "Health isn't about restriction. It's about finding the joy in nourishment and the strength in movement. I started this journey not just to change bodies, but to change lives."
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" className="rounded-full px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20 font-bold text-lg">
                                   Follow My Journey
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-8 border-background ring-4 ring-secondary/20"
                        >
                             <Image 
                                src="/pictures/sofi9.webp" 
                                alt="Sofonias Portrait" 
                                fill 
                                className="object-cover"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                             <div className="absolute bottom-8 left-8 text-white p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <p className="font-bold text-xl text-secondary">Sofonias Assefa</p>
                                <p className="text-white/90 text-sm font-medium tracking-wide">Founder & Head Coach</p>
                             </div>
                        </motion.div>
                    </div>
                 </div>
            </section>

            {/* My Story Section */}
            <section className="py-24 bg-gradient-to-b from-secondary/5 to-background px-6 relative overflow-hidden">
                {/* Decorative background elements specific to story section */}
                <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-6xl relative z-10">
                     <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                     >
                        <div className="text-center space-y-4">
                            <span className="inline-block text-secondary font-bold tracking-[0.2em] uppercase text-sm">The Timeline</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-8">My Journey to the Stage</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                                Swipe through the key moments that defined my path from a local gym enthusiast to an international competitor.
                            </p>
                        </div>
                        
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary/5 rounded-[3.5rem] transform rotate-1 scale-[1.02] pointer-events-none border border-secondary/10"></div>
                            <StorySlider />
                        </div>
                    </motion.div>
                </div>
            </section>

             {/* Values / Philosophy Grid */}
             <section className="py-24 px-6 relative">
                <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="container mx-auto max-w-6xl relative z-10">
                    <h2 className="text-4xl font-bold text-center mb-16">What This Means For You</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Heart className="w-10 h-10 text-secondary" />,
                                title: "Passion for People",
                                desc: "I prioritize your well-being above all else. Every plan is crafted with care and empathy."
                            },
                             {
                                icon: <Award className="w-10 h-10 text-secondary" />,
                                title: "Proven Expertise",
                                desc: "Combining scientific principles with practical experience to deliver results that last."
                            },
                             {
                                icon: <Sparkles className="w-10 h-10 text-secondary" />,
                                title: "Cultural Pride",
                                desc: "Celebrating our food and traditions while navigating the path to better health."
                            }
                        ].map((item, i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card p-10 rounded-[2rem] border border-border/50 hover:shadow-xl hover:border-secondary/30 transition-all text-center group"
                             >
                                <div className="w-20 h-20 bg-secondary/10 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center mx-auto mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                             </motion.div>
                        ))}
                    </div>
                </div>
            </section>

              {/* Call to Action */}
            <section className="py-24 px-6 relative overflow-hidden bg-secondary text-secondary-foreground">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-white/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 mb-8 shadow-sm">
                        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                        Ready to Start Your <br/>
                        <span className="text-primary relative inline-block">
                            Transformation?
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-white opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    
                    <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        Join thousands of Ethiopians who have changed their lives with the Sofi Circle Diet. Your journey to a healthier, stronger you begins now.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all font-bold" asChild>
                            <Link href="/get-plan">Get Started Today</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-2 border-primary/20 bg-transparent hover:bg-white/20 text-foreground hover:text-primary transition-all font-semibold" asChild>
                            <Link href="/contact">Talk to an Expert</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
