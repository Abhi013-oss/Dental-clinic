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
import { MapPin, Phone, Mail, Clock, Send, Activity } from 'lucide-react';

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
      <div className="container max-w-5xl">
        <SectionHeader
          badge="Patient Inquiries"
          title="Connect With Our Clinic"
          highlightTitle="Beverly Hills Flagship."
          description="Have a question about a treatment or scheduling your first consultation? We are here to help."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <GlassCard variant="standard" className="bg-white border border-slate-200 shadow-md">
              <h3 className="font-sans text-2xl font-bold text-navy-900 mb-6">Send A Direct Inquiry</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input label="Full Name" placeholder="Victoria Sterling" error={errors.fullName?.message} {...register('fullName')} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Email" type="email" placeholder="victoria@example.com" error={errors.email?.message} {...register('email')} />
                  <Input label="Phone" placeholder="+1 (555) 000-0000" error={errors.phone?.message} {...register('phone')} />
                </div>
                <Input label="Subject / Inquiry Topic" placeholder="Porcelain Veneers Consultation" error={errors.subject?.message} {...register('subject')} />

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
            <GlassCard variant="standard" className="bg-white border border-slate-200 shadow-md">
              <h3 className="font-sans text-xl font-bold text-navy-900 mb-4">Contact Information</h3>
              <ul className="space-y-4 text-xs text-slate-600">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-medical-600 shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-medical-600 shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-medical-600 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard variant="standard" className="bg-white border border-slate-200 shadow-md p-6">
              <h4 className="font-sans text-lg font-bold text-navy-900 mb-3 flex items-center">
                <Clock className="mr-2 h-4 w-4 text-medical-600" /> Clinic Hours
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
