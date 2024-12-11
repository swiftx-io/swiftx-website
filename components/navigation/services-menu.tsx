'use client';

import * as React from 'react';
import Link from 'next/link';
import { NavigationMenuContent, NavigationMenuLink } from '../ui/navigation-menu';
import { services } from '../../lib/services/data';
import { cn } from '../../lib/utils';

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  title: string;
  children?: React.ReactNode;
  href: string;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              'block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors text-foreground/70 hover:text-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm leading-relaxed">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export function ServicesMenu() {
  return (
    <NavigationMenuContent className="w-auto">
      <div className="w-full max-w-[1400px] p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="grid grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-base font-bold uppercase tracking-wider text-foreground/90 mb-4">
                Ideation
              </h4>
              <ul className="space-y-2">
                {services.ideation.services.map(service => (
                  <ListItem
                    key={service.id}
                    title={service.title}
                    href={`/services/ideation/${service.id}`}
                    className="hover:bg-accent/5 hover:text-foreground/90"
                  />
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-bold uppercase tracking-wider text-foreground/90 mb-4">
                Generative AI and Data
              </h4>
              <ul className="space-y-2">
                {services['ai-data'].services.map(service => (
                  <ListItem
                    key={service.id}
                    title={service.title}
                    href={`/services/ai-data/${service.id}`}
                    className="hover:bg-accent/5 hover:text-foreground/90"
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-base font-bold uppercase tracking-wider text-foreground/90 mb-4">
                Software Development
              </h4>
              <ul className="space-y-2">
                {services['software-development'].services.map(service => (
                  <ListItem
                    key={service.id}
                    title={service.title}
                    href={`/services/software-development/${service.id}`}
                    className="hover:bg-accent/5 hover:text-foreground/90"
                  />
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-bold uppercase tracking-wider text-foreground/90 mb-4">
                Maintenance
              </h4>
              <ul className="space-y-2">
                {services.maintenance.services.map(service => (
                  <ListItem
                    key={service.id}
                    title={service.title}
                    href={`/services/maintenance/${service.id}`}
                    className="hover:bg-accent/5 hover:text-foreground/90"
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-base font-bold uppercase tracking-wider text-foreground/90 mb-4">
                Design
              </h4>
              <ul className="space-y-2">
                {services.design.services.map(service => (
                  <ListItem
                    key={service.id}
                    title={service.title}
                    href={`/services/design/${service.id}`}
                    className="hover:bg-accent/5 hover:text-foreground/90"
                  />
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-bold uppercase tracking-wider text-foreground/90 mb-4">
                Cooperation Models
              </h4>
              <ul className="space-y-2">
                {services.cooperation.services.map(service => (
                  <ListItem
                    key={service.id}
                    title={service.title}
                    href={`/services/cooperation/${service.id}`}
                    className="hover:bg-accent/5 hover:text-foreground/90"
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  );
}
