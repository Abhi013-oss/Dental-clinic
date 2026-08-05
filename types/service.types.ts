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

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Cosmetic' | 'Implantology' | 'Orthodontics' | 'Rehabilitation' | 'Periodontics';
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
