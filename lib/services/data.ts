import type { LucideIcon } from 'lucide-react';
import { Code, Cloud, Brain, Shield, LineChart } from 'lucide-react';

interface BaseItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

interface ProcessStep extends BaseItem {
  readonly description: string;
}

export interface Service extends BaseItem {
  readonly longDescription?: string;
  readonly technologies: readonly string[];
  readonly benefits?: readonly string[];
  readonly process?: readonly ProcessStep[];
}

export interface ServiceCategory extends BaseItem {
  readonly Icon: LucideIcon;
  readonly services: ReadonlyArray<Service>;
}

// Common service descriptions and benefits
const commonDescriptions = {
  development: 'Modern, scalable solutions built with cutting-edge technologies.',
  integration: 'Seamless integration and implementation of advanced technologies.',
  optimization: 'Performance optimization and efficiency improvements.',
  security: 'Comprehensive security and compliance solutions.',
  consulting: 'Expert consulting and strategic planning services.',
} as const;

const commonBenefits = {
  performance: ['Performance Optimization', 'Scalability', 'Efficiency'],
  security: ['Security Hardening', 'Risk Mitigation', 'Compliance'],
  integration: ['Seamless Integration', 'API Support', 'Third-party Compatibility'],
  automation: ['Process Automation', 'Resource Optimization', 'Cost Efficiency'],
  innovation: ['Innovation Support', 'Future-proofing', 'Competitive Advantage'],
} as const;

// Service template types
type ServiceTemplate = Omit<Service, 'id' | 'title'>;

// Service template factory
function createServiceTemplate(
  description: string,
  longDescription: string,
  technologies: readonly string[],
  benefits: readonly string[]
): ServiceTemplate {
  return { description, longDescription, technologies, benefits };
}

// Common service templates
const serviceTemplates = {
  webDev: createServiceTemplate(
    commonDescriptions.development,
    'Create powerful web applications that deliver exceptional user experiences across all devices.',
    ['React', 'Next.js', 'TypeScript', 'Node.js'],
    commonBenefits.performance
  ),
  security: createServiceTemplate(
    commonDescriptions.security,
    'Implement robust security measures to protect your applications and data.',
    ['OWASP', 'OAuth', 'JWT', 'SSL/TLS'],
    commonBenefits.security
  ),
  integration: createServiceTemplate(
    commonDescriptions.integration,
    'Integrate advanced technologies seamlessly into your existing systems.',
    ['API Gateway', 'GraphQL', 'REST', 'WebSocket'],
    commonBenefits.integration
  ),
  consulting: createServiceTemplate(
    commonDescriptions.consulting,
    'Provide expert consulting and strategic planning for digital transformation.',
    ['Best Practices', 'Industry Standards', 'Modern Architecture'],
    commonBenefits.innovation
  ),
} as const;

// Enhanced service factory
function createServiceFromTemplate(
  id: string,
  title: string,
  template: ServiceTemplate,
  overrides?: Partial<ServiceTemplate>
): Service {
  return {
    id,
    title,
    ...template,
    ...overrides,
  };
}

// Service category arrays using createServiceFromTemplate
const coreDevelopmentServices = [
  createServiceFromTemplate('web-development', 'Web Application Development', serviceTemplates.webDev),
  createServiceFromTemplate('api-development', 'API Development & Integration', serviceTemplates.integration, {
    technologies: ['REST', 'GraphQL', 'OpenAPI', 'WebSockets'],
    benefits: ['Microservices Architecture', 'Real-time Capabilities', 'Third-party Integration'],
  }),
  createServiceFromTemplate('backend-systems', 'Backend Systems Architecture', serviceTemplates.webDev, {
    technologies: ['Node.js', 'Python', 'Java', 'Go'],
    benefits: ['High Availability', 'Load Balancing', 'Caching Strategies'],
  }),
  createServiceFromTemplate('frontend-development', 'Frontend Development', serviceTemplates.webDev, {
    technologies: ['React', 'Vue.js', 'Angular', 'Svelte'],
    benefits: ['Component-based Architecture', 'State Management', 'Progressive Enhancement'],
  }),
  createServiceFromTemplate('database-design', 'Database Design & Optimization', serviceTemplates.webDev, {
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    benefits: ['Data Modeling', 'Query Optimization', 'Indexing Strategies'],
  }),
] as const;

