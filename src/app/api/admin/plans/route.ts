import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for plans
  const plans = [
    { id: 1, name: "Standard Plan", price: 4000, features: ["Diet Plan", "Basic Support"], activeUsers: 850 },
    { id: 2, name: "Premium Plan", price: 4999, features: ["Diet Plan", "Priority Support", "Weekly Check-ins"], activeUsers: 384 },
  ];

  return NextResponse.json(plans);
}
