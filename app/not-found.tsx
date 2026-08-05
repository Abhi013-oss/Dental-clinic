import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Activity, Home, Calendar } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-navy-900 px-4 py-24">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-medical-50 border border-medical-200 text-medical-600 mx-auto">
          <Activity className="h-10 w-10 animate-bounce" />
        </div>

        <span className="font-sans text-6xl font-extrabold text-medical-600 block">404</span>

        <h1 className="font-sans text-3xl font-extrabold text-navy-900">Page Not Found</h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          The clinical page or resource you are seeking has been moved or does not exist. Let us guide you back to safety.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="gold" size="md" className="w-full font-bold text-xs">
              <Home className="mr-2 h-4 w-4" />
              <span>Return To Homepage</span>
            </Button>
          </Link>

          <Link href="/book" className="w-full sm:w-auto">
            <Button variant="outline" size="md" className="w-full font-bold text-xs">
              <Calendar className="mr-2 h-4 w-4 text-medical-600" />
              <span>Book Appointment</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
