"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, Lock, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
       {/* Background Elements */}
       <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-[2rem] shadow-2xl overflow-hidden border border-border">
          
          {/* Left Side - Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex flex-col justify-between bg-zinc-900 p-12 text-white h-[600px] relative overflow-hidden"
          >
            {/* Visual Background */}
            <Image 
               src="/pictures/sofi1.png" 
               alt="Login Visual" 
               fill
               className="object-cover opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

            <div className="relative z-10">
              <Link href="/home" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </Link>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-4">
                 <h2 className="text-3xl font-bold">Welcome Back!</h2>
                 <p className="text-gray-300 leading-relaxed">
                   Continue your journey to a healthier lifestyle with customized meal plans and expert guidance.
                 </p>
              </div>

               <div className="space-y-3">
                  {[
                    "Access your personalized plan",
                    "Track your progress daily",
                    "Connect with nutrition experts"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="p-8 md:p-12 lg:p-16 w-full max-w-lg mx-auto"
          >
             <div className="text-center mb-10">
                <Link href="/home" className="inline-flex items-center gap-2 mb-8 lg:hidden text-muted-foreground hover:text-foreground">
                   <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                <h1 className="text-3xl font-bold mb-2">Sign In</h1>
                <p className="text-muted-foreground">Enter your credentials to access your account</p>
             </div>

             <form className="space-y-6">
                <div className="space-y-2">
                   <Label htmlFor="email">Email Address</Label>
                   <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="name@example.com" className="pl-10 h-12 rounded-xl" />
                   </div>
                </div>

                <div className="space-y-2">
                   <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="#" className="text-sm font-medium text-primary hover:underline">
                        Forgot password?
                      </Link>
                   </div>
                   <div className="relative">
                      <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <Input id="password" type="password" placeholder="••••••••" className="pl-10 h-12 rounded-xl" />
                   </div>
                </div>

                <Button className="w-full h-12 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                  Sign In
                </Button>
             </form>

             <div className="mt-8 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/get-plan" className="font-bold text-primary hover:underline">
                  Get a Plan
                </Link>
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
