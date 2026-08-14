import api from "../api/axios";
import type { Practice } from "../types/practice";

export async function getPractices(): Promise<Practice[]> {

    const { data } = await api.get(
        "/practices",
    );

    return data;
}

export async function getPractice(
    slug: string,
): Promise<Practice> {

    const { data } = await api.get(
        `/practices/${slug}`,
    );

    return data;
}