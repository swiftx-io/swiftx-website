import React from 'react';
import { cn } from '../../lib/utils';

interface BrandingTextProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function BrandingText({ children, className }: BrandingTextProps) {
  return <span className={cn('text-primary', className)}>{children}</span>;
}
