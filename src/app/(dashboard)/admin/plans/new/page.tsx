"use client"

import { useState } from "react"
import { 
    ArrowLeft, 
    Upload, 
    Plus, 
    Trash2, 
    UtensilsCrossed, 
    Info, 
    Zap, 
    Dumbbell, 
    CheckCircle2, 
    Save, 
    Eye 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

export default function CreatePlanPage() {
    const [planName, setPlanName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [ingredients, setIngredients] = useState<string[]>([])
    const [newIngredient, setNewIngredient] = useState("")

    const addIngredient = () => {
        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredients([...ingredients, newIngredient])
            setNewIngredient("")
        }
    }

    const removeIngredient = (ing: string) => {
        setIngredients(ingredients.filter(i => i !== ing))
    }

    return (
        <div className="space-y-8 max-w-5xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="group rounded-full bg-white shadow-sm border border-border/50" asChild>
                        <Link href="/admin/plans">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-black tracking-tighter">Create <span className="text-primary italic">New Plan</span></h1>
                        <p className="text-muted-foreground mt-1 font-medium">Design a new nutritional journey for your clients.</p>
                    </div>
                </div>
                
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-full px-6 font-bold shadow-sm flex items-center gap-2">
                        <Eye className="w-4 h-4" /> Preview
                    </Button>
                    <Button className="rounded-full px-6 font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Save className="w-4 h-4" /> Save Draft
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {/* Main Form Information */}
                <div className="md:col-span-2 space-y-6">
                    <Card className="border-border/50 shadow-md">
                        <CardHeader>
                            <CardTitle className="text-lg">Basic Information</CardTitle>
                            <CardDescription>Name and identify this meal plan.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="plan-name" className="text-xs font-black uppercase tracking-widest text-muted-foreground">Plan Name</Label>
                                <Input 
                                    id="plan-name" 
                                    placeholder="e.g., Injera Muscle Gain" 
                                    className="h-12 border-border/50 bg-muted/10 rounded-xl focus-visible:ring-primary/20"
                                    value={planName}
                                    onChange={(e) => setPlanName(e.target.value)}
                                />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Category</Label>
                                    <Select onValueChange={setCategory}>
                                        <SelectTrigger className="h-12 border-border/50 bg-muted/10 rounded-xl">
                                            <SelectValue placeholder="Target Goal" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="weight-loss">Weight Loss</SelectItem>
                                            <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                                            <SelectItem value="maintenance">Maintenance</SelectItem>
                                            <SelectItem value="keto">Keto Friendly</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Price (ETB / Month)</Label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-sm">ETB</span>
                                        <Input 
                                            placeholder="0.00" 
                                            className="h-12 border-border/50 bg-muted/10 rounded-xl pl-12 focus-visible:ring-primary/20 font-bold"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Short Description</Label>
                                <textarea 
                                    className="w-full min-h-[100px] bg-muted/10 border border-border/50 rounded-xl p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20" 
                                    placeholder="Write a brief overview of what makes this plan unique..."
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 shadow-md">
                        <CardHeader>
                            <CardTitle className="text-lg">Macro Balance</CardTitle>
                            <CardDescription>Define the nutritional profile of this plan.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-4 gap-4">
                                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                                    <Label className="text-[10px] font-black uppercase tracking-tighter text-primary">Calories</Label>
                                    <Input placeholder="0" className="h-10 p-0 text-xl font-black bg-transparent border-0 focus-visible:ring-0" />
                                </div>
                                <div className="p-4 bg-muted/10 rounded-2xl border border-border/50">
                                    <Label className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Protein (g)</Label>
                                    <Input placeholder="0" className="h-10 p-0 text-xl font-black bg-transparent border-0 focus-visible:ring-0" />
                                </div>
                                <div className="p-4 bg-muted/10 rounded-2xl border border-border/50">
                                    <Label className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Carbs (g)</Label>
                                    <Input placeholder="0" className="h-10 p-0 text-xl font-black bg-transparent border-0 focus-visible:ring-0" />
                                </div>
                                <div className="p-4 bg-muted/10 rounded-2xl border border-border/50">
                                    <Label className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Fats (g)</Label>
                                    <Input placeholder="0" className="h-10 p-0 text-xl font-black bg-transparent border-0 focus-visible:ring-0" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    
                    <Card className="border-border/50 shadow-md">
                        <CardHeader>
                            <CardTitle className="text-lg">Ingredients & Customization</CardTitle>
                            <CardDescription>Add the building blocks of this meal plan.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex gap-2">
                                <Input 
                                    placeholder="Enter ingredient (e.g., Brown Rice, Shiro)" 
                                    className="h-12 border-border/50 bg-muted/10 rounded-xl flex-1 px-4 focus-visible:ring-primary/20"
                                    value={newIngredient}
                                    onChange={(e) => setNewIngredient(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') addIngredient(); }}
                                />
                                <Button 
                                    type="button" 
                                    className="h-12 px-6 rounded-xl font-bold gap-2"
                                    onClick={addIngredient}
                                >
                                    <Plus className="w-4 h-4" /> Add
                                </Button>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 pt-2">
                                {ingredients.length === 0 && (
                                    <p className="text-xs text-muted-foreground italic px-2">No ingredients added yet.</p>
                                )}
                                {ingredients.map((ing) => (
                                    <Badge key={ing} variant="secondary" className="px-4 py-2 font-bold text-xs uppercase rounded-full border border-border/40 gap-2 pr-2">
                                        {ing}
                                        <button onClick={() => removeIngredient(ing)} className="hover:text-destructive p-0.5 rounded-full hover:bg-destructive/10">
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Vertical Sidebar Options */}
                <div className="space-y-6">
                    <Card className="border-border/50 shadow-md">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Plan Preview</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="relative aspect-video w-full bg-muted/20 border-y border-border/40 flex flex-col items-center justify-center group cursor-pointer overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Upload className="w-10 h-10 text-muted-foreground mb-2 group-hover:scale-110 transition-transform" />
                                <p className="text-[10px] font-black uppercase text-muted-foreground">Upload Thumbnail</p>
                                <p className="text-[8px] text-muted-foreground/60 mt-1">Recommended: 1200x800px</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Published</label>
                                    <Switch />
                                </div>
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Featured</label>
                                    <Switch />
                                </div>
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Allow Customizing</label>
                                    <Switch defaultChecked />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-primary/20 bg-primary/5 shadow-md">
                        <CardContent className="p-6">
                            <h4 className="font-bold flex items-center gap-2 mb-2 text-primary">
                                <Info className="w-4 h-4" /> Quick Info
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                                Once you publish this plan, it will be visible to all current clients and can be suggested to new signups. Make sure the macro balance reflects the diet purpose.
                            </p>
                        </CardContent>
                    </Card>

                    <Button className="w-full h-14 rounded-2xl font-black uppercase text-sm tracking-widest shadow-xl shadow-primary/30 gap-3 group">
                         Publish Live <Zap className="w-4 h-4 group-hover:scale-125 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
