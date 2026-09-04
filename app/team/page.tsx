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
    <div className="pt-32 pb-24 bg-white min-h-screen space-y-16">
      <div className="container max-w-6xl">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeader
            badge="Clinical Team"
            title="Specialist Doctors & Surgeons"
            highlightTitle="Unrivaled Expertise."
            description="Led by Dr. Arjun Jawahar Sharma & Dr. Priyanka Sharma alongside Dr. Sandeep Kaur and Dr. Rajwinder Kaur, providing comprehensive specialist care across Kapurthala and Delhi."
          />
        </ScrollReveal>

        <TeamList />
      </div>

      {/* Verified Degrees & Certificates Trust Section */}
      <CredentialsTrustSection />
    </div>
  );
}
