import * as React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'gold' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'gold',
      size = 'default',
      isLoading = false,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      default: 'bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-md hover:-translate-y-0.5',
      gold: 'bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-md shadow-medical-600/20 hover:shadow-lg hover:shadow-medical-600/30 hover:-translate-y-0.5',
      outline: 'border border-slate-200 bg-white text-navy-900 hover:bg-slate-50 hover:border-medical-500/50 hover:text-medical-600 shadow-xs hover:-translate-y-0.5',
      secondary: 'bg-medical-50 text-medical-700 hover:bg-medical-100 border border-medical-200',
      ghost: 'text-navy-900 hover:bg-medical-50 hover:text-medical-600',
      link: 'text-medical-600 underline-offset-4 hover:underline p-0',
    };

    const sizeClasses = {
      default: 'h-12 px-7 text-sm font-bold tracking-normal whitespace-nowrap',
      sm: 'h-10 px-5 text-xs font-bold tracking-normal whitespace-nowrap',
      md: 'h-12 px-7 text-sm font-bold tracking-normal whitespace-nowrap',
      lg: 'h-14 px-8 text-base font-bold tracking-normal whitespace-nowrap',
      icon: 'h-12 w-12 p-0',
    };

    return (
      <button
        type={type}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-600/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin text-current" />
            <span>Processing...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
