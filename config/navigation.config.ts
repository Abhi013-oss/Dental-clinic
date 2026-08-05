export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const mainNavItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Treatments', href: '/services' },
  { title: 'Transformations', href: '/gallery' },
  { title: 'Specialists', href: '/team' },
  { title: 'Contact', href: '/contact' },
];

export const treatmentNavItems: NavItem[] = [
  {
    title: 'Porcelain Veneers',
    href: '/services/porcelain-veneers',
    description: 'Custom ceramic veneers crafted for natural translucency and smile symmetry.',
  },
  {
    title: 'Precision Dental Implants',
    href: '/services/dental-implants',
    description: '3D computer-guided permanent tooth replacement.',
  },
  {
    title: 'Invisalign & Clear Aligners',
    href: '/services/invisalign',
    description: 'Discreet clear aligner therapy tailored with 3D digital scans.',
  },
  {
    title: 'Full Mouth Rehabilitation',
    href: '/services/full-mouth-rehab',
    description: 'Multidisciplinary restoration for bite alignment and jaw joint harmony.',
  },
];

export const footerNavItems = {
  treatments: [
    { title: 'Porcelain Veneers', href: '/services/porcelain-veneers' },
    { title: 'Dental Implants', href: '/services/dental-implants' },
    { title: 'Invisalign Therapy', href: '/services/invisalign' },
    { title: 'Full Mouth Rehab', href: '/services/full-mouth-rehab' },
  ],
  company: [
    { title: 'About Clinic', href: '/about' },
    { title: 'Specialist Doctors', href: '/team' },
    { title: 'Smile Gallery', href: '/gallery' },
    { title: 'Patient Reviews', href: '/reviews' },
    { title: 'Clinical Blog', href: '/blog' },
    { title: 'FAQs', href: '/faq' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms & Conditions', href: '/terms' },
  ],
};
