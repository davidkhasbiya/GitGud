interface Props {

    name: string;

    level: number;

    xp: number;

    nextLevelXp: number;

}

export default function DashboardHero({

    name,

    level,

    xp,

    nextLevelXp,

}: Props) {

    const percent =

        Math.min(

            (xp / nextLevelXp) * 100,

            100,

        );

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-10">

            <p className="text-zinc-400">

                Welcome Back 

            </p>

            <h1 className="mt-2 text-4xl font-bold">

                {name}

            </h1>

            <p className="mt-6">

                Level {level}

            </p>

            <div className="mt-4 h-3 rounded-full bg-zinc-800">

                <div

                    className="h-full rounded-full bg-violet-500 transition-all"

                    style={{

                        width: `${percent}%`,

                    }}

                />

            </div>

            <p className="mt-3 text-sm text-zinc-400">

                {xp} / {nextLevelXp} XP

            </p>

        </section>

    );

}