'use client';

import * as React from 'react';
import Link from 'next/link';
import { Mail, ArrowUp, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { footerNavItems } from '@/config/navigation.config';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAFCFB] text-[#17252B] relative overflow-hidden pt-16 sm:pt-20 pb-12 border-t border-slate-200/90" aria-label="Clinic Footer">
      <div className="container relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-200">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="group inline-flex items-center space-x-3 focus-visible:outline-none">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-white border border-slate-200/90 shadow-xs transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Jawahar Dental Hospital Official Logo"
                  className="h-full w-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl font-extrabold tracking-tight text-[#0E3340] group-hover:text-medical-700 transition-colors leading-none">
                  JAWAHAR
                </span>
                <span className="text-[10px] tracking-[0.2em] font-bold text-medical-600 uppercase mt-0.5">
                  Dental Hospital
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed font-normal">
              Specialist dental care center led by Dr. Arjun Jawahar Sharma &amp; Dr. Priyanka Sharma, providing comprehensive implants, prosthodontics, orthodontics, endodontics, oral surgery, pediatric dentistry, gum care, and 3D digital radiology across Kapurthala and Delhi.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Jawahar Dental Hospital on Instagram"
                className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-medical-600 hover:text-white hover:border-medical-600 shadow-xs hover:scale-105 transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Jawahar Dental Hospital on Facebook"
                className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-medical-600 hover:text-white hover:border-medical-600 shadow-xs hover:scale-105 transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Jawahar Dental Hospital on LinkedIn"
                className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-medical-600 hover:text-white hover:border-medical-600 shadow-xs hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Jawahar Dental Hospital on Twitter"
                className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-medical-600 hover:text-white hover:border-medical-600 shadow-xs hover:scale-105 transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E3340]">Treatments</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {footerNavItems.treatments.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-medical-600 hover:translate-x-1 transition-all duration-200 inline-block font-medium">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E3340]">Hospital Info</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {footerNavItems.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-medical-600 hover:translate-x-1 transition-all duration-200 inline-block font-medium">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E3340]">Our Branches</h4>
            <div className="space-y-4 text-xs text-slate-600">
              {/* Kapurthala */}
              <div className="space-y-1">
                <span className="font-bold text-[#0E3340] block text-xs">Kapurthala Branch:</span>
                <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                  LINK ROAD, OPPOSITE PARK, NEAR YES BANK, KAPURTHALA, PUNJAB
                </p>
                <p className="text-[11px] text-medical-600 font-bold">
                  <a href="tel:9910066721" className="hover:underline">
                    Ph: 99100-66721
                  </a>
                </p>
              </div>

              {/* Delhi */}
              <div className="space-y-1 pt-3 border-t border-slate-200">
                <span className="font-bold text-[#0E3340] block text-xs">Delhi Branch:</span>
                <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
                  1/101-A, PRATAP NAGAR, MAYUR VIHAR, PHASE-I, METRO PILLAR NO. 12-13, EAST DELHI
                </p>
                <p className="text-[11px] text-medical-600 font-bold">
                  <a href="tel:9910066721" className="hover:underline">
                    Ph: 99100-66721
                  </a>
                  ,{' '}
                  <a href="tel:8285547579" className="hover:underline">
                    82855-47579
                  </a>
                </p>
              </div>

              <div className="pt-2 flex items-center space-x-2 text-[11px] text-slate-500">
                <Mail className="h-3.5 w-3.5 text-medical-600 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-medical-600 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back To Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
            {footerNavItems.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#0E3340] transition-colors">
                {item.title}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="inline-flex items-center space-x-2 text-xs text-slate-600 hover:text-[#0E3340] transition-colors group focus-visible:outline-none cursor-pointer"
          >
            <span>Back to Top</span>
            <div className="h-8 w-8 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 group-hover:bg-medical-600 group-hover:text-white group-hover:border-medical-600 group-hover:scale-105 transition-all duration-300">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
