import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for dashboard stats
  const stats = [
    { title: "Total Users", value: "2,543", change: "+12.5%", trend: "up" },
    { title: "Active Plans", value: "1,234", change: "+5.2%", trend: "up" },
    { title: "Revenue (Feb)", value: "ETB 452k", change: "+18.2%", trend: "up" },
  ];

  const recentSignups = [
    { id: 1, name: "Abebe Bikila", email: "abebe@example.com", plan: "Weight Loss", date: "2 mins ago", status: "pending" },
    { id: 2, name: "Sara Tadesse", email: "sara@gmail.com", plan: "Muscle Gain", date: "15 mins ago", status: "active" },
    { id: 3, name: "Dawit Kebede", email: "dawit.k@yahoo.com", plan: "Maintenance", date: "1 hour ago", status: "active" },
    { id: 4, name: "Hellen M.", email: "hellen@example.com", plan: "Weight Loss", date: "3 hours ago", status: "rejected" },
    { id: 5, name: "Yonas Alemu", email: "yonas@gmail.com", plan: "Keto Diet", date: "5 hours ago", status: "pending" },
  ];

  return NextResponse.json({ stats, recentSignups });
}
