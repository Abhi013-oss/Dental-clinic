import { getSupabaseServerClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/client';
import { Database } from '@/types/database.types';
import { logBackendEvent } from '@/lib/logger';

export type CreateAppointmentPayload = Database['public']['Tables']['appointments']['Insert'];

export async function createAppointmentInDb(payload: CreateAppointmentPayload) {
  if (!isSupabaseConfigured()) {
    logBackendEvent('warn', 'AppointmentService', 'Supabase credentials not configured. Simulation mode active.');
    return {
      success: true,
      data: {
        id: `sim_${Date.now()}`,
        ...payload,
        status: 'Pending' as const,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      simulated: true,
    };
  }

  try {
    const supabase = getSupabaseServerClient();
    
    const insertPayload = {
      patient_name: payload.patient_name,
      phone: payload.phone,
      email: payload.email,
      age: payload.age || null,
      gender: payload.gender || null,
      treatment: payload.treatment,
      preferred_doctor: payload.preferred_doctor || 'First Available Specialist',
      appointment_date: payload.appointment_date,
      appointment_time: payload.appointment_time,
      reason_for_visit: payload.reason_for_visit || null,
      additional_notes: payload.additional_notes || null,
      status: 'Pending',
    };

    // Attempt 1: Insert with select
    const { data, error } = await (supabase.from('appointments') as any)
      .insert(insertPayload)
      .select();

    if (!error && data && data.length > 0) {
      logBackendEvent('info', 'AppointmentService', `Appointment created successfully in Supabase: ${data[0].id}`);
      return { success: true, data: data[0], simulated: false };
    }

    // Attempt 2: If SELECT policy blocked .select(), insert directly without returning row
    const directRes = await (supabase.from('appointments') as any).insert(insertPayload);

    if (!directRes.error) {
      logBackendEvent('info', 'AppointmentService', `Appointment inserted successfully directly into Supabase.`);
      return {
        success: true,
        data: { id: `REC_${Math.floor(100000 + Math.random() * 900000)}`, ...insertPayload },
        simulated: false,
      };
    }

    logBackendEvent('error', 'AppointmentService', 'Failed to insert appointment into Supabase', { error: directRes.error || error });
    return {
      success: false,
      error: directRes.error?.message || error?.message || 'Database insertion error',
      simulated: false,
    };
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Unknown database error';
    logBackendEvent('error', 'AppointmentService', 'Exception caught during appointment insertion', { errMessage });
    return {
      success: false,
      error: errMessage,
      simulated: false,
    };
  }
}
