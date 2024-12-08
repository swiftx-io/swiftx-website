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
 * Submits form data to Hubspot's form submission API
 * @param formData The validated form data
 * @returns The response from Hubspot's API
 * @throws Error if the submission fails
 */
export async function submitToHubspot(formData: FormData) {
  const portalId = "48329133";
  const formId = "1c205d24-eded-40d3-a6aa-b8d76fd9fb77";
  const url = `https://api.hubapi.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  if (!process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN) {
    throw new Error('Hubspot access token is not configured');
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: formData.firstName },
          { name: 'lastname', value: formData.lastName },
          { name: 'email', value: formData.email },
          { name: 'phone', value: formData.phone || '' },
          { name: 'company', value: formData.company || '' },
          { name: 'how_did_you_hear_about_us', value: formData.source },
          { name: 'project_details', value: formData.projectDetails }
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title
        }
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit form');
    }

    return response.json();
  } catch (error) {
    console.error('Error submitting form to Hubspot:', error);
    throw error;
  }
}
