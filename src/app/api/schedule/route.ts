import { NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const fromNumber = process.env.TWILIO_PHONE_NUMBER!;
const toNumber = process.env.MY_PHONE_NUMBER!;

const client = twilio(accountSid, authToken);

export async function POST(req: Request) {
  try {
    const { name, dateTime, message } = await req.json();

    const smsBody = `📅 New SmartScheduler Request\nName: ${name}\nTime: ${dateTime}\nMessage: ${message}`;

    const twilioRes = await client.messages.create({
      body: smsBody,
      from: fromNumber,
      to: toNumber,
    });

    console.log('Twilio response:', twilioRes.sid);

    return NextResponse.json({ success: true, sid: twilioRes.sid });
  } catch (error) {
    console.error('SMS error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send SMS' }, { status: 500 });
  }
}