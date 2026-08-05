'use server';

import { subscribeNewsletterInDb } from '@/lib/services/newsletter.service';
import { sanitizeInput } from '@/lib/sanitize';
import { logBackendEvent } from '@/lib/logger';

export async function subscribeNewsletterServerAction(email: string) {
  try {
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    const sanitizedEmail = sanitizeInput(email);
    return await subscribeNewsletterInDb(sanitizedEmail);
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Server Action Error';
    logBackendEvent('error', 'ServerAction:Newsletter', 'Newsletter action failed', { errMessage });
    return { success: false, error: 'Failed to record newsletter subscription' };
  }
}
