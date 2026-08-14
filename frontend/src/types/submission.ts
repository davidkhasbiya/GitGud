export interface SubmissionAnswer {
    questionId: string;
    answer: string;
}

export interface SubmissionRequest {

    userId: string;

    practiceId: string;

    duration: number;

    answers: SubmissionAnswer[];
}

export interface SubmissionResult {

    score: number;

    correct: number;

    wrong: number;

    xpEarned: number;

    level: number;

    totalXP: number;

    duration: number;
}