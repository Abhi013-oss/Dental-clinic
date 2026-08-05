import { SectionHeader } from '@/components/shared/section-header';
import { SimpleBookingForm } from '@/features/booking/simple-booking-form';
import { GlassCard } from '@/components/shared/glass-card';
import { ShieldCheck, Activity, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: 'Book Appointment',
  description: 'Schedule a private cosmetic dentistry or dental implant consultation at ÉLITE Dental Clinic.',
};

export default function BookPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50/60 min-h-screen">
      <div className="container max-w-4xl space-y-10">
        <SectionHeader
          badge="Online Appointments"
          title="Reserve Your Consultation"
          highlightTitle="In Simple Steps."
          description="Select your preferred treatment, date, and available time window."
        />

        {/* Clean, Simple Booking Form */}
        <SimpleBookingForm />

        {/* Guarantee Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <GlassCard variant="standard" className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3">
            <h3 className="font-sans text-base font-bold text-navy-900 flex items-center">
              <Activity className="mr-2 h-4 w-4 text-medical-600" />
              Patient Protection & Safety
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Private valet parking and dedicated room sterilization prior to every appointment.
            </p>
          </GlassCard>

          <GlassCard variant="standard" className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3">
            <h3 className="font-sans text-base font-bold text-navy-900 flex items-center">
              <PhoneCall className="mr-2 h-4 w-4 text-medical-600" />
              Emergency Helpline
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Need immediate assistance? Call our reception desk directly at{' '}
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-medical-600 hover:underline">
                {siteConfig.contact.phone}
              </a>
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
