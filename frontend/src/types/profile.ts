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

    joinedAt: string;

    level: number;

    xp: number;

    accuracy: number;

    completedPractice: number;

    recent: RecentPractice[];

}