import type { LucideIcon } from 'lucide-react';
import { Code, Brain, Lightbulb, Palette, Settings, Users } from 'lucide-react';

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription: string;
  readonly technologies: readonly string[];
  readonly benefits: readonly string[];
  readonly process?: ReadonlyArray<{ title: string; description: string }>;
}

export interface ServiceCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly Icon: LucideIcon;
  readonly services: ReadonlyArray<Service>;
}

// Common patterns and templates
const patterns = {
  descriptions: {
    development: 'Modern, scalable solutions built with cutting-edge technologies.',
    cloud: 'Cloud-native solutions for modern applications.',
    ai: 'Advanced AI and ML solutions for intelligent applications.',
    security: 'Comprehensive security and compliance solutions.',
    consulting: 'Expert consulting and strategic planning services.',
    automation: 'Streamlined processes and workflows for maximum efficiency.',
    integration: 'Seamless integration of systems, APIs, and services.',
  },
  benefits: {
    performance: ['Performance Optimization', 'Scalability', 'Efficiency'],
    security: ['Security Hardening', 'Risk Mitigation', 'Compliance'],
    integration: ['Seamless Integration', 'API Support', 'Third-party Compatibility'],
    automation: ['Process Automation', 'Resource Optimization', 'Cost Efficiency'],
    innovation: ['Innovation Support', 'Future-proofing', 'Competitive Advantage'],
    reliability: ['High Availability', 'Fault Tolerance', 'Disaster Recovery'],
  },
  technologies: {
    web: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    cloud: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
    ai: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI'],
    security: ['OWASP', 'OAuth', 'JWT', 'SSL/TLS'],
    devops: ['Docker', 'Terraform', 'Jenkins', 'GitHub Actions'],
  },
} as const;

// Service template factory
const createTemplate = (
  description: string,
  longDescription: string,
  technologies: readonly string[],
  benefits: readonly string[]
) => ({ description, longDescription, technologies, benefits });

// Service factory with template support
const createService = (
  id: string,
  title: string,
  template: ReturnType<typeof createTemplate>,
  overrides?: Partial<Omit<Service, 'id' | 'title'>>
): Service => ({
  id,
  title,
  ...template,
  ...overrides,
});

// Category factory
const createCategory = (
  id: string,
  title: string,
  description: string,
  Icon: LucideIcon,
  services: ReadonlyArray<Service>
): ServiceCategory => ({
  id,
  title,
  description,
  Icon,
  services,
});

