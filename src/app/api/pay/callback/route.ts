import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const tx_ref = searchParams.get('tx_ref');

    if (!tx_ref) {
        return NextResponse.json({ message: 'Transaction reference is missing' }, { status: 400 });
    }

    const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY;
    if (!CHAPA_SECRET_KEY) {
        return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    // Verify the transaction with Chapa
    const verifyResponse = await fetch(`https://api.chapa.co/v1/transaction/verify/${tx_ref}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${CHAPA_SECRET_KEY}`,
        },
    });

    const verifyData = await verifyResponse.json();

    if (verifyData.status === 'success') {
        // TODO: Update database to mark order as paid
        // const order = await db.order.update({ ... })
        
        return NextResponse.json({ 
            message: 'Payment verified successfully',
            data: verifyData.data 
        });
    } else {
        return NextResponse.json({ message: 'Payment verification failed' }, { status: 400 });
    }

  } catch (error: any) {
    console.error('Payment verification error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
    // Handle Chapa Webhook here
    try {
        const body = await req.json();
        
        // Chapa sends the transaction details in the body
        // You should verify the signature if Chapa provides one to ensure it's from them
        
        if (body.status === 'success' && body.tx_ref) {
             // TODO: Update database
             console.log(`Payment successful for tx_ref: ${body.tx_ref}`);
             return NextResponse.json({ status: 'ok' });
        }

        return NextResponse.json({ status: 'ignored' });
    } catch (error) {
        return NextResponse.json({ status: 'error' }, { status: 500 });
    }
}
