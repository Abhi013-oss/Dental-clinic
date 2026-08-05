'use server';

import { createContactMessageInDb } from '@/lib/services/contact.service';
import { sanitizeInput } from '@/lib/sanitize';
import { logBackendEvent } from '@/lib/logger';

export interface ContactActionPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export async function submitContactServerAction(payload: ContactActionPayload) {
  try {
    if (!payload.name || !payload.email || !payload.message) {
      return { success: false, error: 'Name, email, and message are required fields.' };
    }

    const sanitized = {
      name: sanitizeInput(payload.name),
      email: sanitizeInput(payload.email),
      phone: payload.phone ? sanitizeInput(payload.phone) : null,
      subject: payload.subject ? sanitizeInput(payload.subject) : 'General Inquiry',
      message: sanitizeInput(payload.message),
    };

    return await createContactMessageInDb(sanitized);
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Server Action Error';
    logBackendEvent('error', 'ServerAction:Contact', 'Contact action failed', { errMessage });
    return { success: false, error: 'Failed to record contact message' };
  }
}