// Export service categories
export const services: Record<string, ServiceCategory> = {
  ideation: createCategory(
    'ideation',
    'Ideation',
    'Transform ideas into reality through innovative solutions',
    Lightbulb,
    [
      createService(
        'rapid-prototyping',
        'Rapid Prototyping',
        createTemplate(
          'Quick iteration and validation of ideas',
          'Rapidly prototype and validate your ideas with our agile development approach',
          patterns.technologies.web,
          patterns.benefits.innovation
        )
      ),
      createService(
        'research-development',
        'Research & Development',
        createTemplate(
          'Cutting-edge research and development solutions',
          'Drive innovation through comprehensive research and development',
          patterns.technologies.web,
          patterns.benefits.innovation
        )
      ),
      createService(
        'user-research',
        'User Research & Testing',
        createTemplate(
          'In-depth user research and testing',
          'Understand your users through comprehensive research and testing',
          patterns.technologies.web,
          patterns.benefits.innovation
        )
      ),
      createService(
        'product-strategy',
        'Product Strategy',
        createTemplate(
          'Strategic product planning and execution',
          'Define and execute winning product strategies',
          patterns.technologies.web,
          patterns.benefits.innovation
        )
      ),
    ]
  ),
  'software-development': createCategory(
    'software-development',
    'Software Development',
    'Build robust and scalable software solutions',
    Code,
    [
      createService(
        'web-development',
        'Web Development',
        createTemplate(
          'Modern web application development',
          'Create powerful web applications with cutting-edge technologies',
          patterns.technologies.web,
          patterns.benefits.performance
        )
      ),
      createService(
        'mobile-development',
        'Mobile Development',
        createTemplate(
          'Native and cross-platform mobile solutions',
          'Develop engaging mobile applications for iOS and Android',
          [...patterns.technologies.web, 'React Native', 'iOS', 'Android'],
          patterns.benefits.performance
        )
      ),
      createService(
        'mvp-development',
        'MVPs',
        createTemplate(
          'Minimum viable product development',
          'Quickly validate your ideas with MVP development',
          patterns.technologies.web,
          patterns.benefits.innovation
        )
      ),
      createService(
        'cloud-strategy',
        'Cloud Strategy',
        createTemplate(
          'Comprehensive cloud solutions',
          'Optimize your infrastructure with cloud-first strategies',
          patterns.technologies.cloud,
          patterns.benefits.reliability
        )
      ),
    ]
  ),
  design: createCategory('design', 'Design', 'Create exceptional user experiences', Palette, [
    createService(
      'product-design',
      'Product Design',
      createTemplate(
        'End-to-end product design solutions',
        'Design intuitive and engaging product experiences',
        ['Figma', 'Adobe XD', 'Sketch', 'Design Systems'],
        patterns.benefits.innovation
      )
    ),
    createService(
      'ux-design',
      'UX Design',
      createTemplate(
        'User experience design and optimization',
        'Create seamless user experiences through research-driven design',
        ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
        patterns.benefits.innovation
      )
    ),
    createService(
      'ui-design',
      'UI Design',
      createTemplate(
        'User interface design and development',
        'Design beautiful and functional user interfaces',
        ['UI Components', 'Visual Design', 'Design Systems', 'Accessibility'],
        patterns.benefits.innovation
      )
    ),
    createService(
      'design-systems',
      'Design Systems',
      createTemplate(
        'Comprehensive design system development',
        'Build scalable and consistent design systems',
        ['Design Tokens', 'Component Libraries', 'Documentation', 'Style Guides'],
        patterns.benefits.innovation
      )
    ),
  ]),
  'ai-data': createCategory(
    'ai-data',
    'Generative AI and Data',
    'Harness the power of AI and data',
    Brain,
    [
      createService(
        'ai-development',
        'AI Development',
        createTemplate(
          'Custom AI solution development',
          'Build intelligent applications with custom AI solutions',
          patterns.technologies.ai,
          patterns.benefits.innovation
        )
      ),
      createService(
        'generative-ai',
        'Generative AI Development',
        createTemplate(
          'Advanced generative AI solutions',
          'Implement cutting-edge generative AI technologies',
          [...patterns.technologies.ai, 'GPT', 'DALL-E', 'Stable Diffusion'],
          patterns.benefits.innovation
        )
      ),
      createService(
        'data-engineering',
        'Data Engineering',
        createTemplate(
          'Robust data infrastructure and pipelines',
          'Build scalable data infrastructure and processing pipelines',
          ['Apache Spark', 'Kafka', 'Airflow', 'ETL'],
          patterns.benefits.reliability
        )
      ),
    ]
  ),
  maintenance: createCategory(
    'maintenance',
    'Maintenance',
    'Ensure long-term success and reliability',
    Settings,
    [
      createService(
        'quality-assurance',
        'Quality Assurance',
        createTemplate(
          'Comprehensive quality assurance services',
          'Ensure software quality through rigorous testing',
          ['Jest', 'Cypress', 'Selenium', 'Testing Frameworks'],
          patterns.benefits.reliability
        )
      ),
      createService(
        'product-management',
        'Product Management',
        createTemplate(
          'Expert product management services',
          'Guide product development with experienced management',
          ['Agile', 'Scrum', 'Product Roadmap', 'Sprint Planning'],
          patterns.benefits.innovation
        )
      ),
      createService(
        'maintenance-services',
        'Software Maintenance Services',
        createTemplate(
          'Ongoing software maintenance and support',
          'Keep your software running smoothly with professional maintenance',
          patterns.technologies.devops,
          patterns.benefits.reliability
        )
      ),
    ]
  ),
  cooperation: createCategory(
    'cooperation',
    'Cooperation Models',
    'Flexible engagement models for your needs',
    Users,
    [
      createService(
        'dedicated-teams',
        'Dedicated Teams',
        createTemplate(
          'Dedicated development team solutions',
          'Build your own dedicated development team',
          patterns.technologies.devops,
          patterns.benefits.reliability
        )
      ),
      createService(
        'staff-augmentation',
        'Staff Augmentation',
        createTemplate(
          'Flexible staff augmentation services',
          'Augment your team with skilled professionals',
          patterns.technologies.devops,
          patterns.benefits.reliability
        )
      ),
      createService(
        'delivery-center',
        'Delivery Center',
        createTemplate(
          'Full-service delivery center solutions',
          'Establish your own delivery center with our support',
          patterns.technologies.devops,
          patterns.benefits.reliability
        )
      ),
    ]
  ),
} as const;
