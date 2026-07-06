import Card from "../../ui/Card";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
}: FeatureCardProps) {
    return (
        <Card
            className="
        group
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500/50
        hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
      "
        >
            <div className="mb-6 text-violet-500 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>

            <h3 className="mb-3 text-xl font-semibold">
                {title}
            </h3>

            <p className="leading-7 text-zinc-500 dark:text-zinc-400">
                {description}
            </p>
        </Card>
    );
}