"use client"

import { useState } from "react"
import { 
    Users, 
    Search, 
    Filter, 
    MoreHorizontal, 
    Download, 
    UserPlus, 
    Mail, 
    ShieldCheck, 
    ShieldAlert, 
    Ban, 
    CheckCircle2 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

const mockUsers = [
    { id: 1, name: "Abebe Bekele", email: "abebe@example.com", status: "Active", plan: "Weight Loss", joined: "Feb 10, 2026" },
    { id: 2, name: "Helen Tesfaye", email: "helen@example.com", status: "Pending", plan: "Muscle Gain", joined: "Feb 15, 2026" },
    { id: 3, name: "Samuel Hailu", email: "samuel@example.com", status: "Inactive", plan: "Student Budget", joined: "Jan 20, 2026" },
    { id: 4, name: "Lydia Mekonnen", email: "lydia@example.com", status: "Active", plan: "Professional Meal", joined: "Feb 5, 2026" },
    { id: 5, name: "Dawit Amare", email: "dawit@example.com", status: "Active", plan: "Weight Loss", joined: "Feb 18, 2026" },
]

export default function AdminUsersPage() {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className="space-y-8 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black flex items-center gap-3">
                        <Users className="w-8 h-8 text-primary" />
                        User Management
                    </h1>
                    <p className="text-muted-foreground mt-1">Manage all your clients and their subscriptions.</p>
                </div>
                
                <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2 rounded-xl">
                        <Download className="w-4 h-4" /> Export
                    </Button>
                    <Button className="flex items-center gap-2 rounded-xl shadow-lg shadow-primary/20">
                        <UserPlus className="w-4 h-4" /> Add User
                    </Button>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div className="md:col-span-2 lg:col-span-3 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                        placeholder="Search users by name, email..." 
                        className="pl-10 h-11 bg-muted/20 border-border/40 rounded-xl"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Button variant="outline" className="h-11 flex items-center gap-2 rounded-xl">
                    <Filter className="w-4 h-4" /> Filter Status
                </Button>
                <Button variant="outline" className="h-11 flex items-center gap-2 rounded-xl">
                    <Mail className="w-4 h-4" /> Message Selected
                </Button>
            </div>

            {/* Table Area */}
            <Card className="border-border/50 shadow-md">
                <CardHeader className="pb-0">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                        <CardTitle className="text-xl font-bold">Client List</CardTitle>
                        <Badge variant="secondary" className="font-bold border border-border/50 h-fit bg-white px-4 py-1">Total: {mockUsers.length} Users</Badge>
                    </div>
                </CardHeader>
                <CardContent className="px-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-secondary/10 border-y border-border/30">
                                <tr className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">
                                    <th className="px-6 py-4">User Details</th>
                                    <th className="px-6 py-4">Current Plan</th>
                                    <th className="px-6 py-4 text-center">Joined Date</th>
                                    <th className="px-6 py-4 text-center">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/20 font-medium">
                                {mockUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-muted/30 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs border border-primary/10 shadow-inner group-hover:scale-110 transition-transform">
                                                    {user.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-foreground text-sm tracking-tight">{user.name}</p>
                                                    <p className="text-[10px] text-muted-foreground mt-0.5 font-bold uppercase tracking-wider">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className="font-bold text-[10px] tracking-wider uppercase border-primary/20 bg-primary/5">{user.plan}</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-xs font-bold text-muted-foreground">{user.joined}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {user.status === 'Active' ? (
                                                <Badge className="bg-emerald-500 hover:bg-emerald-600 gap-1 text-[10px] font-black uppercase tracking-widest px-3">
                                                    <CheckCircle2 className="w-3 h-3" /> {user.status}
                                                </Badge>
                                            ) : user.status === 'Pending' ? (
                                                <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50 gap-1 text-[10px] font-black uppercase tracking-widest px-3">
                                                    <ShieldAlert className="w-3 h-3" /> {user.status}
                                                </Badge>
                                            ) : (
                                                <Badge variant="destructive" className="gap-1 text-[10px] font-black uppercase tracking-widest px-3">
                                                    <Ban className="w-3 h-3" /> {user.status}
                                                </Badge>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="group-hover:bg-white rounded-lg transition-colors">
                                                        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48">
                                                    <DropdownMenuLabel>User Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem asChild className="gap-2 cursor-pointer">
                                                        <Link href={`/admin/users/${user.id}`}>View Full Profile</Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="gap-2 cursor-pointer">Assign Different Plan</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive gap-2 cursor-pointer font-bold">Block Access</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
