import Section from "../../ui/Section";
import Container from "../../ui/Container";
import FeatureCard from "./FeatureCard";

import {
    Sparkles,
    Brain,
    ChartColumn,
    CodeXml,
    Search,
    Target,
} from "lucide-react";

const features = [
    {
        icon: <Target size={42} />,
        title: "Practice & Challenges",
        description:
            "Solve practical programming challenges designed to strengthen your real-world engineering skills.",
    },
    {
        icon: <Brain size={42} />,
        title: "AI Feedback",
        description:
            "Gemini analyzes your practice performance and explains your strengths, weaknesses, and areas to improve.",
    },
    {
        icon: <Sparkles size={42} />,
        title: "AI Recommendations",
        description:
            "Get personalized next-practice recommendations based on your previous performance and learning history.",
    },
    {
        icon: <ChartColumn size={42} />,
        title: "Progress Tracking",
        description:
            "Track XP, levels, streaks, scores, completed practices, and your overall learning progress.",
    },
    {
        icon: <CodeXml size={42} />,
        title: "Developer Workspace",
        description:
            "Solve challenges in a focused workspace and continue your learning without switching between tools.",
    },
    {
        icon: <Search size={42} />,
        title: "Search & Filter",
        description:
            "Find the right practice quickly by searching titles and filtering by difficulty, language, and learning track.",
    },
];

export default function Features() {
    return (
        <Section id="features">
            <Container>

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400">
                        Features
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Everything You Need to Improve
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-zinc-500 dark:text-zinc-400">
                        GITGUD combines practical programming challenges,
                        AI-powered analysis, personalized recommendations,
                        and progress tracking into one developer learning
                        platform.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature) => (

                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />

                    ))}

                </div>

            </Container>
        </Section>
    );
}