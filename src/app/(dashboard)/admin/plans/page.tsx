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

const mockPlans = [
    { 
        id: "weight-loss", 
        title: "Weight Loss Plan", 
        subTitle: "High Protein, Low Carb", 
        price: "$19.99/mo", 
        subscribers: 245, 
        status: "Published", 
        increase: "+12%" 
    },
    { 
        id: "muscle-gain", 
        title: "Muscle Gain Plan", 
        subTitle: "High Protein, Calorie Surplus", 
        price: "$29.99/mo", 
        subscribers: 189, 
        status: "Published", 
        increase: "+8%" 
    },
    { 
        id: "student-budget", 
        title: "Student Budget", 
        subTitle: "Affordable local options", 
        price: "Free / $9.99/mo", 
        subscribers: 542, 
        status: "Archived", 
        increase: "-2%" 
    },
    { 
        id: "professional-meal", 
        title: "Professional Quick", 
        subTitle: "No cook options", 
        price: "$24.99/mo", 
        subscribers: 112, 
        status: "Draft", 
        increase: "+15%" 
    },
]

export default function AdminPlansPage() {
    return (
        <div className="space-y-8 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black flex items-center gap-3">
                        <ClipboardList className="w-8 h-8 text-primary" />
                        Meal Plans
                    </h1>
                    <p className="text-muted-foreground mt-1">Design and manage your nutritional offerings.</p>
                </div>
                
                <Button className="h-12 px-8 flex items-center gap-2 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
                    <Plus className="w-5 h-5" /> New Plan
                </Button>
            </div>

            {/* Plan Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockPlans.map((plan) => (
                    <Card key={plan.id} className="border-border/50 shadow-md group hover:border-primary/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                        <div className={`absolute top-0 right-0 p-3 ${plan.status === 'Published' ? 'text-emerald-500 bg-emerald-50' : plan.status === 'Draft' ? 'text-amber-500 bg-amber-50' : 'text-slate-400 bg-slate-50' } rounded-bl-2xl font-black text-[10px] uppercase tracking-widest border-l border-b border-border/20 shadow-sm`}>
                            {plan.status}
                        </div>
                        
                        {plan.status === 'Published' && (
                            <div className="absolute top-10 left-[-30px] bg-primary/20 text-primary py-1 px-10 rotate-[-45deg] font-black text-[8px] uppercase tracking-[0.3em] border-y border-primary/10">
                                ACTIVE
                            </div>
                        )}

                        <CardHeader className="pt-10">
                            <div className="flex justify-between items-start mb-2">
                                <div className="p-3 rounded-2xl bg-secondary/10 group-hover:bg-primary/10 transition-colors">
                                    <Layers className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                            <CardTitle className="text-xl font-black tracking-tight group-hover:text-primary transition-colors text-foreground">{plan.title}</CardTitle>
                            <CardDescription className="font-medium text-sm text-muted-foreground">{plan.subTitle}</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6 pt-0">
                            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl border border-border/20">
                                <div>
                                    <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest mb-1">Pricing Model</p>
                                    <p className="text-lg font-bold text-foreground">{plan.price}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest mb-1">Subscribers</p>
                                    <div className="flex items-center gap-2 justify-end">
                                        <p className="text-lg font-bold text-foreground">{plan.subscribers}</p>
                                        <span className={`text-[10px] font-black ${plan.increase.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'} flex items-center`}>
                                            {plan.increase.startsWith('+') ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                                            {plan.increase}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button className="flex-1 font-bold group-hover:bg-primary/90 gap-2">
                                    <Edit className="w-4 h-4" /> Edit Details
                                </Button>
                                <Button variant="outline" size="icon" className="shrink-0 rounded-lg hover:bg-muted/50 transition-colors">
                                    <Eye className="w-5 h-5 text-muted-foreground" />
                                </Button>
                                <Button variant="outline" size="icon" className="shrink-0 rounded-lg hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-colors">
                                    <Trash className="w-5 h-5" />
                                </Button> 
                            </div>
                        </CardContent>
                    </Card>
                ))}
                
                {/* Empty State / Add Card */}
                <button className="flex flex-col items-center justify-center p-8 rounded-[2rem] border-2 border-dashed border-border/50 bg-secondary/5 hover:bg-secondary/10 hover:border-primary/30 transition-all duration-300 gap-4 min-h-[350px]">
                    <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center shadow-sm">
                        <Plus className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-lg text-foreground">Create New Plan</h3>
                        <p className="text-sm text-muted-foreground max-w-[200px] mt-1 mx-auto">Expand your nutrition catalog with a unique plan.</p>
                    </div>
                </button>
            </div>
        </div>
    )
}
