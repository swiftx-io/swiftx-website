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
    <section className={cn('py-16 bg-muted/50', className)}>
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight">Our Process</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processes.map((process, index) => (
            <div key={process.title} className="relative rounded-lg border bg-card p-6">
              <div className="mb-4 text-sm font-medium text-primary">Step {index + 1}</div>
              <h3 className="font-medium">{process.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
