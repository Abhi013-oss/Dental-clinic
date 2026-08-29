import { Review, CaseStudy } from '@/types/review.types';

export const reviewsData: Review[] = [
  {
    id: '1',
    patientName: 'Kunal Bakshi',
    patientAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
    treatment: 'RCT & Tooth Filling Procedure',
    rating: 5,
    date: '2 months ago',
    comment:
      'I had a great experience at the clinic. A special thanks to Dr. Sandeep for the excellent care and professionalism throughout my RCT and filling procedures. She explained everything clearly, made me feel comfortable, and ensured the treatment was as painless as possible. The staff were friendly, the clinic was clean and well-organized, and the overall experience exceeded my expectations. I highly recommend this clinic and the entire team to anyone looking for quality dental care.',
    verifiedPatient: true,
    location: 'Google Review · Local Guide',
  },
  {
    id: '2',
    patientName: 'Jaskiran Kaur',
    patientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    treatment: 'Prosthodontics & Specialist Care',
    rating: 5,
    date: '3 months ago',
    comment:
      'Had a good experience with both Dr. Arjun and Dr. Priyanka. They are well equipped with knowledge, equipments and staff. They are good listeners which is the most required quality in a Doctor. All in all i am well satisfied with the treatment received and i didn\'t know that Kapurthala have such excellent prosthodontics.',
    verifiedPatient: true,
    location: 'Kapurthala Branch · Google Review',
  },
  {
    id: '3',
    patientName: 'Gurmeet S',
    patientAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop',
    treatment: 'Teeth Restoration & General Care',
    rating: 5,
    date: '6 months ago',
    comment:
      'Thanks a lot Dr Priyanka and other doctors and staff members. They describe the process including price beforehand and fix my teeth issues on a short period of notice. I will use them again in future. Thanks',
    verifiedPatient: true,
    location: 'Google Review',
  },
  {
    id: '4',
    patientName: 'Sandeep Kaur',
    patientAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    treatment: 'Full Lower Jaw Dental Implants',
    rating: 5,
    date: '1 year ago',
    comment:
      'I got my father\'s and bua\'s treatment done who came from Germany. Implants were done with lower teeth. Treatment was painless, nicely done and without any discomfort. Dr Arjun and staff are very co-operative and explained treatment clearly. I highly recommend the doctor and clinic.',
    verifiedPatient: true,
    location: 'NRI Patient (Germany) · Google Review',
  },
  {
    id: '5',
    patientName: 'Simranjeet Kaur',
    patientAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    treatment: 'Comprehensive Dental Care',
    rating: 5,
    date: '1 year ago',
    comment:
      'The staff are so friendly and welcoming. They really make you feel comfortable and at ease. The clinic is very clean and modern, with a relaxing atmosphere. The dentist and staff are very knowledgeable and explain everything in detail.',
    verifiedPatient: true,
    location: 'Google Review',
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
