import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || React.useId();

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-semibold text-[#17252B]">
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            'flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-[#17252B] transition-colors duration-150 placeholder:text-slate-400 focus:border-[#159A9C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159A9C]/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50',
            error && 'border-destructive focus:border-destructive focus-visible:ring-destructive/20',
            className
          )}
          ref={ref}
          {...props}
        />
        {error ? (
          <p className="text-xs font-medium text-destructive">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-[#64757A]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
