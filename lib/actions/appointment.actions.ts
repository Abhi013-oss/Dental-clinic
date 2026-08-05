'use server';

import { simpleBookingSchema, SimpleBookingFormValues } from '@/types/booking.types';
import { createAppointmentInDb } from '@/lib/services/appointment.service';
import { sanitizeInput } from '@/lib/sanitize';
import { logBackendEvent } from '@/lib/logger';

export async function submitAppointmentServerAction(formData: SimpleBookingFormValues) {
  try {
    const parse = simpleBookingSchema.safeParse(formData);

    if (!parse.success) {
      return { success: false, error: 'Invalid input data provided.' };
    }

    const { fullName, email, phone, serviceId, preferredDate, preferredTimeSlot } = parse.data;

    const sanitizedPayload = {
      patient_name: sanitizeInput(fullName),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      treatment: sanitizeInput(serviceId),
      appointment_date: sanitizeInput(preferredDate),
      appointment_time: sanitizeInput(preferredTimeSlot),
    };

    return await createAppointmentInDb(sanitizedPayload);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown Server Error';
    logBackendEvent('error', 'ServerAction:Appointment', 'Server Action execution failed', { message });
    return { success: false, error: 'Failed to process appointment' };
  }
}
