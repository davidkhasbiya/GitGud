import api from "../api/axios";

import type {
    SearchItem,
} from "../types/search";

export async function search(
    query: string,
): Promise<SearchItem[]> {

    if (!query.trim()) {

        return [];

    }

    const { data } = await api.get(

        `/search?q=${encodeURIComponent(query)}`

    );

    return data;

}