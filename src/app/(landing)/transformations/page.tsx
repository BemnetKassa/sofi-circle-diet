"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Trophy, Star } from "lucide-react"

export default function TransformationsPage() {
  const transformations = [
    {
      id: 1,
      image: "/pictures/transformations/2on1.jpg",
      name: "Life-Changing Journey",
      story: "Lost more than 10kg of fat and became healthier and more handsome. His confidence has skyrocketed through disciplined nutrition and training.",
      tags: ["Fat Loss", "Confidence Boost"],
      duration: "10kg Lost"
    },
    {
      id: 2,
      beforeImage: "/pictures/transformations/2025-12-30 14.39.22.jpg",
      afterImage: "/pictures/transformations/2025-12-30 14.39.54.jpg",
      name: "Incredible Transformation",
      story: "A journey of discipline and balanced eating led to this incredible physique transformation. It's not just about looking good, but feeling powerful.",
      tags: ["Fat Loss", "Strength"],
      duration: "16 Weeks"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm font-semibold">
              Real Results
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Real People, <span className="text-primary">Real Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              See what's possible with the right plan and dedication. These are genuine transformations from our community members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-6 pb-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                {/* Image Container */}
                <div className="relative h-[400px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40" />
                  <Image
                    src={item.image}
                    alt={`${item.name} transformation`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-1.5 border border-border">
                    <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                    {item.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-20 -mt-12 bg-card/10 backdrop-blur-md rounded-t-3xl border-t border-white/10 dark:border-white/5">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    {item.name}
                    <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.story}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
