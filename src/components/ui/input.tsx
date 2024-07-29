import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from './label';

// modified by dev
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; 
  icon?: React.ElementType;
}

// modified by dev
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, icon: Icon, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-2')}>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <div
          className={cn(
            `relative flex items-center h-10 rounded-lg bg-white shadow-full-custom ${Icon ? 'pr-10' : ''} text-sm`,
            className
          )}
        >
          <input
            {...props}
            type={type}
            ref={ref}
            className={cn(
              'flex h-10 w-full text-black rounded-lg px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
              Icon ? 'pr-10' : 'pr-3'
            )}
          />
          {Icon && (
            <Icon className="pointer-events-none absolute right-3 h-6 w-6 text-zinc-500" />
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
