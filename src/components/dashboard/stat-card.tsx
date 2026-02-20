"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface StatCardProps {
    title: string
    value: string
    change?: string
    icon: LucideIcon
    color?: string
    bg?: string
    description?: string
    progress?: number
}

export function StatCard({ 
    title, 
    value, 
    change, 
    icon: Icon, 
    color = "text-primary", 
    bg = "bg-primary/10",
    description,
    progress
}: StatCardProps) {
    return (
        <Card className="border-none shadow-md overflow-hidden bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    {title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${bg} ${color}`}>
                    <Icon className="h-5 w-5" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold text-gray-800">{value}</div>
                {change && (
                    <div className="flex items-center gap-1.5 mt-2">
                        <span className={`text-xs font-black bg-green-50 px-2 py-0.5 rounded-full ${parseFloat(change) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {change}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">from last month</span>
                    </div>
                )}
                {description && (
                    <p className="text-xs text-muted-foreground mt-1 font-medium">{description}</p>
                )}
                {progress !== undefined && (
                    <div className="mt-6 h-2 w-full bg-black/5 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full ${color.replace('text-', 'bg-')} shadow-[0_0_10px_rgba(0,0,0,0.1)]`} 
                        />
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
