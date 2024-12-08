import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-4">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
