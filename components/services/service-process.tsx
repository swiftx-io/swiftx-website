import { cn } from '@/lib/utils';
import type { Service } from '@/lib/services/data';

export interface ServiceProcessProps {
  services: ReadonlyArray<Service>;
  className?: string;
}

export function ServiceProcess({ services, className }: ServiceProcessProps) {
  // Get all processes from services that have them
  const processes = services
    .filter(service => service.process && service.process.length > 0)
    .flatMap(service => service.process || []);

  if (processes.length === 0) return null;

  return (
    <section className={cn('py-12 sm:py-16 lg:py-24 bg-muted/50', className)}>
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
          Our Process
        </h2>
        <div className="mt-8 sm:mt-12 lg:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processes.map((process, index) => (
            <div
              key={process.title}
              className={cn(
                'relative rounded-lg border bg-card p-6 sm:p-8',
                'transition-all duration-200 hover:border-foreground/50 hover:shadow-lg',
                'dark:hover:border-foreground-dark/50'
              )}
            >
              <div className="mb-4 text-sm font-medium text-primary sm:text-base">
                Step {index + 1}
              </div>
              <h3 className="font-medium text-lg sm:text-xl lg:text-2xl">{process.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
