"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Utensils, Activity, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-6 h-16 flex items-center border-b sticky top-0 bg-background/80 backdrop-blur z-50">
        <div className="font-bold text-xl flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
            S
          </div>
          Sofi Circle Diet
        </div>
        <nav className="ml-auto flex gap-6 text-sm font-medium items-center">
          <div className="hidden md:flex gap-6">
            <Link href="#how-it-works" className="hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </Link>
          </div>
          <Button asChild>
            <Link href="/get-plan">Get My Meal Plan</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="bg-secondary/20 text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full border border-secondary/50">
                #1 Personalized Nutrition in Ethiopia
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground"
            >
              Your Personalized Path to a <span className="text-primary">Healthier You</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Get a custom meal plan tailored to your body stats, goals, and budget. 
              Reviewed by experts, designed for real results.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center pt-8">
              <Button size="lg" className="h-12 px-8 text-base">
                Get My Meal Plan <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                View Sample
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground">Simple steps to your new lifestyle</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Activity className="w-6 h-6" />,
                  title: "1. Submit Stats",
                  desc: "Fill in your height, weight, age, and goals.",
                },
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: "2. Review",
                  desc: "Sofi reviews your profile personally.",
                },
                {
                  icon: <Utensils className="w-6 h-6" />,
                  title: "3. Pay",
                  desc: "Secure one-time payment via Chapa.",
                },
                {
                  icon: <Download className="w-6 h-6" />,
                  title: "4. Receive Plan",
                  desc: "Get your PDF plan and start eating right!",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow relative text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits/Features */}
        <section className="py-20 px-6">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Why Choose Sofi Circle Diet?</h2>
                    <ul className="space-y-4">
                        {[
                            "Personally reviewed by nutrition experts",
                            "Tailored to Ethiopian cuisine & ingredients",
                            "Budget-friendly options included",
                            "One-time payment, no hidden subscriptions"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-lg">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-4">
                        <Button size="lg" variant="secondary" className="font-bold">
                            Start Your Journey Now
                        </Button>
                    </div>
                </div>
                <div className="bg-muted aspect-video rounded-2xl flex items-center justify-center text-muted-foreground border-2 border-dashed border-muted-foreground/20">
                    <div className="text-center p-4">
                        <p className="font-medium">Before & After Transformations</p>
                        <p className="text-sm text-slate-500">(Placeholder for images)</p>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-muted py-12 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Sofi Circle Diet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
