'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transform Your Ideas Into
            <span className="gradient-text"> Powerful Software</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We help businesses build innovative software solutions that drive growth and efficiency.
            From custom development to cloud solutions, we&apos;re your trusted technology partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-white hover:opacity-90"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Schedule a free expert session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black">
        <div className="floating-dots"></div>
      </div>
    </section>
  );
}
