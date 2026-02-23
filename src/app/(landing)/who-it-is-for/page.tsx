"use client"

import { motion, Variants } from "framer-motion"
import { Users, User, UserPlus, Heart, Zap, Target, Coffee, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function WhoItIsForPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6"
          >
            <Users className="w-4 h-4" /> Personalized for Everyone
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Who is <span className="text-primary">Sofi Circle</span> For?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Our nutrition plans are designed to be inclusive, practical, and effective for everyone in Ethiopia, regardless of where you are in your fitness journey.
          </motion.p>
        </div>
      </section>

      {/* Gender Focus */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-background border border-border rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all relative overflow-hidden group flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="/pictures/men.jpg" 
                  alt="Sofi Circle for Men" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              </div>
              
              <div className="p-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 relative z-10 -mt-16 border-4 border-background shadow-lg">
                    <User className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">For Men</h3>
                <p className="text-muted-foreground mb-6">
                    Whether you want to build lean muscle, increase your energy levels for work, or shed the extra "Abesha" belly, we provide high-protein, energy-dense plans that keep you full and focused.
                </p>
                <div className="mb-6 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                    <p className="text-sm text-blue-800 font-medium flex items-start gap-2">
                        <Zap className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>Powered by <Link href="https://maednutritions.com/" target="_blank" className="underline font-bold">Maed Nutrition</Link> for protein-packed meal delivery directly to your office or home.</span>
                    </p>
                </div>
                <ul className="space-y-3 mt-auto">
                    <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Muscle building protocols</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Performance nutrition</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Sustainable fat loss</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-background border border-border rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all relative overflow-hidden group flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="/pictures/women.jpg" 
                  alt="Sofi Circle for Women" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              </div>

              <div className="p-10 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 text-pink-600 relative z-10 -mt-16 border-4 border-background shadow-lg">
                    <UserPlus className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">For Women</h3>
                  <p className="text-muted-foreground mb-6">
                    Tailored for hormonal balance, glowing skin, and sustainable weight management. Our plans focus on nutrient-dense ingredients like Teff and Flaxseed to help you feel your best every day.
                  </p>
                  <div className="mb-6 p-4 bg-pink-50/50 rounded-xl border border-pink-100">
                      <p className="text-sm text-pink-800 font-medium flex items-start gap-2">
                           <Zap className="w-4 h-4 mt-0.5 shrink-0" />
                          <span>No time to cook? <Link href="https://maednutritions.com/" target="_blank" className="underline font-bold">Maed Nutrition</Link> delivers healthy, chef-prepared meals to your door.</span>
                      </p>
                  </div>
                  <ul className="space-y-3 mt-auto">
                    <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Balanced hormonal health</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Toned physique focus</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Nutrient-rich local ingredients</li>
                  </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-900">
                No matter your starting point, we help you <span className="text-primary italic font-serif">get there.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Personalized Support", desc: "Every plan is reviewed by a real person. No generic AI templates." },
                  { title: "Local Ingredients", desc: "Designed for what you can actually buy in Shola or Merkato." },
                  { title: "Sustainable Living", desc: "No extreme fasting. No starving. Just balanced eating." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-secondary-foreground font-extrabold">{i+1}</div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-800">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-primary/5 p-12 rounded-[3.5rem] border border-primary/10 relative overflow-hidden">
                <div className="relative z-10 text-center py-10">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Our Mission</span>
                    <p className="text-2xl md:text-3xl font-bold leading-relaxed text-gray-800">
                      "To make healthy living accessible, understandable, and culturally relevant for every Ethiopian home."
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="w-12 h-1 bg-primary/30 rounded-full"></div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 -ml-16 -mt-16 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 -mr-24 -mb-24 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyles */}
      <section className="py-24 px-6 bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Your Lifestyle</h2>
            <p className="text-muted-foreground text-lg italic">"I don't have time" is no longer an excuse.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Busy Professionals",
                desc: "Quick, easy-to-prepare meals that you can take to the office or find in local cafes."
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Students",
                desc: "Budget-friendly plans using affordable local ingredients without sacrificing nutrition."
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Health Seekers",
                desc: "Managing blood sugar, cholesterol, or just wanting to live a longer, cleaner life."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Athletes",
                desc: "Fuel your gym sessions or sports with the right balance of macros for performance."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  {card.icon}
                </div>
                <h4 className="font-bold text-xl mb-3">{card.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <Zap className="w-12 h-12 text-secondary mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Guessing, Start Progressing</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join the circle today and get a plan that finally respects your palate and your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/20" asChild>
              <Link href="/get-plan">Get My Custom Plan</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 rounded-full text-lg" asChild>
              <Link href="/nutritionPlan">View Plan</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
