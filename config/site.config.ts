export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    hours: {
      days: string;
      time: string;
    }[];
  };
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: 'ÉLITE Dental Atelier',
  tagline: 'Architects of Bespoke & Timeless Smiles',
  description:
    'Experience world-class cosmetic dentistry, precision dental implants, and porcelain aesthetics in a private, ultra-luxurious sanctuary.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://elitedentalatelier.com',
  ogImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
  contact: {
    phone: '+1 (800) 888-ELITE',
    email: 'concierge@elitedentalatelier.com',
    address: {
      street: '450 Beverly Hills Boulevard',
      suite: 'Suite 900',
      city: 'Beverly Hills',
      state: 'CA',
      zip: '90210',
      country: 'United States',
    },
    hours: [
      { days: 'Monday – Friday', time: '8:00 AM – 7:00 PM' },
      { days: 'Saturday', time: '9:00 AM – 4:00 PM (By Appointment)' },
      { days: 'Sunday', time: 'Closed (VIP Concierge Available)' },
    ],
  },
  social: {
    instagram: 'https://instagram.com/elitedentalatelier',
    facebook: 'https://facebook.com/elitedentalatelier',
    linkedin: 'https://linkedin.com/company/elitedentalatelier',
    youtube: 'https://youtube.com/c/elitedentalatelier',
  },
  stats: [
    { label: 'Smiles Transformed', value: '12,500+' },
    { label: 'Years of Excellence', value: '25+' },
    { label: 'International Master Specialists', value: '14' },
    { label: 'Client Satisfaction Rate', value: '99.8%' },
  ],
};
