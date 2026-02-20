"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Clock, CheckCircle, XCircle, MoreHorizontal } from "lucide-react"
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuLabel, 
    DropdownMenuItem, 
    DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu"

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
                    <div className="grid grid-cols-5 text-sm font-medium text-muted-foreground border-b pb-2 mb-2 px-2">
                        <div className="col-span-2">User</div>
                        <div>Plan</div>
                        <div>Status</div>
                        <div className="text-right">Actions</div>
                    </div>

                    {signups.map((user) => (
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
    )
}
