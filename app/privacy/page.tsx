import { SectionHeader } from '@/components/shared/section-header';
import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and Health Information Protection standards for ÉLITE Dental Clinic.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-white text-navy-900 min-h-screen">
      <div className="container max-w-3xl space-y-8">
        <SectionHeader
          badge="Legal Notice"
          title="Patient Privacy Policy"
          highlightTitle="HIPAA & Data Standards."
          description="Last updated: August 1, 2026. How ÉLITE Dental Clinic protects your personal and medical health information."
        />

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm space-y-6">
          <section className="space-y-2">
            <h2 className="font-sans text-xl font-bold text-navy-900">1. Commitment to Patient Confidentiality</h2>
            <p>
              At ÉLITE Dental Clinic, your privacy and health record security are paramount. We strictly comply with the Health Insurance Portability and Accountability Act (HIPAA) and applicable California state privacy laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-sans text-xl font-bold text-navy-900">2. Collection of Health Information</h2>
            <p>
              We collect information necessary to provide safe, effective clinical care, including medical history, dental imaging, contact details, and insurance parameters. All digital records are stored in encrypted, HIPAA-compliant databases.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-sans text-xl font-bold text-navy-900">3. Non-Disclosure Guarantee</h2>
            <p>
              We do not sell, rent, or trade your personal or health data to third parties. Information is only shared with accredited dental laboratories, specialists, or insurance providers directly involved in your care plan.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-sans text-xl font-bold text-navy-900">4. Contact Privacy Officer</h2>
            <p>
              For questions regarding your medical records or data rights, please contact our Privacy Officer at <strong>{siteConfig.contact.email}</strong> or visit our Beverly Hills office.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
