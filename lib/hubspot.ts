import { z } from "zod";

// Form data validation schema
export const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  source: z.string().min(1, "Please tell us how you heard about us"),
  projectDetails: z.string().min(1, "Please tell us about your project")
});

export type FormData = z.infer<typeof formSchema>;

/**
 * Submits form data to our API endpoint which handles Hubspot submission
 * @param formData The validated form data
 * @returns The response from the API
 * @throws Error if the submission fails
 */
export async function submitToHubspot(formData: FormData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit form');
    }

    return response.json();
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}
