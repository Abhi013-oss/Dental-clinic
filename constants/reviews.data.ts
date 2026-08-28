import { Review, CaseStudy } from '@/types/review.types';

export const reviewsData: Review[] = [
  {
    id: '1',
    patientName: 'Victoria Sterling',
    patientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    treatment: 'Full Mouth Rehabilitation & Implants',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Dr. Arjun Jawahar Sharma is a true master. My smile transformation looks impossibly natural. The experience at ÉLITE feels comfortable and professional.',
    verifiedPatient: true,
    location: 'Kapurthala, Punjab',
  },
  {
    id: '2',
    patientName: 'Julian Montgomery',
    patientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    treatment: 'Single Seating Root Canal Treatment (RCT)',
    rating: 5,
    date: '1 month ago',
    comment:
      'I was nervous about getting root canal treatment, but Dr. Priyanka Sharma and her team made the entire procedure completely painless.',
    verifiedPatient: true,
    location: 'Mayur Vihar, New Delhi',
  },
  {
    id: '3',
    patientName: 'Sophia Laurent',
    patientAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    treatment: 'Clear Aligners & Teeth Whitening',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'The 3D scanning technology and clinical care are top-tier. Highly recommend Dr. Sharma for any advanced dental treatment.',
    verifiedPatient: true,
    location: 'East Delhi',
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Full Mouth Ceramic & Implant Reconstruction',
    treatment: 'Full Mouth Rehabilitation',
    patientAge: 38,
    duration: '2 Appointments',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    summary:
      'Corrected severe enamel wear and missing teeth with precision full mouth implant-supported ceramic restoration.',
    specialistName: 'Dr. Arjun Jawahar Sharma',
  },
  {
    id: 'case-2',
    title: 'Single Seating RCT & Aesthetic Crown Restoration',
    treatment: 'Single Seating RCT & Ceramic Crown',
    patientAge: 44,
    duration: 'Single Visit Session',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    summary:
      'Painless single-visit endodontic treatment preserving natural root structure followed by a custom ceramic crown.',
    specialistName: 'Dr. Priyanka Sharma',
  },
];
