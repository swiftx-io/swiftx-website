import { cn } from '@/lib/utils';

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceProcessProps {
  steps: ProcessStep[];
  className?: string;
}

export function ServiceProcess({ steps, className }: ServiceProcessProps) {
  return (
    <section className={cn('py-16 bg-muted/50', className)}>
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight">Our Process</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-lg border bg-background p-6">
              <div className="mb-4 text-sm font-medium text-muted-foreground">Step {index + 1}</div>
              <h3 className="font-medium">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
