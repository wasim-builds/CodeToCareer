export interface RoadmapStep {
    id: string;
    title: string;
    description: string;
    skills: string[];
    resources: {
        title: string;
        url: string;
        type: 'article' | 'video' | 'course' | 'documentation' | 'book';
    }[];
    projects?: string[];
    estimatedHours: number;
    prerequisites?: string[];
}

export interface RoadmapPhase {
    id: string;
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    steps: RoadmapStep[];
    estimatedWeeks: number;
}

export interface Roadmap {
    id: string;
    slug: string;
    title: string;
    description: string;
    category: string;
    difficulty: 'beginner-friendly' | 'intermediate' | 'advanced';
    totalDuration: string; // e.g., "6-12 months"
    icon: string; // emoji or icon name
    color: string; // tailwind color class
    phases: RoadmapPhase[];
    prerequisites?: string[];
    careerOutlook: {
        averageSalary: string;
        jobGrowth: string;
        topCompanies: string[];
    };
    relatedRoadmaps?: string[]; // slugs of related roadmaps
}
