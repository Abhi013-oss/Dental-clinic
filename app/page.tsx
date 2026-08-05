import { HeroSection } from '@/features/landing/hero-section';
import { TrustSection } from '@/features/landing/trust-section';
import { AboutSection } from '@/features/landing/about-section';
import { WhyChooseUs } from '@/features/landing/why-choose-us';
import { TreatmentsSection } from '@/features/landing/treatments-section';
import { DoctorsPreview } from '@/features/landing/doctors-preview';
import { TechnologySection } from '@/features/landing/technology-section';
import { PatientJourney } from '@/features/landing/patient-journey';
import { BeforeAfterSlider } from '@/features/landing/before-after-slider';
import { SmileQuiz } from '@/features/landing/smile-quiz';
import { TestimonialsSection } from '@/features/landing/testimonials-section';
import { StatsSection } from '@/features/landing/stats-section';
import { FaqSection } from '@/features/landing/faq-section';
import { CtaSection } from '@/features/landing/cta-section';
import { LocationSection } from '@/features/landing/location-section';

export default function HomePage() {
  return (
    <div className="space-y-0 bg-white">
      {/* 1. Viewport Hero Section */}
      <HeroSection />

      {/* 2. Immediate Trust & Metrics Bar */}
      <TrustSection />

      {/* 3. About Clinic Introduction */}
      <AboutSection />

      {/* 4. Why Choose Us (6 Clinical Feature Cards) */}
      <WhyChooseUs />

      {/* 5. Luxury Treatments Grid (8 Dental Services) */}
      <TreatmentsSection />

      {/* 6. Meet Doctors Preview */}
      <DoctorsPreview />

      {/* 7. Technology & 3D Scanner Equipment Showcase */}
      <TechnologySection />

      {/* 8. Step-By-Step Patient Journey Timeline */}
      <PatientJourney />

      {/* 9. Interactive Before & After Smile Gallery Slider */}
      <BeforeAfterSlider />

      {/* 10. Interactive 2-Step Smile Assessment Quiz */}
      <SmileQuiz />

      {/* 11. Verified Patient Testimonials */}
      <TestimonialsSection />

      {/* 12. Animated Clinic Statistics Counter */}
      <StatsSection />

      {/* 13. Accessible FAQ Accordion */}
      <FaqSection />

      {/* 14. Primary Call To Action Banner with WhatsApp Concierge */}
      <CtaSection />

      {/* 15. Location, Valet & Operating Hours Preview */}
      <LocationSection />
    </div>
  );
}
