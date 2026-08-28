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
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

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
      </div>
    </div>
  );
}
