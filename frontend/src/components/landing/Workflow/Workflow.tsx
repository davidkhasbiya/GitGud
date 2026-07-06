import Section from "../../ui/Section";
import Container from "../../ui/Container";
import StepCard from "./StepCard";

const steps = [
    {
        title: "Choose Topic",
        description: "Select backend topics you want to master.",
    },
    {
        title: "Generate Challenge",
        description: "AI creates a practical backend challenge.",
    },
    {
        title: "Solve Challenge",
        description: "Build your solution directly inside the workspace.",
    },
    {
        title: "Receive AI Feedback",
        description: "Get explanations and suggestions for improvement.",
    },
    {
        title: "Track Progress",
        description: "Earn XP and monitor your learning journey.",
    },
];

export default function Workflow() {
    return (
        <Section id="workflow">
            <Container>

                <div className="mx-auto mb-16 max-w-2xl text-center">

                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-violet-500">
                        Workflow
                    </p>

                    <h2 className="text-4xl font-bold">
                        Learn Like a Real Backend Engineer
                    </h2>

                    <p className="mt-4 text-zinc-400">
                        Every challenge follows a structured workflow,
                        helping you improve through consistent practice.
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