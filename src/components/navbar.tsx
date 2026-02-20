"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="px-6 h-20 flex items-center border-b sticky top-0 bg-background/90 backdrop-blur-md z-50 shadow-sm"
    >
      <Link href="/home" className="font-bold text-2xl flex items-center gap-2 group cursor-pointer">
        <motion.div 
          whileHover={{ rotate: 360, backgroundColor: "var(--secondary)" }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold shadow-lg"
        >
          S
        </motion.div>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-700">Sofi Circle Diet</span>
      </Link>
      <nav className="ml-auto flex gap-8 text-sm font-medium items-center">
        <div className="hidden md:flex gap-8">
          <Link href="/home" className={`relative group ${isActive('/home') ? 'text-primary' : ''}`}>
             Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all ${isActive('/home') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/how-it-works" className={`relative group ${isActive('/how-it-works') ? 'text-primary' : ''}`}>
            How It Works
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all ${isActive('/how-it-works') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/pricing" className={`relative group ${isActive('/pricing') ? 'text-primary' : ''}`}>
            Pricing
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all ${isActive('/pricing') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/contact" className={`relative group ${isActive('/contact') ? 'text-primary' : ''}`}>
            Contact
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </div>
        <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
          <Link href="/get-plan">Get My Meal Plan</Link>
        </Button>
      </nav>
    </motion.header>
  )
}
