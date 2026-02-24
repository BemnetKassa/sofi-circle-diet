"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { StorySlider } from "@/components/landing/story-slider"

export default function MeetTheHeroPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative px-6 py-20 overflow-hidden">
                 <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-5"></div>
                 <div className="container mx-auto max-w-6xl">
                    <Link href="/about" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to About
                    </Link>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">The Founder</span>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                                Meet <br/>
                                <span className="text-primary relative inline-block">
                                    Sofonias
                                    <svg className="absolute w-full h-3 -bottom-2 left-0 text-secondary opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 text-justify leading-relaxed">
                                "Health isn't about restriction. It's about finding the joy in nourishment and the strength in movement. I started this journey not just to change bodies, but to change lives."
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
                                   Follow My Journey
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
                        >
                             <Image 
                                src="/pictures/sofi9.webp" 
                                alt="Sofonias Portrait" 
                                fill 
                                className="object-cover"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                             <div className="absolute bottom-8 left-8 text-white p-4">
                                <p className="font-bold text-lg">Sofonias Assefa</p>
                                <p className="text-white/80 text-sm">Founder & Head Coach</p>
                             </div>
                        </motion.div>
                    </div>
                 </div>
            </section>

            {/* My Story Section */}
            <section className="py-24 bg-secondary/5 px-6">
                <div className="container mx-auto max-w-6xl">
                     <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                     >
                        <h2 className="text-4xl md:text-5xl font-black text-center mb-8">My Journey to the Stage</h2>
                        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                            Swipe through the key moments that defined my path from a local gym enthusiast to an international competitor.
                        </p>
                        
                        <StorySlider />

                     </motion.div>
                </div>
            </section>

             {/* Values / Philosophy Grid */}
             <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-16">What This Means For You</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Heart className="w-10 h-10 text-red-500" />,
                                title: "Passion for People",
                                desc: "I prioritize your well-being above all else. Every plan is crafted with care and empathy."
                            },
                             {
                                icon: <Award className="w-10 h-10 text-yellow-500" />,
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
                                className="bg-card p-8 rounded-3xl border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all text-center"
                             >
                                <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
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
            <section className="py-20 px-6 bg-primary text-primary-foreground text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Me in The Circle</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-10">
                        Let's write the next chapter of your story together. Are you ready?
                    </p>
                    <Button size="lg" variant="secondary" className="px-10 py-6 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform" asChild>
                        <Link href="/get-plan">Get Started Today</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
