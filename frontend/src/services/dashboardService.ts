import axios from "axios";

import type { DashboardData } from "../types/dashboard";

const API = "http://localhost:8080/api/v1";

export async function getDashboard(
    userId: string,
): Promise<DashboardData> {

    const token = localStorage.getItem("token");

    const res = await axios.get(
        `${API}/dashboard/${userId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
}