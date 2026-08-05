'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled Client Exception:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-24">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mb-6">
        <AlertCircle className="h-8 w-8" />
      </div>

      <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
        An Unexpected Moment Occurred
      </h1>

      <p className="text-muted-foreground max-w-md mb-8 leading-relaxed text-sm sm:text-base">
        Our digital atelier encountered an unexpected issue. Please try refreshing or return to our concierge homepage.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button variant="gold" onClick={() => reset()}>
          <RefreshCw className="mr-2 h-4 w-4" />
          <span>Try Again</span>
        </Button>
        <Link href="/">
          <Button variant="outline">
            <Home className="mr-2 h-4 w-4" />
            <span>Return to Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
