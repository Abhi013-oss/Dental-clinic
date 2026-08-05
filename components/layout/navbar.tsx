'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneCall, Calendar, Menu, X, ChevronDown, Activity } from 'lucide-react';
import { mainNavItems, treatmentNavItems } from '@/config/navigation.config';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200/80 py-3.5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center space-x-3 focus-visible:outline-none shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-medical-600 shadow-md shadow-medical-600/20 transition-transform duration-300 group-hover:scale-105">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xl font-extrabold tracking-tight text-navy-900 leading-none">ÉLITE</span>
            <span className="text-[10px] tracking-[0.18em] font-bold text-medical-600 uppercase mt-0.5">
              Dental Clinic
            </span>
          </div>
        </Link>

        {/* Spacious Desktop Navigation (5 Core Items) */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;

            if (item.href === '/services') {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href="/services"
                    className={cn(
                      'inline-flex items-center py-2 text-sm font-bold transition-colors hover:text-medical-600',
                      isActive ? 'text-medical-600 font-extrabold' : 'text-navy-900/80'
                    )}
                  >
                    <span>Treatments</span>
                    <ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform duration-200" />
                  </Link>

                  {/* Treatments Dropdown */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-80 pt-2 animate-in fade-in zoom-in-95 duration-200">
                      <div className="rounded-2xl bg-white p-3 shadow-xl border border-slate-200">
                        {treatmentNavItems.map((treatment) => (
                          <Link
                            key={treatment.href}
                            href={treatment.href}
                            className="block rounded-xl p-3 hover:bg-medical-50 transition-colors group"
                          >
                            <div className="text-sm font-bold text-navy-900 group-hover:text-medical-600">
                              {treatment.title}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                              {treatment.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'py-2 text-sm font-bold transition-colors hover:text-medical-600',
                  isActive ? 'text-medical-600 font-extrabold' : 'text-navy-900/80'
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls & Telephone / Book CTA */}
        <div className="hidden sm:flex items-center space-x-6 shrink-0">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center text-xs font-bold tracking-wide text-navy-900 hover:text-medical-600 transition-colors"
          >
            <PhoneCall className="mr-1.5 h-4 w-4 text-medical-600" />
            <span>{siteConfig.contact.phone}</span>
          </a>

          <Link href="/book">
            <Button variant="gold" size="sm" className="font-bold text-sm tracking-normal whitespace-nowrap px-6 shadow-md shadow-medical-600/20">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Book Appointment</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-navy-900 hover:text-medical-600 rounded-lg focus-visible:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-2.5 text-base font-bold rounded-xl transition-colors',
                  pathname === item.href
                    ? 'bg-medical-50 text-medical-600 font-extrabold'
                    : 'text-navy-900 hover:bg-slate-50'
                )}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="gold" className="w-full font-bold text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Book Appointment</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
