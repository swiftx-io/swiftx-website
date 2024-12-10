'use client';

import { cn } from '@/lib/utils';

interface ServicesLayoutProps {
  readonly children: React.ReactNode;
}

export default function ServicesLayout({ children }: Readonly<ServicesLayoutProps>) {
  return (
    <div className={cn('min-h-screen bg-background font-sans antialiased', 'dark:bg-background-dark')}>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
