"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Activity, FileText, Utensils, Download } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="py-24 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden min-h-[80vh]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
              <h1 className="text-5xl font-extrabold mb-6 tracking-tight">How It Works</h1>
              <p className="text-xl text-muted-foreground">Simple steps to your new lifestyle. We've made it as easy as 1-2-3-4.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Activity className="w-8 h-8" />,
              title: "Submit Stats",
              desc: "Fill in your height, weight, age, and goals.",
              color: "bg-blue-500",
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: "Review",
              desc: "Sofi reviews your profile personally.",
              color: "bg-secondary",
            },
            {
              icon: <Utensils className="w-8 h-8" />,
              title: "Pay",
              desc: "Secure one-time payment via Chapa.",
              color: "bg-primary",
            },
            {
              icon: <Download className="w-8 h-8" />,
              title: "Receive Plan",
              desc: "Get your PDF plan and start eating right!",
              color: "bg-purple-500",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="group bg-card p-8 rounded-2xl border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${step.color} opacity-5 rounded-bl-[100px] transition-transform group-hover:scale-150 duration-500`} />
              
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-inner">
                {step.icon}
              </div>
              <div className="absolute top-8 right-8 font-black text-6xl text-muted/20 select-none pointer-events-none">
                {i + 1}
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
