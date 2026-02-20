"use client"

import { 
    Settings, 
    User, 
    Bell, 
    Shield, 
    CreditCard, 
    Mail, 
    Globe, 
    Smartphone, 
    Moon, 
    CheckCircle2, 
    Save, 
    Trash2, 
    Key, 
    Laptop, 
    Database,
    BadgeCheck,
    BarChart3,
    Sparkles,
    ArrowRight,
    ChevronRight,
    Search,
    Lock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const settingsTabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "billing", label: "Invoices", icon: CreditCard },
    { id: "app", label: "System Config", icon: Database },
]

export default function AdminSettingsPage() {
    return (
        <div className="space-y-10 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
             {/* Page Header */}
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/50">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black flex items-center gap-4 tracking-tight text-foreground underline decoration-primary/30 underline-offset-[12px] decoration-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner hover:rotate-12 transition-transform cursor-pointer">
                            <Settings className="w-6 h-6" />
                        </div>
                        Admin Settings
                    </h1>
                    <p className="text-muted-foreground font-medium pl-16">Configure your administrative workspace and app-wide preferences.</p>
                </div>
                
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-11 px-6 rounded-xl font-bold border-border/60 hover:bg-muted/30 transition-all active:scale-95">Reset</Button>
                    <Button className="h-11 px-8 rounded-xl font-black shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all text-white">Save All Changes</Button>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex bg-muted/50 p-1.5 rounded-[1.5rem] border border-border/30 overflow-x-auto no-scrollbar scroll-smooth shadow-inner">
                {settingsTabs.map((tab) => (
                    <Button 
                        key={tab.id}
                        variant={tab.id === "profile" ? "secondary" : "ghost"} 
                        className={`rounded-2xl h-11 px-8 font-black flex gap-2 shrink-0 transition-all duration-300 uppercase tracking-widest text-[10px]
                            ${tab.id === "profile" ? 'bg-white shadow-md text-primary' : 'text-muted-foreground hover:bg-white/50 hover:text-foreground'}`}
                    >
                        <tab.icon className={`w-4 h-4 ${tab.id === "profile" ? 'text-primary' : 'text-muted-foreground'}`} /> {tab.label}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* General Section */}
                    <Card className="border-border/50 shadow-md bg-white overflow-hidden group">
                        <CardHeader className="pb-6 border-b border-border/10">
                            <CardTitle className="text-xl font-black tracking-tight flex items-center gap-3 group-hover:text-primary transition-colors">
                                <User className="w-5 h-5" /> General Profile
                            </CardTitle>
                            <CardDescription className="text-[10px] font-black uppercase tracking-wider text-muted-foreground mt-2">Update your information as the system administrator (Sofi-Circle Context).</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8 pt-8 px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <Label className="text-[10px] uppercase font-black text-muted-foreground tracking-widest pl-1">Display Name</Label>
                                    <Input defaultValue="Admin Manager" className="h-12 rounded-xl bg-muted/20 focus-visible:ring-primary/40 border-border/50 font-bold px-4 hover:border-primary/30 transition-colors" />
                                </div>
                                <div className="space-y-3">
                                    <Label className="text-[10px] uppercase font-black text-muted-foreground tracking-widest pl-1">Public Title (English/Amharic)</Label>
                                    <Input defaultValue="Nutrition Lead / የአመጋገብ መሪ" className="h-12 rounded-xl bg-muted/20 focus-visible:ring-primary/40 border-border/50 font-bold px-4 hover:border-primary/30 transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Label className="text-[10px] uppercase font-black text-muted-foreground tracking-widest pl-1">Primary Email Contact</Label>
                                <Input defaultValue="admin@soficirclediet.com" className="h-12 rounded-xl bg-muted/20 focus-visible:ring-primary/40 border-border/50 font-bold px-4 hover:border-primary/30 transition-colors" />
                            </div>
                            <div className="space-y-3 pb-2">
                                <Label className="text-[10px] uppercase font-black text-muted-foreground tracking-widest pl-1">Support Hotline (ETB Context)</Label>
                                <Input defaultValue="+251 911 223 344" className="h-12 rounded-xl bg-muted/20 focus-visible:ring-primary/40 border-border/50 font-bold px-4 hover:border-primary/30 transition-colors" />
                            </div>
                        </CardContent>
                        <CardFooter className="bg-muted/5 border-t border-border/20 py-5 flex justify-end px-8">
                            <Button className="font-black gap-2 h-11 px-8 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all text-white">
                                <Save className="w-4 h-4" /> Save Local Changes
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Email Settings */}
                    <Card className="border-border/50 shadow-md bg-white overflow-hidden">
                        <CardHeader className="pb-6 border-b border-border/10">
                             <CardTitle className="text-xl font-black tracking-tight flex items-center gap-3">
                                <Bell className="w-5 h-5 text-primary" /> System Alerts
                             </CardTitle>
                             <CardDescription className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Manage how you receive real-time notifications about user activity.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5 pt-8 px-8 bg-white">
                            {[
                                { title: "New Subscribers", desc: "Get notified when someone joins the circle.", checked: true, icon: User },
                                { title: "Payment Successful", desc: "Alerts for successful transaction processing (Telebirr/CBE).", checked: true, icon: CreditCard },
                                { title: "App Performance", desc: "Weekly summary of app growth and user metrics.", checked: false, icon: BarChart3 },
                                { title: "Security Thresholds", desc: "Technical alerts about unauthorized login attempts.", checked: true, icon: Database },
                            ].map((item, i) => (
                                <div key={item.title} className="flex items-center justify-between p-5 bg-muted/10 rounded-[1.5rem] border border-border/10 group hover:border-primary/20 hover:bg-white transition-all duration-300 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-11 h-11 rounded-2xl bg-white shadow-inner border border-border/40 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all group-hover:scale-110 group-hover:rotate-6">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-black text-foreground text-[13px] tracking-tight">{item.title}</p>
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5 leading-none">{item.desc}</p>
                                        </div>
                                    </div>
                                    <Switch checked={item.checked} className="data-[state=checked]:bg-primary h-6 w-11 shadow-inner" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Info Sidebar Area */}
                <div className="space-y-8">
                     {/* Subscription Summary */}
                     <Card className="border-border/50 shadow-xl bg-black text-white overflow-hidden relative isolate group">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none -z-10 group-hover:bg-primary/30 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none -z-10"></div>
                        
                        <CardHeader className="pb-4">
                            <CardTitle className="text-lg font-black tracking-tight flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md">
                                    <BadgeCheck className="w-5 h-5 text-primary" />
                                </div>
                                Enterprise Admin
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-0">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-2">Next Renewal Date</p>
                                <p className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">OCTOBER 15, 2026</p>
                            </div>
                            
                            <div className="space-y-3 pt-2">
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/40">
                                    <span>Plan Capacity</span>
                                    <span>72% Used</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
                                    <div className="h-full w-[72%] bg-primary rounded-full shadow-lg shadow-primary/40"></div>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col gap-2">
                                <Badge className="bg-white/10 hover:bg-white/20 text-white border-white/10 px-4 py-2 font-black text-[10px] uppercase tracking-widest justify-center">
                                    Standard Billing: Yearly
                                </Badge>
                                <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5 text-[10px] font-black uppercase tracking-widest h-10 rounded-xl border border-white/10 group/btn">
                                    View Invoices <ChevronRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Danger Zone */}
                    <Card className="border-rose-500/20 shadow-md bg-rose-50/30 overflow-hidden">
                        <CardHeader className="pb-4 border-b border-rose-500/10">
                            <CardTitle className="text-rose-600 text-sm font-black uppercase tracking-widest flex items-center gap-2">
                                <Trash2 className="w-4 h-4" /> Primary Overrides
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            <p className="text-[11px] font-bold text-rose-700 leading-relaxed uppercase tracking-tight">
                                CAUTION: Modification of global system variables may affect live user experience for current subscribers.
                            </p>
                            <Button variant="outline" className="w-full h-11 border-rose-500/30 text-rose-600 hover:bg-rose-500 hover:text-white font-black uppercase text-[10px] tracking-widest transition-all rounded-xl">
                                System Purge Mode
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Quick Access Sidebar */}
                    <div className="p-8 rounded-[2rem] bg-muted/40 border border-border/50 space-y-6">
                        <div className="flex items-center gap-3">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <h4 className="text-xs font-black uppercase tracking-widest">Admin Help</h4>
                        </div>
                        <div className="space-y-4">
                            <Link href="/admin/reports" className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group">
                                Analytics Policy <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/admin/users" className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group">
                                Permissions Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/admin/settings" className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group">
                                GDPR/Cloud Safety <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
