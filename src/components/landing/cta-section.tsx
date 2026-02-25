"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Testimonies } from "@/components/testimonies"

export function CtaSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden flex items-center justify-center text-white isolate">
            {/* Background Color Layer */}
            <div className="absolute inset-0 bg-primary/80 -z-30"></div>

            {/* Background Animations (Testimonies) */}
            <div className="absolute inset-0 py-8 z-0 mt-70 opacity-100 flex flex-col justify-center ">
               <Testimonies />
            </div>

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-primary/70 backdrop-blur-[4px] -z-10"></div>
            
            {/* Gradient Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none -z-20"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none -z-20"></div>
            
            <div className="container mx-auto text-center relative z-20 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Ready to Change Your Life?</h2>
                <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">Join hundreds of others in Ethiopia who found their path to health with Sofi Circle Diet.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="h-10 md:h-16 px-6 md:px-12 text-base md:text-xl rounded-full font-bold shadow-2xl hover:scale-105 transition-transform" asChild>
                        <Link href="/get-plan">Get My Custom Plan</Link>
                    </Button>
                </div>
                <p className="mt-8 opacity-70 text-sm">One-time payment • Lifetime access • Money-back guarantee</p>
            </div>
        </section>
    )
}
