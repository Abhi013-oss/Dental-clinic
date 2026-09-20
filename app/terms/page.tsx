import { SectionHeader } from '@/components/shared/section-header';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms of Service and Clinical Policies for Jawahar Dental Hospital.',
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAFCFB] text-navy-900 min-h-screen">
      <div className="container max-w-3xl space-y-8">
        <SectionHeader
          badge="Hospital Policies"
          title="Terms & Conditions"
          highlightTitle="Clinical Policies."
          description="Last updated: August 1, 2026. Terms governing appointment scheduling, treatment estimates, and website use for Jawahar Dental Hospital."
        />

        <div className="rounded-xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6 text-slate-700 leading-relaxed text-sm">
          <section className="space-y-2">
            <h2 className="font-sans text-lg font-bold text-[#0E3340]">1. Appointment Scheduling & Cancellations</h2>
            <p>
              We value your time and allocate dedicated operatory suites and specialist consultation hours for your appointment. We kindly request at least 24 hours advance notice for cancellations or rescheduling to allow us to accommodate emergency patients.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-sans text-lg font-bold text-[#0E3340]">2. Treatment Estimates & Clinical Plans</h2>
            <p>
              Prior to initiating any major restorative, surgical, or orthodontic treatment, you will receive a transparent clinical discussion and treatment estimate detailing procedure stages, material specifications, and projected visit schedules.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-sans text-lg font-bold text-[#0E3340]">3. Medical Disclaimer</h2>
            <p>
              Information on this website is provided for educational purposes and does not constitute a formal clinical diagnosis. A comprehensive medical and clinical examination, supplemented by radiographic imaging where indicated, is required before initiating dental care.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
