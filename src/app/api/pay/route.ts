import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/models/Order';

export async function POST(req: Request) {
  try {
    console.log("Connecting to database...");
    await dbConnect();
    console.log("Database connected.");

    const body = await req.json();
    console.log("Received payment request:", body.email, body.amount);

    const { 
        email, firstName, lastName, amount, tx_ref,
        phone, age, gender, height, weight, goal, 
        dietaryPreferences, allergies, budget, planType
    } = body;

    // Create a pending order in the database
    console.log("Creating pending order...");
    await Order.create({
        firstName,
        lastName,
        email,
        phone,
        age: Number(age),
        gender,
        height: Number(height),
        weight: Number(weight),
        goal,
        dietaryPreferences,
        allergies,
        budget,
        planType: planType || 'standard',
        amount,
        tx_ref,
        status: 'pending'
    });
    console.log("Pending order created.");

    const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY;

    if (!CHAPA_SECRET_KEY) {
      console.error("Chapa Secret Key missing");
      return NextResponse.json(
        { message: 'Chapa Secret Key not found' },
        { status: 500 }
      );
    }

    console.log("Initializing Chapa transaction...");
    const chapaResponse = await fetch('https://api.chapa.co/v1/transaction/initialize', {
      method: 'POST',
      headers: {
          Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          amount: amount,
          currency: 'ETB',
          email: email,
          first_name: firstName,
          last_name: lastName,
          tx_ref: tx_ref,
          callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/pay/callback`,
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/get-plan/success`,
          customization: {
              title: 'Sofi Circle',
              description: 'Payment for your personalized nutrition plan',
          },
      }),
    });

    console.log("Chapa response status:", chapaResponse.status);
    const data = await chapaResponse.json();
    console.log("Chapa response data:", data);

    if (data.status === 'success') {
      return NextResponse.json({ url: data.data.checkout_url });
    } else {
      console.error("Chapa initialization failed:", data.message);
      return NextResponse.json(
        { message: data.message || 'Payment initialization failed' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Payment API Error:", error);
    return NextResponse.json(
      { message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
