"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ChevronRight } from "lucide-react"

interface Meal {
    type: string
    name: string
    calories: number
    protein: string
    time: string
}

interface CustomerTodayMealsProps {
    meals: Meal[]
    dateStr: string
}

export function CustomerTodayMeals({ meals, dateStr }: CustomerTodayMealsProps) {
    const getMealIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case 'breakfast': return '🍳'
            case 'lunch': return '🥗'
            case 'dinner': return '🍽️'
            case 'snack': return '🍎'
            default: return '🥣'
        }
    }

    return (
        <Card className="border-border/60 shadow-md">
            <CardHeader>
                <CardTitle>Today's Meals</CardTitle>
                <CardDescription>Your personalized menu for {dateStr}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {meals.map((meal, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border bg-card hover:bg-muted/30 transition-colors gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl">{getMealIcon(meal.type)}</span>
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
    )
}
