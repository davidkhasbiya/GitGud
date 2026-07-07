import { Flame, Gift } from "lucide-react";
import Button from "../../ui/Button";

export default function DailyStreak() {
    const streak = 7;

    const week = [
        true,
        true,
        true,
        true,
        false,
        false,
        false,
    ];

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
            <div className="flex items-start justify-between">

                <div>

                    <div className="flex items-center gap-3">

                        <Flame
                            size={28}
                            className="text-orange-500"
                        />

                        <h2 className="text-2xl font-bold">
                            Daily Streak
                        </h2>

                    </div>

                    <p className="mt-3 text-zinc-400">
                        Keep solving challenges every day to earn bonus XP.
                    </p>

                </div>

                <div
                    className="
                        rounded-xl
                        bg-orange-500/10
                        px-5
                        py-3
                    "
                >
                    <p className="text-sm text-zinc-400">
                        Current Streak
                    </p>

                    <h3 className="text-3xl font-bold text-orange-400">
                        {streak} Days
                    </h3>

                </div>

            </div>

            {/* Week */}

            <div className="mt-10">

                <div className="grid grid-cols-7 gap-4">

                    {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (

                        <div
                            key={day + index}
                            className="flex flex-col items-center gap-3"
                        >

                            <span className="text-sm text-zinc-500">
                                {day}
                            </span>

                            <div
                                className={`
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    transition
                                    ${week[index]
                                        ? "bg-orange-500 text-white"
                                        : "bg-zinc-800 text-zinc-500"
                                    }
                                `}
                            >
                                {week[index]
                                    ? <Flame size={20} />
                                    : "•"}
                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Reward */}

            <div
                className="
                    mt-10
                    flex
                    flex-col
                    gap-6
                    rounded-xl
                    border
                    border-zinc-800
                    bg-zinc-950
                    p-6
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >

                <div>

                    <div className="flex items-center gap-2">

                        <Gift
                            size={20}
                            className="text-violet-400"
                        />

                        <span className="font-semibold">
                            Next Reward
                        </span>

                    </div>

                    <p className="mt-2 text-zinc-400">
                        Complete today's challenge to earn
                        <span className="font-semibold text-violet-400">
                            {" "}+100 XP
                        </span>
                    </p>

                </div>

                <Button>
                    Solve Today's Challenge
                </Button>

            </div>

        </section>
    );
}