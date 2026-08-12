import axios from "../api/axios";
import type {
    AIRecommendation,
} from "../types/recommendation";

/* =========================================================
   GENERATE PRACTICE
========================================================= */

export interface GeneratePracticeRequest {
    track: string;
    difficulty: string;
    topic: string;
    questionCount: number;
}

export interface GeneratePracticeResult {
    id: string;
    slug: string;
    title: string;
}

export async function generatePractice(
    body: GeneratePracticeRequest
): Promise<GeneratePracticeResult> {

    const response = await axios.post(
        "/practices/generate",
        body
    );

    return response.data;
}

export async function getAIRecommendation(
    userId: string
): Promise<AIRecommendation> {

    const response = await axios.get(
        `/ai/recommendation/${userId}`
    );

    return response.data;
}


/* =========================================================
   AI FEEDBACK
========================================================= */

export interface AIFeedbackRequest {

    userId: string;

    practiceId: string;

    score: number;

    correct: number;

    wrong: number;

    userAnswer?: string;
}

export interface AIFeedbackResponse {

    summary: string;

    strengths: string[];

    weaknesses: string[];

    suggestions: string[];

    nextStep: string;

    encouragement: string;
}

export async function getAIFeedback(
    body: AIFeedbackRequest
): Promise<AIFeedbackResponse> {

    const response = await axios.post(
        "/ai/feedback",
        body
    );

    return response.data;
}