"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, ShieldCheck } from "lucide-react"

export function FeaturesSection() {
    return (
        <section className="py-24 px-6 bg-secondary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url(/grid.svg)] opacity-5"></div>
            <div className="container mx-auto relative z-10">
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
    )
}
