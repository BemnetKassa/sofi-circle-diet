"use client"

import { motion } from "framer-motion"
import { Calendar, ChevronRight, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Nutrition Myths You Need to Stop Believing",
    description: "Think you need to avoid carbs to lose weight? Discover common nutrition myths debunked by experts.",
    date: "Feb 20, 2026",
    category: "Nutrition",
    readingTime: "5 min read",
    image: "/pictures/DSC00653.webp", 
  },
  {
    id: 2,
    title: "How to Build a Sustainable Workout Habit",
    description: "Consistency is key. Learn the secrets to making exercise a permanent part of your daily routine.",
    date: "Feb 15, 2026",
    category: "Fitness",
    readingTime: "8 min read",
    image: "/pictures/DSC00725.webp",
  },
  {
    id: 3,
    title: "Mastering Meal Prep for a Busy Week",
    description: "Save time and eat healthier with these practical meal prep strategies and easy recipes.",
    date: "Feb 10, 2026",
    category: "Cooking",
    readingTime: "12 min read",
    image: "/pictures/DSC00730.webp",
  },
  {
    id: 4,
    title: "The Importance of Sleep for Weight Management",
    description: "Discover how your sleep patterns directly impact your metabolism and weight loss goals.",
    date: "Feb 05, 2026",
    category: "Lifestyle",
    readingTime: "6 min read",
    image: "/pictures/DSC00749.webp",
  }
]

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen pt-32 pb-24">
            <div className="container px-6 mx-auto">
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                            OUR BLOG
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                            Latest Insights for <span className="text-primary italic">Sustainable Health</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Stay informed with the latest tips, research, and expert advice on nutrition, fitness, and building a better lifestyle.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="group h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 rounded-3xl bg-secondary/5 backdrop-blur-sm">
                                <div className="aspect-video relative overflow-hidden bg-secondary/20">
                                    <Image 
                                        src={post.image} 
                                        alt={post.title} 
                                        fill 
                                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-background/80 backdrop-blur-md text-foreground px-3 py-1 rounded-full border-0 font-semibold text-xs tracking-wide">
                                            {post.category}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader className="p-8 pb-4 flex-1">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-medium uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-primary" /> {post.readingTime}
                                        </span>
                                    </div>
                                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors mb-3 leading-tight tracking-tight">
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground text-base leading-relaxed line-clamp-2">
                                        {post.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="p-8 pt-auto mt-auto border-t border-border/10 bg-secondary/5">
                                    <Button variant="ghost" className="px-0 group-hover:text-primary group-hover:translate-x-1 transition-all flex items-center gap-2 font-bold h-auto py-0">
                                        Read Full Article <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
