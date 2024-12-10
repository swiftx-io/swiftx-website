'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  CustomInputField,
  CustomTextareaField,
  CustomSelectField,
} from '@/components/ui/form-fields';
import { estimateProjectSchema } from '@/lib/schemas/estimate-project';
import type { EstimateProjectData } from '@/lib/schemas/estimate-project';

export function EstimateProjectForm() {
  const router = useRouter();
  const form = useForm<EstimateProjectData>({
    resolver: zodResolver(estimateProjectSchema),
  });

  async function onSubmit(data: EstimateProjectData) {
    try {
      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/145704685/71e4ba83-c4b4-450c-b914-7538abf59ca6',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: data.firstname },
              { name: 'lastname', value: data.lastname },
              { name: 'email', value: data.email },
              { name: 'company', value: data.company },
              { name: 'project_description', value: data.projectDescription },
              { name: 'budget', value: data.budget },
              { name: 'timeline', value: data.timeline },
              { name: 'service_type', value: data.serviceType },
            ],
          }),
        }
      );

      if (response.ok) {
        router.push('/estimate-project-submitted');
      } else {
        const errorData = await response.json();
        console.error('HubSpot API error:', errorData);
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomInputField
            control={form.control}
            name="firstname"
            label="First Name"
            required
          />
          <CustomInputField
            control={form.control}
            name="lastname"
            label="Last Name"
            required
          />
        </div>
        <CustomInputField
          control={form.control}
          name="email"
          type="email"
          label="Email"
          required
        />
        <CustomInputField
          control={form.control}
          name="company"
          label="Company"
          required
        />
        <CustomTextareaField
          control={form.control}
          name="projectDescription"
          label="Project Description"
          required
        />
        <CustomSelectField
          control={form.control}
          name="budget"
          label="Budget Range"
          options={[
            { value: '10-50k', label: '$10,000 - $50,000' },
            { value: '50-100k', label: '$50,000 - $100,000' },
            { value: '100k+', label: '$100,000+' },
          ]}
          required
        />
        <CustomSelectField
          control={form.control}
          name="timeline"
          label="Expected Timeline"
          options={[
            { value: '1-3-months', label: '1-3 months' },
            { value: '3-6-months', label: '3-6 months' },
            { value: '6-12-months', label: '6-12 months' },
            { value: '12-months+', label: '12+ months' },
          ]}
          required
        />
        <CustomSelectField
          control={form.control}
          name="serviceType"
          label="Service Type"
          options={[
            { value: 'core-development', label: 'Core Development' },
            { value: 'cloud-infrastructure', label: 'Cloud & Infrastructure' },
            { value: 'ai-ml', label: 'AI & Machine Learning' },
            { value: 'security-compliance', label: 'Security & Compliance' },
            { value: 'consulting-strategy', label: 'Consulting & Strategy' },
          ]}
          required
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
