"use client"

import { 
    ClipboardList, 
    Plus, 
    Edit, 
    Trash, 
    Eye, 
    Users, 
    CheckCircle, 
    BadgeCheck, 
    Layers, 
    Sparkles, 
    ArrowUpRight, 
    ArrowDown 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

import Link from "next/link"

const mockPlans = [
    { 
        id: "weight-loss", 
        title: "Weight Loss Plan", 
        subTitle: "High Protein, Low-Moderate Carb", 
        price: "ETB 1,200/mo", 
        subscribers: 245, 
        status: "Published", 
        increase: "+12%" 
    },
    { 
        id: "muscle-gain", 
        title: "Muscle Gain Plan", 
        subTitle: "High Calorie, Protein Surplus", 
        price: "ETB 1,500/mo", 
        subscribers: 189, 
        status: "Published", 
        increase: "+8%" 
    },
    { 
        id: "student-budget", 
        title: "Student Budget", 
        subTitle: "Affordable local Shiro options", 
        price: "ETB 450/mo", 
        subscribers: 542, 
        status: "Archived", 
        increase: "-2%" 
    },
    { 
        id: "professional-meal", 
        title: "Professional Quick", 
        subTitle: "Ready-to-eat Injera wraps", 
        price: "ETB 1,850/mo", 
        subscribers: 112, 
        status: "Draft", 
        increase: "+15%" 
    },
]

export default function AdminPlansPage() {
    return (
        <div className="space-y-10 max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/50">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black flex items-center gap-4 tracking-tight text-foreground underline decoration-primary/30 underline-offset-[12px] decoration-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner hover:rotate-6 transition-transform cursor-default">
                            <ClipboardList className="w-6 h-6" />
                        </div>
                        Nutrition Catalogs
                    </h1>
                    <p className="text-muted-foreground font-medium pl-16">Design and manage your global nutritional offerings.</p>
                </div>
                
                <Button className="h-12 px-8 flex items-center gap-2 font-black shadow-xl shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all rounded-xl text-white" asChild>
                    <Link href="/admin/plans/new">
                        <Plus className="w-5 h-5" /> Create New Plan
                    </Link>
                </Button>
            </div>

            {/* Plan Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockPlans.map((plan) => (
                    <Card key={plan.id} className="border-border/50 shadow-md group hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden bg-white rounded-[2rem]">
                        {/* Status Ribbon */}
                        <div className={`absolute top-0 right-0 px-6 py-2 ${
                            plan.status === 'Published' ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 
                            plan.status === 'Draft' ? 'bg-amber-500 text-white shadow-amber-500/20' : 
                            'bg-slate-500 text-white shadow-slate-500/20' 
                        } rounded-bl-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-lg z-10`}>
                            {plan.status}
                        </div>
                        
                        {plan.status === 'Published' && (
                            <div className="absolute top-[45px] left-[-35px] bg-primary/20 text-primary py-1.5 px-12 rotate-[-45deg] font-black text-[8px] uppercase tracking-[0.4em] border-y border-primary/10 shadow-sm pointer-events-none">
                                ACTIVE
                            </div>
                        )}

                        <CardHeader className="pt-12 pb-6 px-8">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-4 rounded-2xl bg-secondary/5 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-500 shadow-inner">
                                    <Layers className="w-7 h-7 text-primary" />
                                </div>
                                <Sparkles className="w-5 h-5 text-primary/20 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 animate-pulse" />
                            </div>
                            <CardTitle className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors text-foreground underline decoration-primary/5 underline-offset-4">{plan.title}</CardTitle>
                            <CardDescription className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground mt-2">{plan.subTitle}</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-8 pt-0 px-8 pb-8">
                            <div className="flex items-center justify-between p-5 bg-muted/20 rounded-3xl border border-border/10 shadow-inner group-hover:bg-white transition-colors duration-500">
                                <div>
                                    <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest mb-1.5 opacity-60">Price (ETB)</p>
                                    <p className="text-xl font-black text-foreground tracking-tighter underline decoration-primary/20 underline-offset-4">{plan.price.split('/')[0]}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest mb-1.5 opacity-60">Subscriber Base</p>
                                    <div className="flex items-center gap-2 justify-end">
                                        <p className="text-xl font-black text-foreground tracking-tighter">{plan.subscribers}</p>
                                        <Badge variant="outline" className={`text-[9px] font-black py-0 border-none px-2 rounded-full ${plan.increase.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'} flex items-center gap-0.5`}>
                                            {plan.increase.startsWith('+') ? <ArrowUpRight className="w-2.5 h-2.5" /> : <ArrowDown className="w-2.5 h-2.5" />}
                                            {plan.increase}
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button className="flex-1 font-black uppercase text-[10px] tracking-widest h-12 rounded-2xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 hover:scale-[1.02] transition-all text-white gap-2">
                                    <Edit className="w-4 h-4" /> Manage Catalog
                                </Button>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl hover:bg-muted/50 border-border/60 transition-all hover:scale-105 group-hover:border-primary/30">
                                        <Eye className="w-5 h-5 text-muted-foreground" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl hover:bg-rose-50 hover:text-rose-600 hover:border-rose-300 border-border/60 transition-all hover:scale-105 active:scale-95 group/del">
                                        <Trash className="w-5 h-5 group-hover/del:animate-bounce" />
                                    </Button> 
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
                
                {/* Empty State / Add Card */}
                <Link href="/admin/plans/new" className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] border-4 border-dashed border-border/20 bg-muted/5 hover:bg-primary/5 hover:border-primary/20 transition-all duration-500 gap-6 min-h-[420px] group/add shadow-inner">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-border/20 flex items-center justify-center shadow-2xl group-hover/add:scale-110 group-hover/add:rotate-90 transition-all duration-500">
                        <Plus className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-center space-y-2">
                        <h3 className="font-black text-xl text-foreground tracking-tight underline decoration-primary/10 underline-offset-4">Create New Plan</h3>
                        <p className="text-[11px] font-black uppercase tracking-widest text-muted-foreground max-w-[200px] mt-1 mx-auto leading-relaxed">Expand your circle catalog with a unique nutritional offering.</p>
                    </div>
                    <div className="opacity-0 group-hover/add:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
                        Quick Launch <ArrowUpRight className="w-3 h-3" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
