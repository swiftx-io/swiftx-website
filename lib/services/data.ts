import type { LucideIcon } from 'lucide-react';
import { Code, Cloud, Brain, Shield, LineChart } from 'lucide-react';

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

// Service definitions using templates and patterns
const serviceDefinitions = {
  coreDevelopment: [
    ['web-development', 'Web Application Development', patterns.descriptions.development],
    ['api-development', 'API Development & Integration', patterns.descriptions.integration],
    ['backend-systems', 'Backend Systems Architecture', patterns.descriptions.development],
    ['frontend-development', 'Frontend Development', patterns.descriptions.development],
    ['database-design', 'Database Design & Optimization', patterns.descriptions.development],
  ],
  cloudInfrastructure: [
    ['cloud-architecture', 'Cloud Architecture', patterns.descriptions.cloud],
    ['devops-cicd', 'DevOps & CI/CD', patterns.descriptions.automation],
    ['infrastructure-automation', 'Infrastructure Automation', patterns.descriptions.automation],
    ['container-orchestration', 'Container Orchestration', patterns.descriptions.cloud],
    ['monitoring-logging', 'Monitoring & Logging', patterns.descriptions.cloud],
  ],
  aiMl: [
    ['ml-development', 'Machine Learning Development', patterns.descriptions.ai],
    ['nlp-solutions', 'Natural Language Processing', patterns.descriptions.ai],
    ['computer-vision', 'Computer Vision Solutions', patterns.descriptions.ai],
    ['predictive-analytics', 'Predictive Analytics', patterns.descriptions.ai],
    ['ai-integration', 'AI Integration Services', patterns.descriptions.ai],
  ],
  security: [
    ['application-security', 'Application Security', patterns.descriptions.security],
    ['compliance', 'Compliance Implementation', patterns.descriptions.security],
    ['security-audit', 'Security Auditing', patterns.descriptions.security],
    ['penetration-testing', 'Penetration Testing', patterns.descriptions.security],
    ['security-training', 'Security Training', patterns.descriptions.security],
  ],
  consulting: [
    ['architecture-design', 'Technical Architecture Design', patterns.descriptions.consulting],
    ['tech-stack', 'Technology Stack Selection', patterns.descriptions.consulting],
    ['performance-optimization', 'Performance Optimization', patterns.descriptions.consulting],
    ['scalability-planning', 'Scalability Planning', patterns.descriptions.consulting],
    ['digital-transformation', 'Digital Transformation', patterns.descriptions.consulting],
  ],
} as const;

// Create services using templates and patterns
const createServices = (
  definitions: readonly (readonly [string, string, string])[],
  technologies: readonly string[],
  benefits: readonly string[]
) =>
  definitions.map(([id, title, description]) =>
    createService(
      id,
      title,
      createTemplate(
        description,
        `Comprehensive ${title.toLowerCase()} solutions tailored to your needs.`,
        technologies,
        benefits
      )
    )
  );

// Service categories with appropriate technologies and benefits
const coreDevelopmentServices = createServices(
  serviceDefinitions.coreDevelopment,
  patterns.technologies.web,
  patterns.benefits.performance
);
const cloudInfrastructureServices = createServices(
  serviceDefinitions.cloudInfrastructure,
  patterns.technologies.cloud,
  patterns.benefits.automation
);
const aiMlServices = createServices(
  serviceDefinitions.aiMl,
  patterns.technologies.ai,
  patterns.benefits.innovation
);
const securityComplianceServices = createServices(
  serviceDefinitions.security,
  patterns.technologies.security,
  patterns.benefits.security
);
const consultingStrategyServices = createServices(
  serviceDefinitions.consulting,
  patterns.technologies.devops,
  patterns.benefits.reliability
);

// Export service categories
export const services: Record<string, ServiceCategory> = {
  'core-development': createCategory(
    'core-development',
    'Core Development Services',
    'End-to-end development solutions for modern applications',
    Code,
    coreDevelopmentServices
  ),
  'cloud-infrastructure': createCategory(
    'cloud-infrastructure',
    'Cloud & Infrastructure',
    'Modern cloud solutions and DevOps practices',
    Cloud,
    cloudInfrastructureServices
  ),
  'ai-ml': createCategory(
    'ai-ml',
    'AI & Machine Learning',
    'Advanced AI and ML solutions',
    Brain,
    aiMlServices
  ),
  'security-compliance': createCategory(
    'security-compliance',
    'Security & Compliance',
    'Comprehensive security and compliance solutions',
    Shield,
    securityComplianceServices
  ),
  'consulting-strategy': createCategory(
    'consulting-strategy',
    'Consulting & Strategy',
    'Expert technical consulting and strategic planning',
    LineChart,
    consultingStrategyServices
  ),
} as const;
