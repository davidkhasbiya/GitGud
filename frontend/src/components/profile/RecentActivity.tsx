interface Props {

    history: any[];

}

export default function RecentActivity({
    history,
}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Recent Activity

            </h2>

            <div className="mt-8 space-y-4">

                {history.map((item) => (

                    <div
                        key={`${item.title}-${item.createdAt}`}
                        className="flex items-center justify-between rounded-xl bg-zinc-950 p-5"
                    >

                        <div>

                            <h3 className="font-semibold">

                                {item.title}

                            </h3>

                            <p className="text-sm text-zinc-500">

                                {item.createdAt}

                            </p>

                        </div>

                        <div className="text-right">

                            <p className="font-bold text-violet-400">

                                {item.score}%

                            </p>

                            <p className="text-yellow-400">

                                +{item.xpEarned} XP

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}