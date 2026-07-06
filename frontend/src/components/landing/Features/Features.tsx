import Section from "../../ui/Section";
import Container from "../../ui/Container";
import FeatureCard from "./FeatureCard";

import {
    Sparkles,
    Database,
    ChartColumn,
    CodeXml,
} from "lucide-react";

const features = [
    {
        icon: <Sparkles size={42} />,
        title: "AI Challenge Generator",
        description:
            "Generate backend engineering challenges instantly using Gemini AI.",
    },
    {
        icon: <Database size={42} />,
        title: "Backend Learning Paths",
        description:
            "Master REST API, JWT, PostgreSQL, Docker, Authentication and more.",
    },
    {
        icon: <ChartColumn size={42} />,
        title: "Progress Tracking",
        description:
            "Track XP, levels, streaks, and completed challenges in one dashboard.",
    },
    {
        icon: <CodeXml size={42} />,
        title: "Developer Workspace",
        description:
            "Solve challenges, receive AI feedback, and improve without leaving the workspace.",
    },
];

export default function Features() {
    return (
        <Section id="features">
            <Container>
                <div className="mx-auto mb-16 max-w-2xl text-center">

                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-violet-600">
                        Features
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight">
                        Everything You Need to Learn Backend
                    </h2>

                    <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                        GITGUD combines AI, practical challenges, progress tracking,
                        and a developer workspace into one modern learning platform.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2">
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