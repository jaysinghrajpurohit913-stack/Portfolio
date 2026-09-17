import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";

// In-memory rate limiting: fine for a single long-lived server, but resets on
// serverless cold starts. Swap for a durable store (e.g. Upstash Redis) if this
// portfolio moves to a serverless platform and rate limiting needs to be strict.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input." }, { status: 400 });
  }

  if (parsed.data.company) {
    // Honeypot field was filled in — silently succeed without doing anything further.
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = parsed.data;

  // TODO: wire up a real email/notification provider (Resend, SendGrid, Postmark, etc.)
  // using an API key from an environment variable — never a hardcoded secret.
  // Example:
  //   await resend.emails.send({
  //     from: "portfolio@yourdomain.com",
  //     to: process.env.CONTACT_EMAIL,
  //     subject: `New message from ${name}`,
  //     text: message,
  //     replyTo: email,
  //   });
  //
  // Until a provider is configured, submissions are validated and accepted but not
  // delivered anywhere — log them server-side during development if useful:
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[contact] submission received:", { name, email, message: message.slice(0, 80) });
  }

  return NextResponse.json({ ok: true });
}
