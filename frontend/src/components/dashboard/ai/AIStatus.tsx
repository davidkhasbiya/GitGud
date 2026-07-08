import {
    Bot,
    LoaderCircle,
    WifiOff,
} from "lucide-react";

import { cn } from "../../../lib/cn";

interface AIStatusProps {
    status: "online" | "thinking" | "offline";
}

export default function AIStatus({
    status,
}: AIStatusProps) {

    const config = {
        online: {
            label: "Gemini Ready",
            color: "bg-emerald-500",
            icon: (
                <Bot
                    size={18}
                    className="
                        text-violet-400
                        animate-pulse
                        drop-shadow-[0_0_8px_rgb(139,92,246)]
                    "
                />
            ),
        },

        thinking: {
            label: "Thinking...",
            color: "bg-amber-500",
            icon: (
                <LoaderCircle
                    size={18}
                    className="animate-spin text-yellow-400"
                />
            ),
        },

        offline: {
            label: "Offline",
            color: "bg-red-500",
            icon: (
                <WifiOff
                    size={18}
                    className="text-red-400"
                />
            ),
        },
    };

    const current = config[status];

    return (

        <div
            className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-5
            "
        >

            <div className="flex items-center gap-3">

                {current.icon}

                <div>

                    <p className="font-semibold">
                        AI Mentor
                    </p>

                    <p className="text-sm text-zinc-400">
                        {current.label}
                    </p>

                </div>

            </div>

            <span
                className={cn(
                    "h-3 w-3 rounded-full",
                    current.color
                )}
            />

        </div>

    );
}