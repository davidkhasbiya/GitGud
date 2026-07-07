import {
    Flame,
    Trophy,
    Star,
    BookOpen,
} from "lucide-react";

import StatsCard from "../stats/StatCard";

export default function DashboardHero() {

    const username = "Ahmad";

    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
                ? "Good Afternoon"
                : "Good Evening";

    return (
        <section>

            <h1 className="text-5xl font-bold">
                {greeting},{" "}
                <span className="text-violet-400">
                    {username}
                </span>
            </h1>

            <p className="mt-3 text-zinc-400">
                Continue your backend engineering journey.
            </p>

            <div
                className="
                    mt-10
                    grid
                    gap-6
                    sm:grid-cols-2
                    xl:grid-cols-4
                "
            >

                <StatsCard
                    title="Current Streak"
                    value="7 Days"
                    icon={<Flame size={22} />}
                />

                <StatsCard
                    title="Experience"
                    value="2450 XP"
                    icon={<Star size={22} />}
                />

                <StatsCard
                    title="Global Rank"
                    value="#124"
                    icon={<Trophy size={22} />}
                />

                <StatsCard
                    title="Challenges Solved"
                    value="18"
                    icon={<BookOpen size={22} />}
                />

            </div>

        </section>
    );
}