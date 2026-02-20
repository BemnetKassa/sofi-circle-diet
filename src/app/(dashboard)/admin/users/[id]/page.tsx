"use client"

import { 
    User, 
    ArrowLeft, 
    Mail, 
    Phone, 
    Calendar, 
    MapPin, 
    ClipboardList, 
    Activity, 
    CreditCard, 
    ShieldCheck, 
    ShieldAlert, 
    Download, 
    ExternalLink 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function UserDetailPage() {
    const params = useParams()
    const userId = params.id
    
    // Mock user data
    const user = {
        name: "Abebe Bekele",
        email: "abebe@example.com",
        phone: "+251 91 123 4567",
        status: "Active",
        plan: "Weight Loss",
        joined: "Feb 10, 2026",
        location: "Addis Ababa, Bole",
        dietary: "Lactose Intolerant, No Pork",
        metrics: {
            height: "178 cm",
            startWeight: "95 kg",
            currentWeight: "91 kg",
            targetWeight: "82 kg"
        }
    }

    return (
        <div className="space-y-8 max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header / Breadcrumb */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="group rounded-full bg-white shadow-sm border border-border/50" asChild>
                        <Link href="/admin/users">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-black tracking-tight">{user.name}</h1>
                            <Badge className="bg-emerald-500 hover:bg-emerald-600 gap-1 text-[10px] font-black uppercase tracking-widest border-none px-3">
                                <ShieldCheck className="w-3 h-3" /> {user.status}
                            </Badge>
                        </div>
                        <p className="text-muted-foreground mt-1 font-medium flex items-center gap-2">
                             User ID: {userId} <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span> Joined {user.joined}
                        </p>
                    </div>
                </div>
                
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-full px-6 font-bold shadow-sm flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Message
                    </Button>
                    <Button className="rounded-full px-6 font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4" /> Suspend
                    </Button>
                </div>
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Sidebar Info */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="border-border/50 shadow-md">
                        <CardContent className="p-6 text-center">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-green-600 mx-auto mb-4 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-primary/30">
                                {user.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h3 className="font-bold text-xl mb-1">{user.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4 font-bold uppercase tracking-wider text-[10px]">{user.plan} Client</p>
                            
                            <div className="space-y-4 text-left border-t border-border/30 pt-4">
                                <div className="flex items-center gap-3 text-sm font-medium">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <span>{user.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-medium">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <span>{user.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-medium">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>{user.location}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 shadow-md bg-secondary/5">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                <Activity className="w-3 h-3" /> Quick Analytics
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-sm text-muted-foreground font-medium">Weight Loss</span>
                                <span className="text-lg font-black text-primary">-4.0 kg</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded-full">
                                <div className="w-2/3 h-full bg-primary rounded-full"></div>
                            </div>
                            <p className="text-[10px] font-bold text-muted-foreground text-center uppercase">65% to target weight</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Tabs Info */}
                <div className="lg:col-span-3 space-y-6">
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="bg-muted p-1 rounded-xl h-auto mb-6">
                            <TabsTrigger value="overview" className="rounded-lg px-6 py-2.5 font-bold text-xs uppercase tracking-wider data-[state=active]:bg-white data-[state=active]:shadow-sm">Overview</TabsTrigger>
                            <TabsTrigger value="plan" className="rounded-lg px-6 py-2.5 font-bold text-xs uppercase tracking-wider data-[state=active]:bg-white data-[state=active]:shadow-sm">Current Plan</TabsTrigger>
                            <TabsTrigger value="history" className="rounded-lg px-6 py-2.5 font-bold text-xs uppercase tracking-wider data-[state=active]:bg-white data-[state=active]:shadow-sm">History</TabsTrigger>
                            <TabsTrigger value="billing" className="rounded-lg px-6 py-2.5 font-bold text-xs uppercase tracking-wider data-[state=active]:bg-white data-[state=active]:shadow-sm">Billing</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-6 animate-in fade-in-50 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/40 hover:shadow-md transition-shadow">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Current Weight</p>
                                    <p className="text-2xl font-black">{user.metrics.currentWeight}</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/40 hover:shadow-md transition-shadow">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Target Weight</p>
                                    <p className="text-2xl font-black">{user.metrics.targetWeight}</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/40 hover:shadow-md transition-shadow">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Meals Consumed</p>
                                    <p className="text-2xl font-black">42 Meals</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/40 hover:shadow-md transition-shadow">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Total Paid</p>
                                    <p className="text-2xl font-black">ETB 1,200</p>
                                </div>
                            </div>

                            <Card className="border-border/50 shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-lg">Personal Diet Details</CardTitle>
                                    <CardDescription>Special requirements for this client.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Preferences</p>
                                            <div className="flex flex-wrap gap-2">
                                                {user.dietary.split(', ').map((pref, i) => (
                                                    <Badge key={i} variant="secondary" className="px-3 py-1 font-bold text-[10px] tracking-wider uppercase border border-border">
                                                        {pref}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Activity Level</p>
                                            <p className="text-sm font-bold flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-primary" /> Sedentary / Office Worker
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-border/20">
                                        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Meal Timeline Coverage</p>
                                        <div className="flex gap-4">
                                            {["Breakfast", "Lunch", "Snack", "Dinner"].map((meal) => (
                                                <div key={meal} className="flex-1 p-4 rounded-xl border border-border bg-muted/5 flex flex-col items-center">
                                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest">{meal}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        
                        <TabsContent value="plan" className="animate-in fade-in-50 duration-500">
                             <Card className="border-border/50 shadow-md">
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div>
                                        <CardTitle className="text-lg uppercase font-black text-primary tracking-tighter">Current Plan: {user.plan}</CardTitle>
                                        <CardDescription>Active subscription managed by Admin.</CardDescription>
                                    </div>
                                    <Badge variant="outline" className="h-fit bg-primary/5 text-primary border-primary/20 font-black">PLAN_WL_01</Badge>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="p-4 rounded-xl bg-muted/10 border border-border">
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Delivery Start</p>
                                            <p className="font-bold">Feb 11, 2026</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/10 border border-border">
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Duration</p>
                                            <p className="font-bold">4 Weeks (Weekly Renewal)</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/10 border border-border">
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Plan Cost</p>
                                            <p className="font-bold">ETB 1,400 / month</p>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl border border-primary/10">
                                        <h4 className="font-bold mb-4 flex items-center gap-2">
                                            <ClipboardList className="w-4 h-4 text-primary" /> Nutrition Summary
                                        </h4>
                                        <div className="grid grid-cols-4 gap-4">
                                            <div className="text-center">
                                                <p className="text-[10px] font-black uppercase text-muted-foreground">Calories</p>
                                                <p className="text-lg font-black text-primary">1,650</p>
                                            </div>
                                            <div className="text-center border-l border-border/50">
                                                <p className="text-[10px] font-black uppercase text-muted-foreground">Protein</p>
                                                <p className="text-lg font-black">120g</p>
                                            </div>
                                            <div className="text-center border-l border-border/50">
                                                <p className="text-[10px] font-black uppercase text-muted-foreground">Carbs</p>
                                                <p className="text-lg font-black">150g</p>
                                            </div>
                                            <div className="text-center border-l border-border/50">
                                                <p className="text-[10px] font-black uppercase text-muted-foreground">Fats</p>
                                                <p className="text-lg font-black">55g</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-4">
                                        <Button className="flex-1 rounded-full font-bold shadow-lg" size="lg">Change Plan</Button>
                                        <Button variant="outline" className="flex-1 rounded-full font-bold shadow-sm" size="lg">Customize Ingredients</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

import { TrendingUp } from "lucide-react"
