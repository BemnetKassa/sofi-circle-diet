"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Clock, CheckCircle, XCircle, MoreHorizontal, ArrowRight, UserPlus, UserCheck } from "lucide-react"
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuLabel, 
    DropdownMenuItem, 
    DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface Signup {
    id: number
    name: string
    email: string
    plan: string
    date: string
    status: 'pending' | 'active' | 'rejected'
}

interface AdminRecentSignupsProps {
    signups: Signup[]
}

export function AdminRecentSignups({ signups }: AdminRecentSignupsProps) {
    return (
        <Card className="col-span-4 lg:col-span-5 border-border/50 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-6">
                <div className="space-y-1">
                    <CardTitle className="text-xl font-bold tracking-tight">Recent Signups</CardTitle>
                    <CardDescription className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">Latest users who joined the circle.</CardDescription>
                </div>
                <Button variant="ghost" className="text-xs font-black uppercase text-primary tracking-widest gap-1 group" asChild>
                    <Link href="/admin/users">
                        View All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </CardHeader>
            <CardContent className="px-0 pt-0">
                <div className="px-6 mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Filter signups..." className="pl-10 w-full md:w-[300px] h-11 bg-muted/20 border-border/50 rounded-xl focus-visible:ring-primary/30" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-secondary/10 border-y border-border/30">
                            <tr className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">
                                <th className="px-6 py-4">User Details</th>
                                <th className="px-6 py-4">Plan Selected</th>
                                <th className="px-6 py-4">Verification</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/20 font-medium">
                            {signups.map((user) => (
                                <tr key={user.id} className="hover:bg-muted/30 transition-all duration-200 group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <Link href={`/admin/users/${user.id}`} className="group/avatar relative isolate">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs border border-primary/10 shadow-inner group-hover/avatar:scale-110 transition-transform">
                                                    {user.name.split(' ').map((n: string) => n[0]).join('')}
                                                </div>
                                            </Link>
                                            <div>
                                                <Link href={`/admin/users/${user.id}`} className="font-bold text-foreground text-sm hover:text-primary transition-colors leading-none decoration-primary/20 hover:underline underline-offset-4 decoration-2">
                                                    {user.name}
                                                </Link>
                                                <p className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-tighter opacity-70">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge variant="outline" className="text-[10px] font-bold border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors uppercase tracking-wider">
                                            {user.plan}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.status === 'active' ? (
                                            <Badge className="bg-emerald-500 hover:bg-emerald-600 gap-1 text-[10px] font-black uppercase tracking-widest border-none px-3">
                                                <UserCheck className="w-3 h-3" /> Verified
                                            </Badge>
                                        ) : user.status === 'pending' ? (
                                            <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50 gap-1 text-[10px] font-black uppercase tracking-widest px-3">
                                                <Clock className="w-3 h-3" /> Still Pending
                                            </Badge>
                                        ) : (
                                            <Badge variant="destructive" className="gap-1 text-[10px] font-black uppercase tracking-widest border-none px-3">
                                                 Rejected
                                            </Badge>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="group-hover:bg-white rounded-lg transition-colors h-8 w-8">
                                                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-48">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem className="gap-2">View Profile</DropdownMenuItem>
                                                <DropdownMenuItem className="gap-2">Assign Plan</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-destructive gap-2">Block User</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
            <div className="p-6 border-t border-border/20 bg-muted/10 rounded-b-xl flex items-center justify-between">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Showing 5 users from history</p>
                <Button variant="outline" size="sm" className="h-8 rounded-full font-bold text-xs gap-2 border-border/60 hover:border-primary/40 group">
                    <UserPlus className="w-3 h-3" /> View Growth Chart
                </Button>
            </div>
        </Card>
    )
}

