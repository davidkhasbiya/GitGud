import api from "../api/axios";
import type { Profile } from "../types/profile";

export async function getProfile(
    userId: string,
): Promise<Profile> {

    const { data } = await api.get(
        `/profile/${userId}`,
    );

    return data;
}