import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/models/Order';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();

    // Aggregations
    const totalUsers = await Order.countDocuments({});
    
    // Revenue is sum of amount for completed orders
    const revenueUploads = await Order.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    const totalRevenue = revenueUploads[0]?.total || 0;

    // Active plans (completed orders)
    const activePlans = await Order.countDocuments({ status: 'completed' });

    // Format for dashboard
    const stats = [
      { title: "Total Users", value: totalUsers.toString(), change: "+0%", trend: "neutral" },
      { title: "Active Plans", value: activePlans.toString(), change: "+0%", trend: "neutral" },
      { title: "Total Revenue", value: `ETB ${totalRevenue.toLocaleString()}`, change: "+0%", trend: "neutral" },
    ];

    const recentSignupsRaw = await Order.find({})
      .sort({ createdAt: -1 })
      .limit(5);

    const recentSignups = recentSignupsRaw.map((order: any) => ({
      id: order._id.toString(),
      name: `${order.firstName} ${order.lastName}`,
      email: order.email,
      plan: order.planType || 'Standard',
      date: new Date(order.createdAt).toLocaleDateString(), 
      status: order.status
    }));

    return NextResponse.json({ stats, recentSignups });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
