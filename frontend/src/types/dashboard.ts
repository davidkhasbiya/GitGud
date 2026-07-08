export interface Skill {
    name: string;
    progress: number;
}

export interface DailyMission {
    id: string;
    title: string;
    description: string;

    difficulty:
    | "Beginner"
    | "Intermediate"
    | "Advanced";

    estimatedMinutes: number;

    xp: number;
    streakBonus: number;

    completed: boolean;
}

export interface Conversation {
    id: string;
    title: string;
    time: string;
}

export interface Challenge {
    id: string;
    title: string;
    difficulty: string;
    xp: number;
}

export interface Achievement {
    id: string;
    title: string;
    icon: string;
    unlocked: boolean;
}

export interface LeaderboardUser {
    id: string;
    name: string;
    xp: number;
    rank: number;
}

export interface AIRecommendation {
    id: string;
    title: string;
    because: string[];
    confidence: number;
    reason: string;
    difficulty: string;
    estimatedMinutes: number;
    xp: number;
    unlocks: string[];
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    xp: number;
    earnedAt: string;
    rarity: "Common" | "Rare" | "Epic" | "Legendary";
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