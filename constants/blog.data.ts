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
    category: 'Cosmetic Dentistry',
    excerpt: 'Discover how 3D digital smile simulation and hand-sculpted ceramic veneers achieve natural translucency and facial symmetry.',
    content: `
      Porcelain veneers represent the pinnacle of cosmetic dentistry. Unlike composite resin, high-translucency lithium disilicate ceramics possess optical properties that match natural human tooth enamel.

      ### 1. 3D Digital Smile Simulation
      Before any preparation begins, our doctors use iTero 5D intraoral scanners to map your facial structure, lip dynamics, and tooth proportion. A digital mockup allows you to preview your new smile in 3D.

      ### 2. Micro-Layering & Enamel Preservation
      Ultra-thin veneers require minimal enamel reduction (often less than 0.3mm). Hand-sculpted by master ceramists, each veneer is layered with varying opalescent tints.

      ### 3. Biocompatible Adhesive Bonding
      Using light-cured resin cements, veneers fuse to natural enamel at a molecular level, offering exceptional stain resistance and 15-20+ years of clinical durability.
    `,
    author: {
      name: 'Dr. Alexander Vance',
      role: 'Chief Cosmetic Surgeon',
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
    title: 'Why Computer-Guided 3D Dental Implants Offer 99.8% Surgical Success',
    category: 'Implantology',
    excerpt: 'How CBCT 3D radiography and surgical guide templates eliminate guesswork and accelerate healing time.',
    content: `
      Dental implantology has evolved from freehand placement to sub-millimeter computer guidance.

      ### CBCT 3D Bone Mapping
      Cone-Beam Computed Tomography provides 3D volumetric images of your jawbone density, nerve locations, and sinus cavities.

      ### Flapless Guided Surgery
      Using custom 3D printed surgical guides, implants are inserted precisely without large incisions or sutures, resulting in virtually pain-free recovery within 24-48 hours.
    `,
    author: {
      name: 'Dr. Elena Rostova',
      role: 'Lead Implantologist',
      avatar: 'https://images.unsplash.com/photo-1594824813571-24a69c100dd3?q=80&w=400&auto=format&fit=crop',
    },
    publishedAt: 'July 24, 2026',
    readTime: '4 min read',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    slug: 'invisalign-vs-traditional-braces',
    title: 'Invisalign Clear Aligners vs. Metal Braces: A Clinical Comparison for Adults',
    category: 'Orthodontics',
    excerpt: 'Comparing aesthetics, oral hygiene maintenance, treatment speed, and comfort in adult orthodontic care.',
    content: `
      Clear aligner therapy has revolutionized adult orthodontics. Using SmartTrack material, Invisalign gently shifts teeth into ideal alignment discreetly.

      ### Oral Hygiene Advantages
      Because aligners are removable, patients can brush and floss normally without bracket obstructions, reducing plaque accumulation during treatment.
    `,
    author: {
      name: 'Dr. Marcus Thorne',
      role: 'Director of Orthodontics',
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop',
    },
    publishedAt: 'July 15, 2026',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
  },
];
