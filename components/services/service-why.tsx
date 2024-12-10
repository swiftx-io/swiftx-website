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
    <section
      className={cn(
        'py-8 sm:py-12 md:py-16 bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark',
        className
      )}
    >
      <div className="container">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={cn(
                'flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-lg border',
                'bg-card text-card-foreground dark:bg-card-dark dark:text-card-foreground-dark',
                'transition-all duration-200 hover:border-foreground/50 hover:shadow-lg',
                'dark:hover:border-foreground-dark/50'
              )}
            >
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-primary-dark flex-shrink-0" />
              <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-foreground-dark">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
