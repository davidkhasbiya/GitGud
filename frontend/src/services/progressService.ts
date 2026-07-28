import axios from "axios";
import type { ProgressResponse } from "../types/progress";

const API = "http://localhost:8080/api/v1";

export async function getProgress(
    userId: string
): Promise<ProgressResponse> {

    const token = localStorage.getItem("token");

    const res = await axios.get(
        `${API}/progress/${userId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
}