export interface BranchLocation {
  name: string;
  address: string;
  contact: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  branches: {
    kapurthala: BranchLocation;
    delhi: BranchLocation;
  };
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
  name: 'Jawahar Dental Hospital',
  tagline: 'Specialist Dental Care & Full Mouth Rehabilitation',
  description:
    'Comprehensive dental care by Dr. Arjun Jawahar Sharma & Dr. Priyanka Sharma at Jawahar Dental Hospital across Kapurthala, Punjab and Mayur Vihar, East Delhi.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://jawahardentalhospital.com',
  ogImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
  branches: {
    kapurthala: {
      name: 'Kapurthala Branch',
      address: 'LINK ROAD, OPPOSITE PARK, NEAR YES BANK, KAPURTHALA, PUNJAB',
      contact: '99100-66721',
    },
    delhi: {
      name: 'Delhi Branch',
      address: '1/101-A, PRATAP NAGAR, MAYUR VIHAR, PHASE-I, METRO PILLAR NO. 12-13, EAST DELHI',
      contact: '99100-66721, 82855-47579',
    },
  },
  contact: {
    phone: '99100-66721',
    email: 'adityabusinesslab@gmail.com',
    address: {
      street: 'LINK ROAD, OPPOSITE PARK, NEAR YES BANK',
      suite: 'Kapurthala',
      city: 'Kapurthala',
      state: 'Punjab',
      zip: '144601',
      country: 'India',
    },
    hours: [
      { days: 'Monday – Saturday', time: '9:30 AM – 7:30 PM' },
      { days: 'Sunday', time: 'By Appointment' },
    ],
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
  stats: [
    { label: 'Smiles Transformed', value: '12,500+' },
    { label: 'Years of Experience', value: '15+' },
    { label: 'Specialist Doctors', value: '2' },
    { label: 'Hospital Locations', value: '2' },
  ],
};
