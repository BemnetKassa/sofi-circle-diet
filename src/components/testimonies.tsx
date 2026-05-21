"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonies = [
  {
    image: "/pictures/transformations/2on1.jpg",
    alt: "Transformation 1"
  },
  {
    image: "/pictures/transformations/before.jpg",
    alt: "Transformation 3"
  },
  {
    image: "/pictures/transformations/after.jpg",
    alt: "Transformation 2"
  },
   {
    image: "/pictures/transformations/2on1.jpg",
    alt: "Transformation 4"
  },
  {
    image: "/pictures/transformations/after.jpg",
    alt: "Transformation 5"
  },
]

export function Testimonies() {
  // Creating a larger set of items to ensure smooth infinite scroll
  // We need enough items to fill the screen width plus the buffer for the animation
  const duplicatedTestimonies = [...testimonies, ...testimonies, ...testimonies, ...testimonies];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none w-screen">
      <motion.div 
          className="flex gap-6 px-4 min-w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{ 
              duration: 40, // Slower for better readability
              repeat: Infinity,
              ease: "linear"
          }}
      >
          {duplicatedTestimonies.map((t, i) => (
              <div
                key={i}
                className="relative w-[240px] h-[270px] flex-shrink-0 rounded-xl border border-white/60 bg-white/80 p-2 shadow-[0_14px_40px_rgb(0,0,0,0.12)] ring-1 ring-black/5 transition-all duration-300 overflow-hidden group hover:-translate-y-1 hover:shadow-[0_18px_50px_rgb(0,0,0,0.18)]"
              >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image 
                        src={t.image} 
                        alt={t.alt} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Client Result
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                    <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-white/90">
                      <span>Sofi Circle</span>
                      <span className="rounded-md bg-white/15 px-2 py-0.5">Verified</span>
                    </div>
                    <div className="mt-1 text-sm font-semibold">Real transformation</div>
                  </div>
              </div>
          ))}
      </motion.div>
    </div>
  )
}
