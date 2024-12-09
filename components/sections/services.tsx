import { Card } from '@/components/ui/card';
import { Code2, Cloud, Smartphone, LineChart } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    description:
      'Tailored software solutions built to address your unique business challenges and requirements.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable and secure cloud infrastructure to power your applications and services.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
  },
  {
    icon: LineChart,
    title: 'Technology Consulting',
    description:
      'Strategic guidance to help you make informed decisions about your technology investments.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            We offer a comprehensive range of software development services to help your business
            thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <Card
              key={service.title}
              className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <service.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
