import { MessageSquare } from "lucide-react";

interface Props {
    title: string;
    time: string;
}

export default function ConversationItem({
    title,
    time,
}: Props) {
    return (
        <button
            className="
                w-full
                rounded-xl
                border
                border-transparent
                p-4
                text-left
                transition
                hover:border-violet-500
                hover:bg-zinc-800
            "
        >
            <div className="flex gap-3">

                <MessageSquare
                    size={18}
                    className="mt-1 text-violet-400"
                />

                <div className="flex-1">

                    <p className="font-medium line-clamp-1">
                        {title}
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                        {time}
                    </p>

                </div>

            </div>
        </button>
    );
}