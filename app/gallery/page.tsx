import { SectionHeader } from '@/components/shared/section-header';
import { BeforeAfterSlider } from '@/features/landing/before-after-slider';
import { GalleryViewer } from '@/features/gallery/gallery-viewer';
import { XRayGallerySection } from '@/features/landing/xray-gallery-section';
import { CredentialsTrustSection } from '@/features/landing/credentials-trust-section';

export const metadata = {
  title: 'Clinical Gallery & Transformations | Jawahar Dental Hospital',
  description: 'View real clinical smile transformations, before and after case archives, dental RVG X-rays, and verified doctor degrees at Jawahar Dental Hospital.',
};

export default function GalleryPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAFCFB] min-h-screen space-y-16 sm:space-y-20 text-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        <SectionHeader
          badge="Aesthetic Results & Case Archives"
          title="Smile Transformations Gallery"
          highlightTitle="Clinical Proof Of Excellence."
          description="Browse detailed case studies showcasing complex aesthetic reconstructions, natural ceramic veneers, and guided implant restorations."
        />

        {/* Interactive Before/After Split Slider */}
        <div>
          <BeforeAfterSlider />
        </div>

        {/* Documented Case Archives */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#159A9C]">Documented Clinical Records</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#0E3340] mt-1">
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
