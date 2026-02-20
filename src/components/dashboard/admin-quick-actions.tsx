"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Activity, CreditCard, Sparkles, ArrowRight, Zap, ShieldCheck, TrendingUp } from "lucide-react"
import Link from "next/link"

export function AdminQuickActions() {
    return (
        <Card className="col-span-3 lg:col-span-2 border-border/50 shadow-md bg-white overflow-hidden group">
            <CardHeader className="pb-6 border-b border-border/10 bg-muted/5">
                <CardTitle className="text-xl font-black tracking-tight flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary fill-primary/10 animate-pulse" /> Quick Actions
                </CardTitle>
                <CardDescription className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">Direct system entry points</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
                {[
                    { label: "User Management", icon: Users, href: "/admin/users", color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "System Insights", icon: Activity, href: "/admin/reports", color: "text-emerald-600", bg: "bg-emerald-50" },
                    { label: "Financial Records", icon: CreditCard, href: "/admin/revenue", color: "text-amber-600", bg: "bg-amber-50" },
                    { label: "Security Audit", icon: ShieldCheck, href: "/admin/settings", color: "text-rose-600", bg: "bg-rose-50" }
                ].map((action, i) => (
                    <Button 
                        key={action.label} 
                        variant="outline" 
                        className="w-full justify-start h-14 rounded-2xl font-black uppercase text-[10px] tracking-[0.15em] border-border/40 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all group/btn shadow-sm"
                        asChild
                    >
                        <Link href={action.href}>
                            <div className={`p-2 rounded-lg ${action.bg} mr-3 group-hover/btn:scale-110 transition-transform`}>
                                <action.icon className={`h-4 w-4 ${action.color}`} />
                            </div>
                            {action.label}
                            <ArrowRight className="ml-auto w-3 h-3 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                        </Link>
                    </Button>
                ))}
            </CardContent>

            <div className="p-6 relative">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent"></div>
                <div className="bg-primary shadow-xl shadow-primary/20 rounded-[2.5rem] p-8 text-white relative overflow-hidden group/queue active:scale-95 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover/queue:bg-white/30 transition-colors duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/30 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none"></div>
                    
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-white/80 animate-spin-slow" />
                        <h4 className="font-black uppercase tracking-[0.25em] text-[10px] text-white/80 relative z-10">Verification Queue</h4>
                    </div>
                    
                    <div className="flex items-end gap-3 mb-2">
                        <div className="text-6xl font-black tracking-tighter relative z-10 leading-none underline decoration-secondary/40 underline-offset-8">14</div>
                        <div className="flex flex-col mb-1 pb-1">
                             <TrendingUp className="w-5 h-5 text-emerald-400" />
                             <span className="text-[10px] font-black text-white/60">+3 Today</span>
                        </div>
                    </div>
                    
                    <p className="text-[11px] font-bold text-white/70 mt-4 relative z-10 leading-relaxed max-w-[180px]">
                        Approvals required for custom <span className="text-white">ETB Nutrition Plan</span> subscribers.
                    </p>
                    
                    <Button size="lg" className="w-full mt-6 rounded-2xl font-black uppercase text-[10px] tracking-widest bg-white text-primary hover:bg-secondary hover:text-white transition-all shadow-2xl relative z-10 group/sub" asChild>
                        <Link href="/admin/users">
                            Process Review Queue <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/sub:translate-x-1.5 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}
