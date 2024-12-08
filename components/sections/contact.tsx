'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
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
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Name</label>
              <Input placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <Input placeholder="How can we help?" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea placeholder="Tell us about your project" className="min-h-[150px]" />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
