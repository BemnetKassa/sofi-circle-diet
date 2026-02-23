import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, firstName, lastName, amount, tx_ref } = body;

    const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY;

    if (!CHAPA_SECRET_KEY) {
      return NextResponse.json(
        { message: 'Chapa Secret Key not found' },
        { status: 500 }
      );
    }

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
              title: 'Sofi Circle Diet Plan',
              description: 'Payment for your personalized nutrition plan',
          },
      }),
    });

    const data = await chapaResponse.json();

    if (data.status === 'success') {
      return NextResponse.json({ url: data.data.checkout_url });
    } else {
      return NextResponse.json(
        { message: data.message || 'Payment initialization failed' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
