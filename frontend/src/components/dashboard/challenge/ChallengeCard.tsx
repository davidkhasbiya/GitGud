import {
    Clock3,
    Trophy,
    Lock,
    ArrowRight,
} from "lucide-react";

import Button from "../../ui/Button";

interface Props {
    title: string;
    difficulty: string;
    tech: string;
    xp: number;
    duration: string;

    progress?: number;

    locked?: boolean;
}

export default function ChallengeCard({
    title,
    difficulty,
    tech,
    xp,
    duration,
    progress,
    locked,
}: Props) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-6
                transition
                hover:border-violet-500
            "
        >
            <div className="flex items-start justify-between">

                <div>

                    <h3 className="text-xl font-semibold">
                        {title}
                    </h3>

                    <p className="mt-2 text-zinc-400">
                        {difficulty}
                    </p>

                    <p className="mt-2 text-sm text-zinc-500">
                        {tech}
                    </p>

                </div>

                {locked && (
                    <Lock
                        size={20}
                        className="text-zinc-500"
                    />
                )}

            </div>

            <div className="mt-6 flex gap-6 text-sm text-zinc-400">

                <div className="flex items-center gap-2">

                    <Clock3 size={16} />

                    {duration}

                </div>

                <div className="flex items-center gap-2">

                    <Trophy size={16} />

                    {xp} XP

                </div>

            </div>

            {progress !== undefined && (

                <>

                    <div className="mt-6 h-2 rounded-full bg-zinc-800">

                        <div
                            className="h-full rounded-full bg-violet-500"
                            style={{
                                width: `${progress}%`,
                            }}
                        />

                    </div>

                    <p className="mt-2 text-sm text-zinc-400">
                        {progress}% completed
                    </p>

                </>

            )}

            <Button
                className="mt-6 w-full"
                disabled={locked}
            >
                {locked
                    ? "Locked"
                    : progress
                        ? "Continue"
                        : "Start"}

                {!locked && (
                    <ArrowRight
                        size={18}
                        className="ml-2"
                    />
                )}

            </Button>

        </div>
    );
}