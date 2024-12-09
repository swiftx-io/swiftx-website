import { contactFormSchema } from '../../../lib/schemas/contact-form';

describe('contactFormSchema', () => {
  const validData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    howDidYouHear: 'Google',
    projectDescription: 'Test project description',
  };

  it('should validate correct data', () => {
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should validate data with optional fields', () => {
    const dataWithOptional = {
      ...validData,
      phoneNumber: '123-456-7890',
      companyName: 'Test Company',
    };
    const result = contactFormSchema.safeParse(dataWithOptional);
    expect(result.success).toBe(true);
  });

  describe('firstName validation', () => {
    it('should require firstName', () => {
      const { firstName, ...invalidData } = validData;
      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Required');
      }
    });

    it('should not allow empty firstName', () => {
      const result = contactFormSchema.safeParse({ ...validData, firstName: '' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('First name is required');
      }
    });
  });

  describe('lastName validation', () => {
    it('should require lastName', () => {
      const { lastName, ...invalidData } = validData;
      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Required');
      }
    });

    it('should not allow empty lastName', () => {
      const result = contactFormSchema.safeParse({ ...validData, lastName: '' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Last name is required');
      }
    });
  });

  describe('email validation', () => {
    it('should require email', () => {
      const { email, ...invalidData } = validData;
      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Required');
      }
    });

    it('should validate email format', () => {
      const result = contactFormSchema.safeParse({ ...validData, email: 'invalid-email' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Invalid email address');
      }
    });

    it('should accept valid email formats', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'user+label@example.com',
      ];

      validEmails.forEach(email => {
        const result = contactFormSchema.safeParse({ ...validData, email });
        expect(result.success).toBe(true);
      });
    });
  });

  describe('optional fields validation', () => {
    it('should allow missing phoneNumber', () => {
      const { phoneNumber, ...dataWithoutPhone } = { ...validData, phoneNumber: '123-456-7890' };
      const result = contactFormSchema.safeParse(dataWithoutPhone);
      expect(result.success).toBe(true);
    });

    it('should allow missing companyName', () => {
      const { companyName, ...dataWithoutCompany } = { ...validData, companyName: 'Test Company' };
      const result = contactFormSchema.safeParse(dataWithoutCompany);
      expect(result.success).toBe(true);
    });
  });

  describe('howDidYouHear validation', () => {
    it('should require howDidYouHear', () => {
      const { howDidYouHear, ...invalidData } = validData;
      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Required');
      }
    });

    it('should not allow empty howDidYouHear', () => {
      const result = contactFormSchema.safeParse({ ...validData, howDidYouHear: '' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Please tell us how you heard about us');
      }
    });
  });

  describe('projectDescription validation', () => {
    it('should require projectDescription', () => {
      const { projectDescription, ...invalidData } = validData;
      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Required');
      }
    });

    it('should not allow empty projectDescription', () => {
      const result = contactFormSchema.safeParse({ ...validData, projectDescription: '' });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Please tell us about your project');
      }
    });
  });
});
