"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
    LayoutDashboard, 
    Users, 
    ClipboardList, 
    CreditCard, 
    BarChart3, 
    Settings, 
    LogOut, 
    ChevronLeft, 
    ChevronRight, 
    Menu, 
    X,
    Utensils,
    Calendar,
    Target,
    TrendingUp,
    UserCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SidebarItem {
    label: string
    icon: any
    href: string
    badge?: string
}

export function DashboardSidebar() {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    
    // Determine context (Admin or Customer)
    const isAdmin = pathname?.includes("/admin")
    
    const adminLinks: SidebarItem[] = [
        { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
        { label: "User Management", icon: Users, href: "/admin/users", badge: "New" },
        { label: "Meal Plans", icon: ClipboardList, href: "/admin/plans" },
        { label: "Revenue", icon: CreditCard, href: "/admin/revenue" },
        { label: "Reports", icon: BarChart3, href: "/admin/reports" },
        { label: "Settings", icon: Settings, href: "/admin/settings" },
    ]
    
    const customerLinks: SidebarItem[] = [
        { label: "My Dashboard", icon: LayoutDashboard, href: "/customer" },
        { label: "Daily Menu", icon: Utensils, href: "/customer/menu" },
        { label: "Plan Calendar", icon: Calendar, href: "/customer/calendar" },
        { label: "Weight Log", icon: Target, href: "/customer/weight" },
        { label: "Progress", icon: TrendingUp, href: "/customer/progress" },
        { label: "Profile", icon: UserCircle, href: "/customer/profile" },
        { label: "Settings", icon: Settings, href: "/customer/settings" },
    ]
    
    const links = isAdmin ? adminLinks : customerLinks
    const isActive = (href: string) => pathname === href || (href !== "/" && pathname?.startsWith(href))

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-background border-r border-border/50">
            {/* Logo area */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-green-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                    S
                </div>
                {!isCollapsed && (
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-bold text-lg tracking-tight truncate"
                    >
                        Sofi Circle <span className="text-primary">Diet</span>
                    </motion.span>
                )}
            </div>
            
            {/* User Info (mini) */}
            <div className="px-4 mb-6">
                <div className={`flex items-center gap-3 p-3 bg-secondary/10 rounded-xl ${isCollapsed ? 'justify-center' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold shrink-0">
                        {isAdmin ? 'AD' : 'JD'}
                    </div>
                    {!isCollapsed && (
                        <div className="overflow-hidden">
                            <p className="text-sm font-semibold truncate">{isAdmin ? 'Admin' : 'John Doe'}</p>
                            <p className="text-[10px] text-muted-foreground truncate">{isAdmin ? 'System Manager' : 'Weight Loss Plan'}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-4 space-y-1 overflow-y-auto overflow-x-hidden">
                {links.map((link) => (
                    <Link 
                        key={link.href} 
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative ${
                            isActive(link.href) 
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                                : "text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
                        }`}
                        title={isCollapsed ? link.label : ""}
                    >
                        <link.icon className={`w-5 h-5 shrink-0 ${isActive(link.href) ? "" : "group-hover:scale-110 transition-transform"}`} />
                        {!isCollapsed && (
                            <motion.span 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-sm font-medium"
                            >
                                {link.label}
                            </motion.span>
                        )}
                        {link.badge && !isCollapsed && (
                            <Badge variant="secondary" className="ml-auto bg-white/20 text-[10px] px-1.5 py-0 border-0 text-white">
                                {link.badge}
                            </Badge>
                        )}
                        
                        {/* Active indicator bar */}
                        {isActive(link.href) && (
                            <motion.div 
                                layoutId="sidebar-active"
                                className="absolute left-0 w-1 h-1/2 bg-white rounded-r-full"
                            />
                        )}
                    </Link>
                ))}
            </nav>

            {/* Footer / Actions */}
            <div className={`p-4 mt-auto border-t border-border/40 space-y-2`}>
                <Button 
                    variant="ghost" 
                    className={`w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/5 ${isCollapsed ? 'px-2 justify-center' : 'px-3'}`}
                >
                    <LogOut className="w-5 h-5 shrink-0" />
                    {!isCollapsed && <span className="ml-3 text-sm">Logout</span>}
                </Button>
                
                {!mobileOpen && (
                    <button 
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden md:flex items-center justify-center w-full p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <div className="flex items-center gap-2"><ChevronLeft size={18} /><span className="text-xs">Collapse</span></div>}
                    </button>
                )}
            </div>
        </div>
    )

    return (
        <>
            {/* Mobile Toggle */}
            <div className="lg:hidden fixed top-4 left-4 z-[60]">
                <Button variant="outline" size="icon" onClick={() => setMobileOpen(true)} className="bg-background/80 backdrop-blur shadown-sm border-border/50 rounded-xl">
                    <Menu className="w-5 h-5" />
                </Button>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70] lg:hidden"
                        />
                        <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 w-[280px] h-screen z-[80] lg:hidden"
                        >
                            <SidebarContent />
                            <Button 
                                variant="outline" 
                                size="icon" 
                                className="absolute top-4 -right-12 text-white border-white/20 bg-white/10 backdrop-blur hover:bg-white/20"
                                onClick={() => setMobileOpen(false)}
                            >
                                <X size={20} />
                            </Button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <div className={`hidden lg:block fixed top-0 left-0 h-screen transition-all duration-300 z-50 ${isCollapsed ? 'w-20' : 'w-64'}`}>
                <SidebarContent />
            </div>
            
            {/* Spacer for content */}
            <div className={`hidden lg:block transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`} />
        </>
    )
}
