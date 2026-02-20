"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface UserProfile {
    name: string
    plan: string
    day?: number
    totalDays?: number
    weightLost?: number
    progress: number
}

interface CustomerHeroProps {
    user: UserProfile
    onActionClick?: () => void
    onSecondaryActionClick?: () => void
}

export function CustomerHero({ user, onActionClick, onSecondaryActionClick }: CustomerHeroProps) {
    return (
        <div className="relative p-8 rounded-[2.5rem] bg-primary overflow-hidden text-white shadow-2xl shadow-primary/20">
            {/* Background Blob decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight">Welcome back, {user.name} 👋</h1>
                    <p className="opacity-80 mt-2 text-lg font-medium">Your consistency is paying off! Day {user.day || 1} of your {user.plan} plan.</p>
                    <div className="flex gap-4 mt-8">
                        <Button 
                            variant="secondary" 
                            className="rounded-full px-6 font-bold shadow-lg"
                            onClick={onActionClick}
                        >
                            Log Today's Weight
                        </Button>
                        <Button 
                            variant="outline" 
                            className="rounded-full px-6 font-bold border-white/20 hover:bg-white/10 text-white"
                            onClick={onSecondaryActionClick}
                        >
                            Full Program View
                        </Button>
                    </div>
                </div>
                
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-xl max-w-[200px] w-full">
                    <div className="text-4xl font-extrabold mb-1">{user.weightLost || 0}<span className="text-xl font-normal opacity-70">kg</span></div>
                    <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80">Lost so far</div>
                    <div className="mt-4 w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${user.progress}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-secondary" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
