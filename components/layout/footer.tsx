'use client';

import * as React from 'react';
import Link from 'next/link';
import { Activity, Phone, Mail, MapPin, ArrowUp, Instagram, Facebook, Linkedin, Twitter, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { footerNavItems } from '@/config/navigation.config';
import { Button } from '@/components/ui/button';

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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-600 shadow-md shadow-medical-600/30 transition-transform group-hover:scale-105">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl font-extrabold tracking-tight text-white leading-none">ÉLITE</span>
                <span className="text-[10px] tracking-[0.18em] font-bold text-sky-400 uppercase mt-0.5">
                  Dental Clinic
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-normal">
              Beverly Hills' flagship center for advanced 3D biophotonic dentistry, ceramic veneers, and computer-guided implant restorations.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ÉLITE Dental Clinic on Instagram"
                className="h-9 w-9 rounded-full bg-navy-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-medical-600 hover:text-white hover:border-medical-500 transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ÉLITE Dental Clinic on Facebook"
                className="h-9 w-9 rounded-full bg-navy-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-medical-600 hover:text-white hover:border-medical-500 transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ÉLITE Dental Clinic on LinkedIn"
                className="h-9 w-9 rounded-full bg-navy-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-medical-600 hover:text-white hover:border-medical-500 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ÉLITE Dental Clinic on Twitter"
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Clinic Info</h4>
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">Beverly Hills Clinic</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-medical-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}, {siteConfig.contact.address.city}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-medical-400 shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-medical-400 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
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
