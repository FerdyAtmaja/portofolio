import { LucideIcon, Rocket, Cpu, Share2, Globe, Bot, Brain, Users, MessageCircle, Clock, Lightbulb, Target, Zap, BookOpen } from 'lucide-react';

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
  { name: 'React', logoPath: '/logos/react.svg' },
  { name: 'Python', logoPath: '/logos/python.svg' },
  { name: 'MySQL', logoPath: '/logos/mysql.svg' },
  { name: 'GitHub', logoPath: '/logos/github.svg' },
  { name: 'Tailwind CSS', logoPath: '/logos/tailwind.svg' },
  { name: 'Laravel', logoPath: '/logos/laravel.svg' },
  { name: 'Java', logoPath: '/logos/java.svg' },
  { name: 'Go', logoPath: '/logos/go.svg' },
  { name: 'Node', logoPath: '/logos/node.svg' },
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
    name: 'Next.js 14',
    progress: 75,
    description: 'Exploring App Router and Server Components for full-stack development.',
    icon: Rocket
  },
  {
    name: 'Rust',
    progress: 40,
    description: 'Focusing on performance, memory safety, and systems programming.',
    icon: Cpu
  },
  {
    name: 'Kubernetes',
    progress: 60,
    description: 'Learning container orchestration for scalable and resilient applications.',
    icon: Share2
  },
  {
    name: 'GraphQL',
    progress: 80,
    description: 'Building efficient and flexible APIs for modern applications.',
    icon: Globe
  },
  {
    name: 'Web3',
    progress: 50,
    description: 'Diving into decentralized applications and blockchain technology.',
    icon: Bot
  }
];