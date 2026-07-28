interface Props {

    level: number;

    xp: number;

    nextLevelXp: number;

}

export default function ProgressHero({

    level,

    xp,

    nextLevelXp,

}: Props) {

    const percentage = Math.min(

        (xp / nextLevelXp) * 100,

        100

    );

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-10">

            <p className="text-violet-400">

                Your Progress

            </p>

            <h1 className="mt-2 text-5xl font-bold">

                Level {level}

            </h1>

            <p className="mt-4 text-zinc-400">

                {xp} / {nextLevelXp} XP

            </p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">

                <div

                    className="h-full rounded-full bg-violet-500 transition-all"

                    style={{

                        width: `${percentage}%`,

                    }}

                />

            </div>

        </section>

    );

}