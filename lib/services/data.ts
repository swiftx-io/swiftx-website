import { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Code, Cloud, Brain, Shield, LineChart } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  benefits?: string[]
  process?: {
    title: string
    description: string
  }[]
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  Icon: LucideIcon
  services: Service[]
}

export const services: Record<string, ServiceCategory> = {
  'core-development': {
    id: 'core-development',
    title: 'Core Development Services',
    description: 'End-to-end development solutions including web applications, APIs, and database design.',
    Icon: Code,
    services: [
      {
        id: 'web-development',
        title: 'Web Application Development',
        description: 'Modern, responsive web applications built with cutting-edge technologies.',
        longDescription: 'Create powerful web applications that deliver exceptional user experiences across all devices. Our expertise spans the full development lifecycle, from concept to deployment.',
        technologies: Array.from(['React', 'Next.js', 'TypeScript', 'Node.js']),
        benefits: Array.from(['Responsive Design', 'Performance Optimization', 'SEO-friendly Architecture']),
      },
      {
        id: 'api-development',
        title: 'API Development & Integration',
        description: 'Robust and scalable API solutions for seamless system integration.',
        longDescription: 'Design and implement secure, high-performance APIs that enable seamless communication between different systems and services.',
        technologies: Array.from(['REST', 'GraphQL', 'OpenAPI', 'WebSockets']),
        benefits: Array.from(['Microservices Architecture', 'Real-time Capabilities', 'Third-party Integration']),
      },
      {
        id: 'backend-systems',
        title: 'Backend Systems Architecture',
        description: 'Scalable backend solutions designed for performance and reliability.',
        longDescription: 'Build robust backend systems that can handle high loads while maintaining optimal performance and reliability.',
        technologies: Array.from(['Node.js', 'Python', 'Java', 'Go']),
        benefits: Array.from(['High Availability', 'Load Balancing', 'Caching Strategies']),
      },
      {
        id: 'frontend-development',
        title: 'Frontend Development',
        description: 'Engaging user interfaces with modern frontend frameworks.',
        longDescription: 'Create intuitive and responsive user interfaces that provide exceptional user experiences across all devices.',
        technologies: Array.from(['React', 'Vue.js', 'Angular', 'Svelte']),
        benefits: Array.from(['Component-based Architecture', 'State Management', 'Progressive Enhancement']),
      },
      {
        id: 'database-design',
        title: 'Database Design & Optimization',
        description: 'Efficient database solutions for optimal data management.',
        longDescription: 'Design and implement efficient database structures that ensure data integrity and optimal performance.',
        technologies: Array.from(['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']),
        benefits: Array.from(['Data Modeling', 'Query Optimization', 'Indexing Strategies']),
      },
    ],
  },
  'cloud-infrastructure': {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    description: 'Modern cloud architecture and DevOps practices for scalable, reliable systems.',
    Icon: Cloud,
    services: [
      {
        id: 'cloud-architecture',
        title: 'Cloud Architecture',
        description: 'Comprehensive cloud solutions for modern applications.',
        longDescription: 'Design and implement scalable cloud architectures that optimize performance, security, and cost-effectiveness.',
        technologies: Array.from(['AWS', 'Azure', 'GCP', 'Multi-cloud']),
        benefits: Array.from(['Cost Optimization', 'Global Scale', 'High Availability']),
      },
      {
        id: 'devops-cicd',
        title: 'DevOps & CI/CD',
        description: 'Streamlined development and deployment workflows.',
        longDescription: 'Implement efficient DevOps practices and CI/CD pipelines to accelerate development and ensure reliable deployments.',
        technologies: Array.from(['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD']),
        benefits: Array.from(['Automated Deployments', 'Infrastructure as Code', 'Monitoring']),
      },
      {
        id: 'infrastructure-automation',
        title: 'Infrastructure Automation',
        description: 'Automated infrastructure management and scaling.',
        longDescription: 'Automate infrastructure provisioning and management to improve efficiency and reduce human error.',
        technologies: Array.from(['Terraform', 'Ansible', 'Puppet', 'Chef']),
        benefits: Array.from(['Resource Optimization', 'Configuration Management', 'Auto-scaling']),
      },
      {
        id: 'containerization',
        title: 'Containerization & Orchestration',
        description: 'Container-based solutions for application deployment.',
        longDescription: 'Implement containerization strategies and orchestration solutions for efficient application deployment and scaling.',
        technologies: Array.from(['Docker', 'Kubernetes', 'OpenShift', 'Helm']),
        benefits: Array.from(['Scalability', 'Portability', 'Resource Efficiency']),
      },
      {
        id: 'microservices',
        title: 'Microservices Architecture',
        description: 'Distributed system design using microservices.',
        longDescription: 'Design and implement microservices architectures that enable scalability and maintainability.',
        technologies: Array.from(['Spring Boot', 'Node.js', 'gRPC', 'Service Mesh']),
        benefits: Array.from(['Service Independence', 'Scalability', 'Fault Isolation']),
      },
    ],
  },
  'ai-ml': {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions and machine learning integrations for intelligent applications.',
    Icon: Brain,
    services: [
      {
        id: 'ai-integration',
        title: 'AI Integration Services',
        description: 'Seamless integration of AI capabilities into existing systems.',
        longDescription: 'Integrate AI technologies into your existing systems to enhance functionality and improve user experiences.',
        technologies: Array.from(['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face']),
        benefits: Array.from(['Custom AI Solutions', 'API Integration', 'Model Deployment']),
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning Solutions',
        description: 'Custom machine learning models for business problems.',
        longDescription: 'Develop custom machine learning models tailored to your specific business needs, enabling data-driven decision making.',
        technologies: Array.from(['Scikit-learn', 'XGBoost', 'Neural Networks', 'AutoML']),
        benefits: Array.from(['Predictive Analytics', 'Pattern Recognition', 'Automated Learning']),
      },
      {
        id: 'data-analytics',
        title: 'Data Analytics',
        description: 'Advanced data analysis and visualization solutions.',
        longDescription: 'Leverage advanced data analytics to gain insights and drive business growth through informed decision making.',
        technologies: Array.from(['Python', 'R', 'Tableau', 'Power BI']),
        benefits: Array.from(['Business Intelligence', 'Real-time Analytics', 'Data Visualization']),
      },
      {
        id: 'nlp',
        title: 'Natural Language Processing',
        description: 'Text analysis and language understanding solutions.',
        longDescription: 'Implement NLP solutions to analyze and understand text data, enabling enhanced communication and information extraction.',
        technologies: Array.from(['BERT', 'GPT', 'spaCy', 'NLTK']),
        benefits: Array.from(['Text Classification', 'Sentiment Analysis', 'Language Generation']),
      },
      {
        id: 'computer-vision',
        title: 'Computer Vision Applications',
        description: 'Visual data processing and analysis solutions.',
        longDescription: 'Utilize computer vision technologies to process and analyze visual data, enabling applications such as object detection and image recognition.',
        technologies: Array.from(['OpenCV', 'YOLO', 'CNNs', 'Image Processing']),
        benefits: Array.from(['Object Detection', 'Image Recognition', 'Video Analysis']),
      },
    ],
  },
  'security-compliance': {
    id: 'security-compliance',
    title: 'Security & Compliance',
    description: 'Comprehensive security solutions and compliance implementations for enterprise applications.',
    Icon: Shield,
    services: [
      {
        id: 'application-security',
        title: 'Application Security',
        description: 'Comprehensive application security solutions.',
        longDescription: 'Implement robust security measures to protect your applications from threats and vulnerabilities.',
        technologies: Array.from(['OWASP', 'OAuth', 'JWT', 'SSL/TLS']),
        benefits: Array.from(['Vulnerability Assessment', 'Security Testing', 'Access Control']),
      },
      {
        id: 'compliance',
        title: 'Compliance Implementation',
        description: 'Industry standard compliance implementation.',
        longDescription: 'Ensure your systems comply with industry standards and regulations to protect data and maintain trust.',
        technologies: Array.from(['GDPR', 'HIPAA', 'SOC 2', 'ISO 27001']),
        benefits: Array.from(['Risk Management', 'Data Protection', 'Audit Support']),
      },
      {
        id: 'security-audit',
        title: 'Security Auditing',
        description: 'Comprehensive security assessment and auditing.',
        longDescription: 'Conduct thorough security audits to identify vulnerabilities and ensure compliance with security standards.',
        technologies: Array.from(['Static Analysis', 'Dynamic Testing', 'Code Review']),
        benefits: Array.from(['Risk Assessment', 'Compliance Verification', 'Security Metrics']),
      },
      {
        id: 'penetration-testing',
        title: 'Penetration Testing',
        description: 'Thorough security testing and vulnerability assessment.',
        longDescription: 'Perform penetration testing to identify and address security vulnerabilities before they can be exploited.',
        technologies: Array.from(['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap']),
        benefits: Array.from(['Vulnerability Discovery', 'Risk Assessment', 'Security Hardening']),
      },
      {
        id: 'security-training',
        title: 'Security Training',
        description: 'Security awareness and best practices training.',
        longDescription: 'Provide training to enhance security awareness and promote best practices among your team.',
        technologies: Array.from(['Security Tools', 'Best Practices', 'Threat Modeling']),
        benefits: Array.from(['Security Awareness', 'Risk Mitigation', 'Compliance Training']),
      },
    ],
  },
  'consulting-strategy': {
    id: 'consulting-strategy',
    title: 'Consulting & Strategy',
    description: 'Expert technical consulting and strategic planning for digital transformation.',
    Icon: LineChart,
    services: [
      {
        id: 'architecture-design',
        title: 'Technical Architecture Design',
        description: 'Comprehensive system architecture planning.',
        longDescription: 'Design robust and scalable system architectures that align with your business goals and technical requirements.',
        technologies: Array.from(['System Design', 'Architecture Patterns', 'Best Practices']),
        benefits: Array.from(['Scalability', 'Maintainability', 'Performance']),
      },
      {
        id: 'tech-stack',
        title: 'Technology Stack Selection',
        description: 'Strategic technology selection and evaluation.',
        longDescription: 'Evaluate and select the optimal technology stack to support your business objectives and technical needs.',
        technologies: Array.from(['Framework Analysis', 'Tool Selection', 'Cost Analysis']),
        benefits: Array.from(['Optimal Performance', 'Future-proofing', 'Cost Efficiency']),
      },
      {
        id: 'performance-optimization',
        title: 'Performance Optimization',
        description: 'System performance analysis and improvement.',
        longDescription: 'Analyze and optimize system performance to ensure fast, reliable, and efficient operation.',
        technologies: Array.from(['Profiling Tools', 'Load Testing', 'Optimization Techniques']),
        benefits: Array.from(['Speed Improvement', 'Resource Efficiency', 'User Experience']),
      },
      {
        id: 'scalability-planning',
        title: 'Scalability Planning',
        description: 'Strategic planning for system scalability.',
        longDescription: 'Plan and implement strategies to ensure your systems can scale effectively to meet growing demands.',
        technologies: Array.from(['Load Balancing', 'Distributed Systems', 'Caching']),
        benefits: Array.from(['Growth Management', 'Cost Control', 'Performance Maintenance']),
      },
      {
        id: 'digital-transformation',
        title: 'Digital Transformation',
        description: 'Comprehensive digital transformation strategy.',
        longDescription: 'Develop and execute a digital transformation strategy to drive innovation and improve business outcomes.',
        technologies: Array.from(['Modern Practices', 'Cloud Migration', 'Process Automation']),
        benefits: Array.from(['Business Efficiency', 'Innovation', 'Competitive Advantage']),
      },
    ],
  },
} as const
