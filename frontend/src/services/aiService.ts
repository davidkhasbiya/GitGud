import axios from "../api/axios";

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