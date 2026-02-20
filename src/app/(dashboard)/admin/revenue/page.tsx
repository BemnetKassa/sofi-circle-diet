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

import Link from "next/link"

const revenueStats = [
    { title: "Total Revenue", value: "ETB 245,600", trend: "+15.2%", positive: true, icon: DollarSign },
    { title: "Active Subs", value: "842 Users", trend: "+4.1%", positive: true, icon: Users },
    { title: "Avg. Plan Value", value: "ETB 450", trend: "-2.4%", positive: false, icon: CreditCard },
    { title: "Net Growth", value: "ETB 42,100", trend: "+8.9%", positive: true, icon: TrendingUp },
]

export default function AdminRevenuePage() {
    return (
        <div className="space-y-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/50">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black flex items-center gap-3 tracking-tight text-foreground underline decoration-primary/30 underline-offset-[12px] decoration-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner hover:scale-105 transition-transform">
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
                    <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl border-border/60 hover:border-primary/40"><Calendar className="w-5 h-5"/></Button>
                    <Button className="h-11 px-6 rounded-xl font-black flex gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all"><Download className="w-4 h-4"/> Export CSV</Button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {revenueStats.map((stat, i) => (
                    <Card key={i} className="border-border/50 shadow-md group hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-xs uppercase font-black text-muted-foreground tracking-widest">{stat.title}</CardTitle>
                            <stat.icon className="w-4 h-4 text-primary opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-black text-foreground underline decoration-primary/10 underline-offset-4">{stat.value}</div>
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
                <Card className="lg:col-span-2 border-border/50 shadow-md overflow-hidden bg-white">
                    <CardHeader className="flex flex-row items-center justify-between bg-white border-b border-border/10 pb-6">
                        <div>
                            <CardTitle className="text-lg font-black tracking-tight">Monthly Revenue Forecast</CardTitle>
                            <CardDescription className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">Projection based on current growth</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/20 px-4 py-1.5 font-black text-[10px] uppercase tracking-widest">
                            ETB +45k Needed for Target
                        </Badge>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center bg-muted/10 group relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center opacity-40">
                             <BarChart className="w-48 h-48 text-muted-foreground group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                        </div>
                        <div className="relative z-10 text-center bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-2xl scale-90 md:scale-100">
                             <p className="font-black text-foreground text-lg mb-1 tracking-tight">Financial Visualization</p>
                             <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-4">Connecting Recharts module...</p>
                             <div className="flex gap-2 justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                                <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100"></div>
                                <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-200"></div>
                             </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/50 shadow-md bg-white">
                    <CardHeader className="border-b border-border/10 pb-6">
                         <CardTitle className="text-lg font-black tracking-tight">Revenue Source</CardTitle>
                         <CardDescription className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">By Meal Plan Type</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                        <div className="flex items-center justify-center h-48 relative group">
                             <PieChart className="w-40 h-40 text-muted-foreground opacity-30 group-hover:rotate-12 transition-transform duration-700" />
                             <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center group-hover:scale-110 transition-transform bg-white/40 backdrop-blur-sm p-4 rounded-full">
                                    <p className="text-3xl font-black text-foreground tracking-tighter underline decoration-primary/40 underline-offset-4">142k</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary leading-none">Top Earner</p>
                                </div>
                             </div>
                        </div>
                        <div className="space-y-4 pt-4 border-t border-border/20">
                            {[
                                { name: "Weight Loss", value: "58%", color: "bg-primary" },
                                { name: "Muscle Gain", value: "32%", color: "bg-emerald-500" },
                                { name: "Professional", value: "10%", color: "bg-muted-foreground/30" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-default">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${item.color} group-hover:scale-125 transition-transform shadow-sm`}></div>
                                        <span className="font-bold text-muted-foreground group-hover:text-foreground transition-colors text-sm">{item.name}</span>
                                    </div>
                                    <span className="font-black text-primary text-sm">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Transactions Section */}
            <Card className="border-border/50 shadow-md bg-white overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between border-b border-border/20 bg-muted/5">
                    <div className="py-2">
                        <CardTitle className="text-xl font-black tracking-tight">Recent Transactions</CardTitle>
                        <CardDescription className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">Direct bank and mobile money payments</CardDescription>
                    </div>
                     <Button variant="ghost" className="text-xs font-black uppercase text-primary tracking-widest gap-2 group hover:bg-primary/5 px-6 rounded-full" asChild>
                        <Link href="/admin/revenue">
                            Full Statement <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent className="px-0 pt-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-secondary/10">
                                <tr className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">
                                    <th className="px-6 py-5">Transaction ID</th>
                                    <th className="px-6 py-5">Payer Details</th>
                                    <th className="px-6 py-5">Payment Method</th>
                                    <th className="px-6 py-5 text-center">Date & Time</th>
                                    <th className="px-6 py-5 text-right">Amount</th>
                                    <th className="px-6 py-5 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/20 font-medium">
                                {[
                                    { id: "TX-4521", user: "Abebe Bekele", method: "CBE Bank Transfer", date: "Today, 10:42 AM", amount: "ETB 1,200", status: "Completed" },
                                    { id: "TX-4520", user: "Sara Tadesse", method: "Telebirr Mobile", date: "Today, 09:15 AM", amount: "ETB 450", status: "Completed" },
                                    { id: "TX-4519", user: "Dawit Kebede", method: "M-Pesa Wallet", date: "Yesterday, 04:30 PM", amount: "ETB 1,400", status: "Pending" },
                                    { id: "TX-4518", user: "Hellen M.", method: "Abyssinia Cash", date: "Yesterday, 02:11 PM", amount: "ETB 1,200", status: "Failed" },
                                ].map((tx) => (
                                    <tr key={tx.id} className="hover:bg-muted/30 transition-all duration-200 group">
                                        <td className="px-6 py-4">
                                            <span className="font-black text-xs text-muted-foreground uppercase border-b border-muted-foreground/20">{tx.id}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-foreground text-sm leading-none group-hover:text-primary transition-colors">{tx.user}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline" className="text-[10px] font-black border-border/60 bg-white/50 px-2.5 py-0.5 uppercase tracking-tighter">
                                                    {tx.method}
                                                </Badge>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-xs font-bold text-muted-foreground tracking-tight">{tx.date}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className="font-black text-sm text-foreground tracking-tight">{tx.amount}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Badge className={`text-[10px] font-black uppercase tracking-widest border-none px-3 py-1 
                                                ${tx.status === 'Completed' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-sm shadow-emerald-500/20 text-white' : 
                                                  tx.status === 'Pending' ? 'bg-amber-500 hover:bg-amber-600 shadow-sm shadow-amber-500/20 text-white' : 
                                                  'bg-rose-500 hover:bg-rose-600 shadow-sm shadow-rose-500/20 text-white'}`}>
                                                {tx.status}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
                <div className="p-6 border-t border-border/20 bg-muted/5 flex items-center justify-between">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Showing last 4 transactions from treasury</p>
                    <Button variant="outline" className="h-8 text-[10px] font-black uppercase tracking-widest px-4 rounded-full border-border/60 group hover:border-primary/50">
                        Load More Records <ArrowDownRight className="w-3 h-3 ml-2 group-hover:translate-y-0.5 transition-transform text-primary" />
                    </Button>
                </div>
            </Card>
        </div>
    )
}
