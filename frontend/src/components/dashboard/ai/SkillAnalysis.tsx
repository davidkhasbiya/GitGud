import type { Skill } from "../../../types/dashboard";
interface Props {
    skills: Skill[];
}

export default function SkillAnalysis({
    skills,
}: Props) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <h3 className="mb-6 text-lg font-semibold">
                Backend Skills
            </h3>

            <div className="space-y-5">

                {skills.map((skill) => (

                    <div key={skill.name}>

                        <div className="mb-2 flex items-center justify-between">

                            <span className="text-sm">
                                {skill.name}
                            </span>

                            <span className="text-sm text-zinc-400">
                                {skill.progress}%
                            </span>

                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

                            <div
                                className={`
                                        h-full
                                        rounded-full
                                        transition-all
                                        duration-700
                                        ${skill.progress >= 80
                                        ? "bg-emerald-500"
                                        : skill.progress >= 50
                                            ? "bg-violet-500"
                                            : skill.progress >= 20
                                                ? "bg-amber-500"
                                                : "bg-zinc-700"
                                    }
                                    `}
                                style={{
                                    width: `${skill.progress}%`,
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}