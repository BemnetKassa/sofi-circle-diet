import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for reports
  const reportData = {
    monthlyUserGrowth: [120, 150, 180, 220, 260, 300], // Last 6 months
    planDistribution: {
        standard: 65,
        premium: 35
    },
    churnRate: "2.4%"
  };

  return NextResponse.json(reportData);
}
