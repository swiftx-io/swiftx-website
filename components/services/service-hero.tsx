import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface ServiceHeroProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
}

export function ServiceHero({ title, description, Icon, className }: ServiceHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-background py-24 text-foreground',
        'dark:bg-background-dark dark:text-foreground-dark',
        className
      )}
    >
      <div className="container relative z-10">
        <div className="flex items-start gap-6">
          <Icon className="h-12 w-12 flex-shrink-0 text-primary" />
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-transparent" />
    </section>
  );
}
