import { SectionHeader } from '@/components/shared/section-header';
import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms of Service and Clinical Policies for ÉLITE Dental Clinic.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-navy-900 min-h-screen">
      <div className="container max-w-3xl space-y-8">
        <SectionHeader
          badge="Legal Terms"
          title="Terms & Conditions"
          highlightTitle="Clinical Policies."
          description="Last updated: August 1, 2026. Terms governing appointment scheduling, treatment estimates, and website use."
        />

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm space-y-6">
          <section className="space-y-2">
            <h2 className="font-sans text-xl font-bold text-navy-900">1. Appointment Scheduling & Cancellations</h2>
            <p>
              We value your time and reserve exclusive private suites for your appointments. We request at least 24 hours advance notice for cancellations or rescheduling to avoid a reservation hold fee.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-sans text-xl font-bold text-navy-900">2. Treatment Estimates & Financial Policy</h2>
            <p>
              Prior to initiating treatment, you will receive a transparent written cost estimate detailing procedure fees, material specifications, and insurance coverage estimates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-sans text-xl font-bold text-navy-900">3. Medical Disclaimer</h2>
            <p>
              Information on this website is for educational purposes and does not constitute formal medical diagnosis. Diagnosis is provided exclusively following an in-person clinical examination.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
