import type {
    Achievement,
} from "../../types/profile";

interface Props {

    achievements: Achievement[];

}

export default function AchievementGrid({

    achievements,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Achievements

            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">

                {achievements.map(item => (

                    <div
                        key={item.id}
                        className="rounded-xl bg-zinc-950 p-5"
                    >

                        <h3 className="font-semibold">

                            {item.title}

                        </h3>

                        <p className="mt-2 text-sm text-zinc-400">

                            {item.description}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}