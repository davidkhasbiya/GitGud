import {
    Trophy,
    CheckCircle2,
    Clock3,
} from "lucide-react";

interface Props {
    correct: number;
    total: number;
    xp: number;
    duration: number;
}

export default function ResultStats({
    correct,
    total,
    xp,
    duration,
}: Props) {

    return (

        <section className="grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-zinc-900 p-6">

                <CheckCircle2 className="mb-4 text-emerald-400" />

                <p className="text-zinc-500">
                    Correct
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                    {correct}/{total}
                </h3>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

                <Trophy className="mb-4 text-yellow-400" />

                <p className="text-zinc-500">
                    XP Earned
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                    +{xp}
                </h3>

            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">

                <Clock3 className="mb-4 text-violet-400" />

                <p className="text-zinc-500">
                    Time
                </p>

                <h3 className="mt-2 text-3xl font-bold">

                    {duration} minute{duration > 1 ? "s" : ""}

                </h3>

            </div>

        </section>

    );

}