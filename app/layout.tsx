import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site.config';
import { ToastProvider } from '@/components/ui/toast';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Advanced Dental Care & Clinical Excellence`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Dental Clinic',
    'Beverly Hills Dentist',
    'Cosmetic Dentistry',
    'Porcelain Veneers',
    'Dental Implants',
    'Invisalign',
    'Full Mouth Rehabilitation',
    'Gentle Dental Care',
  ],
  authors: [{ name: 'ÉLITE Dental Clinic Team' }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.suite}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
    openingHoursSpecification: siteConfig.contact.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.time.split('–')[0]?.trim(),
      closes: h.time.split('–')[1]?.trim(),
    })),
    priceRange: '$$',
    image: siteConfig.ogImage,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-navy-900 antialiased selection:bg-medical-500/20 selection:text-medical-700">
        <ToastProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-medical-600 focus:text-white focus:font-bold focus:rounded-lg"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1 bg-white">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
