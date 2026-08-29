'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingFormSchema, BookingFormValues } from '@/types/booking.types';
import { servicesData } from '@/constants/services.data';
import { doctorsData } from '@/constants/doctors.data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { useToast } from '@/components/ui/toast';
import { Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GlassCard } from '@/components/shared/glass-card';
import { sanitizeInput } from '@/lib/sanitize';
import { COUNTRY_CODES } from './simple-booking-form';

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      countryCode: '+91',
      phone: '',
      serviceId: servicesData[0].id,
      doctorId: 'any-doctor',
      preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      preferredTimeSlot: '10:00 AM - 11:30 AM',
      notes: '',
      isVIPConsultation: true,
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      const fullPhone = `${data.countryCode || '+91'} ${data.phone}`;

      const sanitizedData = {
        ...data,
        fullName: sanitizeInput(data.fullName),
        email: sanitizeInput(data.email),
        phone: sanitizeInput(fullPhone),
        notes: data.notes ? sanitizeInput(data.notes) : '',
      };

      await new Promise((res) => setTimeout(res, 1200));

      showToast({
        type: 'success',
        title: 'Appointment Reserved',
        message: `Thank you, ${sanitizedData.fullName}. Our clinical coordinator will confirm your visit shortly.`,
      });

      setIsSuccess(true);
      reset();
    } catch (error: unknown) {
      showToast({
        type: 'error',
        title: 'Reservation Failed',
        message: 'Could not process appointment request. Please try again or call our reception.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const doctorOptions = [
    { value: 'any-doctor', label: 'Any Available Doctor / Specialist (Recommended)' },
    ...doctorsData.map((d) => ({
      value: d.id,
      label: `${d.name} (${d.title})`,
    })),
  ];

  if (isSuccess) {
    return (
      <GlassCard variant="standard" className="text-center p-12 space-y-6 max-w-xl mx-auto bg-white border border-slate-200 shadow-lg animate-in zoom-in-95 duration-300">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-medical-50 border border-medical-200 text-medical-600 mx-auto">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h2 className="font-sans text-3xl font-bold text-navy-900">Appointment Reserved</h2>

        <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
          Your consultation request has been submitted to our clinical team. A confirmation email has been dispatched to your email address.
        </p>

        <Button variant="gold" onClick={() => setIsSuccess(false)}>
          <span>Book Another Visit</span>
        </Button>
      </GlassCard>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Full Name *"
          placeholder="Victoria Sterling"
          error={errors.fullName?.message}
          {...register('fullName')}
        />

        <Input
          label="Email Address *"
          type="email"
          placeholder="victoria@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
          Phone Number *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-1">
            <Select
              options={COUNTRY_CODES}
              error={errors.countryCode?.message}
              {...register('countryCode')}
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              placeholder="98765 43210 / 8264171818"
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Select
          label="Select Dental Service *"
          options={servicesData.map((s) => ({ value: s.id, label: s.title }))}
          error={errors.serviceId?.message}
          {...register('serviceId')}
        />

        <Select
          label="Preferred Doctor / Specialist *"
          options={doctorOptions}
          error={errors.doctorId?.message}
          {...register('doctorId')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Preferred Date *"
          type="date"
          min={new Date().toISOString().split('T')[0]}
          error={errors.preferredDate?.message}
          {...register('preferredDate')}
        />

        <Select
          label="Preferred Time Window *"
          options={[
            { value: '09:00 AM - 10:00 AM', label: '09:00 AM - 10:00 AM' },
            { value: '10:30 AM - 11:30 AM', label: '10:30 AM - 11:30 AM' },
            { value: '11:45 AM - 12:45 PM', label: '11:45 AM - 12:45 PM' },
            { value: '02:00 PM - 03:00 PM', label: '02:00 PM - 03:00 PM' },
            { value: '03:30 PM - 04:30 PM', label: '03:30 PM - 04:30 PM' },
            { value: '05:00 PM - 06:00 PM', label: '05:00 PM - 06:00 PM' },
          ]}
          error={errors.preferredTimeSlot?.message}
          {...register('preferredTimeSlot')}
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
          Notes or Specific Concerns (Optional)
        </label>
        <textarea
          rows={4}
          placeholder="Share any dental concerns, medical history, or scheduling preferences..."
          className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600 text-navy-900"
          {...register('notes')}
        />
        {errors.notes && <p className="text-xs text-destructive">{errors.notes.message}</p>}
      </div>

      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <label className="flex items-center space-x-3 cursor-pointer select-none">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-medical-600 focus:ring-medical-600"
            {...register('isVIPConsultation')}
          />
          <span className="text-xs font-bold text-navy-900 flex items-center">
            <ShieldCheck className="h-3.5 w-3.5 text-medical-600 mr-1" /> Request Private Suite & Direct Reception Check-In
          </span>
        </label>

        <Button type="submit" variant="gold" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto font-bold text-sm">
          <Calendar className="mr-2 h-5 w-5" />
          <span>Confirm Appointment Booking</span>
        </Button>
      </div>
    </form>
  );
}
