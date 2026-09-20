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
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAFCFB] min-h-screen space-y-16 sm:space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Aesthetic Results & Case Archives"
          title="Smile Transformations Gallery"
          highlightTitle="Clinical Proof Of Excellence."
          description="Browse detailed case studies showcasing complex aesthetic reconstructions, natural enamel restorations, and 3D digital diagnosis."
        />

        <div className="mt-10">
          <BeforeAfterSlider />
        </div>

        <div className="mt-16 space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-medical-600">Documented Clinical Records</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
              Featured Case Archives
            </h2>
          </div>
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
