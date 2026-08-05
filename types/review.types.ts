export interface Review {
  id: string;
  patientName: string;
  patientAvatar?: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPatient: boolean;
  location: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  treatment: string;
  patientAge: number;
  duration: string;
  beforeImage: string;
  afterImage: string;
  summary: string;
  specialistName: string;
}
