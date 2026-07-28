export interface WeeklyActivity {
    day: string;
    count: number;
}

export interface SkillProgress {
    name: string;
    progress: number;
}

export interface PracticeHistory {
    title: string;
    score: number;
    xpEarned: number;
    createdAt: string;
}

export interface AIInsight {
    strength: string;
    weakness: string;
    recommendation: string;
}

export interface ProgressResponse {
    level: number;

    xp: number;

    nextLevelXp: number;

    completedPractice: number;

    accuracy: number;

    averageScore: number;

    totalCorrect: number;

    totalWrong: number;

    // TAMBAHKAN INI
    streak: number;

    weeklyActivity: WeeklyActivity[];

    skills: SkillProgress[];

    recent: PracticeHistory[];

    insight: AIInsight;
}