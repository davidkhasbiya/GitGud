export interface RecentPractice {
    title: string;
    score: number;
    xpEarned: number;
    createdAt: string;
}

export interface Profile {
    id: string;
    name: string;
    email: string;
    level: number;
    xp: number;
    accuracy: number;
    completedPractice: number;
    joinedAt: string;
    recent: RecentPractice[];
}