interface Props {
    score: number;
    correct: number;
    wrong: number;
    xpEarned: number;
    level: number;
    totalXP: number;
}

export default function ResultHero({
    score,
    correct,
    wrong,
    xpEarned,
    level,
    totalXP,
}: Props) {

    return (

        <section className="rounded-2xl bg-violet-600 p-10 text-center">

            <p className="text-violet-100">
                Practice Completed
            </p>

            <h1 className="mt-4 text-6xl font-bold">

                {score}%

            </h1>

            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5">

                <div>
                    <p className="text-sm text-violet-200">
                        Correct
                    </p>

                    <h2 className="text-2xl font-bold">
                        {correct}
                    </h2>
                </div>

                <div>
                    <p className="text-sm text-violet-200">
                        Wrong
                    </p>

                    <h2 className="text-2xl font-bold">
                        {wrong}
                    </h2>
                </div>

                <div>
                    <p className="text-sm text-violet-200">
                        XP Earned
                    </p>

                    <h2 className="text-2xl font-bold">
                        +{xpEarned}
                    </h2>
                </div>

                <div>
                    <p className="text-sm text-violet-200">
                        Level
                    </p>

                    <h2 className="text-2xl font-bold">
                        {level}
                    </h2>
                </div>

                <div>
                    <p className="text-sm text-violet-200">
                        Total XP
                    </p>

                    <h2 className="text-2xl font-bold">
                        {totalXP}
                    </h2>
                </div>

            </div>

        </section>

    );

}