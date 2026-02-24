
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
    { href: "https://maednutritions.com/", label: "Maed", isExternal: true },
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/who-it-is-for", label: "Who It's For" },
    { href: "/transformations", label: "Transformations" },
    { href: "/nutritionPlan", label: "Nutrition Plans" },
    { href: "/blog", label: "Blog" },
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
              className="w-10 h-10 bg-linear-to-br from-primary to-green-600 rounded-xl flex items-center justify-center text-primary-foreground font-black text-xl shadow-lg relative z-10"
            >
              S
            </motion.div>
            <div className="absolute inset-0 bg-secondary rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Sofi Circle <span className="text-primary">Diet</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 items-center bg-secondary/5 px-2 py-1.5 rounded-full border border-secondary/10 backdrop-blur-sm shadow-sm ring-1 ring-white/20">
           {links.map((link) => {
             // Special handling for Maed link
             if (link.label === "Maed") {
               return (
                  <a 
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 bg-orange-500/10 text-orange-600 border border-orange-500/20 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 group mr-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:bg-white animate-pulse"></span>
                    MAED
                    <span className="opacity-0 w-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap text-[10px] ml-1">NUTRITION</span>
                  </a>
               );
             }
             
             return (
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
             )
           })}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
             <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 bg-linear-to-r from-primary to-green-600 border-0">
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
                <>
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                    />
                    
                    {/* Sidebar */}
                    <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
                        className="fixed top-0 left-0 w-[85%] max-w-sm h-screen bg-background/95 backdrop-blur-xl z-50 p-6 flex flex-col shadow-2xl overflow-y-auto border-r border-border md:hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/50">
                            <Link href="/home" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-green-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-105 transition-transform">
                                    S
                                </div>
                                <span className="font-bold text-xl tracking-tight">Sofi Circle <span className="text-primary">Diet</span></span>
                            </Link>
                            <button 
                                onClick={() => setIsOpen(false)} 
                                className="p-2 rounded-full bg-secondary/10 text-muted-foreground hover:bg-secondary/20 hover:text-foreground transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div className="flex flex-col gap-2 flex-grow">
                            {links.map((link, i) => {
                                if (link.label === "Maed") {
                                    return (
                                    <a 
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}
                                        className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 text-orange-600 font-bold flex items-center justify-between group hover:shadow-md transition-all mb-2"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                            MAED NUTRITION
                                        </span>
                                        <motion.span 
                                            initial={{ x: -5, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }} 
                                            className="text-orange-400 group-hover:translate-x-1 transition-transform"
                                        >→</motion.span>
                                    </a>
                                    )
                                }

                                const active = isActive(link.href)
                                return (
                                <Link 
                                    key={link.href} 
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`p-3 rounded-xl transition-all flex items-center gap-4 text-lg font-medium group ${active ? "bg-primary/10 text-primary font-bold" : "hover:bg-secondary/10 text-muted-foreground hover:text-foreground"}`}
                                >
                                    {/* Dot Indicator */}
                                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${active ? "bg-primary" : "bg-transparent group-hover:bg-border"}`}></span>
                                    {link.label}
                                </Link>
                                )
                            })}
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-border/50 flex flex-col gap-4">
                            <Link 
                                href="/login" 
                                onClick={() => setIsOpen(false)}
                                className={`p-3 rounded-xl transition-all flex items-center gap-4 text-lg font-medium group hover:bg-secondary/10 text-muted-foreground hover:text-foreground`}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-border transition-colors"></span>
                                Login
                            </Link>

                            <Link href="/get-plan" onClick={() => setIsOpen(false)}>
                                <Button className="w-full text-lg h-12 rounded-xl bg-gradient-to-r from-primary to-green-600 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                                    Get My Meal Plan
                                </Button>
                            </Link>
                            <p className="text-center text-xs text-muted-foreground mt-2">
                                © {new Date().getFullYear()} Sofi Circle Diet
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

