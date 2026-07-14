export interface FeatureCard {
  id: string;
  title: string;
  value: string;
  description: string;
  iconName: string;
  color: string; // Neon highlight color (e.g., 'purple', 'blue', 'green', 'rainbow')
}

export interface RoadmapStep {
  phase: string;
  title: string;
  date: string;
  description: string[];
  status: 'completed' | 'current' | 'upcoming';
}

export interface TokenomicsMetric {
  label: string;
  percentage: number;
  value: string;
  color: string;
  glowColor: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  color: string;
}
