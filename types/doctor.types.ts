export interface DoctorExpertiseSection {
  title: string;
  description: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  degrees: string[];
  experienceYears: number;
  about: string;
  bio: string;
  avatarUrl: string;
  achievements: string[];
  expertiseSections: DoctorExpertiseSection[];
  educationCredentials: string[];
  clinicalPhilosophy: string;
  statsTagline: string;
  consultationFee: number;
  availableDays: string[];
}
