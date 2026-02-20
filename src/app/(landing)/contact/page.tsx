
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, MessageSquare, Send } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
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
                className="text-center mb-16 space-y-6"
            >
                <motion.div variants={itemVariants} className="inline-block relative">
                   <span className="relative flex items-center gap-2 bg-secondary/20 text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full border border-secondary shadow-sm mx-auto w-fit">
                    <MessageSquare className="w-4 h-4 fill-secondary" /> We are here to help
                  </span>
                </motion.div>
                
                <motion.h1 
                    variants={itemVariants}
                    className="text-5xl md:text-6xl font-extrabold tracking-tight"
                >
                    Get in <span className="text-secondary relative inline-block">Touch<svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg></span>
                </motion.h1>
                
                <motion.p 
                    variants={itemVariants}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    Have questions about our plans or your progress? Our team is ready to assist you on your journey.
                </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                
                {/* Contact Info & Image */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-background rotate-1 hover:rotate-0 transition-all duration-500 group">
                        <Image 
                            src="/pictures/sofi3.png" 
                            alt="Contact Support Team" 
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <h3 className="text-xl font-bold">Visit Our Office</h3>
                            <p className="opacity-90">Open Mon-Fri, 9am - 5pm</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <MapPin className="w-5 h-5 text-primary" />,
                                title: "Visit Us",
                                desc: "Bole Road, Friendship Building\nAddis Ababa, Ethiopia",
                                bg: "bg-primary/10"
                            },
                            {
                                icon: <Mail className="w-5 h-5 text-secondary-foreground" />,
                                title: "Email Us",
                                desc: "support@soficirclediet.com\nhelp@soficirclediet.com",
                                bg: "bg-secondary/20"
                            },
                            {
                                icon: <Phone className="w-5 h-5 text-green-700" />,
                                title: "Call Us",
                                desc: "+251 911 234 567\n+251 912 345 678",
                                bg: "bg-green-100 dark:bg-green-900/30"
                            }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -5 }}
                                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-card hover:shadow-lg transition-all border border-transparent hover:border-border"
                            >
                                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                    <p className="text-muted-foreground whitespace-pre-line text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border relative overflow-hidden"
                >
                     {/* Decorative blob */}
                     <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <form className="space-y-6 relative z-10">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-base font-semibold ml-1">Full Name</Label>
                                <Input id="name" placeholder="E.g. Abebe Bikila" className="h-12 rounded-xl bg-background/50 border-border focus:ring-primary/20 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-base font-semibold ml-1">Phone Number</Label>
                                <Input id="phone" placeholder="+251..." className="h-12 rounded-xl bg-background/50 border-border focus:ring-primary/20 transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-base font-semibold ml-1">Email Address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl bg-background/50 border-border focus:ring-primary/20 transition-all" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-base font-semibold ml-1">Your Message</Label>
                            <textarea 
                                id="message" 
                                rows={5}
                                className="flex w-full rounded-xl border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none focus:ring-primary/20 transition-all" 
                                placeholder="How can we help you today?"
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl shadow-lg mt-4 flex items-center gap-2 group hover:scale-[1.01] transition-transform">
                            Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
      </main>
    </div>
  )
}

