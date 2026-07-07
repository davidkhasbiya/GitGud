import { TrendingUp } from "lucide-react";

const activity = [
    { day: "Mon", xp: 20 },
    { day: "Tue", xp: 45 },
    { day: "Wed", xp: 10 },
    { day: "Thu", xp: 70 },
    { day: "Fri", xp: 40 },
    { day: "Sat", xp: 25 },
    { day: "Sun", xp: 50 },
];

export default function WeeklyActivity() {
    const totalXP = activity.reduce(
        (sum, item) => sum + item.xp,
        0
    );

    return (
        <section
            className="
                mt-8
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-8
            "
        >
            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold">
                        Weekly Activity
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        Your learning consistency this week.
                    </p>

                </div>

                <div className="flex items-center gap-2 text-violet-400">

                    <TrendingUp size={20} />

                    <span className="font-semibold">
                        +{totalXP} XP
                    </span>

                </div>

            </div>

            <div className="mt-10 flex h-64 items-end justify-between gap-4">

                {activity.map((item) => (

                    <div
                        key={item.day}
                        className="flex flex-1 flex-col items-center"
                    >

                        <div
                            className="
                                w-full
                                rounded-t-xl
                                bg-gradient-to-t
                                from-violet-600
                                to-fuchsia-500
                                transition-all
                                hover:opacity-80
                            "
                            style={{
                                height: `${item.xp * 2.5}px`,
                            }}
                        />

                        <span className="mt-3 text-sm text-zinc-500">
                            {item.day}
                        </span>

                    </div>

                ))}

            </div>

        </section>
    );
}