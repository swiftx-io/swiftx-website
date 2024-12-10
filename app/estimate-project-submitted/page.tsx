import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Thank You - SwiftX',
  description: 'Thank you for submitting your project details',
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Thank you for considering SwiftX for your project!
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-8">
        Please, check your email&apos;s inbox in couple days for details on scheduling our first call.
        We look forward to learning all about your project.
      </p>
      <Button variant="ghost" asChild>
        <Link href="/">Go to SwiftX</Link>
      </Button>
    </div>
  );
}
