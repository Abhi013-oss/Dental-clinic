'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneCall, Calendar, Menu, X, ChevronDown, ChevronRight, Stethoscope } from 'lucide-react';
import { mainNavItems, treatmentNavItems } from '@/config/navigation.config';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Monitor scroll for subtle height compaction & elevated boundary
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 border-b',
        isScrolled
          ? 'py-2.5 border-slate-200 shadow-sm'
          : 'py-3.5 sm:py-4 border-slate-200/80 shadow-none'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Clinical Typography */}
        <Link
          href="/"
          className="group flex items-center space-x-3 focus-visible:outline-none shrink-0"
          aria-label="Jawahar Dental Hospital Homepage"
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-xl bg-white border border-slate-200/90 shadow-xs transition-transform duration-200 group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Jawahar Dental Hospital Official Emblem"
              className="h-full w-full object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-lg sm:text-xl font-extrabold tracking-tight text-navy-900 leading-none group-hover:text-medical-700 transition-colors">
              JAWAHAR
            </span>
            <span className="text-[10px] tracking-[0.2em] font-bold text-medical-600 uppercase mt-0.5">
              Dental Hospital
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (5 Core Items) */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8" aria-label="Main Navigation">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/services' && pathname.startsWith('/services'));

            if (item.href === '/services') {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    aria-expanded={servicesDropdownOpen}
                    className={cn(
                      'relative inline-flex items-center py-2 text-sm font-medium transition-colors hover:text-medical-600 cursor-pointer touch-manipulation',
                      isActive ? 'text-medical-600 font-semibold' : 'text-slate-700'
                    )}
                  >
                    <span>Treatments</span>
                    <ChevronDown
                      className={cn(
                        'ml-1 h-3.5 w-3.5 transition-transform duration-200',
                        servicesDropdownOpen && 'rotate-180 text-medical-600'
                      )}
                    />
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-medical-500 rounded-full" />
                    )}
                  </button>

                  {/* Treatments Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-88 pt-2 animate-in fade-in-50 zoom-in-98 duration-150 z-50">
                      <div className="rounded-xl bg-white p-2.5 shadow-lg border border-slate-200/90">
                        <div className="px-3 py-1.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                          Specialized Treatments & Procedures
                        </div>
                        <div className="space-y-0.5">
                          {treatmentNavItems.map((treatment) => (
                            <Link
                              key={treatment.href}
                              href={treatment.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="block rounded-lg px-3 py-2 hover:bg-medical-50/70 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-navy-900 group-hover:text-medical-600 flex items-center justify-between">
                                <span>{treatment.title}</span>
                                <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-medical-600" />
                              </div>
                              {treatment.description && (
                                <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                  {treatment.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                        <div className="mt-1.5 pt-1.5 border-t border-slate-100 px-3 py-1">
                          <Link
                            href="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-xs font-semibold text-medical-600 hover:text-medical-700 inline-flex items-center"
                          >
                            <span>View All Treatments & Protocols</span>
                            <ChevronRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
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
                  'relative py-2 text-sm font-medium transition-colors hover:text-medical-600',
                  isActive ? 'text-medical-600 font-semibold' : 'text-slate-700'
                )}
              >
                <span>{item.title}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-medical-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Phone Number & Book Appointment Button */}
        <div className="hidden sm:flex items-center space-x-5 shrink-0">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center text-xs font-semibold tracking-wide text-slate-700 hover:text-medical-600 transition-colors touch-manipulation py-1.5 px-2 rounded-lg hover:bg-slate-50"
            aria-label={`Call Hospital at ${siteConfig.contact.phone}`}
          >
            <PhoneCall className="mr-1.5 h-3.5 w-3.5 text-medical-600 shrink-0" />
            <span>{siteConfig.contact.phone}</span>
          </a>

          <Link href="/book">
            <Button
              variant="gold"
              size="sm"
              className="font-semibold text-sm tracking-normal whitespace-nowrap px-5 h-10 rounded-lg shadow-xs hover:shadow-sm touch-manipulation"
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span>Book Appointment</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-navy-900 hover:text-medical-600 rounded-lg focus-visible:outline-none touch-manipulation cursor-pointer select-none active:bg-slate-100"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-full bg-white border-b border-slate-200 p-5 shadow-xl z-50 animate-in fade-in-50 slide-in-from-top-1 duration-200 max-h-[calc(100vh-76px)] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.href === '/services') {
                return (
                  <div key={item.href} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={cn(
                        'flex items-center justify-between px-3.5 py-3 text-base font-semibold rounded-lg transition-colors touch-manipulation text-left',
                        pathname.startsWith('/services')
                          ? 'bg-medical-50 text-medical-600'
                          : 'text-navy-900 hover:bg-slate-50'
                      )}
                    >
                      <span>Treatments</span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          mobileServicesOpen && 'rotate-180 text-medical-600'
                        )}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="pl-3 pr-1 py-1 space-y-1 bg-slate-50/60 rounded-lg my-1">
                        {treatmentNavItems.map((treatment) => (
                          <Link
                            key={treatment.href}
                            href={treatment.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-medical-600 rounded-md hover:bg-white transition-colors"
                          >
                            {treatment.title}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs font-semibold text-medical-600 hover:underline"
                        >
                          View All 30+ Treatments →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-3.5 py-3 text-base font-semibold rounded-lg transition-colors touch-manipulation',
                    isActive
                      ? 'bg-medical-50 text-medical-600'
                      : 'text-navy-900 hover:bg-slate-50'
                  )}
                >
                  {item.title}
                </Link>
              );
            })}

            {/* Mobile Contact & CTA Buttons */}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center p-3 text-sm font-semibold text-navy-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors touch-manipulation"
              >
                <PhoneCall className="mr-2 h-4 w-4 text-medical-600" />
                <span>Call Clinic: {siteConfig.contact.phone}</span>
              </a>

              <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="gold" className="w-full font-semibold text-sm h-11 rounded-lg touch-manipulation">
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
