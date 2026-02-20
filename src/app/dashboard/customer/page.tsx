"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress" // Assuming this component exists or standard HTML progress
import { Utensils, Calendar, Target, TrendingDown, Clock, ChevronRight } from "lucide-react"

export default function CustomerDashboard() {
  // Mock data
  const user = {
    name: "John Doe",
    plan: "Weight Loss",
    startDate: "Feb 15, 2026",
    currentWeight: 82,
    targetWeight: 75,
    progress: 35
  }

  const todayMeals = [
    { type: "Breakfast", name: "Oatmeal with Berries", calories: 350, protein: "12g", time: "8:00 AM" },
    { type: "Lunch", name: "Grilled Chicken Salad", calories: 450, protein: "35g", time: "1:00 PM" },
    { type: "Snack", name: "Greek Yogurt & Honey", calories: 150, protein: "10g", time: "4:00 PM" },
    { type: "Dinner", name: "Salmon with Asparagus", calories: 500, protein: "40g", time: "7:00 PM" },
  ]

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user.name} 👋</h1>
            <p className="text-muted-foreground mt-1">Here's your progress for today, Feb 20.</p>
        </div>
        <div className="flex gap-3">
             <Button variant="outline">View Full Calendar</Button>
             <Button>Log Weight</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-sm border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/10">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-500" /> Current Goal
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{user.targetWeight} kg</div>
                <p className="text-xs text-muted-foreground mt-1">
                    Target weight. Current: <span className="font-semibold text-foreground">{user.currentWeight} kg</span>
                </p>
                <div className="mt-4 h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${user.progress}%` }} />
                </div>
            </CardContent>
        </Card>

        <Card className="shadow-sm border-orange-100 dark:border-orange-900 bg-orange-50/50 dark:bg-orange-900/10">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-orange-500" /> Calories Today
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">1,450 <span className="text-sm font-normal text-muted-foreground">/ 2,000</span></div>
                <p className="text-xs text-muted-foreground mt-1 text-green-600 font-medium">
                    On track for today
                </p>
                <div className="mt-4 h-2 w-full bg-orange-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500" style={{ width: '72%' }} />
                </div>
            </CardContent>
        </Card>

        <Card className="shadow-sm border-green-100 dark:border-green-900 bg-green-50/50 dark:bg-green-900/10">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" /> Plan Status
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">Day 5 <span className="text-sm font-normal text-muted-foreground">/ 30</span></div>
                <p className="text-xs text-muted-foreground mt-1">
                    Active Plan: <span className="font-semibold text-foreground">{user.plan}</span>
                </p>
                <div className="mt-4 h-2 w-full bg-green-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '16%' }} />
                </div>
            </CardContent>
        </Card>
      </div>

      {/* Today's Meals Section */}
      <Card className="border-border/60 shadow-md">
        <CardHeader>
            <CardTitle>Today's Meals</CardTitle>
            <CardDescription>Your personalized menu for Feb 20, 2026</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                {todayMeals.map((meal, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border bg-card hover:bg-muted/30 transition-colors gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                {meal.type === 'Breakfast' && <span className="text-xl">🍳</span>}
                                {meal.type === 'Lunch' && <span className="text-xl">🥗</span>}
                                {meal.type === 'Dinner' && <span className="text-xl">🍽️</span>}
                                {meal.type === 'Snack' && <span className="text-xl">🍎</span>}
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">{meal.name}</h4>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                    <span className="bg-secondary/10 text-secondary-foreground px-2 py-0.5 rounded-full font-medium">{meal.type}</span>
                                    <span>•</span>
                                    <Clock className="w-3 h-3" /> {meal.time}
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-6 sm:text-right pl-16 sm:pl-0">
                            <div>
                                <p className="font-bold text-sm">{meal.calories} kcal</p>
                                <p className="text-xs text-muted-foreground">{meal.protein} protein</p>
                            </div>
                            <Button size="icon" variant="ghost" className="rounded-full">
                                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  )
}
