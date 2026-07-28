import {
    ArrowRight,
    Trophy,
} from "lucide-react";

interface PracticeHistoryItem {
    title: string;
    score: number;
    xpEarned: number;
    createdAt: string;
}

interface Props {
    history: PracticeHistoryItem[];
}

export default function PracticeHistory({
    history,
}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Recent Practices

            </h2>

            <p className="mt-2 text-zinc-400">

                Your latest completed AI coding practices.

            </p>

            <div className="mt-8 space-y-4">

                {history.length === 0 ? (

                    <p className="text-zinc-500">

                        You haven't completed any practice yet.

                    </p>

                ) : (

                    history.map((practice) => (

                        <div
                            key={`${practice.title}-${practice.createdAt}`}
                            className="flex items-center justify-between rounded-xl bg-zinc-950 p-5"
                        >

                            <div>

                                <h3 className="font-semibold">

                                    {practice.title}

                                </h3>

                                <p className="mt-1 text-sm text-zinc-500">

                                    {practice.createdAt}

                                </p>

                            </div>

                            <div className="flex items-center gap-8">

                                <div className="text-right">

                                    <p className="text-sm text-zinc-500">

                                        Score

                                    </p>

                                    <p className="font-bold text-violet-400">

                                        {practice.score}%

                                    </p>

                                </div>

                                <div className="text-right">

                                    <p className="text-sm text-zinc-500">

                                        XP

                                    </p>

                                    <p className="font-bold text-yellow-400">

                                        +{practice.xpEarned}

                                    </p>

                                </div>

                                <ArrowRight
                                    className="text-zinc-500"
                                    size={18}
                                />

                            </div>

                        </div>

                    ))

                )}

            </div>

        </section>

    );

}