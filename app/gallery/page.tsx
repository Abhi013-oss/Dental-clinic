import { SectionHeader } from '@/components/shared/section-header';
import { BeforeAfterSlider } from '@/features/landing/before-after-slider';
import { GalleryViewer } from '@/features/gallery/gallery-viewer';

export const metadata = {
  title: 'Smile Transformations & Case Studies',
  description: 'View before and after smile transformations, porcelain veneers, and implant cases at ÉLITE Dental Atelier.',
};

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container">
        <SectionHeader
          badge="Aesthetic Results"
          title="Smile Transformations Gallery"
          highlightTitle="Clinical Proof Of Excellence."
          description="Browse detailed case studies showcasing complex aesthetic reconstructions and natural enamel restorations."
        />

        <BeforeAfterSlider />

        <div className="mt-16 space-y-8">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center">Featured Case Archives</h2>
          <GalleryViewer />
        </div>
      </div>
    </div>
  );
}
