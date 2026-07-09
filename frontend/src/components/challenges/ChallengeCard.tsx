import {
    ArrowRight,
    Clock3,
    Gem,
    Lock,
    Trophy,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

import type { Challenge } from "../../types/challenge";

interface Props {
    challenge: Challenge;
}

export default function ChallengeCard({
    challenge,
}: Props) {
    const navigate = useNavigate();

    return (
        <div
            className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-6
                transition-all
                hover:-translate-y-1
                hover:border-violet-500
            "
        >
            {/* Header */}

            <div className="flex items-start justify-between">

                <div>

                    <h3 className="text-xl font-bold">
                        {challenge.title}
                    </h3>

                    <span
                        className="
                            mt-3
                            inline-flex
                            rounded-full
                            bg-violet-500/10
                            px-3
                            py-1
                            text-sm
                            text-violet-400
                        "
                    >
                        {challenge.difficulty}
                    </span>

                </div>

                {challenge.locked && (
                    <Lock
                        size={20}
                        className="text-zinc-500"
                    />
                )}

            </div>

            {/* Description */}

            <p className="mt-4 text-sm leading-6 text-zinc-400">
                {challenge.description}
            </p>

            {/* Technologies */}

            <div className="mt-5 flex flex-wrap gap-2">

                {challenge.technologies.map((tech) => (

                    <span
                        key={tech}
                        className="
                            rounded-lg
                            bg-zinc-800
                            px-3
                            py-1
                            text-xs
                            text-zinc-300
                        "
                    >
                        {tech}
                    </span>

                ))}

            </div>

            {/* Stats */}

            <div className="mt-6 flex flex-wrap gap-5 text-sm">

                <div className="flex items-center gap-2 text-zinc-400">

                    <Clock3 size={16} />

                    {challenge.estimatedMinutes} min

                </div>

                <div className="flex items-center gap-2 text-yellow-400">

                    <Trophy size={16} />

                    +{challenge.xp} XP

                </div>

                <div className="flex items-center gap-2 text-cyan-400">

                    <Gem size={16} />

                    +{challenge.gems}

                </div>

            </div>

            {/* Progress */}

            {!challenge.locked && (

                <>
                    <div className="mt-6">

                        <div className="mb-2 flex justify-between text-sm">

                            <span className="text-zinc-400">
                                Progress
                            </span>

                            <span>
                                {challenge.progress}%
                            </span>

                        </div>

                        <div className="h-2 rounded-full bg-zinc-800">

                            <div
                                className="h-full rounded-full bg-violet-500 transition-all"
                                style={{
                                    width: `${challenge.progress}%`,
                                }}
                            />

                        </div>

                    </div>
                </>

            )}

            {/* Button */}

            <Button
                className="mt-6 w-full"
                disabled={challenge.locked}
                onClick={() =>
                    navigate(`/challenges/${challenge.slug}`)
                }
            >
                {challenge.locked
                    ? "Locked"
                    : challenge.progress > 0
                        ? "Continue"
                        : "Start"}

                {!challenge.locked && (
                    <ArrowRight
                        size={18}
                        className="ml-2"
                    />
                )}

            </Button>

        </div>
    );
}