'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { formSchema, type FormData, submitToHubspot } from '@/lib/hubspot';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      source: '',
      projectDetails: '',
    },
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      await submitToHubspot(data);
      toast({
        title: 'Success!',
        description: "Your message has been sent. We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit the form. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? We&apos;d love to hear from you. Request a free estimate and
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="source"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us?*</FormLabel>
                      <FormControl>
                        <Input placeholder="Google, LinkedIn, Referral, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="projectDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us more about your project*</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe your project requirements and goals..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Request a Free Estimate'}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
