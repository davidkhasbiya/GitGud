export type PracticeDifficulty =
    | "Beginner"
    | "Intermediate"
    | "Advanced";

export type PracticeCategory =
    | "Backend"
    | "Database"
    | "DevOps"
    | "Testing"
    | "Security"
    | "AI";

export interface Practice {
    id: string;
    slug: string;
    title: string;
    description: string;

    difficulty: PracticeDifficulty;
    category: PracticeCategory;

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

    lessons: Lesson[];
}

export type LessonStatus =
    | "completed"
    | "current"
    | "locked";

export interface Lesson {
    id: string;
    title: string;
    description: string;
    duration: number;
    status: LessonStatus;
}

