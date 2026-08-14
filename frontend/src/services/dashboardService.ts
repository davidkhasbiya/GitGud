import api from "../api/axios";
import type { DashboardData } from "../types/dashboard";

export async function getDashboard(
    userId: string,
): Promise<DashboardData> {

    const { data } = await api.get(
        `/dashboard/${userId}`,
    );

    return data;
}