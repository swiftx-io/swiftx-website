import { cn } from '@/lib/utils';
import type { Service } from '@/lib/services/data';

export interface ServiceOverviewProps {
  title: string;
  description: string;
  services: ReadonlyArray<Service>;
  className?: string;
}

export function ServiceOverview({ title, description, services, className }: ServiceOverviewProps) {
  return (
    <section className={cn('py-12 sm:py-16 lg:py-24', className)}>
      <div className="container">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl lg:text-2xl max-w-3xl">{description}</p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div
              key={service.id}
              className={cn(
                'rounded-lg border bg-card p-6 sm:p-8',
                'transition-all duration-200 hover:border-foreground/50 hover:shadow-lg',
                'dark:hover:border-foreground-dark/50'
              )}
            >
              <h3 className="font-medium text-lg sm:text-xl lg:text-2xl">{service.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{service.description}</p>
              {service.benefits && service.benefits.length > 0 && (
                <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  {service.benefits.map(benefit => (
                    <li key={benefit} className="flex items-center text-sm sm:text-base">
                      <span className="mr-2 text-primary">•</span>
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
