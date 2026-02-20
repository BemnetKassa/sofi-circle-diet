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
    Database 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const settingsTabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "billing", label: "Invoices", icon: CreditCard },
    { id: "app", label: "System Config", icon: Database },
]

export default function AdminSettingsPage() {
    return (
        <div className="space-y-10 max-w-5xl mx-auto">
             {/* Page Header */}
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/50">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black flex items-center gap-3 tracking-tight">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                            <Settings className="w-6 h-6" />
                        </div>
                        Admin Settings
                    </h1>
                    <p className="text-muted-foreground font-medium">Configure your administrative workspace and app-wide preferences.</p>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex bg-muted/50 p-1 rounded-2xl border border-border/30 overflow-x-auto no-scrollbar scroll-smooth">
                {settingsTabs.map((tab) => (
                    <Button 
                        key={tab.id}
                        variant={tab.id === "profile" ? "secondary" : "ghost"} 
                        className={`rounded-xl h-11 px-6 font-bold flex gap-2 shrink-0 ${tab.id === "profile" ? 'shadow-sm' : 'text-muted-foreground'}`}
                    >
                        <tab.icon className="w-4 h-4" /> {tab.label}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="md:col-span-2 space-y-8">
                    {/* General Section */}
                    <Card className="border-border/50 shadow-md">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-xl font-black tracking-tight underline decoration-primary underline-offset-8 decoration-4">General Profile</CardTitle>
                            <CardDescription className="text-sm font-medium pt-2">Update your information as the system administrator.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-4 border-t border-border/20">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-xs uppercase font-black text-muted-foreground tracking-widest pl-1">Display Name</Label>
                                    <Input defaultValue="Admin Manager" className="h-12 rounded-xl bg-muted/30 focus-visible:ring-primary/40 border-border/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs uppercase font-black text-muted-foreground tracking-widest pl-1">Public Title</Label>
                                    <Input defaultValue="Nutrition Lead" className="h-12 rounded-xl bg-muted/30 focus-visible:ring-primary/40 border-border/50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs uppercase font-black text-muted-foreground tracking-widest pl-1">Contact Email</Label>
                                <Input defaultValue="admin@soficirclediet.com" className="h-12 rounded-xl bg-muted/30 focus-visible:ring-primary/40 border-border/50" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs uppercase font-black text-muted-foreground tracking-widest pl-1">Support Phone</Label>
                                <Input defaultValue="+251 911 223 344" className="h-12 rounded-xl bg-muted/30 focus-visible:ring-primary/40 border-border/50" />
                            </div>
                        </CardContent>
                        <CardFooter className="bg-muted/10 border-t border-border/20 py-4 flex justify-end">
                            <Button className="font-black gap-2 h-11 px-8 rounded-xl shadow-lg shadow-primary/25">
                                <Save className="w-4 h-4" /> Save Changes
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Email Settings */}
                    <Card className="border-border/50 shadow-md">
                        <CardHeader className="pb-4">
                             <CardTitle className="text-xl font-black tracking-tight">System Alerts</CardTitle>
                             <CardDescription className="text-sm font-medium pt-2">Manage how you receive alerts about system events.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-4 border-t border-border/20">
                            {[
                                { title: "New Subscribers", desc: "Get notified when someone joins the circle.", checked: true, icon: User },
                                { title: "Payment Successful", desc: "Alerts for successful transaction processing.", checked: true, icon: CreditCard },
                                { title: "Weekly Insights", desc: "Summary of app growth and user data.", checked: false, icon: BarChart3 },
                                { title: "Server Logs", desc: "Technical alerts about application health.", checked: true, icon: Database },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-muted/20 rounded-2xl border border-border/20 group hover:border-border transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors hover:scale-110">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground text-sm tracking-tight">{item.title}</p>
                                            <p className="text-xs text-muted-foreground font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                    <Switch checked={item.checked} className="data-[state=checked]:bg-primary" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Info Sidebar Area */}
                <div className="space-y-8">
                     {/* Subscription Summary */}
                     <Card className="border-border/50 shadow-md bg-primary text-white overflow-hidden relative isolate">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none -z-10"></div>
                        
                        <CardHeader>
                            <CardTitle className="text-lg font-black tracking-tight flex items-center gap-2">
                                <BadgeCheck className="w-5 h-5" /> Enterprise Account
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-0">
                            <p className="text-xs font-bold uppercase tracking-widest opacity-80">Next Renewal</p>
                            <p className="text-2xl font-black tracking-tighter">OCT 15, 2026</p>
                            <div className="pt-2">
                                <Badge className="bg-white/20 hover:bg-white/30 text-white border-transparent px-3 py-1 font-bold">Standard Billing Plan</Badge>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-black/10 py-3 mt-4">
                             <Button variant="link" className="text-white text-[10px] font-black uppercase tracking-widest opacity-80 hover:opacity-100 p-0">Manage Subscription</Button>
                        </CardFooter>
                     </Card>

                     {/* Security Summary */}
                     <Card className="border-border/50 shadow-md">
                        <CardHeader>
                            <CardTitle className="text-lg font-black tracking-tight">Login Security</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-0">
                             <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-muted/20">
                                <div className="flex items-center gap-2">
                                    <Smartphone className="w-4 h-4 text-emerald-500" />
                                    <span className="text-xs font-bold text-foreground tracking-tight">2FA Enabled</span>
                                </div>
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                             </div>
                             <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-muted/20">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Key className="w-4 h-4" />
                                    <span className="text-xs font-bold tracking-tight">Last changed 2d ago</span>
                                </div>
                                <Button variant="ghost" size="sm" className="h-6 px-2 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/5">Update</Button>
                             </div>
                        </CardContent>
                     </Card>

                     {/* Danger Zone */}
                     <Card className="border-rose-100 shadow-md bg-rose-50/50">
                        <CardHeader>
                            <CardTitle className="text-lg font-black tracking-tight text-rose-700">Danger Zone</CardTitle>
                            <CardDescription className="text-xs font-bold text-rose-600/70">Irreversible actions for your workspace.</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                             <Button variant="outline" className="w-full border-rose-200 text-rose-600 hover:bg-rose-100 hover:border-rose-300 font-bold gap-2 rounded-xl">
                                <Trash2 className="w-4 h-4" /> Deactivate Account
                             </Button>
                        </CardContent>
                     </Card>
                </div>
            </div>
        </div>
    )
}
