import { SectionHeader } from '@/components/shared/section-header';
import { ServiceFilter } from '@/features/services/service-filter';

export const metadata = {
  title: 'Specialized Dental Treatments & Clinical Procedures | Jawahar Dental Hospital',
  description: 'Explore dental implants, prosthodontics, orthodontics, root canal therapy, and oral surgery at Jawahar Dental Hospital in Kapurthala and Delhi.',
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAFCFB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Specialized Clinical Departments"
          title="Comprehensive Dental Procedures"
          highlightTitle="Engineered For Long-Term Oral Health."
          description="Browse our full spectrum of specialized dental treatments across 8 clinical departments, guided by senior implantologists and dental surgeons."
        />

        <div className="mt-10">
          <ServiceFilter />
        </div>
      </div>
    </div>
  );
}
