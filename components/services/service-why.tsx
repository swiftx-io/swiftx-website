'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface ServiceWhyProps {
  title?: string;
  benefits?: readonly string[];
  className?: string;
}

export function ServiceWhy({ title = 'Why Choose SwiftX', benefits, className }: ServiceWhyProps) {
  if (!benefits?.length) return null;

  return (
    <section className={cn('py-12 sm:py-16 lg:py-24 bg-background', className)}>
      <div className="container">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={cn(
                'flex items-start space-x-4 p-6 sm:p-8 rounded-lg bg-card',
                'transition-all duration-200 hover:border-foreground/50 hover:shadow-lg',
                'dark:hover:border-foreground-dark/50'
              )}
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 sm:w-7 sm:h-7" />
              <p className="text-base sm:text-lg lg:text-xl">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
