"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Brain, Sparkles, Activity, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

interface AIAnalyzingModalProps {
  isOpen: boolean
}

export function AIAnalyzingModal({ isOpen }: AIAnalyzingModalProps) {
  const [analysisStep, setAnalysisStep] = useState(0)
  
  const analysisMessages = [
    "Analyzing your body composition...",
    "Calculating optimal nutrition plan...",
    "Designing personalized workout routine...",
    "Generating 3-month transformation blueprint...",
    "Finalizing your AI-powered recommendations..."
  ]

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setAnalysisStep((prev) => {
          if (prev < analysisMessages.length - 1) {
            return prev + 1
          }
          return prev
        })
      }, 2000)
      
      return () => clearInterval(interval)
    } else {
      setAnalysisStep(0)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative max-w-md w-full mx-4"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center shadow-2xl border border-primary/30">
              {/* Animated Background Effects */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
              </div>

              {/* Animated Icon */}
              <div className="relative mb-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="inline-flex"
                >
                  <Brain className="w-16 h-16 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Sparkles className="w-8 h-8 text-secondary" />
                </motion.div>
              </div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-white mb-2"
              >
                AI Analysis in Progress
              </motion.h3>

              {/* Animated Progress Bar */}
              <div className="relative mt-6 mb-4">
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((analysisStep + 1) / analysisMessages.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Current Analysis Step */}
              <motion.div
                key={analysisStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4"
              >
                <div className="flex items-center justify-center gap-2 text-slate-300">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <p className="text-sm">{analysisMessages[analysisStep]}</p>
                </div>
              </motion.div>

              {/* Loading Dots */}
              <div className="flex justify-center gap-1 mt-6">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -5, 0],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="w-2 h-2 bg-primary rounded-full"
                  />
                ))}
              </div>

              {/* Tip Message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xs text-slate-500 mt-6"
              >
                Please don't close this window while we analyze your data
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}