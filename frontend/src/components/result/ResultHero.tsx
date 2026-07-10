interface Props {
    score: number;
}

export default function ResultHero({
    score,
}: Props) {

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-10 text-center">

            <p className="text-violet-400">
                Practice Completed
            </p>

            <h1 className="mt-4 text-6xl font-bold">
                {score}%
            </h1>

            <p className="mt-4 text-zinc-400">
                Great job! AI has analyzed your performance.
            </p>

        </section>

    );

}