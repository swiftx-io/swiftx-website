'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { ServicesMenu } from '@/components/navigation/services-menu';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-6">
          <NavigationMenu delayDuration={0}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="[&>svg]:hidden">Services</NavigationMenuTrigger>
                <ServicesMenu />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
          <Button
            variant="default"
            onClick={() => {
              router.push('/estimate-project');
            }}
          >
            Estimate Project
          </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Button
              variant="default"
              className="w-full"
              onClick={() => {
                router.push('/estimate-project');
                setIsMenuOpen(false);
              }}
            >
              Estimate Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
