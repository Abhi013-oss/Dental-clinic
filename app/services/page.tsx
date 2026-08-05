import { SectionHeader } from '@/components/shared/section-header';
import { ServiceFilter } from '@/features/services/service-filter';

export const metadata = {
  title: 'Signature Dental Treatments & Aesthetic Procedures',
  description: 'Explore master porcelain veneers, guided dental implants, Invisalign, and full mouth rehabilitation at ÉLITE Dental Atelier.',
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container">
        <SectionHeader
          badge="Clinical Portfolio"
          title="Signature Aesthetic Treatments"
          highlightTitle="Masterpiece Dentistry."
          description="Combining advanced biophotonics, microscopic precision, and master ceramists to craft unmatched aesthetic & functional results."
        />

        <ServiceFilter />
      </div>
    </div>
  );
}
