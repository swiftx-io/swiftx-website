'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface ServiceContactProps {
  readonly className?: string;
}

export function ServiceContact({ className }: ServiceContactProps) {
  const handleContactClick = () => {
    // Open HubSpot meeting scheduler
    window.open('https://meetings.hubspot.com/swiftx', '_blank');
  };

  return (
    <section className={cn('py-16', className)}>
      <div className="container">
        <div className="rounded-lg border bg-muted/50 p-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Let&apos;s discuss how we can help you achieve your technical goals with our expertise
            and proven methodologies.
          </p>
          <Button onClick={handleContactClick} className="mt-6" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
