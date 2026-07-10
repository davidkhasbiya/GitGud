export interface ProgressStats {

    totalPractice: number;

    averageScore: number;

    xp: number;

    streak: number;

}

export interface WeeklyActivity {

    values: number[];

}

export interface SkillProgress {

    name: string;

    mastery: number;

}

export interface PracticeHistory {

    id: string;

    title: string;

    score: number;

    date: string;

}

export interface AIInsight {

    strength: string;

    weakness: string;

    recommendation: string;

}

export interface Progress {

    stats: ProgressStats;

    weeklyActivity: WeeklyActivity;

    skills: SkillProgress[];

    history: PracticeHistory[];

    aiInsight: AIInsight;

}