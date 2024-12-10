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
        'group relative block rounded-lg border p-6 transition-all duration-200',
        'hover:border-foreground/50 hover:shadow-lg hover:-translate-y-0.5',
        'dark:hover:border-foreground-dark/50',
        'sm:p-6 md:p-8 lg:p-10'
      )}
    >
      {icon && (
        <div className="mb-4 text-foreground/80 dark:text-foreground-dark/80 text-2xl sm:text-3xl lg:text-4xl">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">{title}</h3>
      <p className="mt-2 text-muted-foreground text-sm sm:text-base lg:text-lg">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span
              key={tech}
              className={cn(
                'inline-flex items-center rounded-md px-2 py-1',
                'bg-muted/80 text-muted-foreground',
                'text-xs sm:text-sm',
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
