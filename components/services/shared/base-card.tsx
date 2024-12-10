'use client';

import { type ComponentType, type ReactNode } from 'react';
import { cn } from '../../../lib/utils';
import { type BaseServiceProps } from './types';

export interface BaseCardProps extends BaseServiceProps {
  readonly className?: string;
  readonly children?: ReactNode;
  readonly icon?: ComponentType<{ className?: string }>;
}

export function BaseCard({ title, description, icon: Icon, children, className }: BaseCardProps) {
  return (
    <div
      className={cn('rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50', className)}
    >
      {Icon && <Icon className="mb-4 h-10 w-10 text-primary" />}
      <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      {children}
    </div>
  );
}
