export interface Lead {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  status: "new" | "contacted" | "in_progress" | "closed";
  submittedAt: string;
  notes: string;
  budget: number;
  brandName?: string;
  websiteUrl?: string;
}

export interface AuditResult {
  score: number;
  summary: string;
  seoStrategy: {
    title: string;
    insights: string[];
    actions: string[];
  };
  semStrategy: {
    title: string;
    insights: string[];
    actions: string[];
  };
  conversionStrategy: {
    title: string;
    recommendations: string[];
  };
  recommendedChannels: string[];
  simulatedCPC: number;
  growthForecast: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  extendedDescription: string;
  costEstimate: string;
}
