'use client';

import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { EstimateProjectForm } from '@/components/forms/estimate-project-form';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? We&apos;d love to hear from you. Send us a message and
            we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">Email Us</h3>
            </div>
            <p className="text-sm text-muted-foreground">info@swiftx.io</p>
          </Card>

          <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">Call Us</h3>
            </div>
            <p className="text-sm text-muted-foreground">+201276373205</p>
          </Card>

          <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">Visit Us</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              6056 El-Merag city
              <br />
              Zahraa El-Maadi, Cairo, Egypt
            </p>
          </Card>
        </div>

        <Card className="mt-12 p-8">
          <EstimateProjectForm />
        </Card>
      </div>
    </section>
  );
}
