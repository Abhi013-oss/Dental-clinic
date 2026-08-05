export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  degrees: string[];
  experienceYears: number;
  bio: string;
  avatarUrl: string;
  achievements: string[];
  consultationFee: number;
  availableDays: string[];
}
