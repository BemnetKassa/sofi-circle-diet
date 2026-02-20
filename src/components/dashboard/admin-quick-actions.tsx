"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Activity, CreditCard } from "lucide-react"
import Link from "next/link"

export function AdminQuickActions() {
    return (
        <Card className="col-span-3 lg:col-span-2 border-border/50 shadow-md">
            <CardHeader>
                <CardTitle className="text-xl font-bold tracking-tight">Quick Actions</CardTitle>
                <CardDescription className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">Common administrative tasks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-4 border-t border-border/20">
                <Button variant="outline" className="w-full justify-start rounded-xl font-bold bg-muted/20 border-border/50 group hover:border-primary/50" asChild>
                    <Link href="/admin/users">
                        <Users className="mr-2 h-4 w-4 text-primary group-hover:scale-110 transition-transform" /> Add New User
                    </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl font-bold bg-muted/20 border-border/50 group hover:border-secondary/50" asChild>
                    <Link href="/admin/reports">
                        <Activity className="mr-2 h-4 w-4 text-secondary group-hover:scale-110 transition-transform" /> System Health
                    </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start rounded-xl font-bold bg-muted/20 border-border/50 group hover:border-emerald-500/50" asChild>
                    <Link href="/admin/revenue">
                        <CreditCard className="mr-2 h-4 w-4 text-emerald-500 group-hover:scale-110 transition-transform" /> View Transactions
                    </Link>
                </Button>
            </CardContent>

            <div className="p-6 mt-4">
                <div className="bg-primary hover:bg-primary/95 transition-all text-white rounded-[2.5rem] p-8 border border-white/10 relative overflow-hidden group shadow-xl shadow-primary/20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -ml-12 -mb-12 group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>
                    
                    <h4 className="font-black mb-3 text-xs uppercase tracking-[0.2em] relative z-10 opacity-80">Pending Approvals</h4>
                    <div className="text-5xl font-black relative z-10 tracking-tighter">14</div>
                    <p className="text-[10px] font-bold mt-3 relative z-10 opacity-70">Users waiting for curated meal plans.</p>
                    <Button size="sm" variant="secondary" className="w-full mt-6 rounded-full font-black text-[10px] uppercase tracking-widest relative z-10 shadow-lg shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 transition-all" asChild>
                        <Link href="/admin/users">Review Queue</Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}

