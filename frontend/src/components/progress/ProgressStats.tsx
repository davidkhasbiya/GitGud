import {
    Trophy,
    Brain,
    Flame,
    Star,
} from "lucide-react";

import type {
    ProgressStats as ProgressStatsType,
} from "../../types/progress";

interface Props {
    stats: ProgressStatsType;
}

export default function ProgressStats({
    stats,
}: Props) {

    const statItems = [

        {
            title: "Practices",
            value: stats.totalPractice,
            icon: Brain,
        },

        {
            title: "Average Score",
            value: `${stats.averageScore}%`,
            icon: Star,
        },

        {
            title: "XP",
            value: stats.xp,
            icon: Trophy,
        },

        {
            title: "Current Streak",
            value: `${stats.streak} Days`,
            icon: Flame,
        },

    ];

    return (

        <section className="grid gap-6 md:grid-cols-4">

            {statItems.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                    >

                        <Icon
                            size={24}
                            className="text-violet-400"
                        />

                        <p className="mt-4 text-sm text-zinc-500">

                            {item.title}

                        </p>

                        <h2 className="mt-2 text-3xl font-bold">

                            {item.value}

                        </h2>

                    </div>

                );

            })}

        </section>

    );

}