import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const features = [
  'Over 10 years of industry experience',
  'Certified development team',
  'Agile methodology',
  'Continuous delivery',
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Building Tomorrow&apos;s Technology Today
            </h2>
            <p className="text-muted-foreground mb-6">
              At SwiftX, we&apos;re passionate about creating innovative software solutions that
              help businesses thrive in the digital age. Our team of expert developers and
              consultants work tirelessly to deliver exceptional results for our clients.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
