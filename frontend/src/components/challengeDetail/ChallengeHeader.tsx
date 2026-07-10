import {
    ArrowLeft,
    Clock3,
    Trophy,
    BookOpen,
    PlayCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

import type {
    Challenge,
} from "../../types/challenge";

interface Props {
    challenge: Challenge;
}

export default function ChallengeHeader({
    challenge,
}: Props) {

    const navigate = useNavigate();

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">

            <button
                onClick={() => navigate(-1)}
                className="
                    mb-8
                    flex
                    items-center
                    gap-2
                    text-zinc-400
                    transition
                    hover:text-violet-400
                "
            >

                <ArrowLeft size={18} />

                Back to Challenges

            </button>

            <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-400">

                    {challenge.difficulty}

                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">

                    {challenge.category}

                </span>

            </div>

            <h1 className="mt-5 text-4xl font-bold">

                {challenge.title}

            </h1>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">

                {challenge.description}

            </p>

            {/* Technologies */}

            <div className="mt-6 flex flex-wrap gap-3">

                {challenge.technologies.map((tech) => (

                    <span
                        key={tech}
                        className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm"
                    >

                        {tech}

                    </span>

                ))}

            </div>

            {/* Stats */}

            <div className="mt-8 flex flex-wrap gap-8">

                <div className="flex items-center gap-2">

                    <Clock3 size={18} />

                    {challenge.estimatedMinutes} Minutes

                </div>

                <div className="flex items-center gap-2">

                    <Trophy size={18} />

                    {challenge.xp} XP

                </div>

                <div className="flex items-center gap-2">

                    <BookOpen size={18} />

                    {challenge.totalLessons} Lessons

                </div>

            </div>

            <Button className="mt-8">

                <PlayCircle size={18} />

                Continue Challenge

            </Button>

        </section>

    );

}