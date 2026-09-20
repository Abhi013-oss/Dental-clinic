import { SectionHeader } from '@/components/shared/section-header';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { CredentialsTrustSection } from '@/features/landing/credentials-trust-section';
import { TeamList } from '@/components/doctors/team-list';

export const metadata = {
  title: 'Specialist Doctors & Verified Credentials | Jawahar Dental Hospital',
  description: 'Meet Dr. Arjun Jawahar Sharma, Dr. Priyanka Sharma, Dr. Sandeep Kaur, and Dr. Rajwinder Kaur at Jawahar Dental Hospital. Review verified academic degrees, awards, and hospital residencies.',
};

export default function TeamPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-20 bg-[#FAFCFB] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Medical Faculty & Leadership"
            title="Specialist Doctors & Dental Surgeons"
            highlightTitle="Trained At Premier Medical Institutions."
            description="Led by senior implantologist Dr. Arjun Jawahar Sharma and root canal specialist Dr. Priyanka Sharma alongside Dr. Sandeep Kaur and Dr. Rajwinder Kaur, delivering specialized clinical excellence across Kapurthala and East Delhi."
          />
        </ScrollReveal>

        <div className="mt-12">
          <TeamList />
        </div>
      </div>

      {/* Verified Degrees & Certificates Trust Section */}
      <div className="mt-20">
        <CredentialsTrustSection />
      </div>
    </div>
  );
}
