export type ChallengeDifficulty =
    | "Beginner"
    | "Intermediate"
    | "Advanced";

export type ChallengeCategory =
    | "Backend"
    | "Database"
    | "DevOps"
    | "Testing"
    | "Security"
    | "AI";

export interface Challenge {

    id: string;

    slug: string;

    title: string;

    description: string;

    difficulty: ChallengeDifficulty;

    category: ChallengeCategory;

    technologies: string[];

    estimatedMinutes: number;

    xp: number;

    gems: number;

    progress: number;

    completedLessons: number;

    totalLessons: number;

    locked: boolean;

    thumbnail?: string;

    prerequisites: string[];

    objectives: string[];
    
}

