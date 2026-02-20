"use client"

import { motion } from "framer-motion"
import { Sparkles, UserCheck, Leaf, Wallet, FileText, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TransformationSection() {
    return (
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
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
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
    )
}
