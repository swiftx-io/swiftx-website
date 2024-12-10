'use client';

import { type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { type SectionLayoutProps } from './types';

export function SectionLayout({
  title,
  description,
  children,
  className,
}: SectionLayoutProps) {
  return (
    <section className={cn('py-12 md:py-16', className)}>
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
