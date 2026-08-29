import { SectionHeader } from '@/components/shared/section-header';
import { BeforeAfterSlider } from '@/features/landing/before-after-slider';
import { GalleryViewer } from '@/features/gallery/gallery-viewer';
import { XRayGallerySection } from '@/features/landing/xray-gallery-section';
import { CredentialsTrustSection } from '@/features/landing/credentials-trust-section';

export const metadata = {
  title: 'Clinical Gallery & Dental X-Rays | Jawahar Dental Hospital',
  description: 'View real clinical dental RVG X-rays, surgical extractions, doctors degrees, and smile transformations at Jawahar Dental Hospital.',
};

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen space-y-16">
      <div className="container">
        <SectionHeader
          badge="Aesthetic Results"
          title="Smile Transformations Gallery"
          highlightTitle="Clinical Proof Of Excellence."
          description="Browse detailed case studies showcasing complex aesthetic reconstructions, natural enamel restorations, and 3D digital diagnosis."
        />

        <BeforeAfterSlider />

        <div className="mt-16 space-y-8">
          <h2 className="font-sans text-3xl font-extrabold text-navy-900 text-center">Featured Case Archives</h2>
          <GalleryViewer />
        </div>
      </div>

      {/* Horizontally Scrollable Clinical Dental X-Rays Section */}
      <XRayGallerySection />

      {/* Doctors' Degrees & Academic Excellence Certifications */}
      <CredentialsTrustSection />
    </div>
  );
}
