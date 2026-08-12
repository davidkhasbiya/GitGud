import {
    Sparkles,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
} from "lucide-react";

import {
    useEffect,
    useState,
} from "react";

import {
    getAIFeedback,
} from "../../services/aiService";

import type {
    AIFeedback as AIFeedbackType,
    AIFeedbackRequest,
} from "../../types/ai";

interface Props {
    submission: AIFeedbackRequest;
}

export default function AIFeedback({
    submission,
}: Props) {

    const [
        feedback,
        setFeedback,
    ] = useState<AIFeedbackType | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        getAIFeedback(submission)
            .then(setFeedback)
            .catch(console.error)
            .finally(() => {
                setLoading(false);
            });

    }, [submission]);

    if (loading) {

        return (

            <section className="
                rounded-2xl
                border
                border-violet-500/20
                bg-violet-500/5
                p-8
            ">

                <div className="flex items-center gap-3">

                    <Sparkles
                        className="text-violet-400"
                    />

                    <h2 className="text-2xl font-bold">
                        AI Feedback
                    </h2>

                </div>

                <p className="mt-6 text-zinc-400">
                    AI is analyzing your submission...
                </p>

            </section>

        );

    }

    if (!feedback) {

        return null;

    }

    return (

        <section className="
            rounded-2xl
            border
            border-violet-500/20
            bg-violet-500/5
            p-8
        ">

            <div className="flex items-center gap-3">

                <Sparkles
                    className="text-violet-400"
                />

                <h2 className="text-2xl font-bold">
                    AI Feedback
                </h2>

            </div>

            <p className="
                mt-6
                text-lg
                leading-7
                text-zinc-300
            ">
                {feedback.summary}
            </p>

            <div className="
                mt-8
                grid
                gap-6
                md:grid-cols-2
            ">

                <div>

                    <div className="flex items-center gap-2">

                        <CheckCircle2
                            size={20}
                            className="text-emerald-400"
                        />

                        <h3 className="font-semibold">
                            Strengths
                        </h3>

                    </div>

                    <ul className="mt-4 space-y-3">

                        {feedback.strengths.map(
                            (item, index) => (

                                <li
                                    key={index}
                                    className="text-sm text-zinc-400"
                                >
                                    • {item}
                                </li>

                            )
                        )}

                    </ul>

                </div>

                <div>

                    <div className="flex items-center gap-2">

                        <AlertTriangle
                            size={20}
                            className="text-yellow-400"
                        />

                        <h3 className="font-semibold">
                            Areas to Improve
                        </h3>

                    </div>

                    <ul className="mt-4 space-y-3">

                        {feedback.weaknesses.map(
                            (item, index) => (

                                <li
                                    key={index}
                                    className="text-sm text-zinc-400"
                                >
                                    • {item}
                                </li>

                            )
                        )}

                    </ul>

                </div>

            </div>

            <div className="mt-8">

                <h3 className="font-semibold">
                    Suggestions
                </h3>

                <ul className="mt-4 space-y-3">

                    {feedback.suggestions.map(
                        (item, index) => (

                            <li
                                key={index}
                                className="text-sm text-zinc-400"
                            >
                                • {item}
                            </li>

                        )
                    )}

                </ul>

            </div>

            <div className="
                mt-8
                rounded-xl
                border
                border-violet-500/20
                bg-violet-500/5
                p-5
            ">

                <p className="text-sm text-zinc-500">
                    Next Step
                </p>

                <p className="
                    mt-2
                    font-semibold
                    text-violet-300
                ">
                    {feedback.nextStep}
                </p>

            </div>

            <div className="
                mt-6
                flex
                items-center
                gap-3
                text-zinc-300
            ">

                <ArrowRight
                    size={18}
                    className="text-violet-400"
                />

                <span>
                    {feedback.encouragement}
                </span>

            </div>

        </section>

    );
}