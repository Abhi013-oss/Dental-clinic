import { HeroSection } from '@/features/landing/hero-section';
import { TrustSection } from '@/features/landing/trust-section';
import { AboutSection } from '@/features/landing/about-section';
import { CredentialsTrustSection } from '@/features/landing/credentials-trust-section';
import { WhyChooseUs } from '@/features/landing/why-choose-us';
import { TreatmentsSection } from '@/features/landing/treatments-section';
import { DoctorsPreview } from '@/features/landing/doctors-preview';
import { TechnologySection } from '@/features/landing/technology-section';
import { PatientJourney } from '@/features/landing/patient-journey';
import { XRayGallerySection } from '@/features/landing/xray-gallery-section';
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

      {/* 4. Doctors' Degrees & Academic Certifications Trust Showcase */}
      <CredentialsTrustSection />

      {/* 5. Why Choose Us (6 Clinical Feature Cards) */}
      <WhyChooseUs />

      {/* 6. Dental Services Grid */}
      <TreatmentsSection />

      {/* 7. Meet Doctors Preview */}
      <DoctorsPreview />

      {/* 8. Horizontally Scrollable Clinical Dental X-Rays & Diagnostics */}
      <XRayGallerySection />

      {/* 9. Technology & 3D Scanner Equipment Showcase */}
      <TechnologySection />

      {/* 10. Step-By-Step Patient Journey Timeline */}
      <PatientJourney />

      {/* 11. Interactive Before & After Smile Gallery Slider */}
      <BeforeAfterSlider />

      {/* 12. Interactive 2-Step Smile Assessment Quiz */}
      <SmileQuiz />

      {/* 13. Verified Patient Testimonials */}
      <TestimonialsSection />

      {/* 14. Animated Clinic Statistics Counter */}
      <StatsSection />

      {/* 15. Accessible FAQ Accordion */}
      <FaqSection />

      {/* 16. Primary Call To Action Banner with WhatsApp Concierge */}
      <CtaSection />

      {/* 17. Location, Valet & Operating Hours Preview */}
      <LocationSection />
    </div>
  );
}
