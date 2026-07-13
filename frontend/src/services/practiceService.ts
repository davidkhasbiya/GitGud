import axios from "axios";

import type { Practice } from "../types/practice";

const API = "http://localhost:8080/api/v1";

export async function getPractices(): Promise<Practice[]> {

    const res = await axios.get(
        `${API}/practices`
    );

    return res.data;

}

export async function getPractice(
    slug: string,
): Promise<Practice> {

    const res = await axios.get(
        `${API}/practices/${slug}`,
    );

    return res.data;

}