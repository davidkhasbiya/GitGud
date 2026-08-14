import api from "../api/axios";
import type { ProgressResponse } from "../types/progress";

export async function getProgress(
    userId: string,
): Promise<ProgressResponse> {

    const { data } = await api.get(
        `/progress/${userId}`,
    );

    return data;
}