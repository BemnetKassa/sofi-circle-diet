"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft, Quote, Heart, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
                <div className="container mx-auto max-w-5xl">
                     <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-24"
                     >
                        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">My Journey to the Stage</h2>
                        
                        {/* Phase 1: The Beginning */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                                <Image 
                                    src="/pictures/youngSofi.JPG" 
                                    alt="Early days at the local gym" 
                                    fill 
                                    className="object-cover hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <span className="text-primary font-bold tracking-wider uppercase">The Beginning</span>
                                <h3 className="text-3xl font-bold">Where It All Started</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    It wasn't always about trophies or stages. My journey began over <strong>10 years ago</strong> in a small local gym here in Ethiopia. I was just a young kid with a dream and a lot to learn.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    I spent 5 years dedicated to learning the science of professional competition—not just lifting weights, but understanding anatomy, nutrition, and discipline. Those early years taught me that consistency is the only magic pill.
                                </p>
                            </div>
                        </div>

                        {/* Phase 2: Local Competition */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-1 space-y-6">
                                <span className="text-secondary font-bold tracking-wider uppercase">Rising Up</span>
                                <h3 className="text-3xl font-bold">From Local Stages...</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    The road wasn't easy. I faced countless ups and downs—injuries, doubts, and the immense pressure of competition. But I kept showing up.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Competing in local areas was where I forged my character. Every loss was a lesson, and every win was a stepping stone. I learned that true strength is built in the moments heavily challenges you.
                                </p>
                            </div>
                            <div className="order-2 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl rotate-[2deg] hover:rotate-0 transition-all duration-500">
                                <Image 
                                    src="/pictures/localCompete.JPG" 
                                    alt="Competing in local areas" 
                                    fill 
                                    className="object-cover hover:scale-105 transition-transform duration-700" 
                                />
                            </div>
                        </div>

                         {/* Phase 3: International Success */}
                         <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl -rotate-1 hover:rotate-0 transition-all duration-500">
                                <Image 
                                    src="/pictures/bronz.JPG" 
                                    alt="International Competition in South Africa" 
                                    fill 
                                    className="object-cover hover:scale-105 transition-transform duration-700" 
                                />
                                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold border border-white/20">
                                    South Africa, International Stage
                                </div>
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <span className="text-primary font-bold tracking-wider uppercase">International Level</span>
                                <h3 className="text-3xl font-bold">...To the World Stage</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    My dedication took me beyond our borders. Representing my country on international stages, like in South Africa, was a dream come true.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Standing on that podium and bringing home the Bronze medal was proof that with enough heart and hard work, any goal is achievable. It wasn't just my victory; it was for everyone who believed in me.
                                </p>
                            </div>
                        </div>

                         {/* Phase 4: The Medals */}
                         <div className="bg-card p-12 rounded-[3rem] border border-border/50 text-center space-y-8 shadow-2xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                             <h3 className="text-3xl font-bold relative z-10">A Legacy of Dedication</h3>
                             <p className="text-lg text-muted-foreground max-w-2xl mx-auto relative z-10">
                                 These medals are symbols of years of sacrifice, discipline, and unwavering consistency. This is the experience I bring to <strong>Sofi Circle Diet</strong>—to help you achieve your own victories.
                             </p>
                             <div className="relative h-[300px] md:h-[400px] w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-md border-4 border-background rotate-1 hover:rotate-0 transition-all">
                                 <Image 
                                    src="/pictures/medal.JPG" 
                                    alt="Medals from big competitions" 
                                    fill 
                                    className="object-cover hover:scale-105 transition-transform duration-700" 
                                />
                             </div>
                         </div>

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
