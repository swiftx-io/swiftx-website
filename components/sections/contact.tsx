'use client';

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: (form: any) => void;
        }) => void;
      };
    };
  }
}

export function ContactSection() {
  const [isFormLoading, setIsFormLoading] = useState(true);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    const initForm = () => {
      if (window.hbspt) {
        try {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "48329133",
            formId: "1HCBdJO3tQNOmqrjXb9n7dwsruzx",
            target: '#hubspot-form-container',
            onFormReady: (form: any) => {
              setIsFormLoading(false);
              const formElement = document.querySelector('#hubspot-form-container form');
              if (formElement) {
                formElement.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-6');
              }
            },
          });
        } catch (error) {
          setFormError("Failed to load the form. Please try again later.");
          setIsFormLoading(false);
        }
      }
    };

    if (window.hbspt) {
      initForm();
    } else {
      const checkScript = setInterval(() => {
        if (window.hbspt) {
          clearInterval(checkScript);
          initForm();
        }
      }, 100);

      return () => clearInterval(checkScript);
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? We&apos;d love to hear from you. Request a free estimate
            and we&apos;ll respond as soon as possible.
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
          {isFormLoading && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading form...</p>
            </div>
          )}
          {formError && (
            <div className="text-center py-8 text-red-500">
              <p>{formError}</p>
            </div>
          )}
          <div id="hubspot-form-container" className="min-h-[400px]"></div>
        </Card>
      </div>
    </section>
  );
}
