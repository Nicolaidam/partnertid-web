import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_SEGMENT_ID;

  if (!apiKey || !segmentId) {
    return NextResponse.json(
      { message: "Server is missing Resend configuration." },
      { status: 500 }
    );
  }

  let payload: { email?: string } = {};
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = String(payload.email ?? "").trim().toLowerCase();

  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ message: "Email is invalid." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    segments: [{ id: segmentId }],
  });

  if (error) {
    const normalizedMessage = error.message.toLowerCase();
    if (normalizedMessage.includes("already") && normalizedMessage.includes("exist")) {
      const { error: segmentError } = await resend.contacts.segments.add({
        email,
        segmentId,
      });

      if (segmentError) {
        return NextResponse.json({ message: segmentError.message }, { status: 400 });
      }

      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    return NextResponse.json({ message: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true, data });
}
