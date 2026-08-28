'use client';

import * as React from 'react';
import Link from 'next/link';
import { Activity, Phone, Mail, MapPin, ArrowUp, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { footerNavItems } from '@/config/navigation.config';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden pt-20 pb-12 border-t border-navy-800" aria-label="Clinic Footer">
      <div className="container relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-navy-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="group inline-flex items-center space-x-3 focus-visible:outline-none">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl shadow-md shadow-medical-600/30 transition-transform group-hover:scale-105">
                <img
                  src="/logo.jpg"
                  alt="Jawahar Dental Hospital Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl font-extrabold tracking-tight text-white leading-none">JAWAHAR</span>
                <span className="text-[10px] tracking-[0.18em] font-bold text-sky-400 uppercase mt-0.5">
                  Dental Hospital
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-normal">
              Specialist dental care center led by Dr. Arjun Jawahar Sharma & Dr. Priyanka Sharma, providing comprehensive implants, prosthodontics, orthodontics, endodontics, oral surgery, pediatric dentistry, gum care, and 3D digital radiology across Kapurthala and Delhi.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Jawahar Dental Hospital on Instagram"
                className="h-9 w-9 rounded-full bg-navy-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-medical-600 hover:text-white hover:border-medical-500 transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Jawahar Dental Hospital on Facebook"
                className="h-9 w-9 rounded-full bg-navy-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-medical-600 hover:text-white hover:border-medical-500 transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Jawahar Dental Hospital on LinkedIn"
                className="h-9 w-9 rounded-full bg-navy-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-medical-600 hover:text-white hover:border-medical-500 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Jawahar Dental Hospital on Twitter"
                className="h-9 w-9 rounded-full bg-navy-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-medical-600 hover:text-white hover:border-medical-500 transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Treatments</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {footerNavItems.treatments.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white hover:translate-x-1 transition-all inline-block">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Hospital Info</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {footerNavItems.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white hover:translate-x-1 transition-all inline-block">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Our Branches</h4>
            <div className="space-y-4 text-xs text-slate-300">
              {/* Kapurthala */}
              <div className="space-y-1">
                <span className="font-bold text-white block">Kapurthala Branch:</span>
                <p className="text-[11px] text-slate-300 font-medium">LINK ROAD, OPPOSITE PARK, NEAR YES BANK, KAPURTHALA, PUNJAB</p>
                <p className="text-[11px] text-sky-400 font-bold">Ph: 82641-71818</p>
              </div>

              {/* Delhi */}
              <div className="space-y-1 pt-2 border-t border-navy-800">
                <span className="font-bold text-white block">Delhi Branch:</span>
                <p className="text-[11px] text-slate-300 font-medium">1/101-A, PRATAP NAGAR, MAYUR VIHAR, PHASE-I, METRO PILLAR NO. 12-13, EAST DELHI</p>
                <p className="text-[11px] text-sky-400 font-bold">Ph: 99100-66721, 82855-47579</p>
              </div>

              <div className="pt-2 flex items-center space-x-2 text-[11px] text-slate-400">
                <Mail className="h-3.5 w-3.5 text-medical-400 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back To Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
            {footerNavItems.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.title}
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="inline-flex items-center space-x-2 text-xs text-slate-300 hover:text-white transition-colors group focus-visible:outline-none"
          >
            <span>Back to Top</span>
            <div className="h-8 w-8 rounded-full bg-navy-800 border border-slate-700 flex items-center justify-center group-hover:bg-medical-600 group-hover:border-medical-500 transition-colors">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
