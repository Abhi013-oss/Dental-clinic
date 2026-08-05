import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, id, ...props }, ref) => {
    const selectId = id || React.useId();

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={selectId} className="block text-xs font-bold uppercase tracking-wider text-slate-500">
            {label}
          </label>
        )}
        <select
          id={selectId}
          className={cn(
            'flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2 text-sm text-navy-900 transition-all duration-200 focus:bg-white focus:border-medical-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600/20 disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          ref={ref}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-white text-navy-900 py-2">
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs font-medium text-destructive">{error}</p>}
      </div>
    );
  }
);
Select.displayName = 'Select';

export { Select };
