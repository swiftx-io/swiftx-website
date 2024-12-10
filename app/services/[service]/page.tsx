import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const title = `${params.service.charAt(0).toUpperCase() + params.service.slice(1)} - SwiftX`;
  return {
    title,
    description: `Learn more about our ${params.service} services and how we can help your business succeed.`,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  if (!params.service) {
    notFound();
  }

  return (
    <div className="container">
      <section className="py-24">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          {params.service.charAt(0).toUpperCase() + params.service.slice(1)}
        </h1>
        <div className="mt-6 text-lg text-muted-foreground">Service content will be added here</div>
      </section>
    </div>
  );
}
