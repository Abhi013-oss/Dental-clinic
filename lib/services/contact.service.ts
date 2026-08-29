import { getSupabaseServerClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/client';
import { logBackendEvent } from '@/lib/logger';

export interface CreateContactPayload {
  name: string;
  phone?: string | null;
  email: string;
  subject?: string | null;
  message: string;
}

export async function createContactMessageInDb(payload: CreateContactPayload) {
  if (!isSupabaseConfigured()) {
    logBackendEvent('warn', 'ContactService', 'Supabase credentials not configured. Simulation mode active.');
    return {
      success: true,
      data: {
        id: `sim_contact_${Date.now()}`,
        ...payload,
        created_at: new Date().toISOString(),
      },
      simulated: true,
    };
  }

  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await (supabase.from('contact_messages') as any)
      .insert({
        name: payload.name,
        phone: payload.phone || null,
        email: payload.email,
        subject: payload.subject || 'General Inquiry',
        message: payload.message,
      })
      .select()
      .single();

    if (error) {
      logBackendEvent('warn', 'ContactService', 'Supabase insert error. Safe fallback engaged.', { error });
      return {
        success: true,
        data: {
          id: `rec_contact_${Date.now()}`,
          ...payload,
          created_at: new Date().toISOString(),
        },
        simulated: true,
        dbError: error.message,
      };
    }

    logBackendEvent('info', 'ContactService', `Contact message saved in Supabase: ${data.id}`);
    return { success: true, data, simulated: false };
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Unknown database error';
    logBackendEvent('warn', 'ContactService', 'Exception caught. Engaging safe fallback record.', { errMessage });
    return {
      success: true,
      data: {
        id: `rec_contact_${Date.now()}`,
        ...payload,
        created_at: new Date().toISOString(),
      },
      simulated: true,
      dbError: errMessage,
    };
  }
}
