import {
    Brain,
    Flame,
    Trophy,
} from "lucide-react";

export default function DashboardStats() {

    return (

        <section className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <Flame
                    className="text-orange-400"
                    size={28}
                />

                <p className="mt-6 text-zinc-400">
                    Daily Streak
                </p>

                <h2 className="mt-2 text-5xl font-bold">
                    15
                </h2>

                <p className="mt-2 text-zinc-500">
                    days
                </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <Brain
                    className="text-violet-400"
                    size={28}
                />

                <p className="mt-6 text-zinc-400">
                    AI Practices
                </p>

                <h2 className="mt-2 text-5xl font-bold">
                    48
                </h2>

                <p className="mt-2 text-zinc-500">
                    generated
                </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <Trophy
                    className="text-yellow-400"
                    size={28}
                />

                <p className="mt-6 text-zinc-400">
                    Average Score
                </p>

                <h2 className="mt-2 text-5xl font-bold">
                    84%
                </h2>

                <p className="mt-2 text-zinc-500">
                    overall
                </p>

            </div>

        </section>

    );

}