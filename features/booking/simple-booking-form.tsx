'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { simpleBookingSchema, SimpleBookingFormValues, DEFAULT_TIME_SLOTS } from '@/types/booking.types';
import { servicesData } from '@/constants/services.data';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { useToast } from '@/components/ui/toast';
import { sanitizeInput } from '@/lib/sanitize';
import { siteConfig } from '@/config/site.config';
import { Calendar, Clock, CheckCircle2, PhoneCall, MessageSquare, ShieldCheck, Lock } from 'lucide-react';

const STORAGE_KEY = 'elite_booked_slots_v1';

export function SimpleBookingForm() {
  const [bookedSlots, setBookedSlots] = React.useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [lastBooking, setLastBooking] = React.useState<{ refCode: string; data: SimpleBookingFormValues } | null>(null);
  const { showToast } = useToast();

  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setBookedSlots(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Could not parse booked slots', e);
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<SimpleBookingFormValues>({
    resolver: zodResolver(simpleBookingSchema),
    defaultValues: {
      serviceId: servicesData[0].id,
      preferredDate: todayStr,
      preferredTimeSlot: DEFAULT_TIME_SLOTS[0].time,
      fullName: '',
      email: '',
      phone: '',
    },
  });

  const selectedDate = watch('preferredDate');
  const selectedTimeSlot = watch('preferredTimeSlot');
  const selectedServiceId = watch('serviceId');

  const isSlotBooked = (date: string, time: string) => {
    return bookedSlots.includes(`${date}_${time}`);
  };

  const isSlotTimePassed = (dateStr: string, slotTimeStr: string) => {
    if (!dateStr) return false;

    // Normalize date format YYYY-MM-DD
    const selectedYMD = dateStr.split('T')[0].replaceAll('/', '-');

    const currNow = new Date();
    const currYear = currNow.getFullYear();
    const currMonth = String(currNow.getMonth() + 1).padStart(2, '0');
    const currDate = String(currNow.getDate()).padStart(2, '0');
    const currTodayYMD = `${currYear}-${currMonth}-${currDate}`;

    if (selectedYMD < currTodayYMD) return true;
    if (selectedYMD > currTodayYMD) return false;

    // Selected date is TODAY! Extract slot start time (e.g. "09:00 AM" from "09:00 AM - 10:00 AM")
    const startTimeStr = slotTimeStr.split('-')[0].trim();
    const match = startTimeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return false;

    let [_, hoursStr, minutesStr, period] = match;
    let slotHour = parseInt(hoursStr, 10);
    const slotMinute = parseInt(minutesStr, 10);

    if (period.toUpperCase() === 'PM' && slotHour < 12) {
      slotHour += 12;
    } else if (period.toUpperCase() === 'AM' && slotHour === 12) {
      slotHour = 0;
    }

    const currentHour = currNow.getHours();
    const currentMinute = currNow.getMinutes();

    if (currentHour > slotHour) return true;
    if (currentHour === slotHour && currentMinute >= slotMinute) return true;

    return false;
  };

  const handleResetForm = () => {
    reset({
      serviceId: servicesData[0].id,
      preferredDate: todayStr,
      preferredTimeSlot: DEFAULT_TIME_SLOTS[0].time,
      fullName: '',
      email: '',
      phone: '',
    });
    setIsSuccess(false);
    setLastBooking(null);
  };

  const onSubmit = async (data: SimpleBookingFormValues) => {
    const slotKey = `${data.preferredDate}_${data.preferredTimeSlot}`;

    if (isSlotTimePassed(data.preferredDate, data.preferredTimeSlot)) {
      showToast({
        type: 'error',
        title: 'Slot Expired',
        message: 'You cannot book this time slot as the time has already passed.',
      });
      return;
    }

    if (bookedSlots.includes(slotKey)) {
      showToast({
        type: 'error',
        title: 'Slot Unavailable',
        message: 'This time slot was already reserved. Please choose another time.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitized = {
        ...data,
        fullName: sanitizeInput(data.fullName),
        email: sanitizeInput(data.email),
        phone: sanitizeInput(data.phone),
      };

      // Call Backend API Route
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitized),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        throw new Error(resData.error || 'Server processing error');
      }

      // Persist slot lock
      const updatedBooked = [...bookedSlots, slotKey];
      setBookedSlots(updatedBooked);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooked));

      const refCode = resData.data?.id ? `ELITE-${resData.data.id.substring(0, 8).toUpperCase()}` : `ELITE-${Math.floor(100000 + Math.random() * 900000)}`;
      setLastBooking({ refCode, data: sanitized });

      showToast({
        type: 'success',
        title: 'Appointment Confirmed',
        message: `Reserved for ${sanitized.preferredDate} at ${sanitized.preferredTimeSlot}.`,
      });

      setIsSuccess(true);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Could not complete reservation.';
      showToast({
        type: 'error',
        title: 'Booking Error',
        message: msg,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confirmation Success Card
  if (isSuccess && lastBooking) {
    return (
      <div className="p-8 sm:p-12 text-center max-w-xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-xl space-y-6">
        <div className="h-16 w-16 rounded-full bg-medical-50 border border-medical-200 text-medical-600 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="h-10 w-10 text-medical-600" />
        </div>

        <div className="space-y-2">
          <h2 className="font-sans text-3xl font-extrabold text-navy-900">Appointment Confirmed</h2>
          <p className="text-xs text-slate-500">Booking Reference: <strong className="text-medical-600 font-mono text-sm">{lastBooking.refCode}</strong></p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3 text-xs">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Patient:</span>
            <span className="font-bold text-navy-900">{lastBooking.data.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Treatment:</span>
            <span className="font-bold text-medical-600">{servicesData.find(s => s.id === lastBooking.data.serviceId)?.title}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Reserved Date:</span>
            <span className="font-bold text-navy-900">{lastBooking.data.preferredDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Time Window:</span>
            <span className="font-bold text-emerald-600">{lastBooking.data.preferredTimeSlot}</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          Record saved to Supabase clinical database. Our team will send confirmation to <strong className="text-navy-900">{lastBooking.data.email}</strong>.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="w-full sm:w-auto">
            <Button variant="gold" size="sm" className="w-full font-bold text-xs h-11 px-5">
              <PhoneCall className="mr-2 h-4 w-4" />
              <span>Call Reception</span>
            </Button>
          </a>

          <a
            href={`https://wa.me/18008883548?text=Hi,%20I%20have%20booked%20an%20appointment%20Ref:%20${lastBooking.refCode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="outline" size="sm" className="w-full font-bold text-xs h-11 px-5">
              <MessageSquare className="mr-2 h-4 w-4 text-emerald-600" />
              <span>WhatsApp Direct</span>
            </Button>
          </a>

          <Button variant="ghost" size="sm" onClick={handleResetForm} className="font-bold text-xs h-11 px-5">
            Book Another Slot
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10 max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-md space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="font-sans text-2xl font-extrabold text-navy-900">Book Your Dental Visit</h2>
          <p className="text-xs text-slate-500 mt-1">Select your treatment, date, and preferred time slot.</p>
        </div>

        <Select
          label="Treatment Service *"
          options={servicesData.map((s) => ({
            value: s.id,
            label: `${s.title} ($${s.startingPrice.toLocaleString()}+)`,
          }))}
          error={errors.serviceId?.message}
          {...register('serviceId')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label="Preferred Date *"
            type="date"
            min={todayStr}
            error={errors.preferredDate?.message}
            {...register('preferredDate')}
          />

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Time Slot *
            </label>
            <div className="grid grid-cols-1 gap-2">
              {DEFAULT_TIME_SLOTS.map((slot) => {
                const booked = isSlotBooked(selectedDate, slot.time);
                const timePassed = isSlotTimePassed(selectedDate, slot.time);
                const isSelected = selectedTimeSlot === slot.time;
                const isDisabled = booked || timePassed;

                return (
                  <button
                    type="button"
                    key={slot.id}
                    disabled={isDisabled}
                    onClick={() => setValue('preferredTimeSlot', slot.time)}
                    className={`p-3 rounded-xl border text-xs font-bold text-left flex items-center justify-between transition-all select-none ${
                      isDisabled
                        ? 'bg-slate-100 border-slate-200 text-slate-400 opacity-60 cursor-not-allowed'
                        : isSelected
                        ? 'border-medical-600 bg-medical-50 text-medical-700 ring-2 ring-medical-600/20'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-navy-900'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Clock className={`h-3.5 w-3.5 ${isDisabled ? 'text-slate-400' : 'text-medical-600'}`} />
                      <span className={isDisabled ? 'text-slate-400 line-through decoration-slate-300' : ''}>
                        {slot.time} ({slot.period})
                      </span>
                    </div>

                    {booked ? (
                      <span className="inline-flex items-center text-[10px] font-extrabold text-rose-600 uppercase bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                        <Lock className="h-3 w-3 mr-1 text-rose-500" /> BOOKED
                      </span>
                    ) : timePassed ? (
                      <span className="inline-flex items-center text-[10px] font-extrabold text-slate-500 uppercase bg-slate-200/80 px-2 py-0.5 rounded-md border border-slate-300">
                        <Lock className="h-3 w-3 mr-1 text-slate-400" /> TIME PASSED
                      </span>
                    ) : (
                      <span className="text-[10px] font-extrabold text-emerald-600 uppercase">
                        AVAILABLE
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {errors.preferredTimeSlot && (
              <p className="text-xs text-destructive">{errors.preferredTimeSlot.message}</p>
            )}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
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

          <Input
            label="Phone Number *"
            placeholder="+1 (555) 000-0000"
            error={errors.phone?.message}
            {...register('phone')}
          />
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-medical-600 mr-1.5 shrink-0" />
            <span>Instant slot lock & 100% HIPAA confidential</span>
          </div>

          <Button
            type="submit"
            variant="gold"
            size="lg"
            isLoading={isSubmitting}
            className="w-full sm:w-auto font-bold text-sm px-8 h-14"
          >
            <Calendar className="mr-2 h-5 w-5" />
            <span>Confirm Appointment Booking</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
