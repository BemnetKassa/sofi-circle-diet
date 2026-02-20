
"use client"

import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const isActive = (path: string) => pathname?.includes(path)

  const links = [
    { href: "/home", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/home" className="flex items-center gap-2 group cursor-pointer z-50">
          <div className="relative">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-br from-primary to-green-600 rounded-xl flex items-center justify-center text-primary-foreground font-black text-xl shadow-lg relative z-10"
            >
              S
            </motion.div>
            <div className="absolute inset-0 bg-secondary rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Sofi Circle <span className="text-primary">Diet</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 items-center bg-secondary/10 px-2 py-1.5 rounded-full border border-secondary/20 backdrop-blur-sm">
           {links.map((link) => (
             <Link 
                key={link.href} 
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.href) ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
             >
                {isActive(link.href) && (
                    <motion.div 
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary rounded-full shadow-md"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
                <span className="relative z-10">{link.label}</span>
             </Link>
           ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
             <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-primary to-green-600 border-0">
                <Link href="/get-plan">Get My Meal Plan</Link>
             </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden z-50 p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center gap-8 md:hidden z-40"
                >
                    {links.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-bold ${isActive(link.href) ? "text-primary" : "text-foreground"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button asChild className="rounded-full px-8 py-6 text-lg shadow-xl shadow-primary/20">
                        <Link href="/get-plan" onClick={() => setIsOpen(false)}>Get My Meal Plan</Link>
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

