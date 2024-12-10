import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Thank You - SwiftX',
  description: 'Thank you for submitting your project details',
};

export default function ThankYouPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tighter mb-4">
        Thank you for considering SwiftX for your project!
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Please, check your email&apos;s inbox in couple days for details on scheduling our first call.
        We look forward learning all about your project.
      </p>
      <Button asChild>
        <Link href="/">Go to swiftx.io</Link>
      </Button>
    </div>
  );
}
