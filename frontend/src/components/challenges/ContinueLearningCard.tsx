import Button from "../ui/Button";

import { ArrowRight } from "lucide-react";

import type { Challenge } from "../../types/challenge";
import { useNavigate } from "react-router-dom";
interface Props {
    challenge: Challenge;
}

export default function ContinueLearningCard({
    challenge,
}: Props) {
    const navigate = useNavigate();
    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">

            <p className="text-sm text-violet-400">
                Continue Learning
            </p>

            <h2 className="mt-2 text-2xl font-bold">
                {challenge.title}
            </h2>

            <p className="mt-2 text-zinc-400">
                {challenge.completedLessons} / {challenge.totalLessons} lessons completed
            </p>

            <div className="mt-5 h-2 rounded-full bg-zinc-800">

                <div
                    className="h-full rounded-full bg-violet-500"
                    style={{
                        width: `${challenge.progress}%`,
                    }}
                />

            </div>

            <Button
                className="mt-6"
                onClick={() =>
                    navigate(`/challenges/${challenge.slug}`)
                }
            >
                Continue
                <ArrowRight size={18} />
            </Button>

        </section>

    );

}