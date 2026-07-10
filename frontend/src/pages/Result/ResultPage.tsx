import {
    ResultHero,
    ResultStats,
    AIFeedback,
    NextRecommendation,
    ResultActions,
} from "../../components/result";

export default function ResultPage() {

    return (

        <div className="mx-auto max-w-6xl space-y-8">

            <ResultHero
                score={84}
            />

            <ResultStats
                correct={17}
                total={20}
                xp={150}
                duration={18}
            />

            <AIFeedback
                feedback="You have a solid understanding of JWT Authentication. Focus on Authorization and Middleware to improve your overall backend security skills."
                strengths={[
                    "JWT Structure",
                    "Access Token",
                    "Refresh Token",
                ]}
                improvements={[
                    "Authorization",
                    "Middleware",
                ]}
            />

            <NextRecommendation
                title="Redis Authentication"
                reason="AI recommends practicing Redis Session Management before moving to OAuth."
            />

            <ResultActions />

        </div>

    );

}