import SearchItem from "./SearchItem";

import type { GlobalSearchItem } from "../../../data/globalSearch";

interface Props {

    title: string;

    items: GlobalSearchItem[];

}

export default function SearchGroup({

    title,

    items,

}: Props) {

    if (items.length === 0)
        return null;

    return (

        <div>

            <p className="px-3 py-2 text-xs uppercase text-zinc-500">
                {title}
            </p>

            {items.map(item => (

                <SearchItem
                    key={item.id}
                    item={item}
                />

            ))}

        </div>

    );

}