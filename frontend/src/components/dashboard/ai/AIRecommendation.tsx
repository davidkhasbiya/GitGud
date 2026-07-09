import {
    ArrowRight,
    Brain,
    CheckCircle2,
    Clock3,
    Sparkles,
    Trophy,
} from "lucide-react";

import Button from "../../ui/Button";

import type { AIRecommendation } from "../../../types/dashboard";
import { useNavigate } from "react-router-dom";

interface Props {
    recommendation: AIRecommendation;
}

export default function AIRecommendation({
    recommendation,
}: Props) {
    const confidenceLabel =
        recommendation.confidence >= 90
            ? "Very High"

            : recommendation.confidence >= 75
                ? "High"

                : recommendation.confidence >= 60
                    ? "Medium"

                    : "Low";

    const confidenceColor =
        recommendation.confidence >= 90
            ? "from-emerald-400 to-green-500"
            : recommendation.confidence >= 70
                ? "from-violet-500 to-fuchsia-500"
                : "from-yellow-400 to-orange-500";
                const navigate = useNavigate();
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg shadow-violet-500/5">

            {/* Header */}

            <div className="mb-8">

                <div className="flex items-start justify-between">

                    <div className="flex items-center gap-3">

                        <Brain
                            size={24}
                            className="text-violet-400"
                        />

                        <div>

                            <h2 className="text-2xl font-bold">
                                AI Recommendation
                            </h2>

                            <p className="text-sm text-zinc-400">
                                AI analyzed your learning history.
                            </p>

                        </div>

                    </div>

                    <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                        {recommendation.confidence}% Match
                    </span>

                </div>

                {/* Confidence Meter */}

                <div className="mt-6">

                    <div className="mb-2 flex items-center justify-between">

                        <span className="text-xs uppercase tracking-wider text-zinc-500">
                            AI Confidence
                        </span>

                        <span className="text-sm font-medium text-emerald-400">
                            {recommendation.confidence}%
                        </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

                        <div
                            className={`h-full rounded-full bg-gradient-to-r ${confidenceColor} transition-all duration-700`}
                            style={{
                                width: `${recommendation.confidence}%`,
                            }}
                        />

                    </div>

                    <p className="mt-2 text-xs text-zinc-500">
                        {confidenceLabel} confidence based on your completed skills.
                    </p>

                </div>

            </div>


            {/* Content */}

            <div className="grid gap-8 lg:grid-cols-2">

                {/* LEFT */}

                <div>

                    <p className="mb-5 text-sm text-zinc-400">
                        Because you mastered
                    </p>

                    <div className="space-y-3">

                        {recommendation.because.map((item) => (

                            <div
                                key={item}
                                className="flex items-center gap-3 rounded-lg bg-zinc-800/50 px-4 py-3"
                            >

                                <CheckCircle2
                                    size={18}
                                    className="text-emerald-400"
                                />

                                <span>{item}</span>

                            </div>

                        ))}

                    </div>

                </div>

                {/* RIGHT */}

                <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">

                    <div className="flex items-center gap-2">

                        <Sparkles
                            size={18}
                            className="text-yellow-400"
                        />

                        <span className="text-sm font-medium text-violet-400">
                            Next Best Topic
                        </span>

                    </div>

                    <h3 className="mt-3 text-3xl font-bold">
                        {recommendation.title}
                    </h3>

                    {/* AI Analysis */}

                    <div className="mt-6 rounded-xl bg-zinc-950/40 p-4">

                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                            AI Analysis
                        </p>

                        <p className="mt-3 leading-7 text-zinc-300">
                            {recommendation.reason}
                        </p>

                    </div>

                    {/* Stats */}

                    <div className="mt-8 grid grid-cols-2 gap-4">

                        <div className="rounded-xl bg-zinc-800/40 p-4">

                            <p className="text-xs text-zinc-500">
                                Difficulty
                            </p>

                            <p className="mt-2 font-semibold">
                                {recommendation.difficulty}
                            </p>

                        </div>

                        <div className="rounded-xl bg-zinc-800/40 p-4">

                            <p className="text-xs text-zinc-500">
                                Duration
                            </p>

                            <div className="mt-2 flex items-center gap-2">

                                <Clock3 size={16} />

                                <span>
                                    {recommendation.estimatedMinutes} min
                                </span>

                            </div>

                        </div>

                        <div className="col-span-2 rounded-xl bg-zinc-800/40 p-4">

                            <div className="flex items-center gap-2">

                                <Trophy
                                    size={18}
                                    className="text-yellow-400"
                                />

                                <span className="font-semibold">
                                    +{recommendation.xp} XP
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Unlock */}

                    <div className="mt-8">

                        <p className="mb-3 text-sm text-zinc-400">
                            Unlock After Completion
                        </p>

                        <div className="space-y-2">

                            {recommendation.unlocks.map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >

                                    <CheckCircle2
                                        size={16}
                                        className="text-emerald-400"
                                    />

                                    <span>{item}</span>

                                </div>

                            ))}

                        </div>

                    </div>

                    <Button
                        className="mt-8 w-full" onClick={() => navigate("/challenges")}
                    >
                        Learn Now
                        <ArrowRight size={18} />

                    </Button>

                </div>

            </div>

        </div>
    );
}