const cloudInfrastructureServices = [
  createServiceFromTemplate('cloud-architecture', 'Cloud Architecture', serviceTemplates.integration, {
    technologies: ['AWS', 'Azure', 'GCP', 'Multi-cloud'],
    benefits: ['Cost Optimization', 'Global Scale', 'High Availability'],
  }),
  createServiceFromTemplate('devops-cicd', 'DevOps & CI/CD', serviceTemplates.integration, {
    technologies: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD'],
    benefits: ['Automated Deployments', 'Infrastructure as Code', 'Monitoring'],
  }),
  createServiceFromTemplate('infrastructure-automation', 'Infrastructure Automation', serviceTemplates.integration, {
    technologies: ['Terraform', 'Ansible', 'Puppet', 'Chef'],
    benefits: ['Resource Optimization', 'Configuration Management', 'Auto-scaling'],
  }),
  createServiceFromTemplate('containerization', 'Containerization & Orchestration', serviceTemplates.integration, {
    technologies: ['Docker', 'Kubernetes', 'OpenShift', 'Helm'],
    benefits: ['Scalability', 'Portability', 'Resource Efficiency'],
  }),
  createServiceFromTemplate('microservices', 'Microservices Architecture', serviceTemplates.integration, {
    technologies: ['Spring Boot', 'Node.js', 'gRPC', 'Service Mesh'],
    benefits: ['Service Independence', 'Scalability', 'Fault Isolation'],
  }),
] as const;

const aiMlServices = [
  createServiceFromTemplate('ai-integration', 'AI Integration Services', serviceTemplates.integration, {
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face'],
    benefits: ['Custom AI Solutions', 'API Integration', 'Model Deployment'],
  }),
  createServiceFromTemplate('machine-learning', 'Machine Learning Solutions', serviceTemplates.integration, {
    technologies: ['Scikit-learn', 'XGBoost', 'Neural Networks', 'AutoML'],
    benefits: ['Predictive Analytics', 'Pattern Recognition', 'Automated Learning'],
  }),
  createServiceFromTemplate('data-analytics', 'Data Analytics', serviceTemplates.integration, {
    technologies: ['Python', 'R', 'Tableau', 'Power BI'],
    benefits: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
  }),
  createServiceFromTemplate('nlp', 'Natural Language Processing', serviceTemplates.integration, {
    technologies: ['BERT', 'GPT', 'spaCy', 'NLTK'],
    benefits: ['Text Classification', 'Sentiment Analysis', 'Language Generation'],
  }),
  createServiceFromTemplate('computer-vision', 'Computer Vision Applications', serviceTemplates.integration, {
    technologies: ['OpenCV', 'YOLO', 'CNNs', 'Image Processing'],
    benefits: ['Object Detection', 'Image Recognition', 'Video Analysis'],
  }),
] as const;

const securityComplianceServices = [
  createServiceFromTemplate('application-security', 'Application Security', serviceTemplates.security),
  createServiceFromTemplate('compliance', 'Compliance Implementation', serviceTemplates.security, {
    technologies: ['GDPR', 'HIPAA', 'SOC 2', 'ISO 27001'],
    benefits: ['Risk Management', 'Data Protection', 'Audit Support'],
  }),
  createServiceFromTemplate('security-audit', 'Security Auditing', serviceTemplates.security, {
    technologies: ['Static Analysis', 'Dynamic Testing', 'Code Review'],
    benefits: ['Risk Assessment', 'Compliance Verification', 'Security Metrics'],
  }),
  createServiceFromTemplate('penetration-testing', 'Penetration Testing', serviceTemplates.security, {
    technologies: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap'],
    benefits: ['Vulnerability Discovery', 'Risk Assessment', 'Security Hardening'],
  }),
  createServiceFromTemplate('security-training', 'Security Training', serviceTemplates.security, {
    technologies: ['Security Tools', 'Best Practices', 'Threat Modeling'],
    benefits: ['Security Awareness', 'Risk Mitigation', 'Compliance Training'],
  }),
] as const;

