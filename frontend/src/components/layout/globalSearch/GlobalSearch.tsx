import {
    Search,
} from "lucide-react";

import {
    useMemo,
    useState,
} from "react";

import {
    useNavigate,
    useSearchParams,
} from "react-router-dom";

import {
    globalSearch,
} from "../../../data/globalSearch";

import SearchDropdown from "./SearchDropdown";

export default function GlobalSearch() {
    const [searchParams] = useSearchParams();

    const initialQuery =
        searchParams.get("q") ?? "";

    const [query, setQuery] =
        useState(initialQuery);

    const navigate = useNavigate();

    const [focused, setFocused] = useState(false);

    const filtered = useMemo(() => {

        if (!query.trim())
            return [];

        return globalSearch.filter(item =>
            item.title
                .toLowerCase()
                .includes(query.toLowerCase())
        );

    }, [query]);

    const submit = () => {
        const params =
            new URLSearchParams(searchParams);

        if (query.trim()) {
            params.set("q", query);
        } else {
            params.delete("q");
        }

        navigate(`/challenges?${params.toString()}`);
    };

    return (

        <div className="relative w-full max-w-md">

            <div
                className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    px-4
                    py-3
                "
            >

                <Search
                    size={18}
                    className="text-zinc-500"
                />

                <input
                    value={query}
                    onFocus={() => setFocused(true)}
                    onBlur={() =>
                        setTimeout(
                            () => setFocused(false),
                            150
                        )
                    }
                    onChange={(e) =>
                        setQuery(e.target.value)
                    }
                    onKeyDown={(e) => {

                        if (e.key === "Enter") {

                            submit();

                        }

                    }}
                    placeholder="Search challenge, AI, workspace..."
                    className="
                        w-full
                        bg-transparent
                        outline-none
                        placeholder:text-zinc-500
                    "
                />

            </div>

            {
                focused &&
                filtered.length > 0 && (

                    <SearchDropdown
                        items={filtered}
                    />

                )
            }

        </div>

    );

}