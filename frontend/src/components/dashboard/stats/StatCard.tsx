import type { ReactNode } from "react";

interface StatsCardProps {
    title: string;
    value: string;
    icon: ReactNode;
}

export default function StatsCard({
    title,
    value,
    icon,
}: StatsCardProps) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-5
                transition
                hover:border-violet-500
                hover:-translate-y-1
            "
        >
            <div className="flex items-center justify-between">

                <div>
                    <p className="text-sm text-zinc-400">
                        {title}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                        {value}
                    </h3>
                </div>

                <div
                    className="
                        rounded-xl
                        bg-violet-600/20
                        p-3
                        text-violet-400
                    "
                >
                    {icon}
                </div>

            </div>
        </div>
    );
}