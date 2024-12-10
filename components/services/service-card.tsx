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
        'group relative block rounded-lg border p-6 transition-all',
        'hover:border-foreground/50 hover:shadow-sm',
        'dark:hover:border-foreground-dark/50',
        'md:p-8'
      )}
    >
      {icon && <div className="mb-4 text-foreground/80 dark:text-foreground-dark/80">{icon}</div>}
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
