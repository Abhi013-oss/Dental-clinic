export interface ServiceFeature {
  title: string;
  description: string;
}

export interface TreatmentStep {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
}

export type ServiceCategory =
  | 'DENTAL IMPLANTS'
  | 'PROSTHODONTICS'
  | 'ORTHODONTICS'
  | 'ENDODONTICS'
  | 'ORAL & MAXILLOFACIAL SURGERY'
  | 'PEDIATRIC DENTISTRY'
  | 'ADVANCED GUM TREATMENT'
  | 'ORAL MEDICINE & RADIOLOGY'
  | string;

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  durationMinutes: number;
  heroImage: string;
  iconName: string;
  popular: boolean;
  features: ServiceFeature[];
  processSteps: TreatmentStep[];
  benefits: string[];
}
