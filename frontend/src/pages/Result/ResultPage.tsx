import {
    useEffect,
    useState,
} from "react";

import {
    ResultHero,
    ResultStats,
    AIFeedback,
    NextRecommendation,
    ResultActions,
} from "../../components/result";

import {
    useLocation,
} from "react-router-dom";

import {
    getAIFeedback,
} from "../../services/aiService";

import {
    getDashboard,
} from "../../services/dashboardService";

import type {
    AIFeedbackResponse,
} from "../../services/aiService";

import type {
    DashboardData,
} from "../../types/dashboard";

export default function ResultPage() {

    const { state } = useLocation();

    const [
        feedback,
        setFeedback,
    ] = useState<AIFeedbackResponse | null>(
        null,
    );

    const [
        dashboard,
        setDashboard,
    ] = useState<DashboardData | null>(
        null,
    );

    const [
        loading,
        setLoading,
    ] = useState(true);

    const [
        error,
        setError,
    ] = useState<string | null>(
        null,
    );

    useEffect(() => {

        if (!state) {

            setLoading(false);

            return;
        }

        const user = JSON.parse(
            localStorage.getItem("user") || "{}",
        );

        if (!user.id) {

            setError(
                "User session not found.",
            );

            setLoading(false);

            return;
        }

        if (!state.practiceId) {

            setError(
                "Practice ID is missing.",
            );

            setLoading(false);

            return;
        }

        async function loadResultData() {

            try {

                const [
                    feedbackData,
                    dashboardData,
                ] = await Promise.all([

                    getAIFeedback({

                        userId: user.id,

                        practiceId:
                            state.practiceId,

                        score:
                            state.score,

                        correct:
                            state.correct,

                        wrong:
                            state.wrong,

                    }),

                    getDashboard(user.id),

                ]);

                setFeedback(
                    feedbackData,
                );

                setDashboard(
                    dashboardData,
                );

            } catch (err) {

                console.error(
                    "Failed to load result data:",
                    err,
                );

                setError(
                    "Failed to load result data.",
                );

            } finally {

                setLoading(false);

            }
        }

        loadResultData();

    }, [state]);

    if (!state) {

        return (

            <div className="p-8">

                <p className="text-zinc-400">

                    No Result

                </p>

            </div>

        );
    }

    return (

        <div
            className="
                mx-auto
                max-w-6xl
                space-y-8
            "
        >

            {/* RESULT HERO */}

            <ResultHero
                score={state.score}
                correct={state.correct}
                wrong={state.wrong}
                xpEarned={state.xpEarned}
                level={state.level}
                totalXP={state.totalXP}
            />


            {/* RESULT STATS */}

            <ResultStats
                correct={state.correct}
                total={
                    state.correct +
                    state.wrong
                }
                xp={state.xpEarned}
                duration={state.duration}
            />


            {/* AI FEEDBACK */}

            {loading ? (

                <section
                    className="
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-zinc-900
                        p-8
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <div
                            className="
                                h-5
                                w-5
                                animate-spin
                                rounded-full
                                border-2
                                border-zinc-700
                                border-t-violet-500
                            "
                        />

                        <p className="text-zinc-400">

                            Gemini is analyzing
                            your performance...

                        </p>

                    </div>

                </section>

            ) : error ? (

                <section
                    className="
                        rounded-2xl
                        border
                        border-red-500/20
                        bg-zinc-900
                        p-8
                    "
                >

                    <p className="text-red-400">

                        {error}

                    </p>

                </section>

            ) : feedback ? (

                <AIFeedback
                    feedback={
                        feedback.summary
                    }

                    strengths={
                        feedback.strengths
                    }

                    improvements={
                        feedback.weaknesses
                    }
                />

            ) : null}


            {/* NEXT RECOMMENDATION */}

            <NextRecommendation
                recommendation={
                    dashboard?.recommendation ??
                    null
                }
            />


            {/* ENCOURAGEMENT */}

            {feedback?.encouragement && (

                <section
                    className="
                        rounded-2xl
                        border
                        border-violet-500/20
                        bg-violet-500/5
                        p-6
                    "
                >

                    <p
                        className="
                            text-center
                            text-lg
                            font-medium
                            text-violet-300
                        "
                    >

                        {feedback.encouragement}

                    </p>

                </section>

            )}


            {/* ACTIONS */}

            <ResultActions />

        </div>

    );
}