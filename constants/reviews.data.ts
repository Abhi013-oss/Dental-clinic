import { Review, CaseStudy } from '@/types/review.types';

export const reviewsData: Review[] = [
  {
    id: '1',
    patientName: 'Victoria Sterling',
    patientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    treatment: 'Master Porcelain Veneers',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Dr. Vance is a true artist. My veneers look impossibly natural. The experience at ÉLITE feels like a 5-star private spa from the moment you walk through the doors.',
    verifiedPatient: true,
    location: 'Beverly Hills, CA',
  },
  {
    id: '2',
    patientName: 'Julian Montgomery',
    patientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    treatment: '3D Guided Dental Implants',
    rating: 5,
    date: '1 month ago',
    comment:
      'I was nervous about getting implant surgery, but Dr. Rodriguez and her team made the entire procedure completely painless. The results exceeded all my expectations.',
    verifiedPatient: true,
    location: 'Bel Air, CA',
  },
  {
    id: '3',
    patientName: 'Sophia Laurent',
    patientAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    treatment: 'Invisalign & Laser Whitening',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'The 3D scanning technology and attention to detail are world-class. Dr. Chen aligned my teeth in just 7 months! Truly unmatched professionalism.',
    verifiedPatient: true,
    location: 'Malibu, CA',
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Complete Porcelain Veneer Smile Redesign',
    treatment: 'Porcelain Veneers (10 Upper Units)',
    patientAge: 38,
    duration: '2 Appointments (14 Days)',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    summary:
      'Corrected severe enamel erosion, micro-fractures, and shade unevenness with 10 hand-sculpted ultra-translucent ceramic veneers.',
    specialistName: 'Dr. Alexander Vance',
  },
  {
    id: 'case-2',
    title: 'Immediate Guided Implant & Zirconia Crown',
    treatment: 'Single Tooth Zirconia Implant',
    patientAge: 44,
    duration: 'Single Surgical Session + 3 Month Crown Prep',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    summary:
      'Restored missing upper central incisor using flapless 3D computer-guided surgical technique and custom emergency provisional.',
    specialistName: 'Dr. Elena Rodriguez',
  },
];
