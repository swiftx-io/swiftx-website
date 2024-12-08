'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas/contact-form';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CustomInputField, CustomTextareaField, CustomSelectField } from '@/components/ui/form-fields';

export function ContactSection() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      howDidYouHear: '',
      projectDescription: '',
    },
  });

  const { toast } = useToast();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      form.reset();
      toast({
        title: 'Form submitted successfully!',
        description: "We'll get back to you soon.",
        variant: 'default',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Failed to submit form',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? We&apos;d love to hear from you. Send us a message and
            we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">Email Us</h3>
            </div>
            <p className="text-sm text-muted-foreground">contact@swiftx.com</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">Call Us</h3>
            </div>
            <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">Visit Us</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              123 Tech Street, Suite 100
              <br />
              San Francisco, CA 94105
            </p>
          </Card>
        </div>

        <Card className="mt-12 p-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <CustomInputField
                control={form.control}
                name="firstName"
                label="First Name"
                placeholder="John"
                required
              />
              <CustomInputField
                control={form.control}
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                required
              />
              <CustomInputField
                control={form.control}
                name="email"
                label="Email"
                placeholder="john@example.com"
                type="email"
                required
              />
              <CustomInputField
                control={form.control}
                name="phoneNumber"
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
              <CustomInputField
                control={form.control}
                name="companyName"
                label="Company Name"
                placeholder="Acme Inc."
              />
              <CustomSelectField
                control={form.control}
                name="howDidYouHear"
                label="How Did You Hear About Us?"
                placeholder="Select an option"
                required
                options={[
                  { value: 'search', label: 'Search Engine' },
                  { value: 'social', label: 'Social Media' },
                  { value: 'referral', label: 'Referral' },
                  { value: 'other', label: 'Other' },
                ]}
              />
              <CustomTextareaField
                control={form.control}
                name="projectDescription"
                label="Tell Us More About the Project"
                placeholder="Please describe your project requirements and goals..."
                required
                className="md:col-span-2"
              />
              <div className="md:col-span-2">
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Request a Free Estimate
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
