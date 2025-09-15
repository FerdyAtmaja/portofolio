export interface Experience {
  id: string;
  type: 'work' | 'training' | 'certification';
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    type: 'training',
    title: 'Cyber Security (Fresh Graduate Academy)',
    company: 'Digitalent Kominfo – Program FGA',
    period: 'Aug. 2025 – Sep. 2025',
    description: [
      'Mastered cybersecurity fundamentals and SIEM tools for network security and incident response'
    ],
    technologies: ['Linux', 'Python', 'SQL', 'SIEM', 'Network Security']
  },
  {
    id: '2',
    type: 'training',
    title: 'Google Cloud Arcade',
    company: 'Dicoding x Google Cloud',
    period: 'Jul. 2025 – Sep. 2025',
    description: [
      'Built and managed cloud services through challenge-based learning with IAM access management'
    ],
    technologies: ['Google Cloud Console', 'Compute Engine', 'Cloud Run', 'Cloud Storage', 'IAM']
  },
  {
    id: '3',
    type: 'training',
    title: 'AI Productivity Training',
    company: 'Dicoding x AVPN',
    period: 'May 2025',
    description: [
      'Applied AI for workflow automation and mastered prompt engineering for effective AI output'
    ],
    technologies: ['AI Productivity', 'Prompt Engineering', 'Workflow Automation']
  },
  {
    id: '4',
    type: 'training',
    title: 'AWS Back-End Academy',
    company: 'Dicoding x Amazon Web Services',
    period: 'May 2025 – Sep. 2025',
    description: [
      'Developed scalable RESTful APIs with Hapi framework and integrated AWS services for distributed systems'
    ],
    technologies: ['JavaScript', 'Node.js', 'Hapi', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS Lambda', 'API Gateway', 'S3']
  },
  {
    id: '5',
    type: 'work',
    title: 'Data Mining Analyst',
    company: 'Laboratorium Solusi – UPN "Veteran" Jawa Timur',
    period: 'Mar. 2024 – Dec. 2024',
    description: [
      'Built sentiment analysis system with Flask achieving 80% accuracy using Naïve Bayes & LDA algorithms'
    ],
    technologies: ['Python', 'Flask', 'MySQL', 'Naïve Bayes', 'LDA', 'API Development']
  },
  {
    id: '6',
    type: 'work',
    title: 'Fullstack Developer (Internship)',
    company: 'PT. Antari Jaya Mandiri',
    period: 'Oct. 2023 – Dec. 2023',
    description: [
      'Designed web-based inventory management system using Extreme Programming methodology'
    ],
    technologies: ['PHP', 'MySQL', 'Web Development', 'Extreme Programming']
  },
  {
    id: '7',
    type: 'training',
    title: 'Data Science Academy (MSIB Batch 4)',
    company: 'Cybertrend Data Academy',
    period: 'Feb. 2023 – Jun. 2023',
    description: [
      'Developed diabetes classification model using Random Forest with CRISP-DM methodology'
    ],
    technologies: ['SQL', 'Python', 'Tableau', 'MySQL', 'Random Forest', 'CRISP-DM']
  }
];