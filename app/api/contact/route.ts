import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createContactMessageInDb } from '@/lib/services/contact.service';
import { sanitizeInput } from '@/lib/sanitize';
import { logBackendEvent } from '@/lib/logger';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parseResult = contactSchema.safeParse(body);

    if (!parseResult.success) {
      const fieldErrors: Record<string, string> = {};
      parseResult.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });

      logBackendEvent('warn', 'API:Contact', 'Validation failure during contact message submission', { fieldErrors });

      return NextResponse.json(
        { success: false, error: 'Validation failed', errors: fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parseResult.data;

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : null,
      subject: subject ? sanitizeInput(subject) : 'General Inquiry',
      message: sanitizeInput(message),
    };

    const result = await createContactMessageInDb(sanitizedData);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully', data: result.data, simulated: result.simulated },
      { status: 201 }
    );
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Internal Server Error';
    logBackendEvent('error', 'API:Contact', 'Unhandled exception in POST /api/contact', { errMessage });

    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
