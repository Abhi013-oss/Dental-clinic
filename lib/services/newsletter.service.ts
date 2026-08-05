import { getSupabaseServerClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/client';
import { logBackendEvent } from '@/lib/logger';

export async function subscribeNewsletterInDb(email: string) {
  if (!isSupabaseConfigured()) {
    logBackendEvent('warn', 'NewsletterService', 'Supabase credentials not configured. Simulation mode active.');
    return {
      success: true,
      data: { id: `sim_news_${Date.now()}`, email, created_at: new Date().toISOString() },
      simulated: true,
    };
  }

  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await (supabase.from('newsletter_subscribers') as any)
      .insert({ email })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        logBackendEvent('info', 'NewsletterService', `Email ${email} is already subscribed.`);
        return { success: true, message: 'Email is already subscribed to newsletter.', alreadySubscribed: true };
      }
      logBackendEvent('warn', 'NewsletterService', 'Supabase insert error. Safe fallback engaged.', { error });
      return {
        success: true,
        data: { id: `rec_news_${Date.now()}`, email, created_at: new Date().toISOString() },
        simulated: true,
        dbError: error.message,
      };
    }

    logBackendEvent('info', 'NewsletterService', `Newsletter subscription saved in Supabase: ${data.id}`);
    return { success: true, data, simulated: false };
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Unknown database error';
    logBackendEvent('warn', 'NewsletterService', 'Exception caught. Engaging safe fallback record.', { errMessage });
    return {
      success: true,
      data: { id: `rec_news_${Date.now()}`, email, created_at: new Date().toISOString() },
      simulated: true,
      dbError: errMessage,
    };
  }
}
