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
    AreaChart 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const engagementStats = [
    { title: "Daily Logins", value: "85%", change: "+5% vs prev month", icon: Activity, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Goal Completion", value: "62%", change: "+12% vs prev month", icon: Target, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Meal Satisfaction", value: "4.8/5", change: "Constant", icon: Sparkles, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Churn Rate", value: "3.2%", change: "-0.5% vs prev month", icon: Users, color: "text-rose-600", bg: "bg-rose-50" },
]

export default function AdminReportsPage() {
    return (
        <div className="space-y-8 max-w-7xl">
             {/* Header Section */}
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/50">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black flex items-center gap-3 tracking-tight">
                        <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shadow-inner border border-secondary/20">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        Reports & Insights
                    </h1>
                    <p className="text-muted-foreground font-medium pl-15">Data-driven analysis of user behavior and plan performance.</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                    <Button variant="outline" className="rounded-xl h-11 px-6 font-bold flex gap-2 text-muted-foreground border-border/60 hover:border-border hover:bg-muted/30">
                        <Calendar className="w-4 h-4" /> Custom Range
                    </Button>
                    <Button className="rounded-xl h-11 px-8 font-bold flex gap-2 shadow-xl shadow-primary/25">
                        <Download className="w-4 h-4" /> Generate Full PDF Report
                    </Button>
                </div>
            </div>

            {/* Engagement Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {engagementStats.map((stat, i) => (
                    <Card key={i} className="border-border/50 shadow-md group hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <div className={`p-2 rounded-lg ${stat.bg}`}>
                                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                            </div>
                            <Activity className="w-3 h-3 text-muted-foreground opacity-30" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-black text-foreground">{stat.value}</div>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] font-black underline-offset-4 decoration-current text-muted-foreground">
                                    {stat.title}
                                </span>
                                <Badge variant="secondary" className="text-[8px] px-1.5 py-0 font-bold bg-muted/60 text-muted-foreground border-transparent">{stat.change}</Badge>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Popular Content Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 border-border/50 shadow-md overflow-hidden flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <div className="space-y-1">
                            <CardTitle className="text-lg font-black tracking-tight">Top Performing Meal Plans</CardTitle>
                            <CardDescription className="text-xs font-bold uppercase tracking-wider text-muted-foreground">User choice trends per month</CardDescription>
                        </div>
                        <div className="flex bg-muted/50 p-1 rounded-lg border border-border/30">
                            <Button variant="ghost" size="sm" className="h-7 px-3 text-[10px] font-black uppercase tracking-widest bg-white shadow-sm rounded-md">Growth</Button>
                            <Button variant="ghost" size="sm" className="h-7 px-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground rounded-md">Usage</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6 flex-1 pt-6 border-t border-border/20">
                        <div className="h-[250px] relative flex items-center justify-center bg-muted/10 rounded-2xl group border border-dashed border-border/70 overflow-hidden">
                             <AreaChart className="w-40 h-40 text-muted-foreground opacity-30 group-hover:scale-125 transition-transform duration-700" />
                             <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                             <div className="absolute bottom-6 left-6 right-6 text-center">
                                <p className="text-sm font-black text-foreground mb-1 tracking-tight">Interactive Usage Data (D3.js integration pending)</p>
                                <div className="flex justify-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Weight Loss</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Muscle Gain</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Other</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="text-center p-4 bg-primary/5 rounded-2xl border border-primary/10 group hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">New Subs</p>
                                <p className="text-2xl font-black text-primary">+145</p>
                            </div>
                            <div className="text-center p-4 bg-secondary/5 rounded-2xl border border-secondary/10 group hover:border-secondary/40 transition-all duration-300 shadow-sm hover:shadow-md">
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Conversion</p>
                                <p className="text-2xl font-black text-secondary">24%</p>
                            </div>
                            <div className="text-center p-4 bg-muted/20 rounded-2xl border border-border/50 group hover:border-border transition-all duration-300 shadow-sm hover:shadow-md">
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">LTV</p>
                                <p className="text-2xl font-black text-foreground">ETB 1,850</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/50 shadow-md">
                    <CardHeader>
                        <CardTitle className="text-lg font-black tracking-tight">Popular Ingredients</CardTitle>
                        <CardDescription className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Most included in user meals</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { name: "Egg Whites", amount: "154 meals", trend: "High Demand", icon: "🥚" },
                            { name: "Oats", amount: "128 meals", trend: "Morning Essential", icon: "🥣" },
                            { name: "Chicken Breast", amount: "112 meals", trend: "Protein King", icon: "🍗" },
                            { name: "Avocado", amount: "84 meals", trend: "Healthy Fats", icon: "🥑" },
                            { name: "Injera", amount: "72 meals", trend: "Local Base", icon: "🍞" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/30 group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-foreground leading-tight">{item.name}</p>
                                        <p className="text-[10px] text-muted-foreground font-bold">{item.amount}</p>
                                    </div>
                                </div>
                                <Badge variant="secondary" className="text-[8px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-700 border-none px-2 py-0.5">{item.trend}</Badge>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
