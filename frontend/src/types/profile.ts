export interface Profile {

    id: string;

    username: string;

    fullName: string;

    email: string;

    bio: string;

    avatar: string;

    joinedAt: string;

    level: number;

    xp: number;

    streak: number;

    totalPractices: number;

    averageScore: number;

    skills: Skill[];

    achievements: Achievement[];

    activities: Activity[];

}

export interface Skill {

    name: string;

    mastery: number;

}

export interface Achievement {

    id: string;

    title: string;

    description: string;

    icon: string;

}

export interface Activity {

    id: string;

    title: string;

    date: string;

}