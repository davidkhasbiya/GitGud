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

    // Legacy dashboard fields.
    // Optional agar data lama tidak merusak build.
    id?: string;
    confidence?: number;
    because?: string[];
    xp?: number;
    unlocks?: string[];
}

export interface Skill {
    name: string;
    progress: number;
}

export interface Conversation {
    id: string;
    title: string;
    time: string;
}

export interface DailyMission {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    estimatedMinutes: number;
    xp: number;
    streakBonus: number;
    completed: boolean;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    xp: number;
    earnedAt: string;
    rarity: string;
    icon: string;
    unlocked: boolean;
}

export interface LeaderboardUser {
    id: string;
    name: string;
    avatar: string;
    xp: number;
    rank: number;
    isCurrentUser: boolean;
    movement: "up" | "down" | "same";
}

export interface Leaderboard {
    league: string;
    seasonEnds: string;
    currentRank: number;
    xpToNextRank: number;
    users: LeaderboardUser[];
}

export interface HeroStats {
    streak: number;
    xp: number;
    gems: number;
    shield: number;
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