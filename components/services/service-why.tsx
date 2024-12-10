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
    <section className={cn('py-16 bg-background', className)}>
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-card">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
