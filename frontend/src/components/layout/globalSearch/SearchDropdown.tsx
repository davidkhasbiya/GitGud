import SearchGroup from "./SearchGroup";

import type { GlobalSearchItem } from "../../../data/globalSearch";

interface Props {

    items: GlobalSearchItem[];

}

export default function SearchDropdown({

    items,

}: Props) {

    return (

        <div
            className="
                absolute
                left-0
                right-0
                top-16
                z-50
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-3
                shadow-2xl
            "
        >

            <SearchGroup
                title="Challenges"
                items={items.filter(
                    x => x.type === "challenge"
                )}
            />

            <SearchGroup
                title="Learning Paths"
                items={items.filter(
                    x => x.type === "learning"
                )}
            />

            <SearchGroup
                title="Workspace"
                items={items.filter(
                    x => x.type === "workspace"
                )}
            />

            <SearchGroup
                title="AI Mentor"
                items={items.filter(
                    x => x.type === "ai"
                )}
            />

        </div>

    );

}