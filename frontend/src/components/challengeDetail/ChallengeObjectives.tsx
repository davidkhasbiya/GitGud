import {
    CheckCircle2,
} from "lucide-react";

import type {
    Challenge,
} from "../../types/challenge";

interface Props {
    challenge: Challenge;
}

export default function ChallengeObjectives({
    challenge,
}: Props) {
    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">
                Learning Objectives
            </h2>

            <p className="mt-2 text-zinc-400">
                After completing this challenge you will be able to:
            </p>

            <div className="mt-8 space-y-4">

                {challenge.objectives.map((objective) => (

                    <div
                        key={objective}
                        className="
                            flex
                            items-start
                            gap-3
                            rounded-xl
                            border
                            border-zinc-800
                            bg-zinc-950
                            p-4
                        "
                    >

                        <CheckCircle2
                            size={20}
                            className="mt-0.5 text-emerald-400"
                        />

                        <span className="leading-7">
                            {objective}
                        </span>

                    </div>

                ))}

            </div>

        </section>

    );
}