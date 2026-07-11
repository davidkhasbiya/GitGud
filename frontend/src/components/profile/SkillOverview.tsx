import type {
    Skill,
} from "../../types/profile";

interface Props {

    skills: Skill[];

}

export default function SkillOverview({

    skills,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Skill Overview

            </h2>

            <div className="mt-8 space-y-6">

                {skills.map(skill => (

                    <div key={skill.name}>

                        <div className="mb-2 flex justify-between">

                            <span>

                                {skill.name}

                            </span>

                            <span>

                                {skill.mastery}%

                            </span>

                        </div>

                        <div className="h-2 rounded-full bg-zinc-800">

                            <div
                                className="h-full rounded-full bg-violet-500"
                                style={{
                                    width: `${skill.mastery}%`,
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}