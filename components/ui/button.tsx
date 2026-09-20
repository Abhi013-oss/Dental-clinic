import * as React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'gold' | 'primary' | 'outline' | 'secondary' | 'ghost' | 'link';
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
      default:
        'bg-[#0E3340] text-white hover:bg-[#16486E] active:bg-[#0A2630] border border-[#0E3340] shadow-sm',
      primary:
        'bg-[#159A9C] text-white hover:bg-[#117F81] active:bg-[#0D6667] border border-[#159A9C] shadow-sm hover:shadow',
      gold:
        'bg-[#159A9C] text-white hover:bg-[#117F81] active:bg-[#0D6667] border border-[#159A9C] shadow-sm hover:shadow',
      outline:
        'border border-slate-300 bg-white text-[#0E3340] hover:bg-slate-50 hover:border-[#159A9C] hover:text-[#117F81] shadow-xs',
      secondary:
        'bg-[#E8F6F5] text-[#0E6668] hover:bg-[#D5EFEF] active:bg-[#C3E8E6] border border-[#C3E8E6]',
      ghost:
        'text-[#0E3340] hover:bg-[#E8F6F5] hover:text-[#0E6668]',
      link:
        'text-[#159A9C] hover:text-[#0E6668] underline-offset-4 hover:underline p-0 h-auto font-semibold',
    };

    const sizeClasses = {
      default: 'h-11 px-6 text-sm font-semibold tracking-normal whitespace-nowrap',
      sm: 'h-9 px-4 text-xs font-semibold tracking-normal whitespace-nowrap',
      md: 'h-11 px-6 text-sm font-semibold tracking-normal whitespace-nowrap',
      lg: 'h-13 px-7 text-base font-semibold tracking-normal whitespace-nowrap',
      icon: 'h-10 w-10 p-0',
    };

    return (
      <button
        type={type}
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159A9C] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99] select-none cursor-pointer',
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
