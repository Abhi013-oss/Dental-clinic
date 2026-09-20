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
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label htmlFor={selectId} className="block text-xs font-semibold text-[#17252B]">
            {label}
          </label>
        )}
        <select
          id={selectId}
          className={cn(
            'flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-[#17252B] transition-colors duration-150 focus:border-[#159A9C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159A9C]/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50',
            error && 'border-destructive focus:border-destructive focus-visible:ring-destructive/20',
            className
          )}
          ref={ref}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-white text-[#17252B] py-2">
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
