import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/models/Order';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    
    // We don't have a Plan model yet, we infer plans from Orders
    // Count users per plan type
    const planCounts = await Order.aggregate([
        { $match: { status: 'completed' } },
        { $group: { _id: "$planType", count: { $sum: 1 } } }
    ]);

    // Map the counts to predefined plan types or dynamic ones
    // Since we hardcoded plan names in frontend, let's stick to a structure that supports it
    // Default plans if no orders exist yet
    const defaultPlans = [
        { id: "standard", name: "Standard Plan", price: 4000, features: ["Personalized Diet", "E-mail Support"] },
        { id: "premium", name: "Premium Plan", price: 4999, features: ["Personalized Diet", "Chat Support", "Weekly Review"] }
    ];

    const plansWithCounts = defaultPlans.map(plan => {
        const found = planCounts.find(p => p._id === plan.id);
        return {
            ...plan,
            activeUsers: found ? found.count : 0
        };
    });

    return NextResponse.json(plansWithCounts);
  } catch (error) {
    console.error("Plans API Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