const consultingStrategyServices = [
  createServiceFromTemplate('architecture-design', 'Technical Architecture Design', serviceTemplates.consulting, {
    technologies: ['System Design', 'Architecture Patterns', 'Best Practices'],
    benefits: ['Scalability', 'Maintainability', 'Performance'],
  }),
  createServiceFromTemplate('tech-stack', 'Technology Stack Selection', serviceTemplates.consulting, {
    technologies: ['Framework Analysis', 'Tool Selection', 'Cost Analysis'],
    benefits: ['Optimal Performance', 'Future-proofing', 'Cost Efficiency'],
  }),
  createServiceFromTemplate('performance-optimization', 'Performance Optimization', serviceTemplates.consulting, {
    technologies: ['Profiling Tools', 'Load Testing', 'Optimization Techniques'],
    benefits: ['Speed Improvement', 'Resource Efficiency', 'User Experience'],
  }),
  createServiceFromTemplate('scalability-planning', 'Scalability Planning', serviceTemplates.consulting, {
    technologies: ['Load Balancing', 'Distributed Systems', 'Caching'],
    benefits: ['Growth Management', 'Cost Control', 'Performance Maintenance'],
  }),
  createServiceFromTemplate('digital-transformation', 'Digital Transformation', serviceTemplates.consulting, {
    technologies: ['Modern Practices', 'Cloud Migration', 'Process Automation'],
    benefits: ['Business Efficiency', 'Innovation', 'Competitive Advantage'],
  }),
] as const;

function createCategory(
  id: string,
  title: string,
  description: string,
  Icon: LucideIcon,
  services: ReadonlyArray<Service>
): ServiceCategory {
  return {
    id,
    title,
    description,
    Icon,
    services,
  };
}

function createCategoryWithDefaults(
  id: string,
  title: string,
  Icon: LucideIcon,
  services: ReadonlyArray<Service>
): ServiceCategory {
  const defaultDescriptions: Record<string, string> = {
    'core-development': 'End-to-end development solutions for modern applications',
    'cloud-infrastructure': 'Modern cloud solutions and DevOps practices',
    'ai-ml': 'Advanced AI and machine learning solutions',
    'security-compliance': 'Comprehensive security and compliance solutions',
    'consulting-strategy': 'Expert technical consulting and strategic planning',
  };

  return createCategory(
    id,
    title,
    defaultDescriptions[id] || commonDescriptions.development,
    Icon,
    services
  );
}

export const services: Record<string, ServiceCategory> = {
  'core-development': createCategoryWithDefaults(
    'core-development',
    'Core Development Services',
    Code,
    coreDevelopmentServices
  ),
  'cloud-infrastructure': createCategoryWithDefaults(
    'cloud-infrastructure',
    'Cloud & Infrastructure',
    Cloud,
    cloudInfrastructureServices
  ),
  'ai-ml': createCategoryWithDefaults(
    'ai-ml',
    'AI & Machine Learning',
    Brain,
    aiMlServices
  ),
  'security-compliance': createCategoryWithDefaults(
    'security-compliance',
    'Security & Compliance',
    Shield,
    securityComplianceServices
  ),
  'consulting-strategy': createCategoryWithDefaults(
    'consulting-strategy',
    'Consulting & Strategy',
    LineChart,
    consultingStrategyServices
  ),
} as const;
