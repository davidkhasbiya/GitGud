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

    const score = state.score;

    let feedback = "";
    let strengths: string[] = [];
    let improvements: string[] = [];

    if (score >= 90) {

        feedback =
            "Excellent work! You demonstrated a strong understanding of the concepts and solved most questions correctly.";

        strengths = [
            "Strong problem solving",
            "Excellent concept understanding",
            "High coding accuracy",
        ];

        improvements = [
            "Try more advanced challenges",
        ];

    } else if (score >= 70) {

        feedback =
            "Good job! You understand most concepts but there is still room for improvement.";

        strengths = [
            "Good logical thinking",
            "Solid programming fundamentals",
        ];

        improvements = [
            "Review incorrect answers",
            "Practice coding exercises",
        ];

    } else if (score >= 50) {

        feedback =
            "You have the basic understanding, but additional practice is recommended.";

        strengths = [
            "Basic understanding",
        ];

        improvements = [
            "Practice more coding problems",
            "Review the topic again",
            "Read explanations carefully",
        ];

    } else {

        feedback =
            "Keep practicing! Focus on the fundamentals before moving to more difficult topics.";

        strengths = [
            "Willingness to learn",
        ];

        improvements = [
            "Study the topic again",
            "Practice easier exercises",
            "Complete more AI-generated practices",
        ];

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
                duration={state.duration}
            />

            <AIFeedback
                feedback={feedback}
                strengths={strengths}
                improvements={improvements}
            />

            <NextRecommendation
                title="Next Practice"
                reason="Continue to improve your backend skills."
            />

            <ResultActions />

        </div>

    );
}