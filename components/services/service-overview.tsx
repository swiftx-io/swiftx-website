import { cn } from '@/lib/utils';
import type { Service } from '@/lib/services/data';

export interface ServiceOverviewProps {
  readonly title: string;
  readonly description: string;
  readonly services: ReadonlyArray<Service>;
  readonly className?: string;
}

export function ServiceOverview({ title, description, services, className }: ServiceOverviewProps) {
  return (
    <section className={cn('py-8 sm:py-12 md:py-16', className)}>
      <div className="container">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg md:text-xl max-w-3xl">
            {description}
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div
              key={service.id}
              className={cn(
                'rounded-lg border bg-card p-4 sm:p-6',
                'transition-all duration-200 hover:border-foreground/50 hover:shadow-lg',
                'dark:hover:border-foreground-dark/50'
              )}
            >
              <h3 className="font-medium text-base sm:text-lg md:text-xl">{service.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                {service.description}
              </p>
              {service.benefits && service.benefits.length > 0 && (
                <ul className="mt-3 sm:mt-4 md:mt-6 space-y-1.5 sm:space-y-2">
                  {service.benefits.map(benefit => (
                    <li key={benefit} className="flex items-start text-sm sm:text-base">
                      <span className="mr-2 text-primary mt-1">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
