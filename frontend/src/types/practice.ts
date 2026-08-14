export interface Track {
    id: string;
    name: string;
    slug: string;
}

export interface PracticeQuestion {
    id: string;

    type: "multiple" | "coding";

    difficulty: string;

    question: string;

    optionA?: string;
    optionB?: string;
    optionC?: string;
    optionD?: string;

    correctAnswer?: string;

    starterCode?: string;

    explanation?: string;

    orderNumber: number;
}

export interface Practice {
    id: string;

    title: string;
    slug: string;

    description: string;

    difficulty: string;

    estimatedMinutes: number;

    xpReward: number;

    track: Track;

    questions: PracticeQuestion[];
}

/*
 * Legacy challenge structure.
 * Dipertahankan supaya file data lama tetap bisa di-compile.
 */
export interface ChallengeLesson {
    id: string;
    title: string;
    description: string;
    duration: number;
    status: "completed" | "current" | "locked";
}

export interface Challenge {
    id: string;

    slug: string;

    title: string;

    description: string;

    difficulty: string;

    category: string;

    technologies: string[];

    estimatedMinutes: number;

    xp: number;

    gems: number;

    progress: number;

    completedLessons: number;

    totalLessons: number;

    locked: boolean;

    prerequisites: string[];

    objectives: string[];

    lessons: ChallengeLesson[];
}