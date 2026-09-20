import * as React from 'react';
import { SectionHeader } from '@/components/shared/section-header';
import { SimpleBookingForm } from '@/features/booking/simple-booking-form';
import { ShieldCheck, PhoneCall, Clock, MapPin, MessageSquare, Award, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: 'Book Consultation | Jawahar Dental Hospital & Implant Centre',
  description:
    'Schedule a specialized consultation for dental implants, root canal therapy, prosthodontics, or oral surgery at Jawahar Dental Hospital across Kapurthala and Delhi.',
};

export default function BookPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAFCFB] min-h-screen text-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        {/* Page Header */}
        <SectionHeader
          badge="Hospital Appointment Desk"
          title="Schedule Your Clinical Consultation"
          highlightTitle="In Simple Steps."
          description="Select your clinical department, preferred treating doctor, appointment date, and convenient consultation window."
          align="center"
        />

        {/* Balanced Editorial Layout: Form (8 cols) + Hospital Trust Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Booking Form Column */}
          <div className="lg:col-span-8">
            <React.Suspense
              fallback={
                <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-xs text-xs font-semibold text-slate-500">
                  Loading consultation scheduling system...
                </div>
              }
            >
              <SimpleBookingForm />
            </React.Suspense>
          </div>

          {/* Clinical Trust & Direct Helpdesk Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Phone Assistance Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-medical-50 border border-medical-200/70 text-medical-600 flex items-center justify-center shrink-0">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-navy-900">Need Immediate Help?</h3>
                  <span className="text-xs text-medical-600 font-semibold">Direct Reception Desk</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Prefer to schedule over the phone or have acute tooth pain? Call our front desk team directly:
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#FAFCFB] border border-slate-200 hover:border-medical-500/50 hover:bg-white transition-all group cursor-pointer"
                >
                  <span className="text-xs font-bold text-navy-900 group-hover:text-medical-600">
                    {siteConfig.contact.phone}
                  </span>
                  <span className="text-[11px] font-semibold text-medical-600">Tap to Call →</span>
                </a>

                <a
                  href="https://wa.me/919910066721?text=Hello%20Jawahar%20Dental%20Hospital,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-emerald-50/60 border border-emerald-200/70 hover:bg-emerald-50 transition-all group cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-900">WhatsApp Concierge</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700">Chat Live →</span>
                </a>
              </div>
            </div>

            {/* Hospital Operating Hours Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-3">
              <h4 className="font-sans text-sm font-bold text-navy-900 flex items-center">
                <Clock className="mr-2 h-4 w-4 text-medical-600" />
                Clinical Operating Hours
              </h4>

              <div className="space-y-2 text-xs pt-1">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Monday – Saturday:</span>
                  <span className="font-bold text-navy-900">9:30 AM – 7:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Sunday:</span>
                  <span className="font-bold text-medical-600">By Appointment Only</span>
                </div>
              </div>
            </div>

            {/* Hospital Locations Summary */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-4">
              <h4 className="font-sans text-sm font-bold text-navy-900 flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-medical-600" />
                Hospital Locations
              </h4>

              <div className="space-y-3 text-xs">
                <div className="space-y-1 pb-3 border-b border-slate-100">
                  <div className="font-bold text-navy-900">Kapurthala Main Branch (Punjab)</div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    {siteConfig.branches.kapurthala.address}
                  </p>
                  <div className="text-[11px] font-semibold text-medical-600">Ph: 99100-66721</div>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-navy-900">Delhi Branch (Mayur Vihar)</div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    {siteConfig.branches.delhi.address}
                  </p>
                  <div className="text-[11px] font-semibold text-medical-600">Ph: 99100-66721, 82855-47579</div>
                </div>
              </div>
            </div>

            {/* Patient Safety & Quality Assurance */}
            <div className="bg-[#FAFCFB] rounded-2xl border border-slate-200/90 p-5 space-y-2.5 text-xs text-slate-600">
              <div className="font-bold text-navy-900 flex items-center">
                <ShieldCheck className="mr-1.5 h-4 w-4 text-emerald-600" />
                Hospital Protocol Assurances
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-600">
                <li className="flex items-start space-x-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-medical-600 shrink-0 mt-0.5" />
                  <span>Runyes 23L Class-B Autoclave sterile instrument packages</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-medical-600 shrink-0 mt-0.5" />
                  <span>Gentle computerized anesthesia for minimal discomfort</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-medical-600 shrink-0 mt-0.5" />
                  <span>Dedicated consultation room disinfection before each patient</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
