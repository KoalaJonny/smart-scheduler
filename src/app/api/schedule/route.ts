import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, phone, time } = await req.json();

  // 🔧 Mock OpenAI-generated response
  const aiMessage = `Hi ${name}, this is SmartScheduler confirming your appointment at ${time}. We’ll contact you shortly at ${phone}.`;

  // 🔧 Mock Twilio SMS sending (not real)
  const fakeTwilioLog = `📤 SMS sent to ${phone}: "${aiMessage}"`;

  console.log(fakeTwilioLog);

  return NextResponse.json({ message: aiMessage });
}
