import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().optional(),
  companyName: z.string().optional(),
  howDidYouHear: z.string().min(1, 'Please tell us how you heard about us'),
  projectDescription: z.string().min(1, 'Please tell us about your project'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
