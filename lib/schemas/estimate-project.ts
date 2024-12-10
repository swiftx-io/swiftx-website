import { z } from 'zod';

export const estimateProjectSchema = z.object({
  firstname: z.string().min(2, 'First name must be at least 2 characters'),
  lastname: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company name is required'),
  projectDescription: z.string().min(10, 'Please provide more details about your project'),
});

export type EstimateProjectData = z.infer<typeof estimateProjectSchema>;
