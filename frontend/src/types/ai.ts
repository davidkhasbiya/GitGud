export interface AIRecommendation {
    title: string;
    reason: string;
    difficulty: string;
    estimatedMinutes: number;
    focus: string;
}

export interface AIFeedback {
    summary: string;
    strengths: string[];
    weaknesses: string[];
    suggestions: string[];
    nextStep: string;
    encouragement: string;
}

export interface AIFeedbackRequest {
    userId: string;
    practiceId: string;
    score: number;
    correct: number;
    wrong: number;
    userAnswer?: string;
}