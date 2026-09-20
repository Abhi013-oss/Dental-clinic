'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/toast';
import { siteConfig } from '@/config/site.config';
import { MapPin, Phone, Mail, Clock, Send, Navigation, MessageSquare, PhoneCall, CheckCircle2 } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  subject: z.string().min(2, 'Please enter an inquiry subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        }),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to submit inquiry.');
      }

      setIsSuccess(true);
      showToast({
        type: 'success',
        title: 'Inquiry Sent',
        message: 'Thank you. Our patient care team will respond within 2 business hours.',
      });
      reset();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Failed to send inquiry.';
      showToast({ type: 'error', title: 'Transmission Notice', message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAFCFB] min-h-screen text-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        {/* Page Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Hospital Contact &amp; Helpdesk"
            title="Connect With Our Clinical Team"
            highlightTitle="Kapurthala &amp; Delhi Branches."
            description="Have a question regarding treatment protocols, scheduling your first clinical evaluation, or directions to our clinics? We are here to assist."
            align="center"
          />
        </ScrollReveal>

        {/* Two-Column Layout: Form (7 cols) + Contact Methods (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-navy-900">
                    Send A Clinical Inquiry
                  </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill out your details below and our hospital patient coordinator will respond promptly.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 text-center bg-[#FAFCFB] border border-slate-200/90 rounded-xl space-y-4 animate-in fade-in duration-200">
                <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-lg font-bold text-navy-900">Inquiry Dispatched Successfully</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to Jawahar Dental Hospital. Our front desk coordinator will review your request and contact you.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSuccess(false)}
                  className="text-xs font-semibold rounded-lg"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  label="Full Patient / Inquirer Name *"
                  placeholder="e.g. Gurpreet Singh"
                  error={errors.fullName?.message}
                  {...register('fullName')}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address *"
                    type="email"
                    placeholder="patient@example.com"
                    error={errors.email?.message}
                    {...register('email')}
                  />
                  <Input
                    label="Phone Number *"
                    placeholder="99100 66721"
                    error={errors.phone?.message}
                    {...register('phone')}
                  />
                </div>

                <Input
                  label="Subject / Inquiry Topic *"
                  placeholder="e.g. Dental Implant Consultation Inquiry"
                  error={errors.subject?.message}
                  {...register('subject')}
                />

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Your Message / Treatment Questions *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please describe your tooth issue, desired treatment, or specific questions..."
                    className="w-full rounded-lg border border-slate-200 bg-[#FAFCFB] p-3.5 text-xs text-navy-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-medical-600 transition-all"
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full font-bold text-xs sm:text-sm h-12 rounded-lg touch-manipulation cursor-pointer shadow-xs"
                >
                  <Send className="mr-2 h-4 w-4" />
                  <span>Send Message to Hospital Coordinator</span>
                </Button>
              </form>
            )}
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Details & Operating Hours Sidebar */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 p-6 sm:p-7 space-y-5">
                  <h3 className="font-sans text-lg font-bold text-navy-900 border-b border-slate-100 pb-3">
                    Hospital Locations &amp; Helplines
                  </h3>

                  {/* Kapurthala Main Branch */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm font-bold text-navy-900">
                      <MapPin className="h-4 w-4 text-medical-600 shrink-0" />
                      <span>Kapurthala Main Hospital (Punjab)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6 font-medium">
                      {siteConfig.branches.kapurthala.address}
                    </p>
                    <div className="flex items-center space-x-2 text-xs font-bold text-medical-600 pl-6">
                      <Phone className="h-3.5 w-3.5" />
                      <a href={`tel:${siteConfig.branches.kapurthala.contact}`} className="hover:underline">
                        {siteConfig.branches.kapurthala.contact}
                      </a>
                    </div>
                  </div>

                  {/* Delhi Branch */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-2 text-sm font-bold text-navy-900">
                      <MapPin className="h-4 w-4 text-medical-600 shrink-0" />
                      <span>East Delhi Branch (Mayur Vihar)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6 font-medium">
                      {siteConfig.branches.delhi.address}
                    </p>
                    <div className="flex items-center space-x-2 text-xs font-bold text-medical-600 pl-6">
                      <Phone className="h-3.5 w-3.5" />
                      <span>
                        <a href="tel:9910066721" className="hover:underline">99100-66721</a>,{' '}
                        <a href="tel:8285547579" className="hover:underline">82855-47579</a>
                      </span>
                    </div>
                  </div>

                  {/* Email & WhatsApp Quick Channels */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <div className="flex items-center space-x-2 text-xs text-slate-600">
                      <Mail className="h-4 w-4 text-medical-600 shrink-0" />
                      <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold hover:text-navy-900 hover:underline">
                        {siteConfig.contact.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-emerald-700">
                      <MessageSquare className="h-4 w-4 text-emerald-600 shrink-0" />
                      <a
                        href="https://wa.me/919910066721?text=Hello%20Jawahar%20Dental%20Hospital,%20I%20have%20an%20inquiry."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:underline"
                      >
                        Direct WhatsApp Concierge: +91 99100-66721
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating Hours Card */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-md hover:border-[#159A9C]/50 transition-all duration-300 p-6 space-y-3">
                  <h4 className="font-sans text-sm font-bold text-navy-900 flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-medical-600" />
                    Clinical Operating Hours
                  </h4>

                  <div className="space-y-2 text-xs text-slate-600 pt-1">
                    {siteConfig.contact.hours.map((h, i) => (
                      <div key={i} className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="font-bold text-navy-900">{h.days}:</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Interactive Google Map Embed */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:border-[#159A9C]/40 transition-all bg-white">
            <div className="p-5 sm:p-6 bg-white border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4.5 w-4.5 text-medical-600" />
                <h3 className="font-sans text-base sm:text-lg font-bold text-navy-900">
                  Jawahar&apos;s Vraja Dental Clinic &amp; Implant Centre
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Link Road, Opposite Park, Near Yes Bank, Kapurthala, Punjab 144601
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-navy-900 text-xs font-semibold transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5 text-medical-600" />
                <span>Call {siteConfig.contact.phone}</span>
              </a>

              <a
                href="https://www.google.com/maps/place/Jawahar's+Vraja+Dental+Clinic+and+Implant+centre-Dentist%2FImplant+Specialist%2FRoot+Canal+Treatment%2FBest+Dentist/@31.3810123,75.3852523,876m/data=!3m2!1e3!4b1!4m6!3m5!1s0x391a492c9d2a99a7:0x2bf171f2deb101f3!8m2!3d31.3810123!4d75.3878272!16s%2Fg%2F11lgksztb8?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-medical-600 hover:bg-medical-700 text-white text-xs font-bold transition-colors shadow-xs"
              >
                <Navigation className="h-4 w-4" />
                <span>Open in Google Maps / Directions</span>
              </a>
            </div>
          </div>

          <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-100">
            <iframe
              title="Jawahar's Vraja Dental Clinic and Implant Centre Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.2!2d75.3878272!3d31.3810123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a492c9d2a99a7%3A0x2bf171f2deb101f3!2sJawahar's+Vraja+Dental+Clinic+and+Implant+centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg shadow-xs border border-slate-200/80 flex items-center space-x-2 text-xs font-bold text-navy-900 pointer-events-none">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Main Hospital Clinic Pinned • Kapurthala (Punjab)</span>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
