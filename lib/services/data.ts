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

function createService(
  id: string,
  title: string,
  description: string,
  longDescription: string,
  technologies: readonly string[],
  benefits: readonly string[],
): Service {
  return {
    id,
    title,
    description,
    longDescription,
    technologies,
    benefits,
  };
}

function createCategory(
  id: string,
  title: string,
  description: string,
  Icon: LucideIcon,
  services: ReadonlyArray<Service>,
): ServiceCategory {
  return {
    id,
    title,
    description,
    Icon,
    services,
  };
}

// Service definitions using factory functions
const coreDevelopmentServices = [
  createService(
    'web-development',
    'Web Application Development',
    'Modern, responsive web applications built with cutting-edge technologies.',
    'Create powerful web applications that deliver exceptional user experiences across all devices. Our expertise spans the full development lifecycle, from concept to deployment.',
    ['React', 'Next.js', 'TypeScript', 'Node.js'],
    ['Responsive Design', 'Performance Optimization', 'SEO-friendly Architecture'],
  ),
  createService(
    'api-development',
    'API Development & Integration',
    'Robust and scalable API solutions for seamless system integration.',
    'Design and implement secure, high-performance APIs that enable seamless communication between different systems and services.',
    ['REST', 'GraphQL', 'OpenAPI', 'WebSockets'],
    ['Microservices Architecture', 'Real-time Capabilities', 'Third-party Integration'],
  ),
  createService(
    'backend-systems',
    'Backend Systems Architecture',
    'Scalable backend solutions designed for performance and reliability.',
    'Build robust backend systems that can handle high loads while maintaining optimal performance and reliability.',
    ['Node.js', 'Python', 'Java', 'Go'],
    ['High Availability', 'Load Balancing', 'Caching Strategies'],
  ),
  createService(
    'frontend-development',
    'Frontend Development',
    'Engaging user interfaces with modern frontend frameworks.',
    'Create intuitive and responsive user interfaces that provide exceptional user experiences across all devices.',
    ['React', 'Vue.js', 'Angular', 'Svelte'],
    ['Component-based Architecture', 'State Management', 'Progressive Enhancement'],
  ),
  createService(
    'database-design',
    'Database Design & Optimization',
    'Efficient database solutions for optimal data management.',
    'Design and implement efficient database structures that ensure data integrity and optimal performance.',
    ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    ['Data Modeling', 'Query Optimization', 'Indexing Strategies'],
  ),
] as const;

const cloudInfrastructureServices = [
  createService(
    'cloud-architecture',
    'Cloud Architecture',
    'Comprehensive cloud solutions for modern applications.',
    'Design and implement scalable cloud architectures that optimize performance, security, and cost-effectiveness.',
    ['AWS', 'Azure', 'GCP', 'Multi-cloud'],
    ['Cost Optimization', 'Global Scale', 'High Availability'],
  ),
  createService(
    'devops-cicd',
    'DevOps & CI/CD',
    'Streamlined development and deployment workflows.',
    'Implement efficient DevOps practices and CI/CD pipelines to accelerate development and ensure reliable deployments.',
    ['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD'],
    ['Automated Deployments', 'Infrastructure as Code', 'Monitoring'],
  ),
  createService(
    'infrastructure-automation',
    'Infrastructure Automation',
    'Automated infrastructure management and scaling.',
    'Automate infrastructure provisioning and management to improve efficiency and reduce human error.',
    ['Terraform', 'Ansible', 'Puppet', 'Chef'],
    ['Resource Optimization', 'Configuration Management', 'Auto-scaling'],
  ),
  createService(
    'containerization',
    'Containerization & Orchestration',
    'Container-based solutions for application deployment.',
    'Implement containerization strategies and orchestration solutions for efficient application deployment and scaling.',
    ['Docker', 'Kubernetes', 'OpenShift', 'Helm'],
    ['Scalability', 'Portability', 'Resource Efficiency'],
  ),
  createService(
    'microservices',
    'Microservices Architecture',
    'Distributed system design using microservices.',
    'Design and implement microservices architectures that enable scalability and maintainability.',
    ['Spring Boot', 'Node.js', 'gRPC', 'Service Mesh'],
    ['Service Independence', 'Scalability', 'Fault Isolation'],
  ),
] as const;

