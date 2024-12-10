import { cn } from '@/lib/utils';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn('min-h-screen bg-background font-sans antialiased', 'dark:bg-background-dark')}
    >
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Navigation content will be added here */}
      </nav>
      <main>{children}</main>
    </div>
  );
}
