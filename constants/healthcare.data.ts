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
    description: 'Computer-guided 3D scanners and digital CBCT imaging for sub-millimeter precision and zero pain.',
  },
  {
    id: '2',
    iconName: 'HeartHandshake',
    title: 'Gentle & Pain-Free Care',
    description: 'Minimally invasive laser dentistry and gentle anesthesia protocols designed for anxious patients.',
  },
  {
    id: '3',
    iconName: 'Award',
    title: 'International Specialists',
    description: 'Harvard and Stanford trained doctors with over 50 years of combined clinical excellence.',
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
    description: 'Zero hidden fees with clear treatment estimates and flexible zero-interest payment plans.',
  },
  {
    id: '6',
    iconName: 'PhoneCall',
    title: '24/7 Emergency Support',
    description: 'Immediate emergency dental concierge available round-the-clock for urgent tooth pain or trauma.',
  },
];

export const technologyData: TechItem[] = [
  {
    id: '3d-scanner',
    title: 'iTero Element 5D Scanner',
    category: 'Digital Impressions',
    description: 'Creates accurate 3D digital impressions in seconds without messy alginate trays.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    benefits: ['Zero gag reflex', 'Instant 3D smile preview', '100% digital accuracy'],
  },
  {
    id: 'laser-dentistry',
    title: 'Biolase Waterlase iPlus Laser',
    category: 'Minimally Invasive',
    description: 'Performs gum contouring and cavity preparation using laser energy and water droplets with minimal anesthesia.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    benefits: ['Virtually painless', 'Faster healing time', 'No drill vibration noise'],
  },
  {
    id: 'cad-cam',
    title: 'CEREC Same-Day CAD/CAM',
    category: '3D Restoration',
    description: 'Mills high-strength ceramic crowns, inlays, and veneers right in our clinic within a single appointment.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    benefits: ['Single visit crowns', 'No temporary crowns needed', 'Precision ceramic fit'],
  },
  {
    id: 'digital-xray',
    title: 'Low-Radiation Digital CBCT',
    category: '3D Radiography',
    description: 'Ultra-low dose 3D volumetric radiography mapping bone density, nerve pathways, and sinus cavities.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    benefits: ['90% less radiation', 'Complete 3D jaw view', 'Safe for all ages'],
  },
];

export const journeyData: JourneyStep[] = [
  {
    stepNumber: 1,
    title: 'Personal Consultation',
    subtitle: 'Step 01',
    description: 'Meet your specialist doctor in a comfortable suite to discuss your health goals and preferences.',
    duration: '30 Mins',
  },
  {
    stepNumber: 2,
    title: '3D Digital Diagnosis',
    subtitle: 'Step 02',
    description: 'High-definition 3D CBCT scan and iTero intraoral digital impression creation.',
    duration: '20 Mins',
  },
  {
    stepNumber: 3,
    title: 'Customized Care Plan',
    subtitle: 'Step 03',
    description: 'Review a transparent 3D simulation of your treatment outcome, costs, and timeline.',
    duration: '15 Mins',
  },
  {
    stepNumber: 4,
    title: 'Gentle Treatment',
    subtitle: 'Step 04',
    description: 'Relax in our ergonomic suite while our master doctors perform your procedure gently.',
    duration: '45-90 Mins',
  },
  {
    stepNumber: 5,
    title: 'Post-Care & Follow-Up',
    subtitle: 'Step 05',
    description: 'Receive personalized recovery instructions and check-ins from your care coordinator.',
    duration: 'Ongoing',
  },
];

export const faqData: FaqItem[] = [
  {
    question: 'Is dental treatment at ÉLITE Pain-Free?',
    answer:
      'Yes. We utilize computer-assisted local anesthesia, minimally invasive Waterlase lasers, and optional sleep dentistry to ensure every procedure is completely painless and stress-free.',
    category: 'General',
  },
  {
    question: 'How long do porcelain veneers and implants last?',
    answer:
      'Our medical-grade titanium implants are designed to last a lifetime. Porcelain veneers crafted by our master ceramists typically last 15-20+ years with proper hygiene.',
    category: 'Treatments',
  },
  {
    question: 'Do you offer emergency dental appointments?',
    answer:
      'Yes. We reserve daily emergency slots for severe toothache, broken crowns, or facial trauma. Call our emergency hotline at +1 (800) 888-ELITE for immediate assistance.',
    category: 'Emergency',
  },
  {
    question: 'What financial plans and insurance do you accept?',
    answer:
      'We accept all major PPO insurance plans and provide zero-interest monthly installment options (CareCredit, Sunbit) so premium care is accessible to all families.',
    category: 'Payment',
  },
  {
    question: 'How can I schedule my first consultation?',
    answer:
      'You can easily book online using our 24/7 interactive booking system or call our reception. We offer same-week appointments for new patients.',
    category: 'General',
  },
];
