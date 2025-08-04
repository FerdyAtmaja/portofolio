import { LucideIcon, Rocket, Cpu, Share2, Globe, Brain, Users, MessageCircle, Clock, Lightbulb, Target, Zap, BookOpen } from 'lucide-react';

export interface TechnicalSkill {
  name: string;
  logoPath: string;
}

export interface SoftSkill {
  name: string;
  level: 'Excellent' | 'Advanced' | 'Proficient' | 'Developing';
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
    level: 'Excellent',
    description: 'Breaking down complex technical challenges into manageable solutions',
    icon: Brain,
    category: 'analytical'
  },
  { 
    name: 'Critical Thinking', 
    level: 'Excellent',
    description: 'Evaluating multiple approaches to identify optimal solutions',
    icon: Target,
    category: 'analytical'
  },
  { 
    name: 'Technical Communication', 
    level: 'Advanced',
    description: 'Explaining complex technical concepts clearly to diverse audiences',
    icon: MessageCircle,
    category: 'interpersonal'
  },
  { 
    name: 'Team Collaboration', 
    level: 'Advanced',
    description: 'Working effectively in cross-functional teams and agile environments',
    icon: Users,
    category: 'interpersonal'
  },
  { 
    name: 'Adaptability', 
    level: 'Excellent',
    description: 'Quickly adjusting to new technologies and project requirements',
    icon: Zap,
    category: 'personal'
  },
  { 
    name: 'Continuous Learning', 
    level: 'Excellent',
    description: 'Proactively acquiring new skills and staying current with trends',
    icon: BookOpen,
    category: 'personal'
  },
  { 
    name: 'Innovation', 
    level: 'Advanced',
    description: 'Developing creative solutions and improving existing processes',
    icon: Lightbulb,
    category: 'analytical'
  },
  { 
    name: 'Project Management', 
    level: 'Proficient',
    description: 'Organizing tasks, managing timelines, and delivering projects',
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