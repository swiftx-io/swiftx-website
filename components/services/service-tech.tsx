'use client';

import { cn } from '@/lib/utils';

export interface ServiceTechProps {
  title: string;
  technologies: ReadonlyArray<string>;
  className?: string;
}

export function ServiceTech({ title, technologies, className }: ServiceTechProps) {
  const uniqueTechnologies = Array.from(new Set(technologies)).sort();

  return (
    <section
      className={cn(
        'py-8 sm:py-12 md:py-16 bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark',
        className
      )}
    >
      <div className="container">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            {title} Technologies
          </h2>
          <p className="mt-3 text-base text-muted-foreground dark:text-muted-foreground-dark sm:text-lg">
            Our solutions leverage industry-leading technologies and tools
          </p>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-12 grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {uniqueTechnologies.map(tech => (
            <div
              key={tech}
              className={cn(
                'flex items-center p-2 sm:p-3 rounded-lg border bg-card text-card-foreground',
                'dark:bg-card-dark dark:text-card-foreground-dark',
                'text-xs sm:text-sm md:text-base',
                'transition-all duration-200 hover:border-foreground/50 hover:shadow-lg',
                'dark:hover:border-foreground-dark/50'
              )}
            >
              <span className="mr-1.5 sm:mr-2 text-primary dark:text-primary-dark">•</span>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
