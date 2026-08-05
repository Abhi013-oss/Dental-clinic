import { z } from 'zod';

export const simpleBookingSchema = z.object({
  serviceId: z.string().min(1, 'Please select a treatment'),
  doctorId: z.string().optional().default('any-doctor'),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTimeSlot: z.string().min(1, 'Please select a time slot'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number (at least 10 digits)'),
  age: z.string().optional(),
  gender: z.string().optional(),
  reasonForVisit: z.string().optional(),
  notes: z.string().optional(),
  emergencyContact: z.string().optional(),
  isVIPConsultation: z.boolean().optional(),
  consent: z.boolean().optional(),
});

export type SimpleBookingFormValues = z.infer<typeof simpleBookingSchema>;
export const bookingFormSchema = simpleBookingSchema;
export type BookingFormValues = SimpleBookingFormValues;

export interface TimeSlotOption {
  id: string;
  time: string;
  period: 'Morning' | 'Afternoon' | 'Evening';
  available?: boolean;
}

export const DEFAULT_TIME_SLOTS: TimeSlotOption[] = [
  { id: '1', time: '09:00 AM - 10:00 AM', period: 'Morning', available: true },
  { id: '2', time: '10:30 AM - 11:30 AM', period: 'Morning', available: true },
  { id: '3', time: '11:45 AM - 12:45 PM', period: 'Morning', available: true },
  { id: '4', time: '02:00 PM - 03:00 PM', period: 'Afternoon', available: true },
  { id: '5', time: '03:30 PM - 04:30 PM', period: 'Afternoon', available: true },
  { id: '6', time: '05:00 PM - 06:00 PM', period: 'Evening', available: true },
];

export const availableTimeSlots = DEFAULT_TIME_SLOTS;
