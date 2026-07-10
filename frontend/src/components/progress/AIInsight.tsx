import {
    Brain,
    CheckCircle2,
    AlertTriangle,
} from "lucide-react";

import type {
    AIInsight as AIInsightType,
} from "../../types/progress";

interface Props {

    insight: AIInsightType;

}

export default function AIInsight({

    insight,

}: Props) {

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">

            <div className="flex items-center gap-3">

                <Brain
                    className="text-violet-400"
                />

                <h2 className="text-2xl font-bold">

                    AI Insight

                </h2>

            </div>

            <div className="mt-8 space-y-5">

                <div className="flex gap-3">

                    <CheckCircle2
                        className="text-emerald-400"
                    />

                    <p>

                        Strongest Skill:
                        <strong> {insight.strength}</strong>

                    </p>

                </div>

                <div className="flex gap-3">

                    <AlertTriangle
                        className="text-yellow-400"
                    />

                    <p>

                        Needs Improvement:
                        <strong> {insight.weakness}</strong>

                    </p>

                </div>

                <div>

                    <p className="text-zinc-400">

                        AI Recommendation

                    </p>

                    <p className="mt-2 text-lg font-semibold">

                        {insight.recommendation}

                    </p>

                </div>

            </div>

        </section>

    );

}