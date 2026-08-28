export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  heroImage: string;
  featured?: boolean;
}

export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    slug: 'the-science-of-porcelain-veneers',
    title: 'The Science of Porcelain Veneers: How Micro-Layered Ceramics Replicate Natural Enamel',
    category: 'Prosthodontics',
    excerpt: 'Discover how 3D digital smile simulation and hand-sculpted ceramic veneers achieve natural translucency and facial symmetry.',
    content: `
      Porcelain veneers represent the pinnacle of prosthodontic aesthetic dentistry. High-translucency ceramic materials possess optical properties that match natural human tooth enamel.

      ### 1. 3D Digital Smile Simulation
      Before preparation, our doctors use digital scanners to map facial structure and tooth proportion for a custom trial preview.

      ### 2. Micro-Layering & Enamel Preservation
      Ultra-thin veneers require minimal enamel reduction. Hand-sculpted ceramic shells are layered with opalescent natural tints.

      ### 3. Biocompatible Adhesive Bonding
      Using light-cured resin cements, veneers fuse to natural enamel at a molecular level for long-lasting stability.
    `,
    author: {
      name: 'Dr. Arjun Jawahar Sharma',
      role: 'BDS, MDS (Prosthodontics & Oral Implantologist)',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
    },
    publishedAt: 'August 1, 2026',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    slug: 'computer-guided-dental-implants',
    title: 'Why Computer-Guided 3D Dental Implants Offer Superior Surgical Precision',
    category: 'Dental Implants',
    excerpt: 'How CBCT 3D radiography and surgical guide templates eliminate guesswork and accelerate healing time.',
    content: `
      Dental implantology utilizes sub-millimeter computer guidance for safe, comfortable tooth replacement.

      ### CBCT 3D Bone Mapping
      Cone-Beam Computed Tomography provides 3D volumetric images of jawbone density, nerve locations, and sinus cavities.

      ### Flapless Guided Surgery
      Using custom surgical guides, implants are inserted precisely with minimal swelling and fast recovery.
    `,
    author: {
      name: 'Dr. Arjun Jawahar Sharma',
      role: 'BDS, MDS (Prosthodontics & Oral Implantologist)',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
    },
    publishedAt: 'July 24, 2026',
    readTime: '4 min read',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    slug: 'invisalign-vs-traditional-braces',
    title: 'Single Seating RCT: Modern Painless Endodontic Care',
    category: 'Endodontics',
    excerpt: 'How single-visit root canal treatment saves teeth comfortably and efficiently.',
    content: `
      Single seating root canal therapy has transformed endodontics using rotary instrumentation and apex locators.

      ### Pain-Free Infection Control
      Advanced local anesthesia and rotary files clean root canals thoroughly in a single comfortable session.
    `,
    author: {
      name: 'Dr. Priyanka Sharma',
      role: 'BDS, Certified Endodontist',
      avatar: 'https://images.unsplash.com/photo-1594824813566-78a9c2b4c107?q=80&w=400&auto=format&fit=crop',
    },
    publishedAt: 'July 15, 2026',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
  },
];
