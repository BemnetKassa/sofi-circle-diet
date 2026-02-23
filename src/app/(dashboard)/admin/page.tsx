"use client"

import { Button } from "@/components/ui/button"
import { Users, Activity, CreditCard, ArrowUpRight } from "lucide-react"
import { StatCard } from "@/components/dashboard/stat-card"
import { AdminRecentSignups } from "@/components/dashboard/admin-recent-signups"
import { AdminQuickActions } from "@/components/dashboard/admin-quick-actions"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AdminDashboard() {
  const [stats, setStats] = useState([
    { title: "Total Users", value: "...", change: "...", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Active Plans", value: "...", change: "...", icon: Activity, color: "text-green-600", bg: "bg-green-50" },
    { title: "Revenue (Feb)", value: "...", change: "...", icon: CreditCard, color: "text-purple-600", bg: "bg-purple-50" },
  ])
  const [recentSignups, setRecentSignups] = useState<any[]>([])

  useEffect(() => {
    async function fetchData() {
        try {
            const res = await fetch('/api/admin/stats');
            const data = await res.json();
            
            // Map API response to UI structure if needed, currently matching mock data structure
            if (data.stats) {
                setStats([
                    { title: "Total Users", value: data.stats[0].value, change: data.stats[0].change, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
                    { title: "Active Plans", value: data.stats[1].value, change: data.stats[1].change, icon: Activity, color: "text-green-600", bg: "bg-green-50" },
                    { title: "Revenue (Feb)", value: data.stats[2].value, change: data.stats[2].change, icon: CreditCard, color: "text-purple-600", bg: "bg-purple-50" },
                ]);
            }
            if (data.recentSignups) {
                setRecentSignups(data.recentSignups);
            }
        } catch (error) {
            console.error("Failed to fetch dashboard data", error);
        }
    }
    fetchData();
  }, []);

  return (
    <div className="space-y-10 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
            <h1 className="text-4xl font-black tracking-tight text-gray-900 leading-tight">Admin <span className="text-primary italic">Console</span></h1>
            <p className="text-muted-foreground mt-2 text-lg font-medium">Monitoring system health and user requests.</p>
        </div>
        <div className="flex gap-4">
            <Button variant="outline" className="rounded-full px-6 font-bold shadow-sm hover:bg-secondary/10 transition-all border-border/60" asChild>
                <Link href="/admin/settings">System Audit</Link>
            </Button>
            <Button className="rounded-full px-6 font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all" asChild>
                <Link href="/admin/reports">
                    <ArrowUpRight className="mr-2 h-4 w-4" /> View Analytics
                </Link>
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
