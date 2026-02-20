"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, User, Settings, LogOut, FileText, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdmin = pathname?.includes("/admin")

  const adminLinks = [
    { href: "/dashboard/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/admin/users", label: "Users", icon: Users },
    { href: "/dashboard/admin/plans", label: "Meal Plans", icon: FileText },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
  ]

  const customerLinks = [
    { href: "/dashboard/customer", label: "My Plan", icon: FileText },
    { href: "/dashboard/customer/progress", label: "Progress", icon: PieChart },
    { href: "/dashboard/customer/profile", label: "Profile", icon: User },
    { href: "/dashboard/customer/settings", label: "Settings", icon: Settings },
  ]

  const links = isAdmin ? adminLinks : customerLinks

  return (
    <div className="min-h-screen bg-muted/20 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r hidden md:flex flex-col fixed inset-y-0 z-50">
        <div className="p-6 border-b flex items-center justify-center">
             <Link href="/" className="flex items-center gap-2 font-black text-xl">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">S</div>
                <span>Sofi Circle</span>
            </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
            <div className="px-2 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {isAdmin ? "Admin Console" : "My Dashboard"}
            </div>
            {links.map((link) => {
                const Icon = link.icon
                const isActive = pathname === link.href
                
                return (
                    <Link key={link.href} href={link.href}>
                        <Button
                            variant={isActive ? "secondary" : "ghost"}
                            className={`w-full justify-start gap-3 ${isActive ? "font-bold shadow-sm" : "text-muted-foreground"}`}
                        >
                            <Icon className="w-4 h-4" />
                            {link.label}
                        </Button>
                    </Link>
                )
            })}
        </nav>

        <div className="p-4 border-t">
            <Button variant="outline" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:border-destructive/20 hover:bg-destructive/10">
                <LogOut className="w-4 h-4" />
                Log Out
            </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        {children}
      </main>
    </div>
  )
}
