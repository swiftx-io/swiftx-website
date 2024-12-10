import { cn } from '@/lib/utils';

export interface ServiceOverviewProps {
  benefits: Array<{
    title: string;
    description: string;
  }>;
  capabilities: string[];
  className?: string;
}

export function ServiceOverview({ benefits, capabilities, className }: ServiceOverviewProps) {
  return (
    <section className={cn('py-16', className)}>
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Key Benefits</h2>
            <div className="mt-6 space-y-8">
              {benefits.map(benefit => (
                <div key={benefit.title}>
                  <h3 className="font-medium">{benefit.title}</h3>
                  <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Technical Capabilities</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {capabilities.map(capability => (
                <li key={capability} className="flex items-center">
                  <span className="mr-2">•</span>
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
