import { LucideIcon, Rocket, Cpu, Share2, Globe, Brain, Users, MessageCircle, Clock, Lightbulb, Target, Zap, BookOpen } from 'lucide-react';

export interface TechnicalSkill {
  name: string;
  logoPath: string;
}

export interface SoftSkill {
  name: string;
  level: number;
  description: string;
  icon: LucideIcon;
  category: 'analytical' | 'interpersonal' | 'personal';
}

export interface LearningSkill {
  name: string;
  progress: number;
  description: string;
  icon: LucideIcon;
}

export const technicalSkills: TechnicalSkill[] = [
  { name: 'Python', logoPath: '/logos/python.svg' },
  { name: 'Go', logoPath: '/logos/go.svg' },
  { name: 'AWS', logoPath: '/logos/aws.svg' },
  { name: 'Node', logoPath: '/logos/node.svg' },
  { name: 'Tailwind CSS', logoPath: '/logos/tailwind.svg' },
  { name: 'MySQL', logoPath: '/logos/mysql.svg' },
  { name: 'Postgresql', logoPath: '/logos/postgresql.svg' },
  { name: 'GitHub', logoPath: '/logos/github.svg' },
  { name: 'Laravel', logoPath: '/logos/laravel.svg' },
];

export const softSkills: SoftSkill[] = [
  { 
    name: 'Problem Solving', 
    level: 95, 
    description: 'Breaking down complex technical challenges into manageable solutions',
    icon: Brain,
    category: 'analytical'
  },
  { 
    name: 'Critical Thinking', 
    level: 90, 
    description: 'Evaluating multiple approaches to find optimal technical solutions',
    icon: Target,
    category: 'analytical'
  },
  { 
    name: 'Communication', 
    level: 85, 
    description: 'Explaining technical concepts clearly to diverse audiences',
    icon: MessageCircle,
    category: 'interpersonal'
  },
  { 
    name: 'Collaboration', 
    level: 85, 
    description: 'Working effectively in cross-functional development teams',
    icon: Users,
    category: 'interpersonal'
  },
  { 
    name: 'Adaptability', 
    level: 90, 
    description: 'Quickly learning new technologies and adjusting to project changes',
    icon: Zap,
    category: 'personal'
  },
  { 
    name: 'Self-Learning', 
    level: 95, 
    description: 'Continuously acquiring new skills through independent research',
    icon: BookOpen,
    category: 'personal'
  },
  { 
    name: 'Innovation', 
    level: 88, 
    description: 'Creating creative solutions and improving existing processes',
    icon: Lightbulb,
    category: 'analytical'
  },
  { 
    name: 'Time Management', 
    level: 82, 
    description: 'Prioritizing tasks and meeting project deadlines consistently',
    icon: Clock,
    category: 'personal'
  }
];

export const currentlyLearning: LearningSkill[] = [
  {
    name: 'AWS',
    progress: 40,
    description: 'Learning cloud services, EC2, S3, Lambda, and serverless architecture.',
    icon: Globe
  },
  {
    name: 'Node.js with Hapi',
    progress: 60,
    description: 'Building robust backend APIs using Hapi.js framework and plugins.',
    icon: Rocket
  },
  {
    name: 'PostgreSQL',
    progress: 50,
    description: 'Mastering advanced database design, queries, and optimization techniques.',
    icon: Share2
  },
  {
    name: 'Go',
    progress: 10,
    description: 'Starting to learn Go programming language for high-performance backend systems.',
    icon: Cpu
  }
];