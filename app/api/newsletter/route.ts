import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { subscribeNewsletterInDb } from '@/lib/services/newsletter.service';
import { sanitizeInput } from '@/lib/sanitize';
import { logBackendEvent } from '@/lib/logger';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parseResult = newsletterSchema.safeParse(body);

    if (!parseResult.success) {
      logBackendEvent('warn', 'API:Newsletter', 'Validation failure during newsletter subscription');
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const sanitizedEmail = sanitizeInput(parseResult.data.email);
    const result = await subscribeNewsletterInDb(sanitizedEmail);

    return NextResponse.json(
      {
        success: true,
        message: result.message || 'Successfully subscribed to ÉLITE Clinical Journal.',
        data: result.data,
        simulated: result.simulated,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Internal Server Error';
    logBackendEvent('error', 'API:Newsletter', 'Unhandled exception in POST /api/newsletter', { errMessage });

    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
