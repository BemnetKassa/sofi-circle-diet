"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonies = [
  { image: "/pictures/transformations/2on1.jpg", alt: "Transformation 1" },
  { image: "/pictures/transformations/before.jpg", alt: "Transformation 3" },
  { image: "/pictures/transformations/after.jpg", alt: "Transformation 2" },
  { image: "/pictures/transformations/2on1.jpg", alt: "Transformation 4" },
  { image: "/pictures/transformations/after.jpg", alt: "Transformation 5" },
]

export function Testimonies() {
  const loop = [...testimonies, ...testimonies, ...testimonies, ...testimonies]

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">

      {/* edge fade */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/30 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/30 to-transparent z-10" />

      <motion.div
        className="flex items-center gap-4 sm:gap-6 px-4 min-w-max"
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((t, i) => (
          <div
            key={i}
            className="
              relative
              w-[150px] sm:w-[180px] md:w-[240px]
              h-[180px] sm:h-[210px] md:h-[270px]
              flex-shrink-0
              rounded-2xl
              overflow-hidden
              group
            "
          >

            {/* 🌟 OUTER GRADIENT BORDER */}
            <div className="absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-br from-white/40 via-white/10 to-transparent">

              {/* INNER GLASS CARD */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40 backdrop-blur-md">

                {/* IMAGE */}
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* TOP LABEL */}
                <div className="absolute top-2 left-2 text-[9px] sm:text-[10px] bg-black/50 text-white px-2 py-1 rounded-md border border-white/10 backdrop-blur-md">
                  Result
                </div>

                {/* BOTTOM TEXT */}
                <div className="absolute bottom-0 p-2 text-white text-xs sm:text-sm font-medium">
                  Real transformation
                </div>

                {/* ✨ SOFT GLOW HIGHLIGHT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5" />

              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}