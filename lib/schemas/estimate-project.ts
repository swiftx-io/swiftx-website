import { z } from 'zod';

export const estimateProjectSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company name is required'),
  projectDescription: z.string().min(10, 'Please provide more details about your project'),
  budget: z.enum(['10-50k', '50-100k', '100k+']),
  timeline: z.enum(['1-3-months', '3-6-months', '6-12-months', '12-months+']),
  serviceType: z.enum([
    'core-development',
    'cloud-infrastructure',
    'ai-ml',
    'security-compliance',
    'consulting-strategy',
  ]),
});

export type EstimateProjectData = z.infer<typeof estimateProjectSchema>;
