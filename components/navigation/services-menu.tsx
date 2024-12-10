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
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export function ServicesMenu() {
  return (
    <NavigationMenuContent className="w-[800px] p-4">
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(services).map(([key, category]) => (
          <div key={key} className="space-y-3">
            <h4 className="text-sm font-medium leading-none text-foreground/70">{category.title}</h4>
            <ul className="space-y-2">
              {category.services.map(service => (
                <ListItem key={service.id} title={service.title} href={`/services/${key}/${service.id}`} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </NavigationMenuContent>
  );
}
