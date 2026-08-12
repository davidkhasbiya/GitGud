import {
    Sparkles,
    ArrowRight,
} from "lucide-react";

import {
    useNavigate,
} from "react-router-dom";

import Button from "../../components/ui/Button";

import type {
    AIRecommendation,
} from "../../types/dashboard";

interface Props {

    recommendation:
        AIRecommendation | null;

}

export default function DashboardRecommendation({
    recommendation,
}: Props) {

    const navigate = useNavigate();

    if (!recommendation) {

        return (

            <section
                className="
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-900
                    p-8
                "
            >

                <div className="flex items-center gap-3">

                    <Sparkles
                        size={22}
                        className="text-violet-400"
                    />

                    <h2 className="text-xl font-bold">

                        AI Recommendation

                    </h2>

                </div>

                <p className="mt-4 text-zinc-500">

                    No recommendation available yet.

                </p>

            </section>

        );
    }

    return (

        <section
            className="
                rounded-2xl
                border
                border-violet-500/20
                bg-zinc-900
                p-8
            "
        >

            <div className="flex items-center gap-3">

                <Sparkles
                    size={22}
                    className="text-violet-400"
                />

                <div>

                    <h2 className="text-xl font-bold">

                        AI Recommendation

                    </h2>

                    <p className="text-sm text-zinc-500">

                        Personalized learning recommendation

                    </p>

                </div>

            </div>

            <div
                className="
                    mt-6
                    rounded-xl
                    border
                    border-violet-500/20
                    bg-violet-500/5
                    p-6
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        gap-4
                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >

                    <div>

                        <p className="text-sm text-zinc-500">

                            Recommended Practice

                        </p>

                        <h3 className="mt-1 text-2xl font-bold">

                            {recommendation.title}

                        </h3>

                        <p className="mt-3 max-w-2xl text-zinc-400">

                            {recommendation.reason}

                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">

                            <span
                                className="
                                    rounded-lg
                                    bg-zinc-800
                                    px-3
                                    py-1
                                    text-sm
                                "
                            >

                                {recommendation.difficulty}

                            </span>

                            <span
                                className="
                                    rounded-lg
                                    bg-zinc-800
                                    px-3
                                    py-1
                                    text-sm
                                "
                            >

                                {recommendation.estimatedMinutes} min

                            </span>

                            <span
                                className="
                                    rounded-lg
                                    bg-violet-500/10
                                    px-3
                                    py-1
                                    text-sm
                                    text-violet-400
                                "
                            >

                                Focus: {recommendation.focus}

                            </span>

                        </div>

                    </div>

                    <Button
                        onClick={() =>
                            navigate("/practice")
                        }
                        className="shrink-0"
                    >

                        Start Practice

                        <ArrowRight size={18} />

                    </Button>

                </div>

            </div>

        </section>

    );
}