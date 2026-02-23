import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for revenue
  const revenueData = {
    totalRevenue: 452000,
    monthlyRevenue: [40000, 45000, 55000, 60000, 75000, 82000], // Last 6 months in ETB
    currency: "ETB"
  };

  return NextResponse.json(revenueData);
}
