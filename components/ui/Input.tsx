import * as React from 'react';

import { cn } from '@/components/ui/utils';

export function Input({
  className,
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-xl border border-green-dark/15 bg-warm-white px-3.5 py-2 text-sm text-text-dark shadow-sm transition-[border-color,box-shadow] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-mid/50 hover:border-green-dark/25 focus-visible:border-green-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-mid/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

