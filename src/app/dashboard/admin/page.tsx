"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
    Users, 
    CreditCard, 
    Activity, 
    Search, 
    MoreHorizontal,
    ArrowUpRight,
    CheckCircle,
    XCircle,
    Clock
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "2,543", change: "+12.5%", icon: Users },
    { title: "Active Plans", value: "1,234", change: "+5.2%", icon: Activity },
    { title: "Revenue (Feb)", value: "ETB 452k", change: "+18.2%", icon: CreditCard },
  ]

  const recentSignups = [
    { id: 1, name: "Abebe Bikila", email: "abebe@example.com", plan: "Weight Loss", date: "2 mins ago", status: "pending" },
    { id: 2, name: "Sara Tadesse", email: "sara@gmail.com", plan: "Muscle Gain", date: "15 mins ago", status: "active" },
    { id: 3, name: "Dawit Kebede", email: "dawit.k@yahoo.com", plan: "Maintenance", date: "1 hour ago", status: "active" },
    { id: 4, name: "Hellen M.", email: "hellen@example.com", plan: "Weight Loss", date: "3 hours ago", status: "rejected" },
    { id: 5, name: "Yonas Alemu", email: "yonas@gmail.com", plan: "Keto Diet", date: "5 hours ago", status: "pending" },
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage users, meal plans, and system status.</p>
        </div>
        <Button>
            <ArrowUpRight className="mr-2 h-4 w-4" /> Generate Report
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, i) => (
            <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        {stat.title}
                    </CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1 text-green-600 font-medium">
                        {stat.change} from last month
                    </p>
                </CardContent>
            </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-7">
        
        {/* Recent Users Table */}
        <Card className="col-span-4 lg:col-span-5">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle>Recent Signups</CardTitle>
                        <CardDescription>Latest users who requested a plan.</CardDescription>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search users..." className="pl-8 w-[250px]" />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {/* Table Header (Visual only for now) */}
                    <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground border-b pb-2 mb-2 px-2">
                        <div className="col-span-2">User</div>
                        <div>Plan</div>
                        <div>Status</div>
                        <div className="text-right">Actions</div>
                    </div>

                    {recentSignups.map((user) => (
                        <div key={user.id} className="grid grid-cols-5 items-center p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="col-span-2 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                                    {user.name.substring(0, 2)}
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-medium leading-none">{user.name}</p>
                                    <p className="text-xs text-muted-foreground">{user.email}</p>
                                </div>
                            </div>
                            <div className="text-sm">{user.plan}</div>
                            <div>
                                <Badge 
                                    variant={user.status === 'active' ? 'default' : user.status === 'pending' ? 'secondary' : 'destructive'}
                                    className="capitalize"
                                >
                                    {user.status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                                    {user.status === 'active' && <CheckCircle className="w-3 h-3 mr-1" />}
                                    {user.status === 'rejected' && <XCircle className="w-3 h-3 mr-1" />}
                                    {user.status}
                                </Badge>
                            </div>
                            <div className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Assign Plan</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-destructive">Block User</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>

        {/* Quick Actions / Side Panel */}
        <Card className="col-span-3 lg:col-span-2">
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common admin tasks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" /> Add New User
                </Button>
                <Button variant="outline" className="w-full justify-start">
                    <Activity className="mr-2 h-4 w-4" /> System Health
                </Button>
                <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="mr-2 h-4 w-4" /> View Transactions
                </Button>
            </CardContent>

            <div className="p-6 mt-4">
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                    <h4 className="font-semibold mb-2 text-sm">Pending Approvals</h4>
                    <div className="text-3xl font-bold text-primary">14</div>
                    <p className="text-xs text-muted-foreground mt-1">Users waiting for meal plans.</p>
                    <Button size="sm" className="w-full mt-3">Review Queue</Button>
                </div>
            </div>
        </Card>
      </div>
    </div>
  )
}
