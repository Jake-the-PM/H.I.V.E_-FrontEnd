import React from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = {
  default: 'bg-primary text-accent hover:bg-primary/90 font-medium',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'border border-accent/20 bg-white hover:bg-secondary text-accent',
  secondary: 'bg-secondary text-accent hover:bg-secondary/80',
  ghost: 'hover:bg-secondary text-accent/80',
  link: 'text-primary underline-offset-4 hover:underline',
};

const sizeVariants = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3 text-sm',
  lg: 'h-11 rounded-md px-8 text-lg',
  icon: 'h-10 w-10',
};

export function Button({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        buttonVariants[variant],
        sizeVariants[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}