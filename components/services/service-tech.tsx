import { cn } from '@/lib/utils';

export interface Technology {
  name: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ServiceTechProps {
  technologies: Technology[];
  className?: string;
}

export function ServiceTech({ technologies, className }: ServiceTechProps) {
  return (
    <section className={cn('py-16', className)}>
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight">Technologies & Tools</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map(tech => (
            <div key={tech.name} className="rounded-lg border p-6">
              {tech.icon && (
                <div className="mb-4 text-foreground/80 dark:text-foreground-dark/80">
                  {tech.icon}
                </div>
              )}
              <h3 className="font-medium">{tech.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
