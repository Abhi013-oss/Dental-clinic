'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function Dialog({ isOpen, onClose, title, description, children, maxWidth = 'md' }: DialogProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Soft Clean Backdrop */}
      <div
        className="fixed inset-0 bg-navy-900/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'relative w-full rounded-2xl bg-white p-6 sm:p-8 shadow-2xl transition-all animate-in zoom-in-95 duration-200 z-10 border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto text-navy-900',
          maxWidthClasses[maxWidth]
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2.5 text-slate-400 hover:bg-slate-100 hover:text-navy-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600 touch-manipulation cursor-pointer select-none active:scale-95 z-20"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {title && (
          <div className="mb-6 space-y-1 pr-8">
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-900">{title}</h2>
            {description && <p className="text-sm text-slate-600 leading-relaxed">{description}</p>}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
