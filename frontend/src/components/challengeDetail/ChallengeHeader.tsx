import {
    ArrowLeft,
    Code2,
    Layers3,
    Tag,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import type { Challenge } from "../../types/challenge";

interface Props {
    challenge: Challenge;
}

export default function ChallengeHeader({
    challenge,
}: Props) {

    const navigate = useNavigate();

    return (

        <section className="space-y-6">

            <button
                onClick={() => navigate(-1)}
                className="
                    flex
                    items-center
                    gap-2
                    text-zinc-400
                    transition
                    hover:text-white
                "
            >
                <ArrowLeft size={18} />

                Back to Challenges

            </button>

            <div>

                <h1 className="text-4xl font-bold">

                    {challenge.title}

                </h1>

                <p className="mt-3 text-zinc-400">

                    {challenge.description}

                </p>

            </div>

            <div className="flex flex-wrap gap-3">

                <span className="rounded-full bg-violet-600/20 px-4 py-2 text-sm text-violet-300">

                    {challenge.difficulty}

                </span>

                <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm">

                    <Layers3 size={16} />

                    {challenge.category}

                </span>

            </div>

            <div className="flex flex-wrap gap-3">

                {challenge.technologies.map((tech) => (

                    <span
                        key={tech}
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-zinc-800
                            bg-zinc-900
                            px-4
                            py-2
                            text-sm
                        "
                    >

                        <Code2 size={16} />

                        {tech}

                    </span>

                ))}

            </div>

        </section>

    );

}