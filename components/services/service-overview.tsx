import { cn } from '@/lib/utils';
import type { Service } from '@/lib/services/data';

export interface ServiceOverviewProps {
  title: string;
  description: string;
  services: Service[];
  className?: string;
}

export function ServiceOverview({ title, description, services, className }: ServiceOverviewProps) {
  return (
    <section className={cn('py-16', className)}>
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div key={service.id} className="rounded-lg border bg-card p-6">
              <h3 className="font-medium">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              {service.benefits && service.benefits.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {service.benefits.map(benefit => (
                    <li key={benefit} className="flex items-center text-sm">
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
