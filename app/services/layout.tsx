'use client';

import { cn } from '@/lib/utils';
import { services } from '@/lib/services/data';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={cn('min-h-screen bg-background font-sans antialiased', 'dark:bg-background-dark')}>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              All Services
            </Link>
            {Object.entries(services).map(([key, category]) => (
              <Link
                key={key}
                href={`/services/${key}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {category.title}
              </Link>
            ))}
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="container py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/services"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                All Services
              </Link>
              {Object.entries(services).map(([key, category]) => (
                <Link
                  key={key}
                  href={`/services/${key}`}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
}
