"use client"

import { 
    CreditCard, 
    TrendingUp, 
    ArrowUpRight, 
    ArrowDownRight, 
    Users, 
    DollarSign, 
    Calendar,
    Filter,
    Download,
    BarChart,
    PieChart,
    ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const revenueStats = [
    { title: "Total Revenue", value: "ETB 245,600", trend: "+15.2%", positive: true, icon: DollarSign },
    { title: "Active Subs", value: "842 Users", trend: "+4.1%", positive: true, icon: Users },
    { title: "Avg. Plan Value", value: "ETB 450", trend: "-2.4%", positive: false, icon: CreditCard },
    { title: "Net Growth", value: "ETB 42,100", trend: "+8.9%", positive: true, icon: TrendingUp },
]

export default function AdminRevenuePage() {
    return (
        <div className="space-y-10 max-w-7xl">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/50">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black flex items-center gap-3 tracking-tight">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                            <CreditCard className="w-6 h-6" />
                        </div>
                        Revenue Analytics
                    </h1>
                    <p className="text-muted-foreground font-medium pl-15">Track your business growth and subscription performance.</p>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="flex bg-muted/50 p-1 rounded-xl border border-border/30">
                        <Button variant="ghost" size="sm" className="rounded-lg h-9 px-4 font-bold active:bg-white active:shadow-sm">Daily</Button>
                        <Button variant="ghost" size="sm" className="rounded-lg h-9 px-4 font-bold active:bg-white active:shadow-sm">Monthly</Button>
                        <Button variant="secondary" size="sm" className="rounded-lg h-9 px-4 font-bold shadow-sm">Yearly</Button>
                    </div>
                    <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl"><Calendar className="w-5 h-5"/></Button>
                    <Button className="h-11 px-6 rounded-xl font-bold flex gap-2"><Download className="w-4 h-4"/> Export CSV</Button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {revenueStats.map((stat, i) => (
                    <Card key={i} className="border-border/50 shadow-md group hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs uppercase font-black text-muted-foreground tracking-widest">{stat.title}</CardTitle>
                            <stat.icon className="w-4 h-4 text-primary opacity-60" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-black text-foreground">{stat.value}</div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className={`flex items-center gap-1 text-[10px] font-black underline-offset-4 decoration-current ${stat.positive ? 'text-emerald-600' : 'text-rose-600'}`}>
                                    {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                    {stat.trend}
                                </span>
                                <span className="text-[10px] font-bold text-muted-foreground tracking-tight">vs last period</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 border-border/50 shadow-md overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle className="text-lg font-black tracking-tight">Monthly Revenue Forecast</CardTitle>
                            <CardDescription className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">Projection based on current growth</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/20 px-3 py-1 font-bold">ETB +45k Needed for Target</Badge>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center bg-muted/10 border-t border-border/20 group relative">
                        <div className="absolute inset-0 flex items-center justify-center opacity-40">
                             <BarChart className="w-48 h-48 text-muted-foreground group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="relative z-10 text-center bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-2xl">
                             <p className="font-black text-foreground">Interactive Chart Integration Pending</p>
                             <p className="text-xs text-muted-foreground mt-1">Connecting Recharts module soon...</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/50 shadow-md">
                    <CardHeader>
                         <CardTitle className="text-lg font-black tracking-tight">Revenue Source</CardTitle>
                         <CardDescription className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">By Meal Plan Type</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-center h-48 relative group">
                             <PieChart className="w-40 h-40 text-muted-foreground opacity-30 group-hover:rotate-12 transition-transform duration-500" />
                             <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-3xl font-black text-foreground">142k</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">Top Earner</p>
                                </div>
                             </div>
                        </div>
                        <div className="space-y-3 pt-4 border-t border-border/20">
                            {[
                                { name: "Weight Loss", value: "58%", color: "bg-primary" },
                                { name: "Muscle Gain", value: "32%", color: "bg-secondary" },
                                { name: "Professional", value: "10%", color: "bg-muted-foreground/30" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between text-sm group">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${item.color} group-hover:scale-110 transition-transform`}></div>
                                        <span className="font-bold text-foreground">{item.name}</span>
                                    </div>
                                    <span className="font-black text-muted-foreground">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recents Transaction */}
            <Card className="border-border/50 shadow-md">
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                    <CardTitle className="text-lg font-black tracking-tight underline decoration-primary underline-offset-8 decoration-4">Recent Transactions</CardTitle>
                    <Button variant="ghost" className="text-xs font-black uppercase text-primary gap-1 group">
                        View History <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </CardHeader>
                <CardContent className="px-0 pt-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <tbody className="divide-y divide-border/20 font-medium">
                                {[
                                    { user: "Abebe B.", plan: "Weight Loss", price: "450.00", date: "Today, 10:45 AM", mode: "Telebirr" },
                                    { user: "Helen T.", plan: "Muscle Gain", price: "699.00", date: "Today, 09:12 AM", mode: "CBE Birr" },
                                    { user: "Samuel H.", plan: "Weight Loss", price: "450.00", date: "Yesterday, 06:15 PM", mode: "Telebirr" },
                                    { user: "Kidst A.", plan: "Professional", price: "850.00", date: "Yesterday, 02:30 PM", mode: "CBE Birr" },
                                ].map((tx, i) => (
                                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-black">
                                                IN
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-foreground leading-none">{tx.user}</p>
                                                <p className="text-[10px] text-muted-foreground mt-1">{tx.plan}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs text-muted-foreground font-bold">{tx.date}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className="text-[10px] font-bold text-muted-foreground">{tx.mode}</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className="text-sm font-black text-foreground">ETB {tx.price}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
