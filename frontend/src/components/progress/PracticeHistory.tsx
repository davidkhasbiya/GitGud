import type {
    PracticeHistory as PracticeHistoryType,
} from "../../types/progress";

interface Props {

    history: PracticeHistoryType[];

}

export default function PracticeHistory({

    history,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Recent Practices

            </h2>

            <div className="mt-8 space-y-4">

                {history.map((item) => (

                    <div
                        key={item.id}
                        className="rounded-xl bg-zinc-950 p-5"
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <h3 className="font-semibold">

                                    {item.title}

                                </h3>

                                <p className="text-sm text-zinc-500">

                                    {item.date}

                                </p>

                            </div>

                            <span className="text-lg font-bold text-violet-400">

                                {item.score}%

                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}