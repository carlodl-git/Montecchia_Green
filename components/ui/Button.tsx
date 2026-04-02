import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/components/ui/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-mid disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-green-dark text-warm-white shadow-sm hover:bg-green-mid hover:shadow-md',
        secondary:
          'bg-warm-white text-text-mid border border-black/10 hover:bg-warm-white/80 hover:shadow-sm',
        ghost: 'bg-transparent hover:bg-black/5 text-text-mid',
        outline: 'bg-transparent border border-black/15 hover:bg-black/5 text-text-mid',
        link: 'bg-transparent p-0 underline-offset-4 hover:underline text-text-mid',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
  }

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

