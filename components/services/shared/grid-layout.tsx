'use client';

import { type ReactNode } from 'react';
import { cn } from '../../../lib/utils';

export interface GridLayoutProps {
  readonly children: ReactNode;
  readonly columns?: 2 | 3 | 4;
  readonly className?: string;
}

export function GridLayout({ children, columns = 3, className }: GridLayoutProps) {
  return (
    <div
      className={cn(
        'grid gap-6',
        {
          'md:grid-cols-2': columns === 2,
          'md:grid-cols-3': columns === 3,
          'md:grid-cols-4': columns === 4,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
