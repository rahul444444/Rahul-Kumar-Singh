export interface Project {
  id: string;
  title: string;
  category: 'marketplace' | 'fintech' | 'social' | 'edtech' | 'logistics';
  shortDesc: string;
  fullDesc: string;
  company?: string;
  role: string;
  technologies: string[];
  features: string[];
  liveLink?: string;
  isLiveApp: boolean;
  appType: 'Customer' | 'Partner/Provider' | 'Driver' | 'Executive' | 'Full System';
  iconName: string;
  screenshotsColor: string;
  stats?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  isCurrent: boolean;
  summary: string;
  responsibilities: string[];
  liveAppsDelivered?: {
    name: string;
    description: string;
    badge: string;
  }[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    icon?: string;
    description: string;
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  badgeColor: string;
}

export interface AchievementItem {
  metric: string;
  title: string;
  description: string;
}
