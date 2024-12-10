import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  technologies?: string[];
}

export function ServiceCard({ id, title, description, icon, technologies }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${id}`}
      className={cn(
        'group relative block rounded-lg border p-4',
        'transition-all duration-200',
        'hover:border-foreground/50 hover:shadow-lg hover:-translate-y-0.5',
        'dark:hover:border-foreground-dark/50',
        'sm:p-6 md:p-8'
      )}
    >
      {icon && (
        <div className="mb-3 text-foreground/80 dark:text-foreground-dark/80 text-xl sm:text-2xl md:text-3xl">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">{title}</h3>
      <p className="mt-2 text-muted-foreground text-sm sm:text-base">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="mt-3 sm:mt-4 md:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
          {technologies.map(tech => (
            <span
              key={tech}
              className={cn(
                'inline-flex items-center rounded-md px-1.5 py-0.5 sm:px-2 sm:py-1',
                'bg-muted/80 text-muted-foreground text-[10px] sm:text-xs',
                'transition-colors group-hover:bg-primary/10 group-hover:text-primary'
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
