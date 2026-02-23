import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for users
  const users = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 5 === 0 ? 'Admin' : 'User',
    status: i % 3 === 0 ? 'Inactive' : 'Active',
    joinedAt: new Date(Date.now() - i * 86400000).toISOString(),
  }));

  return NextResponse.json(users);
}
