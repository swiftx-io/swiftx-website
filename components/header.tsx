'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button asChild>
            <Link href="/estimate-project">Estimate Project</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
