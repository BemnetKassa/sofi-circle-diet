"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonies = [
  {
    name: "Abebe Kebede",
    text: "I lost 10kg in 3 months without giving up injera! The plan is so easy to follow.",
    location: "Addis Ababa"
  },
  {
    name: "Sara Tadesse",
    text: "Finally a diet plan that understands Ethiopian food. I feel more energetic than ever.",
    location: "Hawassa"
  },
  {
    name: "Dawit Alemu",
    text: "The workout routines fit perfectly into my busy schedule. Highly recommended!",
    location: "Adama"
  },
  {
    name: "Helen Bekele",
    text: "Sofi Circle Diet changed my relationship with food. I cook healthy and delicious meals now.",
    location: "Bahir Dar"
  },
  {
    name: "Robel Tesfaye",
    text: "Best investment for my health. The community support is amazing.",
    location: "Dire Dawa"
  },
  {
    name: "Marta Girma",
    text: "I gained muscle and learned so much about nutrition. Thank you Sofi!",
    location: "Addis Ababa"
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
              duration: 80, // Slower for better readability
              repeat: Infinity,
              ease: "linear"
          }}
      >
          {duplicatedTestimonies.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl w-[320px] flex-shrink-0 border border-white/20 shadow-xl opacity-80 hover:opacity-100 transition-opacity">
                  <div className="flex gap-1 mb-3">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />)}
                  </div>
                  <p className="text-white font-medium mb-4 whitespace-normal line-clamp-3 leading-relaxed drop-shadow-sm">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                          {t.name.charAt(0)}
                      </div>
                      <div className="text-left">
                          <p className="font-bold text-white text-sm drop-shadow-md">{t.name}</p>
                          <p className="text-white/80 text-xs font-medium">{t.location}</p>
                      </div>
                  </div>
              </div>
          ))}
      </motion.div>
    </div>
  )
}
