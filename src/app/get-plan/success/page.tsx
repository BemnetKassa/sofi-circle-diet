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
    // Retrieve data from sessionStorage
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

  // Generate 3-month transformation prediction based on AI analysis and user data
  const getTransformationPrediction = () => {
    if (!userData || !aiAnalysis) return null
    
    const weight = parseFloat(userData.weight)
    const goal = userData.goal
    const bodyType = aiAnalysis.bodyType
    const fitnessLevel = aiAnalysis.fitnessLevel
    
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
    <div className="min-h-screen py-12 px-4 bg-muted/20 flex flex-col items-center justify-center">
      
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <Card className="border-primary/20 shadow-xl overflow-hidden">
          
          {/* Top Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

          <CardContent className="p-6 space-y-8">
            
            {/* Success Header */}
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto"
              >
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold"
              >
                Welcome, {userData?.firstName || "there"}! 🎉
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground"
              >
                Your personalized nutrition plan is being prepared based on AI analysis
              </motion.p>
            </div>

            {/* AI Analysis Section */}
            {aiAnalysis && !loading && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-6"
              >
                {/* Current Body Condition */}
                <div className="rounded-xl border bg-muted/30 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-semibold">Your Current Body Condition</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Body Type</p>
                        <p className="font-medium">{aiAnalysis.bodyType || "Analyzing..."}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Fitness Level</p>
                        <p className="font-medium">{aiAnalysis.fitnessLevel || "Analyzing..."}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Body Fat Level</p>
                        <p className="font-medium">{aiAnalysis.fatLevel || "Analyzing..."}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Muscle Development</p>
                        <p className="font-medium">{aiAnalysis.muscleDevelopment || "Analyzing..."}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="rounded-xl border bg-primary/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-semibold">AI-Powered Recommendations</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Apple className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold">Nutrition Guidelines</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p><strong>Daily Calories:</strong> {aiAnalysis.recommendedCalories || "Calculating..."}</p>
                        <p><strong>Daily Protein:</strong> {aiAnalysis.recommendedProtein || "Calculating..."}g</p>
                        <div className="bg-background/50 rounded-lg p-3 mt-2">
                          <p className="text-xs text-muted-foreground">{aiAnalysis.mealRecommendation || "Personalized meal plan will be provided in your complete plan"}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Dumbbell className="w-5 h-5 text-orange-600" />
                        <h3 className="font-semibold">Workout Guidelines</h3>
                      </div>
                      <div className="bg-background/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">{aiAnalysis.workoutRecommendation || "Personalized workout plan will be provided in your complete plan"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3-Month Transformation Prediction */}
                {transformation && (
                  <div className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-6 h-6 text-primary" />
                      <h2 className="text-xl font-semibold">Your 3-Month Transformation Potential</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                          <Target className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold">Expected Weight Change</p>
                            <p className="text-sm text-muted-foreground">{transformation.weightChange}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Heart className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold">Body Composition</p>
                            <p className="text-sm text-muted-foreground">{transformation.bodyFatChange}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold">Muscle & Strength</p>
                            <p className="text-sm text-muted-foreground">{transformation.muscleChange}</p>
                            <p className="text-sm text-muted-foreground">{transformation.strengthGain}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold">Energy & Appearance</p>
                            <p className="text-sm text-muted-foreground">{transformation.energyLevel}</p>
                            <p className="text-sm text-muted-foreground">{transformation.appearance}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4 mt-2">
                        <p className="text-sm font-semibold mb-2">Key Milestones:</p>
                        <ul className="space-y-1">
                          {transformation.keyMilestones.map((milestone, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">✓</span>
                              {milestone}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Summary */}
                <div className="rounded-xl bg-muted/20 p-5">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">AI Assessment Summary</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {aiAnalysis.summary || `Based on your profile as a ${userData?.age}-year-old ${userData?.gender} with ${userData?.goal.replace("_", " ")} goals, we've created a personalized plan. With consistent effort, you can achieve significant transformation in 3 months.`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-muted-foreground">Loading your AI analysis...</p>
              </div>
            )}

            {/* Next Steps */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="rounded-xl border border-secondary/20 bg-secondary/10 p-6"
            >
              <div className="flex items-start gap-3">
                <Clock3 className="w-5 h-5 mt-0.5 text-secondary-foreground shrink-0" />
                <div className="space-y-2">
                  <p className="font-semibold">
                    What Happens Next?
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Our nutritionist will verify your payment receipt</li>
                    <li>• Your AI analysis will be reviewed and refined</li>
                    <li>• A detailed 3-month personalized plan will be created</li>
                    <li>• You'll receive your complete plan within 24-48 hours</li>
                    <li>• Follow-up support and adjustments included</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </CardContent>

          <CardFooter className="justify-center gap-4 pb-6">
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/">
                Return Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}