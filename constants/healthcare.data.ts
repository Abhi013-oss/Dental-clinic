export interface TechItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  benefits: string[];
}

export interface WhyChooseItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface JourneyStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const whyChooseData: WhyChooseItem[] = [
  {
    id: '1',
    iconName: 'Cpu',
    title: 'Advanced 3D Technology',
    description: 'Digital 3D scanners, OPG/CBCT 3D radiography, and digital X-rays for sub-millimeter precision and zero pain.',
  },
  {
    id: '2',
    iconName: 'HeartHandshake',
    title: 'Gentle & Pain-Free Care',
    description: 'Minimally invasive dentistry, single seating RCT, and gentle anesthesia protocols designed for patient comfort.',
  },
  {
    id: '3',
    iconName: 'Award',
    title: 'Specialist Doctors',
    description: 'Led by Dr. Arjun Jawahar Sharma (Prosthodontist & Implantologist) & Dr. Priyanka Sharma (Certified Endodontist).',
  },
  {
    id: '4',
    iconName: 'ShieldCheck',
    title: 'Sterile Hospital Standards',
    description: '100% autoclave sterilization and multi-stage infection control adhering to global health standards.',
  },
  {
    id: '5',
    iconName: 'DollarSign',
    title: 'Transparent Pricing',
    description: 'Zero hidden fees with clear treatment estimates and accessible options for all dental procedures.',
  },
  {
    id: '6',
    iconName: 'PhoneCall',
    title: 'Prompt Patient Care',
    description: 'Direct phone lines for Kapurthala (82641-71818) and Delhi (99100-66721 / 82855-47579) for urgent care.',
  },
];

export const technologyData: TechItem[] = [
  {
    id: '3d-scanning',
    title: 'Digital 3D Intraoral Scanner',
    category: 'Digital Impressions',
    description: 'Creates accurate 3D digital impressions in seconds without messy alginate trays.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    benefits: ['Zero gag reflex', 'Instant 3D smile preview', '100% digital accuracy'],
  },
  {
    id: 'opg-cbct',
    title: 'OPG / CBCT 3D Radiography',
    category: '3D Imaging',
    description: 'Full-mouth 3D volumetric CBCT imaging mapping bone density, nerve paths, and sinus anatomy.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    benefits: ['Sub-millimeter precision', 'Complete 3D jaw view', 'Safe low radiation'],
  },
  {
    id: 'digital-xray',
    title: 'Digital RVG X-Ray',
    category: 'Digital Diagnostics',
    description: 'Low-dose digital radiography providing instant high-resolution diagnostics on chairside screens.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    benefits: ['90% less radiation', '1-second display', 'Accurate diagnostic detail'],
  },
];

export const journeyData: JourneyStep[] = [
  {
    stepNumber: 1,
    title: 'Personal Consultation',
    subtitle: 'Step 01',
    description: 'Meet Dr. Arjun Jawahar Sharma or Dr. Priyanka Sharma in a comfortable setting to discuss your oral health goals.',
    duration: '30 Mins',
  },
  {
    stepNumber: 2,
    title: 'Digital Diagnosis',
    subtitle: 'Step 02',
    description: 'High-definition digital RVG X-ray or 3D digital scan evaluation.',
    duration: '20 Mins',
  },
  {
    stepNumber: 3,
    title: 'Customized Care Plan',
    subtitle: 'Step 03',
    description: 'Review a transparent treatment plan, costs, and schedule.',
    duration: '15 Mins',
  },
  {
    stepNumber: 4,
    title: 'Gentle Treatment',
    subtitle: 'Step 04',
    description: 'Relax while our specialist doctors perform your treatment gently.',
    duration: '30-60 Mins',
  },
  {
    stepNumber: 5,
    title: 'Post-Care & Follow-Up',
    subtitle: 'Step 05',
    description: 'Receive personalized recovery guidance and oral care instructions.',
    duration: 'Ongoing',
  },
];

export const faqData: FaqItem[] = [
  {
    question: 'Is dental treatment at ÉLITE Dental Clinic pain-free?',
    answer:
      'Yes. We utilize gentle local anesthesia, rotary endodontics for single seating RCT, and minimally invasive techniques to ensure every procedure is comfortable and stress-free.',
    category: 'General',
  },
  {
    question: 'Who are the specialist doctors at the clinic?',
    answer:
      'Our clinic is led by Dr. Arjun Jawahar Sharma (BDS, MDS Prosthodontics & Oral Implantologist, MBA) and Dr. Priyanka Sharma (BDS, Certified Endodontist).',
    category: 'Doctors',
  },
  {
    question: 'Where are your clinics located?',
    answer:
      'We have two branches: Kapurthala, Punjab (Link Road, Opposite Park, Near Yes Bank) and Mayur Vihar Phase-I, East Delhi (1/101-A, Pratap Nagar, Metro Pillar No. 12-13).',
    category: 'Locations',
  },
  {
    question: 'How do I contact the clinic for appointments?',
    answer:
      'You can call Kapurthala branch at 82641-71818 or Delhi branch at 99100-66721 / 82855-47579, or book online 24/7.',
    category: 'General',
  },
];
