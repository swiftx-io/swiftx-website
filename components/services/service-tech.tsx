'use client';

import { cn } from '@/lib/utils';
import type { Service } from '@/lib/services/data';

export interface ServiceTechProps {
  title: string;
  technologies: ReadonlyArray<string>;
  className?: string;
}

export function ServiceTech({ title, technologies, className }: ServiceTechProps) {
  // Create a new array from the readonly array for sorting
  const uniqueTechnologies = Array.from(new Set(technologies)).sort();

  return (
    <section className={cn('py-12 sm:py-16 lg:py-24 bg-muted/50', className)}>
      <div className="container">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            {title} Technologies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Our solutions leverage industry-leading technologies and tools
          </p>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {uniqueTechnologies.map((tech) => (
            <div
              key={tech}
              className={cn(
                'flex items-center rounded-lg border bg-card px-4 py-3',
                'text-sm sm:text-base',
                'transition-all duration-200 hover:border-foreground/50 hover:shadow-lg',
                'dark:hover:border-foreground-dark/50'
              )}
            >
              <span className="mr-2 text-primary">•</span>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
