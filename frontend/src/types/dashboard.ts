export interface WeeklyActivity {
    day: string;
    count: number;
}

export interface RecentPractice {
    title: string;
    score: number;
    xpEarned: number;
    createdAt: string;
}

export interface AIRecommendation {
    title: string;
    reason: string;
    difficulty: string;
    estimatedMinutes: number;
    focus: string;
}

export interface DashboardData {
    name: string;

    level: number;

    xp: number;

    nextLevelXp: number;

    completedPractice: number;

    averageScore: number;

    accuracy: number;

    streak: number;

    weeklyActivity: WeeklyActivity[];

    recent: RecentPractice[];

    recommendation: AIRecommendation | null;
}