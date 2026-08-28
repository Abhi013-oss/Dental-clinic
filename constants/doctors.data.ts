import { Doctor } from '@/types/doctor.types';

export const doctorsData: Doctor[] = [
  {
    id: 'dr-arjun-jawahar-sharma',
    name: 'Dr. Arjun Jawahar Sharma',
    title: 'Specialist in: Dentures, Crowns & Implants',
    specialty: 'BDS, MDS (Prosthodontics & Oral Implantologist)',
    degrees: [
      'BDS, MDS (Prosthodontics & Oral Implantologist)',
      'MBA (AMIS; IIB)',
    ],
    experienceYears: 15,
    bio: 'BDS, MDS (Prosthodontics & Oral Implantologist), MBA (AMIS; IIB). Specialist in: Dentures, Crowns & Implants. Ex-Consultant - Clove Dental. Faculty - K.D. Dental College & Hospital.',
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    achievements: [
      'BDS, MDS (Prosthodontics & Oral Implantologist)',
      'MBA (AMIS; IIB)',
      'Specialist in: Dentures, Crowns & Implants',
      'Ex-Consultant - Clove Dental',
      'Faculty - K.D. Dental College & Hospital',
    ],
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  {
    id: 'dr-priyanka-sharma',
    name: 'Dr. Priyanka Sharma',
    title: 'Certified Endodontist & Dental Surgeon',
    specialty: 'BDS, (Dental Surgeon)',
    degrees: [
      'BDS, (Dental Surgeon)',
      'Certified Endodontist',
    ],
    experienceYears: 12,
    bio: 'BDS, (Dental Surgeon), Certified Endodontist. Member Indian Dental Association. Ex-Consultant - Sri Ganga Ram Hospital, New Delhi. Ex-Lecturer - ITS Dental College & Hospitals.',
    avatarUrl: 'https://images.unsplash.com/photo-1594824813566-78a9c2b4c107?q=80&w=800&auto=format&fit=crop',
    achievements: [
      'BDS, (Dental Surgeon)',
      'Certified Endodontist',
      'Member Indian Dental Association',
      'Ex-Consultant - Sri Ganga Ram Hospital, New Delhi',
      'Ex-Lecturer - ITS Dental College & Hospitals',
    ],
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
];
