import {
    Trophy,
    Flame,
    Target,
    Star,
} from "lucide-react";

interface Props {
    profile: any;
}

export default function AchievementList({
    profile,
}: Props) {

    const achievements = [

        {
            icon: Trophy,
            title: "First Practice",
            unlocked: profile.completedPractice >= 1,
        },

        {
            icon: Flame,
            title: "10 Practices",
            unlocked: profile.completedPractice >= 10,
        },

        {
            icon: Target,
            title: "90% Accuracy",
            unlocked: profile.accuracy >= 90,
        },

        {
            icon: Star,
            title: "Level 5",
            unlocked: profile.level >= 5,
        },

    ];

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Achievements

            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

                {achievements.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className={`rounded-xl border p-5 ${
                                item.unlocked
                                    ? "border-violet-500 bg-violet-500/10"
                                    : "border-zinc-800 bg-zinc-950 opacity-50"
                            }`}
                        >

                            <Icon className="text-violet-400" />

                            <h3 className="mt-4 font-semibold">

                                {item.title}

                            </h3>

                        </div>

                    );

                })}

            </div>

        </section>

    );

}