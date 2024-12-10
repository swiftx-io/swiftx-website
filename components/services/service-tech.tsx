import { cn } from '@/lib/utils';

export interface ServiceTechProps {
  title: string;
  technologies: string[];
  className?: string;
}

export function ServiceTech({ title, technologies, className }: ServiceTechProps) {
  // Remove duplicates and sort alphabetically
  const uniqueTechnologies = Array.from(new Set(technologies)).sort();

  return (
    <section className={cn('py-16 bg-muted/50', className)}>
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight">Technologies & Tools</h2>
        <p className="mt-4 text-muted-foreground">
          Our {title.toLowerCase()} solutions leverage industry-leading technologies:
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {uniqueTechnologies.map(tech => (
            <div
              key={tech}
              className="flex items-center rounded-lg border bg-card px-4 py-3 text-sm"
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
