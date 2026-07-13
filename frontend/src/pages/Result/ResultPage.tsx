import {
    ResultHero,
    ResultStats,
    AIFeedback,
    NextRecommendation,
    ResultActions,
} from "../../components/result";

import { useLocation } from "react-router-dom";

export default function ResultPage() {

    const { state } = useLocation();

    if (!state) {
        return <p>No Result</p>;
    }

    return (

        <div className="mx-auto max-w-6xl space-y-8">

            <ResultHero
                score={state.score}
                correct={state.correct}
                wrong={state.wrong}
                xpEarned={state.xpEarned}
                level={state.level}
                totalXP={state.totalXP}
            />

            <ResultStats
                correct={state.correct}
                total={state.correct + state.wrong}
                xp={state.xpEarned}
                duration={0}
            />

            <AIFeedback
                feedback="You have a solid understanding of this topic."
                strengths={[
                    "Problem Solving",
                    "Concept Understanding",
                ]}
                improvements={[
                    "Practice More Coding",
                ]}
            />

            <NextRecommendation
                title="Next Practice"
                reason="Continue to improve your backend skills."
            />

            <ResultActions />

        </div>

    );
}