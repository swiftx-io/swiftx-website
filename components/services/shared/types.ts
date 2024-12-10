import { type ReactNode } from 'react';

export interface BaseServiceProps {
  readonly title: string;
  readonly description: string;
  readonly icon?: React.ComponentType;
}

export interface ProcessStepProps extends BaseServiceProps {
  readonly stepNumber: number;
}

export interface TechnologyProps {
  readonly name: string;
  readonly icon?: React.ComponentType;
}

export interface SectionLayoutProps {
  readonly title: string;
  readonly description?: string;
  readonly children: ReactNode;
  readonly className?: string;
}
