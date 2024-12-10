import { cn } from '@/lib/utils';

export interface ServiceHeroProps {
  title: string;
  description: string;
  className?: string;
}

export function ServiceHero({ title, description, className }: ServiceHeroProps) {
  return (
    <section
      className={cn(
        'bg-background py-24 text-foreground',
        'dark:bg-background-dark dark:text-foreground-dark',
        className
      )}
    >
      <div className="container">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
