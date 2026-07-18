import axios from "axios";

const API = "http://localhost:8080/api/v1";

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

export async function submitPractice(
    data: SubmissionRequest
): Promise<SubmissionResult> {

    const token = localStorage.getItem("token");

    const res = await axios.post(
        `${API}/submissions`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
}