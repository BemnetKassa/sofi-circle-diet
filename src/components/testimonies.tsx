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
              <div key={i} className="bg-white p-3 rounded-2xl w-[220px] h-[250px] flex-shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 overflow-hidden relative group hover:-translate-y-2">
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                    <Image 
                        src={t.image} 
                        alt={t.alt} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
              </div>
          ))}
      </motion.div>
    </div>
  )
}
