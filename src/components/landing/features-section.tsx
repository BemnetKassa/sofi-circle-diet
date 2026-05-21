"use client"

import { motion } from "framer-motion"
import {
  Users,
  TrendingUp,
  ShieldCheck,
  Truck,
  ArrowUpRight,
} from "lucide-react"

import Link from "next/link"

const features = [
  {
    icon: Users,
    title: "Expert Reviewed",
    desc: "Every nutrition plan is carefully reviewed by certified nutrition professionals.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },

  {
    icon: TrendingUp,
    title: "Real Results",
    desc: "Built for sustainable progress and long-term healthy transformations.",
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
  },

  {
    icon: ShieldCheck,
    title: "Healthy & Safe",
    desc: "Balanced nutrition tailored to your body and lifestyle safely.",
    color: "from-green-500/20 to-green-500/5",
    iconColor: "text-green-600",
  },

  {
    icon: Truck,
    title: "Meal Delivery",
    desc: "Prepared and delivered by our trusted nutrition partner.",
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-500",
    partner: true,
  },
]

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Premium Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_30%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2" />

      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm font-semibold mb-5 md:mb-6 backdrop-blur-sm">
            Why People Choose Us
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4 md:mb-6">
            More Than Just a{" "}
            <span className="text-primary">
              Diet Plan
            </span>
          </h2>

          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed px-2">
            Sofi Circle Diet helps you build a healthier lifestyle with
            personalized nutrition systems designed for real Ethiopian
            lifestyles and routines.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-7">
          {features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-background/70 backdrop-blur-xl p-4 md:p-8 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                {/* Card Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-green-500 opacity-70" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 md:mb-7">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-background/80 backdrop-blur-md shadow-lg border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon
                        className={`w-5 h-5 md:w-8 md:h-8 ${feature.iconColor}`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 tracking-tight leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-xs md:text-[15px] text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Partner Link */}
                  {feature.partner && (
                    <Link
                      href="https://maednutritions.com/"
                      target="_blank"
                      className="inline-flex items-center gap-1 md:gap-2 mt-4 md:mt-6 text-[11px] md:text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors group/link"
                    >
                      Visit Maed
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}