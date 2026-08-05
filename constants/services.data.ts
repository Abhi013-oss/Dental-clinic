import { ServiceItem } from '@/types/service.types';

export const servicesData: ServiceItem[] = [
  {
    id: 'porcelain-veneers',
    slug: 'porcelain-veneers',
    title: 'Master Porcelain Veneers',
    category: 'Cosmetic',
    shortDescription:
      'Hand-sculpted ultra-thin ceramic veneers engineered to match natural enamel translucency and facial symmetry.',
    fullDescription:
      'Our master porcelain veneers represent the pinnacle of cosmetic dentistry. Crafted by elite ceramists, each veneer is individualised to your facial anatomy, skin tone, and golden proportions for a radiant, enduring smile.',
    startingPrice: 2500,
    durationMinutes: 90,
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Sparkles',
    popular: true,
    features: [
      { title: 'Custom Hand-Layered Porcelain', description: 'Zero artificial opacity with multi-layered ceramic depth.' },
      { title: 'Minimal Enamel Removal', description: 'Preserves maximum natural tooth structure with precision microscopic prep.' },
      { title: 'Stain & Discoloration Impervious', description: 'Advanced glazing guarantees lifelong shade stability.' },
    ],
    processSteps: [
      { stepNumber: 1, title: '3D Smile Design Consultation', description: 'Digital facial scanning & trial smile mock-up.', duration: '60 Mins' },
      { stepNumber: 2, title: 'Microscopic Preparation', description: 'Precision preparation and temporary veneers placement.', duration: '90 Mins' },
      { stepNumber: 3, title: 'Final Bonding & Polishing', description: 'Permanent bonding of hand-crafted porcelain shells.', duration: '90 Mins' },
    ],
    benefits: ['Radiant symmetry', 'Natural light transmission', 'Decade+ longevity', 'Stain resistant'],
  },
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    title: 'Precision Guided Dental Implants',
    category: 'Implantology',
    shortDescription:
      'Computer-guided titanium & zirconia implant placement providing lifelong stability and natural root reproduction.',
    fullDescription:
      'Restore lost teeth with 3D CBCT guided implantology. Using medical-grade titanium and metal-free zirconia, our implant restorations integrate seamlessly with your jawbone to restore full masticatory function and flawless aesthetics.',
    startingPrice: 3800,
    durationMinutes: 120,
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    iconName: 'ShieldCheck',
    popular: true,
    features: [
      { title: '3D CBCT Surgical Guide', description: 'Sub-millimeter accuracy ensuring zero nerve or sinus disturbance.' },
      { title: 'Immediate Load Provisionals', description: 'Walk out with temporary aesthetic teeth on the same day.' },
      { title: 'Biocompatible Zirconia Crowns', description: 'Tissue-friendly ceramic crowns customized to adjacent teeth.' },
    ],
    processSteps: [
      { stepNumber: 1, title: 'Diagnostic 3D Scan', description: 'Bone density evaluation & 3D virtual plan creation.', duration: '45 Mins' },
      { stepNumber: 2, title: 'Guided Placement', description: 'Flapless minimally-invasive placement.', duration: '60 Mins' },
      { stepNumber: 3, title: 'Crown Restoration', description: 'Final crown attachment following osseointegration.', duration: '45 Mins' },
    ],
    benefits: ['Lifelong durability', 'Preserves bone volume', 'Natural chewing power', 'Metal-free options'],
  },
  {
    id: 'invisalign',
    slug: 'invisalign',
    title: 'Invisalign & Clear Orthodontics',
    category: 'Orthodontics',
    shortDescription:
      'Virtually invisible alignment therapy designed by specialist orthodontists for rapid, discreet correction.',
    fullDescription:
      'Achieve optimal dental alignment without metallic brackets. Our Invisalign treatment utilizes iTero 5D digital scanning to map your entire alignment journey down to 0.1mm increments.',
    startingPrice: 4500,
    durationMinutes: 45,
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Smile',
    popular: false,
    features: [
      { title: 'iTero 5D Impression-Free Scan', description: 'No messy alginate impressions; 100% digital 3D model.' },
      { title: 'Accelerated Orthodontic Protocol', description: 'Custom movement plans reducing overall treatment timeline by 30%.' },
      { title: 'Includes Whitening & Vivera Retainers', description: 'Includes clinical whitening during aligner therapy.' },
    ],
    processSteps: [
      { stepNumber: 1, title: 'iTero 3D Scan', description: 'Instant outcome simulation showing your transformed smile.', duration: '30 Mins' },
      { stepNumber: 2, title: 'Aligner Delivery', description: 'Fitting of custom aligner sets & attachment bonding.', duration: '45 Mins' },
      { stepNumber: 3, title: 'Progress Checks', description: 'Bi-monthly checkups & aligner progressions.', duration: '20 Mins' },
    ],
    benefits: ['100% Invisible', 'Removable for dining', 'Gentle tooth movement', 'Predictable results'],
  },
  {
    id: 'full-mouth-rehab',
    slug: 'full-mouth-rehab',
    title: 'Full Mouth Aesthetic Rehabilitation',
    category: 'Rehabilitation',
    shortDescription:
      'Comprehensive multidisciplinary restoration renewing bite alignment, jaw comfort, and complete facial aesthetics.',
    fullDescription:
      'Designed for complex cases involving worn enamel, TMJ pain, or missing teeth. Full Mouth Rehabilitation harmonizes neuromuscular jaw function with master ceramic restorations for total rejuvenation.',
    startingPrice: 15000,
    durationMinutes: 180,
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Crown',
    popular: true,
    features: [
      { title: 'Neuromuscular Bite Registration', description: 'Relieves chronic jaw tension and establishes proper vertical dimension.' },
      { title: 'All-On-4 & Ceramic Bridge Options', description: 'Total jaw reconstruction with fixed aesthetic prosthetics.' },
      { title: 'Sedation Dentistry Options', description: 'Relax in sleep-like comfort under board-certified anesthesiologists.' },
    ],
    processSteps: [
      { stepNumber: 1, title: 'Joint & Aesthetic Diagnosis', description: 'Kinesiograph & TMJ evaluation.', duration: '90 Mins' },
      { stepNumber: 2, title: 'Provisional Reconstruction', description: 'Wearing functional trial teeth to test bite height.', duration: '120 Mins' },
      { stepNumber: 3, title: 'Master Porcelain Insertion', description: 'Final insertion of gold/porcelain crowns & veneers.', duration: '180 Mins' },
    ],
    benefits: ['Total smile revival', 'Eliminates TMJ discomfort', 'Restores youth facial proportions', 'Permanent solution'],
  },
];
