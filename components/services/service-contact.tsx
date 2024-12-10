'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface ServiceContactProps {
  readonly className?: string;
}

export function ServiceContact({ className }: ServiceContactProps) {
  return (
    <section className={cn('py-16', className)}>
      <div className="container">
        <div className="rounded-lg border bg-muted/50 p-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Let&apos;s discuss how we can help you achieve your technical goals with our expertise
            and proven methodologies.
          </p>
          <Button asChild className="mt-6" size="lg">
            <Link href="/estimate-project">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
