import { Metadata } from 'next';
import { ServiceCard } from '@/components/services/service-card';
import { Button } from '@/components/ui/button';
import { Code, Cloud, Brain, Shield, LineChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - SwiftX',
  description:
    'Professional software development services including web development, cloud architecture, AI integration, and technical consulting.',
};

// Temporary service data until we move it to a proper data structure
const services = [
  {
    id: 'core-development',
    title: 'Core Development Services',
    description:
      'End-to-end development solutions including web applications, APIs, and database design.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    icon: <Code className="h-8 w-8" />,
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    description: 'Modern cloud architecture and DevOps practices for scalable, reliable systems.',
    technologies: ['AWS', 'Docker', 'Kubernetes'],
    icon: <Cloud className="h-8 w-8" />,
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description:
      'Advanced AI solutions and machine learning integrations for intelligent applications.',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI'],
    icon: <Brain className="h-8 w-8" />,
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance',
    description:
      'Comprehensive security solutions and compliance implementations for enterprise applications.',
    technologies: ['OWASP', 'ISO 27001', 'GDPR'],
    icon: <Shield className="h-8 w-8" />,
  },
  {
    id: 'consulting-strategy',
    title: 'Consulting & Strategy',
    description: 'Expert technical consulting and strategic planning for digital transformation.',
    technologies: ['Architecture Design', 'Tech Stack', 'Scalability'],
    icon: <LineChart className="h-8 w-8" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <section className="py-24">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Technical Excellence for Digital Innovation
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Comprehensive software development services powered by modern technology and best
          practices.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              technologies={service.technologies}
              icon={service.icon}
            />
          ))}
        </div>
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to Transform Your Ideas?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let&apos;s discuss how we can help you achieve your technical goals.
          </p>
          <Button size="lg" className="mt-8">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
