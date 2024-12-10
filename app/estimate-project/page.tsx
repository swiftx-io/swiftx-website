import { Metadata } from 'next';
import { EstimateProjectForm } from '@/components/forms/estimate-project-form';

export const metadata: Metadata = {
  title: 'Estimate Your Project - SwiftX',
  description: 'Get an estimate for your software development project',
};

export default function EstimateProjectPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">Estimate Your Project</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Tell us about your project, and we&apos;ll help you bring it to life with our expertise in
        software development, cloud infrastructure, AI, security, and technical consulting.
      </p>
      <EstimateProjectForm />
    </div>
  );
}
