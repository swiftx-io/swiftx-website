import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/lib/services/data';
import { ServiceHero } from '@/components/services/service-hero';
import { ServiceOverview } from '@/components/services/service-overview';
import { ServiceProcess } from '@/components/services/service-process';
import { ServiceTech } from '@/components/services/service-tech';
import { ServiceWhy } from '@/components/services/service-why';
import { ServiceContact } from '@/components/services/service-contact';

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const serviceData = services[params.service];
  if (!serviceData) {
    return {
      title: 'Service Not Found - SwiftX',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${serviceData.title} - SwiftX`,
    description: serviceData.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const serviceData = services[params.service];

  if (!serviceData) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ServiceHero
        title={serviceData.title}
        description={serviceData.description}
        Icon={serviceData.Icon}
      />
      <ServiceOverview
        title={serviceData.title}
        description={serviceData.description}
        services={serviceData.services}
      />
      <ServiceProcess services={serviceData.services} />
      <ServiceTech
        title={serviceData.title}
        technologies={serviceData.services.flatMap(service => service.technologies)}
      />
      <ServiceWhy
        title={`Why Choose SwiftX for ${serviceData.title}`}
        benefits={serviceData.services.flatMap(service => service.benefits || [])}
      />
      <ServiceContact />
    </main>
  );
}
