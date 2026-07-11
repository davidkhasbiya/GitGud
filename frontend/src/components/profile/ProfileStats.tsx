import {
    Trophy,
    Flame,
    Brain,
    Star,
} from "lucide-react";

import type {
    Profile,
} from "../../types/profile";

interface Props {

    profile: Profile;

}

export default function ProfileStats({

    profile,

}: Props) {

    const items = [

        {

            title: "Practices",

            value: profile.totalPractices,

            icon: Brain,

        },

        {

            title: "Average Score",

            value: `${profile.averageScore}%`,

            icon: Star,

        },

        {

            title: "XP",

            value: profile.xp,

            icon: Trophy,

        },

        {

            title: "Streak",

            value: `${profile.streak} Days`,

            icon: Flame,

        },

    ];

    return (

        <section className="grid gap-6 md:grid-cols-4">

            {items.map(item => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                    >

                        <Icon className="text-violet-400" />

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