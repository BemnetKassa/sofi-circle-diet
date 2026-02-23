import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/models/Order';

// Disable caching for admin API routes
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    // Fetch orders, sorted by newest first
    const orders = await Order.find({}).sort({ createdAt: -1 });

    const users = orders.map((order: any) => ({
      id: order._id.toString(),
      name: `${order.firstName} ${order.lastName}`,
      email: order.email,
      role: 'Client', 
      status: order.status === 'completed' ? 'Active' : order.status === 'pending' ? 'Pending' : 'Inactive',
      plan: order.planType || 'Standard',
      joinedAt: order.createdAt // Let the frontend format the date
    }));

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
