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