'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingFormSchema, BookingFormValues, availableTimeSlots } from '@/types/booking.types';
import { servicesData } from '@/constants/services.data';
import { doctorsData } from '@/constants/doctors.data';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { useToast } from '@/components/ui/toast';
import { sanitizeInput } from '@/lib/sanitize';
import { siteConfig } from '@/config/site.config';
import {
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

const STEPS = [
  { number: 1, title: 'Treatment' },
  { number: 2, title: 'Specialist' },
  { number: 3, title: 'Date & Time' },
  { number: 4, title: 'Patient Info' },
  { number: 5, title: 'Review' },
];

export function MultiStepBooking() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [bookingReference, setBookingReference] = React.useState('');
  const { showToast } = useToast();

  const tomorrow = new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      serviceId: servicesData[0].id,
      doctorId: 'any-doctor',
      preferredDate: tomorrow,
      preferredTimeSlot: '10:30 AM - 11:30 AM',
      fullName: '',
      email: '',
      phone: '',
      age: '',
      gender: 'Male',
      reasonForVisit: '',
      notes: '',
      emergencyContact: '',
      isVIPConsultation: true,
      consent: false,
    },
  });

  const selectedServiceId = watch('serviceId');
  const selectedDoctorId = watch('doctorId');
  const selectedDate = watch('preferredDate');
  const selectedTimeSlot = watch('preferredTimeSlot');
  const watchAll = watch();

  const selectedService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];
  const selectedDoctor = doctorsData.find((d) => d.id === selectedDoctorId) || { name: 'First Available Specialist', title: 'Clinical Team' };

  const handleNextStep = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await trigger('serviceId');
    } else if (currentStep === 2) {
      isValid = await trigger('doctorId');
    } else if (currentStep === 3) {
      isValid = await trigger(['preferredDate', 'preferredTimeSlot']);
    } else if (currentStep === 4) {
      isValid = await trigger(['fullName', 'email', 'phone', 'reasonForVisit', 'consent']);
    }

    if (isValid || currentStep <= 3) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      const sanitized = {
        ...data,
        fullName: sanitizeInput(data.fullName),
        email: sanitizeInput(data.email),
        phone: sanitizeInput(data.phone),
        reasonForVisit: data.reasonForVisit ? sanitizeInput(data.reasonForVisit) : '',
        notes: data.notes ? sanitizeInput(data.notes) : '',
      };

      await new Promise((res) => setTimeout(res, 1200));

      const refCode = `ELITE-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingReference(refCode);

      showToast({
        type: 'success',
        title: 'Appointment Reserved',
        message: `Reference Code: ${refCode}. Our coordinator will contact you shortly.`,
      });

      setIsCompleted(true);
    } catch (e) {
      showToast({
        type: 'error',
        title: 'Booking Error',
        message: 'Could not complete reservation. Please try again or call our hotline.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetBooking = () => {
    reset();
    setCurrentStep(1);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <GlassCard variant="standard" className="p-8 sm:p-12 text-center max-w-2xl mx-auto bg-white border border-slate-200 shadow-xl space-y-6 animate-in zoom-in-95 duration-300">
        <div className="h-16 w-16 rounded-full bg-medical-50 border border-medical-200 text-medical-600 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-medical-600">Frontend Reservation Confirmed</span>
          <h2 className="font-sans text-3xl font-extrabold text-navy-900">Appointment Reserved</h2>
          <p className="text-xs text-slate-500">Reference Number: <strong className="text-medical-600 font-mono text-sm">{bookingReference}</strong></p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3 text-xs">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Patient Name:</span>
            <span className="font-bold text-navy-900">{watchAll.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Treatment:</span>
            <span className="font-bold text-medical-600">{selectedService.title}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Specialist:</span>
            <span className="font-bold text-navy-900">{selectedDoctor.name}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Date & Time:</span>
            <span className="font-bold text-navy-900">{selectedDate} • {selectedTimeSlot}</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          A confirmation email has been dispatched to <strong className="text-navy-900">{watchAll.email}</strong>.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="w-full sm:w-auto">
            <Button variant="gold" size="sm" className="w-full font-bold text-xs">
              <PhoneCall className="mr-2 h-4 w-4" />
              <span>Call Clinic Concierge</span>
            </Button>
          </a>

          <a
            href={`https://wa.me/919910066721?text=Hello%20Jawahar%20Dental%20Hospital,%20I%20have%20reserved%20appointment%20${bookingReference}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="outline" size="sm" className="w-full font-bold text-xs">
              <MessageSquare className="mr-2 h-4 w-4 text-emerald-600" />
              <span>WhatsApp Direct</span>
            </Button>
          </a>

          <Button variant="ghost" size="sm" onClick={handleResetBooking} className="font-bold text-xs">
            Book Another Visit
          </Button>
        </div>
      </GlassCard>
    );
  }

  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-3">
          <span>STEP {currentStep} OF 5: {STEPS[currentStep - 1].title}</span>
          <span>{Math.round((currentStep / 5) * 100)}% COMPLETED</span>
        </div>

        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-medical-600 h-full transition-all duration-500"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>
      </div>

      <GlassCard variant="standard" className="p-6 sm:p-10 bg-white border border-slate-200 shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="font-sans text-2xl font-bold text-navy-900">Select Clinical Treatment</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {servicesData.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setValue('serviceId', service.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer select-none space-y-2 ${
                        isSelected
                          ? 'border-medical-600 bg-medical-50/70 shadow-sm ring-2 ring-medical-600/20'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-navy-900 truncate">{service.title}</span>
                        {isSelected && <CheckCircle2 className="h-4 w-4 text-medical-600 shrink-0" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="font-sans text-2xl font-bold text-navy-900">Select Specialist Doctor</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div
                  onClick={() => setValue('doctorId', 'any-doctor')}
                  className={`p-5 rounded-xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                    selectedDoctorId === 'any-doctor'
                      ? 'border-medical-600 bg-medical-50/70 shadow-sm ring-2 ring-medical-600/20'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-medical-600 text-white flex items-center justify-center font-bold">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">First Available</h4>
                    </div>
                  </div>
                </div>

                {doctorsData.map((doc) => {
                  const isSelected = selectedDoctorId === doc.id;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => setValue('doctorId', doc.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer select-none space-y-3 ${
                        isSelected
                          ? 'border-medical-600 bg-medical-50/70 shadow-sm ring-2 ring-medical-600/20'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <img src={doc.avatarUrl} alt={doc.name} className="h-10 w-10 rounded-full object-cover border border-slate-200" />
                        <div>
                          <h4 className="text-xs font-bold text-navy-900">{doc.name}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="font-sans text-2xl font-bold text-navy-900">Choose Date & Time Window</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  label="Preferred Date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  error={errors.preferredDate?.message}
                  {...register('preferredDate')}
                />

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Available Time Slot</label>
                  <div className="grid grid-cols-1 gap-2">
                    {availableTimeSlots.map((slot) => {
                      const isSelected = selectedTimeSlot === slot.time;
                      return (
                        <button
                          type="button"
                          key={slot.id}
                          onClick={() => setValue('preferredTimeSlot', slot.time)}
                          className={`p-3 rounded-xl border text-xs font-bold text-left flex items-center justify-between transition-all ${
                            isSelected
                              ? 'border-medical-600 bg-medical-50 text-medical-700 ring-2 ring-medical-600/20'
                              : 'border-slate-200 bg-white hover:bg-slate-50 text-navy-900'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Clock className="h-3.5 w-3.5 text-medical-600" />
                            <span>{slot.time} ({slot.period})</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="font-sans text-2xl font-bold text-navy-900">Patient Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input label="Full Name *" placeholder="Victoria Sterling" error={errors.fullName?.message} {...register('fullName')} />
                <Input label="Email Address *" type="email" placeholder="victoria@example.com" error={errors.email?.message} {...register('email')} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input label="Phone Number *" placeholder="+1 (555) 000-0000" error={errors.phone?.message} {...register('phone')} />
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="font-sans text-2xl font-bold text-navy-900">Review Reservation Summary</h3>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-400 block font-bold uppercase tracking-wider text-[10px]">Selected Treatment</span>
                    <span className="text-navy-900 font-bold text-sm">{selectedService.title}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-bold uppercase tracking-wider text-[10px]">Specialist Doctor</span>
                    <span className="text-navy-900 font-bold text-sm">{selectedDoctor.name}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200">
                  <div>
                    <span className="text-slate-400 block font-bold uppercase tracking-wider text-[10px]">Date & Time Slot</span>
                    <span className="text-navy-900 font-bold">{selectedDate} • {selectedTimeSlot}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block font-bold uppercase tracking-wider text-[10px]">Patient Contact</span>
                    <span className="text-navy-900 font-bold">{watchAll.fullName} ({watchAll.email})</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            {currentStep > 1 ? (
              <Button type="button" variant="outline" size="sm" onClick={handlePrevStep} className="font-bold text-xs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span>Back</span>
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <Button type="button" variant="gold" size="sm" onClick={handleNextStep} className="font-bold text-xs">
                <span>Continue</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" variant="gold" size="lg" isLoading={isSubmitting} className="font-bold text-xs">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Confirm Appointment Reservation</span>
              </Button>
            )}
          </div>
        </form>
      </GlassCard>
    </div>
  );
}
