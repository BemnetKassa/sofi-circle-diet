"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Testimonies } from "@/components/testimonies"

export function CtaSection() {
    return (
        <section className="relative py-8 sm:py-16 px-6 overflow-hidden isolate">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-green-600 to-emerald-500 -z-30" />
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] -z-20" />

            {/* glow blobs */}
            <motion.div
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-white/20 rounded-full blur-[120px] -z-10"
            />

            <motion.div
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute bottom-[-120px] left-[-120px] w-[360px] h-[360px] bg-black/10 rounded-full blur-[120px] -z-10"
            />

            {/* TESTIMONIES */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-75">
                <Testimonies />
            </div>

            {/* overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />

            {/* CONTENT */}
            <div className="relative z-20 max-w-3xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                 className="
                    bg-transparent
                    backdrop-blur-none
                    border-0
                    shadow-none

                    sm:bg-white/10
                    sm:backdrop-blur-sm
                    sm:border sm:border-white/20
                    sm:shadow-xl

                    rounded-2xl
                    p-4 sm:p-6 md:p-8
                    max-w-xl mx-auto
                    "
                    >

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                        Ready to Transform Your Body?
                    </h2>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white max-w-md mx-auto">
                        Join hundreds in Ethiopia achieving real results with personalized nutrition plans.
                    </p>

                    <div className="mt-5 sm:mt-6 flex justify-center">
                        <Button
                            size="lg"
                            className="
                                h-10 sm:h-11 md:h-12
                                px-6 sm:px-8
                                rounded-full font-semibold
                                bg-white text-primary
                                hover:bg-white/90 shadow-md
                                transition hover:scale-105
                            "
                            asChild
                        >
                            <Link href="/get-plan">Get My Plan</Link>
                        </Button>
                    </div>

                    <p className=" mt-12 sm:mt-4 text-white sm:text-white/60 text-xs sm:text-sm">
                        One-time payment • Personalized plan • Nutritionist reviewed
                    </p>

                </motion.div>
            </div>

        </section>
    )
}