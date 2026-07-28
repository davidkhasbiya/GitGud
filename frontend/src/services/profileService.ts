import axios from "axios";

const API = "http://localhost:8080/api/v1";

export interface RecentPractice {
    title: string;
    score: number;
    xpEarned: number;
    createdAt: string;
}

export interface Profile {
    id: string;

    name: string;

    email: string;

    level: number;

    xp: number;

    accuracy: number;

    completedPractice: number;

    joinedAt: string;

    recent: RecentPractice[];
}

export async function getProfile(
    userId: string
): Promise<Profile> {

    const token = localStorage.getItem("token");

    const res = await axios.get(
        `${API}/profile/${userId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;

}