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
              'block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors text-foreground/80 hover:text-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm leading-none">{title}</div>
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
    <NavigationMenuContent className="w-[800px] p-6 bg-background">
      <div className="grid grid-cols-3 gap-8">
        {Object.entries(services).map(([key, category]) => (
          <div key={key} className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">
              {category.title}
            </h4>
            <ul className="space-y-3">
              {category.services.map(service => (
                <ListItem
                  key={service.id}
                  title={service.title}
                  href={`/services/${key}/${service.id}`}
                  className="hover:bg-accent/10"
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Link href="/services" className="text-sm hover:underline">
          All services
        </Link>
      </div>
    </NavigationMenuContent>
  );
}
