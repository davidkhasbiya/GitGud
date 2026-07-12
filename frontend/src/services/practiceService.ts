import api from "../api/axios";

export interface Track {
    id: string;
    name: string;
    slug: string;
}

export interface Practice {
    id: string;
    title: string;
    slug: string;
    description: string;
    difficulty: string;
    estimatedMinutes: number;
    xpReward: number;
    track: Track;
}

export const getPractices = async (): Promise<Practice[]> => {
    const { data } = await api.get("/practices");
    return data;
};