'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SectionHeader } from '@/components/shared/section-header';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/toast';
import { siteConfig } from '@/config/site.config';
import { MapPin, Phone, Mail, Clock, Send, Navigation } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      showToast({
        type: 'success',
        title: 'Message Dispatched',
        message: 'Thank you. Our patient care team will reach out within 2 business hours.',
      });
      reset();
    } catch (e) {
      showToast({ type: 'error', title: 'Error', message: 'Failed to send inquiry.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50/60 min-h-screen">
      <div className="container max-w-5xl px-4 sm:px-6">
        <SectionHeader
          badge="Patient Inquiries"
          title="Connect With Our Clinic"
          highlightTitle="Kapurthala & Delhi Branches."
          description="Have a question about a treatment or scheduling your first consultation? We are here to help."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <GlassCard variant="standard" className="bg-white border border-slate-200 shadow-md p-6 sm:p-8">
              <h3 className="font-sans text-2xl font-bold text-navy-900 mb-6">Send A Direct Inquiry</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input label="Full Name" placeholder="Patient Name" error={errors.fullName?.message} {...register('fullName')} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Email" type="email" placeholder="patient@example.com" error={errors.email?.message} {...register('email')} />
                  <Input label="Phone" placeholder="Phone Number" error={errors.phone?.message} {...register('phone')} />
                </div>
                <Input label="Subject / Inquiry Topic" placeholder="Consultation Inquiry" error={errors.subject?.message} {...register('subject')} />

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="How may our team assist you?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm focus:bg-white focus:border-medical-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600/20 text-navy-900"
                    {...register('message')}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>

                <Button type="submit" variant="gold" size="lg" isLoading={isSubmitting} className="w-full font-bold">
                  <Send className="mr-2 h-4 w-4" />
                  <span>Send Message</span>
                </Button>
              </form>
            </GlassCard>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <GlassCard variant="standard" className="bg-white border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
              <h3 className="font-sans text-xl font-bold text-navy-900">Clinic Contact Information</h3>

              {/* Kapurthala */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center space-x-2 text-sm font-bold text-navy-900">
                  <MapPin className="h-4 w-4 text-medical-600 shrink-0" />
                  <span>Kapurthala Branch (Punjab)</span>
                </div>
                <p className="text-xs text-slate-600 font-bold leading-relaxed pl-6">
                  {siteConfig.branches.kapurthala.address}
                </p>
                <div className="flex items-center space-x-2 text-xs font-bold text-medical-600 pl-6">
                  <Phone className="h-3.5 w-3.5" />
                  <a href={`tel:${siteConfig.branches.kapurthala.contact}`} className="hover:underline">
                    {siteConfig.branches.kapurthala.contact}
                  </a>
                </div>
              </div>

              {/* Delhi */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-2 text-sm font-bold text-navy-900">
                  <MapPin className="h-4 w-4 text-medical-600 shrink-0" />
                  <span>Delhi Branch (Mayur Vihar)</span>
                </div>
                <p className="text-xs text-slate-600 font-bold leading-relaxed pl-6">
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

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-2 text-xs text-slate-600">
                <Mail className="h-4 w-4 text-medical-600 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </GlassCard>

            <GlassCard variant="standard" className="bg-white border border-slate-200 shadow-md p-6">
              <h4 className="font-sans text-base font-bold text-navy-900 mb-3 flex items-center">
                <Clock className="mr-2 h-4 w-4 text-medical-600" /> Operating Hours
              </h4>
              <div className="space-y-2 text-xs text-slate-600">
                {siteConfig.contact.hours.map((h, i) => (
                  <div key={i} className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="font-bold text-navy-900">{h.days}:</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Interactive Google Map Embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
          <div className="p-4 sm:p-6 bg-white border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-medical-600" />
                <h3 className="font-sans text-base sm:text-lg font-bold text-navy-900">
                  Jawahar&apos;s Vraja Dental Clinic &amp; Implant Centre
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Link Road, Opposite Park, Near Yes Bank, Kapurthala, Punjab 144601
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                href="https://www.google.com/maps/place/Jawahar's+Vraja+Dental+Clinic+and+Implant+centre-Dentist%2FImplant+Specialist%2FRoot+Canal+Treatment%2FBest+Dentist/@31.3810123,75.3852523,876m/data=!3m2!1e3!4b1!4m6!3m5!1s0x391a492c9d2a99a7:0x2bf171f2deb101f3!8m2!3d31.3810123!4d75.3878272!16s%2Fg%2F11lgksztb8?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-medical-600 hover:bg-medical-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <Navigation className="h-4 w-4" />
                <span>Open in Google Maps / Directions</span>
              </a>
            </div>
          </div>

          <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-100">
            <iframe
              title="Jawahar's Vraja Dental Clinic and Implant Centre Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.203006240228!2d75.3852523!3d31.3810123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a492c9d2a99a7%3A0x2bf171f2deb101f3!2sJawahar%27s%20Vraja%20Dental%20Clinic%20and%20Implant%20centre-Dentist%2FImplant%20Specialist%2FRoot%20Canal%20Treatment%2FBest%20Dentist!5e0!3m2!1sen!2sin!4v1725516000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
