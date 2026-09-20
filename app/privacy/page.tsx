import { SectionHeader } from '@/components/shared/section-header';
import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and Patient Health Information Protection standards for Jawahar Dental Hospital.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAFCFB] text-navy-900 min-h-screen">
      <div className="container max-w-3xl space-y-8">
        <SectionHeader
          badge="Legal Notice"
          title="Patient Privacy Policy"
          highlightTitle="Clinical Data Standards."
          description="Last updated: August 1, 2026. How Jawahar Dental Hospital protects your personal and medical health information."
        />

        <div className="rounded-xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6 text-slate-700 leading-relaxed text-sm">
          <section className="space-y-2">
            <h2 className="font-sans text-lg font-bold text-[#0E3340]">1. Commitment to Patient Confidentiality</h2>
            <p>
              At Jawahar Dental Hospital, your privacy and health record security are paramount. We strictly adhere to applicable healthcare data protection standards, patient confidentiality protocols, and statutory medical records privacy guidelines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-sans text-lg font-bold text-[#0E3340]">2. Collection of Health Information</h2>
            <p>
              We collect information necessary to provide safe, effective clinical care, including medical history, dental imaging (CBCT, OPG, RVG radiographs), contact details, and clinical treatment notes. All digital diagnostic records are stored securely with restricted clinical access.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-sans text-lg font-bold text-[#0E3340]">3. Non-Disclosure Guarantee</h2>
            <p>
              We do not sell, rent, or trade your personal or health data to third parties. Information is only shared with accredited dental laboratories, specialist consultants, or authorized healthcare professionals directly involved in your treatment plan.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-sans text-lg font-bold text-[#0E3340]">4. Contact Privacy Officer</h2>
            <p>
              For questions regarding your medical records, data rights, or diagnostic copies, please contact our hospital desk at <strong>{siteConfig.contact.email}</strong> or visit our Kapurthala or Delhi dental centers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
