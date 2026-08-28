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
    title: 'Dental Implants',
    href: '/services/full-mouth-rehabilitation',
    description: 'Full mouth rehabilitation, overdentures, and single implants.',
  },
  {
    title: 'Prosthodontics',
    href: '/services/bridges-crowns',
    description: 'Bridges, crowns, complete & partial dentures, veneers / laminates.',
  },
  {
    title: 'Orthodontics',
    href: '/services/brackets-braces',
    description: 'Brackets, braces, clear aligners, and corrective appliances.',
  },
  {
    title: 'Endodontics',
    href: '/services/root-canal-treatment',
    description: 'Tooth color fillings, Root Canal Treatment (RCT), post & cores.',
  },
  {
    title: 'Oral & Maxillofacial Surgery',
    href: '/services/wisdom-tooth-extraction',
    description: 'Wisdom tooth extraction, root stump extraction, oral cancer care.',
  },
  {
    title: 'Pediatric Dentistry',
    href: '/services/pulpotomy-pulpectomy',
    description: 'Pulpotomy, pulpectomy, habit breaking appliances, sealants.',
  },
  {
    title: 'Advanced Gum Treatment',
    href: '/services/cleaning-polishing',
    description: 'Cleaning, whitening, bleeding gum & bad breath treatment, splinting.',
  },
  {
    title: 'Oral Medicine & Radiology',
    href: '/services/opg-cbct',
    description: 'Digital X-ray, tobacco cessation, OPG/CBCT 3D scanning.',
  },
];

export const footerNavItems = {
  treatments: [
    { title: 'Dental Implants', href: '/services/full-mouth-rehabilitation' },
    { title: 'Prosthodontics', href: '/services/bridges-crowns' },
    { title: 'Orthodontics', href: '/services/brackets-braces' },
    { title: 'Endodontics', href: '/services/root-canal-treatment' },
    { title: 'Oral Surgery', href: '/services/wisdom-tooth-extraction' },
    { title: 'Pediatric Dentistry', href: '/services/pulpotomy-pulpectomy' },
    { title: 'Gum Treatment', href: '/services/cleaning-polishing' },
    { title: '3D Radiology', href: '/services/opg-cbct' },
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
