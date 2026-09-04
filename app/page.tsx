import { HeroSection } from '@/features/landing/hero-section';
import { TrustSection } from '@/features/landing/trust-section';
import { AboutSection } from '@/features/landing/about-section';
import { CredentialsTrustSection } from '@/features/landing/credentials-trust-section';
import { WhyChooseUs } from '@/features/landing/why-choose-us';
import { TreatmentsSection } from '@/features/landing/treatments-section';
import { DoctorsPreview } from '@/features/landing/doctors-preview';
import { TechnologySection } from '@/features/landing/technology-section';
import { XRayGallerySection } from '@/features/landing/xray-gallery-section';
import { TestimonialsSection } from '@/features/landing/testimonials-section';
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

      {/* 11. Verified Patient Testimonials */}
      <TestimonialsSection />

      {/* 12. Accessible FAQ Accordion */}
      <FaqSection />

      {/* 13. Primary Call To Action Banner with WhatsApp Concierge */}
      <CtaSection />

      {/* 14. Location, Valet & Operating Hours Preview */}
      <LocationSection />
    </div>
  );
}
