import {
    Trophy,
    Brain,
    Flame,
    Star,
} from "lucide-react";

interface Props {

    completedPractice: number;

    averageScore: number;

    xp: number;

    streak: number;

}

export default function DashboardStats({

    completedPractice,

    averageScore,

    xp,

    streak,

}: Props) {

    const stats = [

        {

            title: "Practices",

            value: completedPractice,

            icon: Brain,

        },

        {

            title: "Average Score",

            value: `${averageScore}%`,

            icon: Star,

        },

        {

            title: "XP",

            value: xp,

            icon: Trophy,

        },

        {

            title: "Streak",

            value: `${streak} Days`,

            icon: Flame,

        },

    ];

    return (

        <section className="grid gap-6 md:grid-cols-4">

            {stats.map((item) => {

                const Icon = item.icon;

                return (

                    <div

                        key={item.title}

                        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"

                    >

                        <Icon

                            className="text-violet-400"

                            size={24}

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