import {
    Bot,
    BookOpen,
    Folder,
    Brain,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import type { GlobalSearchItem } from "../../../data/globalSearch";

interface Props {
    item: GlobalSearchItem;
}

export default function SearchItem({
    item,
}: Props) {

    const navigate = useNavigate();

    const icon = {

        challenge: BookOpen,

        learning: Folder,

        workspace: Folder,

        ai: Brain,

    };

    const Icon = icon[item.type];

    return (

        <button
            onClick={() => navigate(item.url)}
            className="
                flex
                w-full
                items-center
                gap-3
                rounded-lg
                px-3
                py-3
                text-left
                transition
                hover:bg-zinc-800
            "
        >

            <Icon
                size={18}
                className="text-violet-400"
            />

            <div>

                <p className="font-medium">
                    {item.title}
                </p>

                <p className="text-xs text-zinc-500">
                    {item.description}
                </p>

            </div>

        </button>

    );

}