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
    description: 'Primescan 3D digital scanners, portable digital X-rays, and 3D digital impressions for sub-millimeter precision.',
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
    description: 'Runyes 23L Class-B autoclave sterilization and multi-stage infection control adhering to global health standards.',
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
    id: 'primescan-3d-scanner',
    title: 'Primescan 3D Intraoral Scanner',
    category: '3D Digital Impressions',
    description: 'Advanced Primescan 3D intraoral digital scanner for instant, highly accurate digital impressions and computer-guided implant planning.',
    image: '/equipment/primescan-3d-scanner.png',
    benefits: ['Zero gag reflex', 'Instant 3D model', '100% digital accuracy'],
  },
  {
    id: 'portable-xray-system',
    title: 'Genoray & Port-XII Portable X-Ray',
    category: 'Advanced Digital Radiology',
    description: 'High-frequency lightweight portable dental X-ray systems (Port-XII & Genoray) engineered for rapid, ultra-low radiation chairside diagnostics.',
    image: '/equipment/portable-xray-system.png',
    benefits: ['Ultra-low radiation', 'Chairside portability', 'Rapid HD capture'],
  },
  {
    id: 'autoclave-sterilizer',
    title: '23-Litre Class-B Medical Autoclave',
    category: 'Infection Control & Sterilization',
    description: 'Runyes 23-Litre Class-B vacuum autoclave sterilizer delivering hospital-grade 100% sterilization for all surgical instruments.',
    image: '/equipment/autoclave-sterilizer.png',
    benefits: ['Class-B hospital grade', '100% sterile guarantee', 'Multi-vacuum cycle'],
  },
  {
    id: 'dental-treatment-suite',
    title: 'Ergonomic Dental Treatment Suite',
    category: 'Operatory & Patient Comfort',
    description: 'Fully equipped modern dental operatory suite with ergonomic patient chairs, shadowless LED clinical lamps, and integrated handpiece systems.',
    image: '/equipment/dental-treatment-suite.png',
    benefits: ['Ergonomic seating', 'Shadowless LED optics', 'Stress-free environment'],
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
    description: 'High-definition digital RVG X-ray or Primescan 3D digital scan evaluation.',
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
    title: 'Painless Care & Follow-Up',
    subtitle: 'Step 04',
    description: 'Experience gentle treatment followed by detailed post-care guidance.',
    duration: 'Procedure Dependent',
  },
];

export const faqData: FaqItem[] = [
  {
    question: 'Is dental treatment at Jawahar Dental Hospital pain-free?',
    answer:
      'Yes. We utilize gentle computerized anesthesia, minimally invasive micro-tools, and Primescan 3D digital diagnostics to maximize your comfort throughout every visit.',
    category: 'Patient Care',
  },
  {
    question: 'How do I schedule a consultation at the Kapurthala or Delhi branch?',
    answer:
      'You can call our Kapurthala branch directly at 82641-71818 or Delhi branch at 99100-66721 / 82855-47579, or click the "Book Appointment" button on our website.',
    category: 'Appointments',
  },
  {
    question: 'What digital technologies are available at the hospital?',
    answer:
      'We feature Primescan 3D intraoral scanners, Genoray/Port-XII portable digital X-ray units, Runyes 23L Class-B autoclaves, and 3D digital diagnostics.',
    category: 'Technology',
  },
];
