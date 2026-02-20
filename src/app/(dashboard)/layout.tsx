"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { motion } from "framer-motion"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#fafbfc]">
      {/* Sidebar - fixed and handles its own layout/mobile-logic */}
      <DashboardSidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden pt-20 lg:pt-0">
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 md:p-10"
        >
            {/* Background Blob decoration - subtler for dashboard */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 -mr-40 -mt-20"></div>
            
            {children}
        </motion.div>
      </main>
    </div>
  )
}
