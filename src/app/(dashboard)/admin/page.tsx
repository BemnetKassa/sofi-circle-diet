"use client"

import { Button } from "@/components/ui/button"
import { Users, Activity, CreditCard, ArrowUpRight } from "lucide-react"
import { StatCard } from "@/components/dashboard/stat-card"
import { AdminRecentSignups } from "@/components/dashboard/admin-recent-signups"
import { AdminQuickActions } from "@/components/dashboard/admin-quick-actions"

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "2,543", change: "+12.5%", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Active Plans", value: "1,234", change: "+5.2%", icon: Activity, color: "text-green-600", bg: "bg-green-50" },
    { title: "Revenue (Feb)", value: "ETB 452k", change: "+18.2%", icon: CreditCard, color: "text-purple-600", bg: "bg-purple-50" },
  ]

  const recentSignups: any[] = [
    { id: 1, name: "Abebe Bikila", email: "abebe@example.com", plan: "Weight Loss", date: "2 mins ago", status: "pending" },
    { id: 2, name: "Sara Tadesse", email: "sara@gmail.com", plan: "Muscle Gain", date: "15 mins ago", status: "active" },
    { id: 3, name: "Dawit Kebede", email: "dawit.k@yahoo.com", plan: "Maintenance", date: "1 hour ago", status: "active" },
    { id: 4, name: "Hellen M.", email: "hellen@example.com", plan: "Weight Loss", date: "3 hours ago", status: "rejected" },
    { id: 5, name: "Yonas Alemu", email: "yonas@gmail.com", plan: "Keto Diet", date: "5 hours ago", status: "pending" },
  ]

  return (
    <div className="space-y-10 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
            <h1 className="text-4xl font-black tracking-tight text-gray-900 leading-tight">Admin <span className="text-primary italic">Console</span></h1>
            <p className="text-muted-foreground mt-2 text-lg font-medium">Monitoring system health and user requests.</p>
        </div>
        <div className="flex gap-4">
            <Button variant="outline" className="rounded-full px-6 font-bold shadow-sm hover:bg-secondary/10 transition-all">
                System Audit
            </Button>
            <Button className="rounded-full px-6 font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                <ArrowUpRight className="mr-2 h-4 w-4" /> Download Report
            </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, i) => (
            <StatCard 
                key={i}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={stat.icon}
                color={stat.color}
                bg={stat.bg}
            />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid gap-6 md:grid-cols-7 lg:grid-cols-7">
        <AdminRecentSignups signups={recentSignups} />
        <AdminQuickActions />
      </div>
    </div>
  )
}
