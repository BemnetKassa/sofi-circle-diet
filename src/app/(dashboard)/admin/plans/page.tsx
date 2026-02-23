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
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AdminPlansPage() {
    const [plans, setPlans] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchPlans() {
            try {
                const res = await fetch('/api/admin/plans')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                const mappedPlans = data.map((p: any) => ({
                    id: p.id,
                    title: p.name,
                    subTitle: p.features[0] || "Basic Plan",
                    price: `ETB ${p.price}/mo`,
                    subscribers: p.activeUsers,
                    status: "Published",
                    increase: "+5%" // mock
                }))
                setPlans(mappedPlans)
            } catch (error) {
                console.error("Failed to fetch plans", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchPlans()
    }, [])

    return (
        <div className="space-y-8 max-w-7xl">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black flex items-center gap-3">
                        <Layers className="w-8 h-8 text-primary" />
                        Plan Management
                    </h1>
                    <p className="text-muted-foreground mt-1">Configure diet plans, pricing, and features.</p>
                </div>
                
                <Button className="flex items-center gap-2 rounded-xl shadow-lg shadow-primary/20" asChild>
                    <Link href="/admin/plans/new">
                        <Plus className="w-4 h-4" /> Create New Plan
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    <div className="col-span-3 text-center py-12">Loading plans...</div>
                ) : plans.map((plan) => (
                    <Card key={plan.id} className="relative overflow-hidden border-border/60 hover:border-primary/50 transition-colors group">
                        <div className={`absolute top-0 left-0 w-1 h-full ${plan.status === 'Published' ? 'bg-primary' : 'bg-muted'}`} />
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant={plan.status === 'Published' ? 'default' : 'secondary'} className="rounded-md font-bold uppercase text-[10px] tracking-wider">
                                    {plan.status}
                                </Badge>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                            <Sparkles className="h-4 w-4" />
                                            <span className="sr-only">Open menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>Edit Plan</DropdownMenuItem>
                                        <DropdownMenuItem>View Subscribers</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-destructive">Archive Plan</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
                            <CardDescription className="font-medium">{plan.subTitle}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-2xl font-black text-primary">{plan.price}</span>
                            </div>
                            
                            <div className="flex items-center justify-between text-sm border-t border-border/40 pt-4">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Users className="w-4 h-4" />
                                    <span className="font-bold">{plan.subscribers} Active</span>
                                </div>
                                <div className="flex items-center gap-1 text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md text-xs">
                                    <ArrowUpRight className="w-3 h-3" />
                                    {plan.increase}
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 mt-6">
                                <Button variant="outline" className="w-full text-xs font-bold border-border/60">
                                    <Edit className="w-3 h-3 mr-2" /> Edit
                                </Button>
                                <Button variant="outline" className="w-full text-xs font-bold border-border/60 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30">
                                    <Trash className="w-3 h-3 mr-2" /> Archive
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
                
                {/* Add New Card Placeholder */}
                <Card className="border-dashed border-2 border-muted hover:border-primary/50 transition-colors flex flex-col items-center justify-center p-6 min-h-[300px] cursor-pointer bg-muted/5 group">
                    <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <Plus className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-muted-foreground group-hover:text-foreground">Create New Plan</h3>
                    <p className="text-sm text-center text-muted-foreground/60 mt-1 max-w-[200px]">Add a new diet package to your offerings</p>
                </Card>
            </div>
        </div>
    )
}


