import api from "../api/axios";

import type {
    SubmissionRequest,
    SubmissionResult,
} from "../types/submission";

export async function submitPractice(
    data: SubmissionRequest,
): Promise<SubmissionResult> {

    const response = await api.post(
        "/submissions",
        data,
    );

    return response.data;
}