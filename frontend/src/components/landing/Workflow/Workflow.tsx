import Section from "../../ui/Section";
import Container from "../../ui/Container";
import StepCard from "./StepCard";

const steps = [
    {
        title: "Find a Practice",
        description:
            "Search and filter practices by topic, difficulty, language, and learning track.",
    },
    {
        title: "Solve the Challenge",
        description:
            "Complete practical programming questions inside the GITGUD workspace.",
    },
    {
        title: "Submit Your Work",
        description:
            "Submit your answers and let GITGUD evaluate your performance.",
    },
    {
        title: "Get AI Feedback",
        description:
            "Gemini analyzes your result and identifies strengths, weaknesses, and areas for improvement.",
    },
    {
        title: "Follow Your Recommendation",
        description:
            "Receive a personalized next-practice recommendation based on your learning history.",
    },
];

export default function Workflow() {
    return (
        <Section id="workflow">
            <Container>

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-violet-500">
                        Workflow
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Practice. Analyze. Improve.
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
                        GITGUD turns every practice session into a continuous
                        learning cycle powered by your own performance data.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

                    {steps.map((step, index) => (

                        <StepCard
                            key={step.title}
                            number={index + 1}
                            title={step.title}
                            description={step.description}
                        />

                    ))}

                </div>

            </Container>
        </Section>
    );
}