const aiMlServices = [
  createService(
    'ai-integration',
    'AI Integration Services',
    'Seamless integration of AI capabilities into existing systems.',
    'Integrate AI technologies into your existing systems to enhance functionality and improve user experiences.',
    ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face'],
    ['Custom AI Solutions', 'API Integration', 'Model Deployment'],
  ),
  createService(
    'machine-learning',
    'Machine Learning Solutions',
    'Custom machine learning models for business problems.',
    'Develop custom machine learning models tailored to your specific business needs, enabling data-driven decision making.',
    ['Scikit-learn', 'XGBoost', 'Neural Networks', 'AutoML'],
    ['Predictive Analytics', 'Pattern Recognition', 'Automated Learning'],
  ),
  createService(
    'data-analytics',
    'Data Analytics',
    'Advanced data analysis and visualization solutions.',
    'Leverage advanced data analytics to gain insights and drive business growth through informed decision making.',
    ['Python', 'R', 'Tableau', 'Power BI'],
    ['Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
  ),
  createService(
    'nlp',
    'Natural Language Processing',
    'Text analysis and language understanding solutions.',
    'Implement NLP solutions to analyze and understand text data, enabling enhanced communication and information extraction.',
    ['BERT', 'GPT', 'spaCy', 'NLTK'],
    ['Text Classification', 'Sentiment Analysis', 'Language Generation'],
  ),
  createService(
    'computer-vision',
    'Computer Vision Applications',
    'Visual data processing and analysis solutions.',
    'Utilize computer vision technologies to process and analyze visual data, enabling applications such as object detection and image recognition.',
    ['OpenCV', 'YOLO', 'CNNs', 'Image Processing'],
    ['Object Detection', 'Image Recognition', 'Video Analysis'],
  ),
] as const;

const securityComplianceServices = [
  createService(
    'application-security',
    'Application Security',
    'Comprehensive application security solutions.',
    'Implement robust security measures to protect your applications from threats and vulnerabilities.',
    ['OWASP', 'OAuth', 'JWT', 'SSL/TLS'],
    ['Vulnerability Assessment', 'Security Testing', 'Access Control'],
  ),
  createService(
    'compliance',
    'Compliance Implementation',
    'Industry standard compliance implementation.',
    'Ensure your systems comply with industry standards and regulations to protect data and maintain trust.',
    ['GDPR', 'HIPAA', 'SOC 2', 'ISO 27001'],
    ['Risk Management', 'Data Protection', 'Audit Support'],
  ),
  createService(
    'security-audit',
    'Security Auditing',
    'Comprehensive security assessment and auditing.',
    'Conduct thorough security audits to identify vulnerabilities and ensure compliance with security standards.',
    ['Static Analysis', 'Dynamic Testing', 'Code Review'],
    ['Risk Assessment', 'Compliance Verification', 'Security Metrics'],
  ),
  createService(
    'penetration-testing',
    'Penetration Testing',
    'Thorough security testing and vulnerability assessment.',
    'Perform penetration testing to identify and address security vulnerabilities before they can be exploited.',
    ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap'],
    ['Vulnerability Discovery', 'Risk Assessment', 'Security Hardening'],
  ),
  createService(
    'security-training',
    'Security Training',
    'Security awareness and best practices training.',
    'Provide training to enhance security awareness and promote best practices among your team.',
    ['Security Tools', 'Best Practices', 'Threat Modeling'],
    ['Security Awareness', 'Risk Mitigation', 'Compliance Training'],
  ),
] as const;

const consultingStrategyServices = [
  createService(
    'architecture-design',
    'Technical Architecture Design',
    'Comprehensive system architecture planning.',
    'Design robust and scalable system architectures that align with your business goals and technical requirements.',
    ['System Design', 'Architecture Patterns', 'Best Practices'],
    ['Scalability', 'Maintainability', 'Performance'],
  ),
  createService(
    'tech-stack',
    'Technology Stack Selection',
    'Strategic technology selection and evaluation.',
    'Evaluate and select the optimal technology stack to support your business objectives and technical needs.',
    ['Framework Analysis', 'Tool Selection', 'Cost Analysis'],
    ['Optimal Performance', 'Future-proofing', 'Cost Efficiency'],
  ),
  createService(
    'performance-optimization',
    'Performance Optimization',
    'System performance analysis and improvement.',
    'Analyze and optimize system performance to ensure fast, reliable, and efficient operation.',
    ['Profiling Tools', 'Load Testing', 'Optimization Techniques'],
    ['Speed Improvement', 'Resource Efficiency', 'User Experience'],
  ),
  createService(
    'scalability-planning',
    'Scalability Planning',
    'Strategic planning for system scalability.',
    'Plan and implement strategies to ensure your systems can scale effectively to meet growing demands.',
    ['Load Balancing', 'Distributed Systems', 'Caching'],
    ['Growth Management', 'Cost Control', 'Performance Maintenance'],
  ),
  createService(
    'digital-transformation',
    'Digital Transformation',
    'Comprehensive digital transformation strategy.',
    'Develop and execute a digital transformation strategy to drive innovation and improve business outcomes.',
    ['Modern Practices', 'Cloud Migration', 'Process Automation'],
    ['Business Efficiency', 'Innovation', 'Competitive Advantage'],
  ),
] as const;

export const services: Record<string, ServiceCategory> = {
  'core-development': createCategory(
    'core-development',
    'Core Development Services',
    'End-to-end development solutions including web applications, APIs, and database design.',
    Code,
    coreDevelopmentServices,
  ),
  'cloud-infrastructure': createCategory(
    'cloud-infrastructure',
    'Cloud & Infrastructure',
    'Modern cloud architecture and DevOps practices for scalable, reliable systems.',
    Cloud,
    cloudInfrastructureServices,
  ),
  'ai-ml': createCategory(
    'ai-ml',
    'AI & Machine Learning',
    'Advanced AI solutions and machine learning integrations for intelligent applications.',
    Brain,
    aiMlServices,
  ),
  'security-compliance': createCategory(
    'security-compliance',
    'Security & Compliance',
    'Comprehensive security solutions and compliance implementations for enterprise applications.',
    Shield,
    securityComplianceServices,
  ),
  'consulting-strategy': createCategory(
    'consulting-strategy',
    'Consulting & Strategy',
    'Expert technical consulting and strategic planning for digital transformation.',
    LineChart,
    consultingStrategyServices,
  ),
} as const;
