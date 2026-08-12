import {
    Sparkles,
    ArrowRight,
} from "lucide-react";

import {
    useEffect,
    useState,
} from "react";

import {
    useNavigate,
} from "react-router-dom";

import {
    getAIRecommendation,
} from "../../services/aiService";

import type {
    AIRecommendation as AIRecommendationType,
} from "../../types/ai";

interface Props {
    userId: string;
}

export default function AIRecommendation({
    userId,
}: Props) {

    const navigate = useNavigate();

    const [
        recommendation,
        setRecommendation,
    ] = useState<AIRecommendationType | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        if (!userId) return;

        getAIRecommendation(userId)
            .then(setRecommendation)
            .catch(console.error)
            .finally(() => {
                setLoading(false);
            });

    }, [userId]);

    return (

        <section
            className="
                rounded-2xl
                border
                border-violet-500/20
                bg-violet-500/5
                p-8
            "
        >

            <div className="flex items-center gap-3">

                <Sparkles
                    size={24}
                    className="text-violet-400"
                />

                <div>

                    <h2 className="text-2xl font-bold">
                        AI Recommendation
                    </h2>

                    <p className="mt-1 text-sm text-zinc-400">
                        Personalized learning recommendation
                    </p>

                </div>

            </div>

            {loading && (

                <p className="mt-8 text-zinc-400">
                    AI is analyzing your progress...
                </p>

            )}

            {!loading && !recommendation && (

                <p className="mt-8 text-zinc-500">
                    No recommendation available yet.
                </p>

            )}

            {!loading && recommendation && (

                <div className="mt-8">

                    <p className="text-sm text-zinc-500">
                        Recommended Practice
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                        {recommendation.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-3">

                        <span className="
                            rounded-full
                            bg-violet-500/10
                            px-3
                            py-1
                            text-sm
                            text-violet-400
                        ">
                            {recommendation.difficulty}
                        </span>

                        <span className="
                            rounded-full
                            bg-zinc-800
                            px-3
                            py-1
                            text-sm
                            text-zinc-400
                        ">
                            {recommendation.estimatedMinutes} min
                        </span>

                        <span className="
                            rounded-full
                            bg-zinc-800
                            px-3
                            py-1
                            text-sm
                            text-zinc-400
                        ">
                            {recommendation.focus}
                        </span>

                    </div>

                    <p className="
                        mt-5
                        max-w-2xl
                        leading-7
                        text-zinc-400
                    ">
                        {recommendation.reason}
                    </p>

                    <button
                        onClick={() =>
                            navigate("/practice")
                        }
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-violet-600
                            px-5
                            py-3
                            font-semibold
                            transition
                            hover:bg-violet-500
                        "
                    >

                        Start Practice

                        <ArrowRight size={18} />

                    </button>

                </div>

            )}

        </section>

    );
}