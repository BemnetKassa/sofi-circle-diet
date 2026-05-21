"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  CheckCircle,
  Clock3,
  TrendingUp,
  Target,
  Dumbbell,
  Apple,
  Activity,
  Sparkles,
  Award,
  Calendar,
  Heart,
  Zap,
  Brain,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

interface AIAnalysis {
  bodyType: string
  fitnessLevel: string
  fatLevel: string
  muscleDevelopment: string
  recommendedCalories: string
  recommendedProtein: string
  mealRecommendation: string
  workoutRecommendation: string
  summary: string
}

interface UserData {
  firstName: string
  lastName: string
  age: string
  gender: string
  height: string
  weight: string
  goal: string
  exerciseLevel: string
}

export default function SubmissionSuccessPage() {
  const [aiAnalysis, setAiAnalysis] = useState<AIAnalysis | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedAnalysis = sessionStorage.getItem("geminiAnalysis")
    const storedUserData = sessionStorage.getItem("userFormData")
    
    if (storedAnalysis) {
      setAiAnalysis(JSON.parse(storedAnalysis))
    }
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
    }
    setLoading(false)
  }, [])

  const getTransformationPrediction = () => {
    if (!userData || !aiAnalysis) return null
    
    const weight = parseFloat(userData.weight)
    const goal = userData.goal
    
    let predictions = {
      weightChange: "",
      bodyFatChange: "",
      muscleChange: "",
      energyLevel: "",
      strengthGain: "",
      appearance: "",
      keyMilestones: [] as string[],
    }
    
    if (goal === "lose_fat") {
      predictions.weightChange = `Lose 6-10 kg (from ${weight}kg to ${(weight - 8).toFixed(1)}-${(weight - 6).toFixed(1)}kg)`
      predictions.bodyFatChange = "Reduce body fat by 5-8%"
      predictions.muscleChange = "Maintain existing muscle mass while losing fat"
      predictions.energyLevel = "Energy levels will increase significantly"
      predictions.strengthGain = "Strength may initially decrease slightly, then stabilize"
      predictions.appearance = "More defined muscles, leaner physique, better posture"
      predictions.keyMilestones = [
        "Month 1: Initial weight loss of 2-3kg, reduced bloating",
        "Month 2: Noticeable difference in clothing fit, increased energy",
        "Month 3: Visible muscle definition, improved confidence"
      ]
    } 
    else if (goal === "gain_muscle") {
      predictions.weightChange = `Gain 3-5kg lean muscle (from ${weight}kg to ${(weight + 4).toFixed(1)}kg)`
      predictions.bodyFatChange = "Maintain or slightly reduce body fat (2-3% reduction)"
      predictions.muscleChange = "Build 3-5kg of lean muscle mass"
      predictions.energyLevel = "Improved workout performance and recovery"
      predictions.strengthGain = "Increase strength by 20-30% in major lifts"
      predictions.appearance = "More muscular physique, broader shoulders, better proportions"
      predictions.keyMilestones = [
        "Month 1: Initial strength gains, better workout recovery",
        "Month 2: Visible muscle growth, improved endurance",
        "Month 3: Significant muscle definition, increased confidence"
      ]
    }
    else {
      predictions.weightChange = `Maintain ${weight}kg while improving body composition`
      predictions.bodyFatChange = "Reduce body fat by 2-4%, increase lean mass"
      predictions.muscleChange = "Improve muscle tone and definition"
      predictions.energyLevel = "Better overall energy and wellbeing"
      predictions.strengthGain = "Gradual strength improvement"
      predictions.appearance = "Leaner, more toned appearance"
      predictions.keyMilestones = [
        "Month 1: Improved eating habits, better energy",
        "Month 2: Noticeable tone improvement, better sleep",
        "Month 3: Sustainable healthy lifestyle established"
      ]
    }
    
    return predictions
  }

  const transformation = getTransformationPrediction()

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col items-center justify-center">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl relative z-10"
      >
        {/* Success Header Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-3">
            Welcome, {userData?.firstName || "there"}! 👋
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your personalized nutrition plan is being prepared using advanced AI analysis
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="space-y-6">
          
          {/* Current Body Condition - Glassmorphic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-sm bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-xl">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Current Body Condition</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground mb-1">Body Type</p>
                  <p className="text-lg font-semibold text-primary">{aiAnalysis?.bodyType || "Analyzing..."}</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground mb-1">Fitness Level</p>
                  <p className="text-lg font-semibold">{aiAnalysis?.fitnessLevel || "Analyzing..."}</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground mb-1">Body Fat Level</p>
                  <p className="text-lg font-semibold">{aiAnalysis?.fatLevel || "Analyzing..."}</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground mb-1">Muscle Development</p>
                  <p className="text-lg font-semibold">{aiAnalysis?.muscleDevelopment || "Analyzing..."}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Recommendations - Split Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Nutrition Card */}
            <div className="backdrop-blur-sm bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/20 rounded-xl">
                    <Apple className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-semibold">Nutrition Plan</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-muted-foreground">Daily Calories</span>
                  <span className="text-2xl font-bold text-primary">{aiAnalysis?.recommendedCalories || "Calculating..."}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-muted-foreground">Daily Protein</span>
                  <span className="text-2xl font-bold text-primary">{aiAnalysis?.recommendedProtein || "Calculating..."}</span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mt-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {aiAnalysis?.mealRecommendation || "Personalized meal plan will be provided in your complete plan"}
                  </p>
                </div>
              </div>
            </div>

            {/* Workout Card */}
            <div className="backdrop-blur-sm bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/20 rounded-xl">
                    <Dumbbell className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-semibold">Workout Plan</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {aiAnalysis?.workoutRecommendation || "Personalized workout plan will be provided in your complete plan"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3-Month Transformation - Premium Card */}
          {transformation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border-2 border-primary/20 shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary to-secondary px-6 py-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-white" />
                  <h2 className="text-xl font-semibold text-white">Your 3-Month Transformation Blueprint</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl">
                    <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">Expected Change</p>
                    <p className="text-sm font-semibold">{transformation.weightChange}</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl">
                    <Heart className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">Body Composition</p>
                    <p className="text-sm font-semibold">{transformation.bodyFatChange}</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl">
                    <Zap className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">Muscle & Strength</p>
                    <p className="text-sm font-semibold">{transformation.muscleChange}</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-slate-900/50 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">Energy & Appearance</p>
                    <p className="text-sm font-semibold">{transformation.energyLevel}</p>
                  </div>
                </div>
                
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-5">
                  <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    Key Milestones
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {transformation.keyMilestones.map((milestone, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-xs text-muted-foreground">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* AI Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="backdrop-blur-sm bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 shadow-xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-xl">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">AI Assessment Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {aiAnalysis?.summary || `Based on your profile as a ${userData?.age}-year-old ${userData?.gender} with ${userData?.goal?.replace("_", " ")} goals, we've created a personalized plan. With consistent effort, you can achieve significant transformation in 3 months.`}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Next Steps - Timeline Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="bg-slate-100 dark:bg-slate-800 px-6 py-4">
              <div className="flex items-center gap-3">
                <Clock3 className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">What Happens Next?</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  "Our nutritionist will verify your payment receipt",
                  "Your AI analysis will be reviewed and refined",
                  "A detailed 3-month personalized plan will be created",
                  "You'll receive your complete plan within 24-48 hours",
                  "Follow-up support and adjustments included"
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {step}
                    </span>
                    {index < 4 && <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-4 pt-4"
          >
            <Button asChild variant="outline" className="rounded-full px-8 hover:scale-105 transition-transform">
              <Link href="/">Return Home</Link>
            </Button>
            <Button asChild className="rounded-full px-8 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}