"use client"

import { 
    BarChart3, 
    TrendingUp, 
    Target, 
    Utensils, 
    ArrowRight, 
    Download, 
    Calendar, 
    ChevronRight, 
    Sparkles, 
    Users, 
    Activity, 
    PieChart, 
    BarChart, 
    AreaChart,
    ArrowUpRight,
    ArrowDownRight,
    Search,
    Filter,
    Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const engagementStats = [
    { title: "Daily Logins", value: "85%", change: "+5%", positive: true, icon: Activity, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Goal Completion", value: "62%", change: "+12%", positive: true, icon: Target, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Meal Satisfaction", value: "4.8/5", change: "Constant", positive: true, icon: Sparkles, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Churn Rate", value: "3.2%", change: "-0.5%", positive: true, icon: Users, color: "text-rose-600", bg: "bg-rose-50" },
]

export default function AdminReportsPage() {
    return (
        <div className="space-y-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500">
             {/* Header Section */}
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/50">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black flex items-center gap-4 tracking-tight text-foreground underline decoration-primary/30 underline-offset-[12px] decoration-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shadow-inner border border-secondary/20 hover:scale-110 transition-transform cursor-default">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        Reports & Insights
                    </h1>
                    <p className="text-muted-foreground font-medium pl-16">Data-driven analysis of user behavior and plan performance.</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                    <Button variant="outline" className="rounded-xl h-11 px-6 font-bold flex gap-2 text-muted-foreground border-border/60 hover:border-border hover:bg-muted/30 transition-all active:scale-95">
                        <Calendar className="w-4 h-4 text-primary" /> Custom Range
                    </Button>
                    <Button className="rounded-xl h-11 px-8 font-black flex gap-2 shadow-xl shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all text-white">
                        <Download className="w-4 h-4" /> Download Full PDF Report
                    </Button>
                </div>
            </div>

            {/* Engagement Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {engagementStats.map((stat, i) => (
                    <Card key={stat.title} className="border-border/50 shadow-md group hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 bg-white">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <div className={`p-2.5 rounded-xl ${stat.bg} shadow-sm group-hover:scale-105 transition-transform`}>
                                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                            </div>
                            <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Pulse</span>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-black text-foreground underline decoration-primary/5 underline-offset-4">{stat.value}</div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none">
                                    {stat.title}
                                </span>
                                <Badge variant="secondary" className={`text-[9px] px-2 py-0 font-black border-transparent uppercase tracking-widest flex items-center gap-0.5
                                    ${stat.positive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                                    {stat.positive ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDownRight className="w-2.5 h-2.5" />}
                                    {stat.change}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Popular Content Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 border-border/50 shadow-md overflow-hidden flex flex-col bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-6 border-b border-border/10 bg-muted/5">
                        <div className="space-y-1">
                            <CardTitle className="text-lg font-black tracking-tight flex items-center gap-2">
                                <Activity className="w-5 h-5 text-primary" /> Top Performing Plans
                            </CardTitle>
                            <CardDescription className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">User choice trends per month (ETB Weighting Applied)</CardDescription>
                        </div>
                        <div className="flex bg-muted p-1 rounded-xl border border-border/40 shadow-inner">
                            <Button variant="ghost" size="sm" className="h-8 px-4 text-[10px] font-black uppercase tracking-widest bg-white shadow-sm rounded-lg active:bg-white text-primary">Growth</Button>
                            <Button variant="ghost" size="sm" className="h-8 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground rounded-lg hover:bg-white/50 transition-colors">Usage</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-8 flex-1 pt-8 bg-white group/content">
                        <div className="h-[280px] relative flex items-center justify-center bg-muted/5 rounded-[2rem] group border-4 border-dashed border-border/20 overflow-hidden hover:border-primary/20 transition-colors">
                             <AreaChart className="w-48 h-48 text-muted-foreground/20 group-hover:scale-125 group-hover:text-primary/10 transition-all duration-1000 ease-in-out" />
                             <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none"></div>
                             <div className="absolute inset-x-10 bottom-10 top-10 flex flex-col justify-center items-center text-center space-y-4">
                                <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-2xl scale-95 group-hover/content:scale-100 transition-transform">
                                    <Sparkles className="w-8 h-8 text-primary mx-auto mb-3 animate-pulse" />
                                    <p className="text-lg font-black text-foreground mb-1 tracking-tight">Interactive Usage Data Pipeline</p>
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest max-w-[200px] leading-relaxed">Connecting Real-time Recharts module for dynamic cross-filtering...</p>
                                </div>
                             </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2">
                            {[
                                { name: "Weight Loss", color: "bg-primary", pct: "45%" },
                                { name: "Muscle Gain", color: "bg-emerald-500", pct: "32%" },
                                { name: "Professional", color: "bg-amber-500", pct: "15%" },
                                { name: "Others", color: "bg-muted-foreground/30", pct: "8%" }
                            ].map((item, i) => (
                                <div key={item.name} className="flex flex-col gap-2 p-4 rounded-2xl bg-secondary/5 border border-border/10 hover:border-primary/20 hover:bg-primary/5 transition-all group-item">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2.5 h-2.5 rounded-full ${item.color} shadow-sm group-item-hover:scale-110 transition-transform`}></div>
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{item.name}</span>
                                    </div>
                                    <p className="text-xl font-black text-foreground tracking-tighter">{item.pct}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/50 shadow-md bg-white flex flex-col">
                    <CardHeader className="bg-muted/5 border-b border-border/10">
                         <CardTitle className="text-lg font-black tracking-tight flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" /> Active Periods
                         </CardTitle>
                         <CardDescription className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Most active order times (UTC+3)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6 flex-1">
                        <div className="space-y-6">
                            {[
                                { time: "08:00 - 10:00 (Breakfast)", stat: "Critical", val: 82, color: "bg-primary" },
                                { time: "12:00 - 14:00 (Lunch)", stat: "Peak", val: 94, color: "bg-emerald-500" },
                                { time: "18:00 - 20:00 (Dinner)", stat: "High", val: 76, color: "bg-amber-500" },
                                { time: "Midnight / Off-peak", stat: "Low", val: 12, color: "bg-muted-foreground/20" }
                            ].map((period, i) => (
                                <div key={period.time} className="space-y-2 group cursor-default">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black text-foreground tracking-tight group-hover:text-primary transition-colors">{period.time}</span>
                                            <span className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">{period.stat} Traffic</span>
                                        </div>
                                        <Badge variant="outline" className="text-[9px] font-black uppercase tracking-tighter border-border/60 bg-white shadow-sm px-2">
                                            {period.val}% Load
                                        </Badge>
                                    </div>
                                    <div className="h-3 w-full bg-secondary/20 rounded-full overflow-hidden p-0.5 border border-border/5 shadow-inner">
                                        <div 
                                            className={`h-full ${period.color} rounded-full shadow-lg transition-all duration-1000 ease-out`} 
                                            style={{ width: `${period.val}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 p-6 rounded-[2rem] bg-primary/5 border border-primary/20 space-y-4">
                             <div className="flex items-center gap-3">
                                <Sparkles className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest text-primary">Insight of the Week</span>
                             </div>
                             <p className="text-xs font-bold text-muted-foreground leading-relaxed">
                                "Orders peak between <span className="text-foreground font-black">12:45 PM and 1:15 PM</span> in Addis Ababa. Consider optimizing delivery fleet 15 minutes prior to peak start."
                             </p>
                             <Button variant="ghost" className="w-full text-[10px] font-black uppercase tracking-widest text-primary h-8 px-0 border border-primary/20 rounded-xl hover:bg-primary shadow-sm hover:text-white transition-all group/btn">
                                See Fleet Analytics <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                             </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
