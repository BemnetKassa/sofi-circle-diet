
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
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/who-it-is-for", label: "Who It's For" },
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
        <nav className="hidden md:flex gap-1 items-center bg-secondary/5 px-2 py-1.5 rounded-full border border-secondary/10 backdrop-blur-sm shadow-sm ring-1 ring-white/20">
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
             <Button variant="ghost" asChild className="rounded-full px-6 font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                <Link href="/login">Login</Link>
             </Button>
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
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 w-[80%] max-w-sm h-screen bg-background z-50 p-8 flex flex-col gap-8 md:hidden shadow-2xl overflow-y-auto"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <Link href="/home" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary to-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                                    S
                                </div>
                                <span className="font-bold text-lg">Sofi Circle</span>
                            </Link>
                            <button onClick={() => setIsOpen(false)} className="p-2 text-muted-foreground hover:text-foreground">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <div className="flex flex-col gap-5">
                            {links.map((link) => (
                                <Link 
                                    key={link.href} 
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-xl font-semibold transition-colors ${isActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        
                        <div className="mt-auto flex flex-col gap-4 pt-10 border-t border-border/50">
                            <Link 
                                href="/login" 
                                onClick={() => setIsOpen(false)}
                                className={`text-xl font-semibold transition-colors ${isActive("/login") ? "text-primary" : "text-foreground hover:text-primary"}`}
                            >
                                Login
                            </Link>
                            <Button asChild className="rounded-full w-full py-6 text-lg shadow-xl shadow-primary/20">
                                <Link href="/get-plan" onClick={() => setIsOpen(false)}>Get My Meal Plan</Link>
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

