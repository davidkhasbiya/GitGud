import Section from "../../ui/Section";
import Container from "../../ui/Container";
import TechItem from "./TechItem";

import {
    SiReact,
    SiGo,
    SiPostgresql,
    SiDocker,
    SiGooglecloud,
} from "react-icons/si";

import { Sparkles } from "lucide-react";

const technologies = [
    {
        icon: <SiReact />,
        name: "React",
        description: "Frontend UI",
    },
    {
        icon: <SiGo />,
        name: "Go",
        description: "REST API",
    },
    {
        icon: <SiPostgresql />,
        name: "PostgreSQL",
        description: "Database",
    },
    {
        icon: <Sparkles size={42} />,
        name: "Gemini AI",
        description: "AI Challenge Generator",
    },
    {
        icon: <SiDocker />,
        name: "Docker",
        description: "Containerization",
    },
    {
        icon: <SiGooglecloud />,
        name: "Cloud Run",
        description: "Deployment",
    },
];

export default function Technology() {
    return (
        <Section id="technology">
            <Container>
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-violet-600">
                        Built With
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight">
                        Modern Developer Stack
                    </h2>

                    <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                        Built using modern technologies commonly used in
                        professional backend development.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {technologies.map((tech) => (
                        <TechItem
                            key={tech.name}
                            icon={tech.icon}
                            name={tech.name}
                            description={tech.description}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}