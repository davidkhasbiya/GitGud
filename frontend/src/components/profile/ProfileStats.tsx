import {
    Trophy,
    Brain,
    Target,
    Star,
} from "lucide-react";

interface Props {
    profile: any;
}

export default function ProfileStats({
    profile,
}: Props) {

    const stats = [

        {
            title: "Level",
            value: profile.level,
            icon: Star,
        },

        {
            title: "XP",
            value: profile.xp,
            icon: Trophy,
        },

        {
            title: "Practices",
            value: profile.completedPractice,
            icon: Brain,
        },

        {
            title: "Accuracy",
            value: `${Math.round(profile.accuracy)}%`,
            icon: Target,
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

                        <Icon className="text-violet-400" />

                        <p className="mt-4 text-zinc-500">

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