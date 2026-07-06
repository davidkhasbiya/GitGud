import Card from "../../ui/Card";

interface TechItemProps {
    icon: React.ReactNode;
    name: string;
    description: string;
}

export default function TechItem({
    icon,
    name,
    description,
}: TechItemProps) {
    return (
        <Card
            className="
        group
        flex
        flex-col
        items-center
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-500/50
      "
        >
            <div
                className="
          mb-5
          text-5xl
          text-violet-600
          transition-transform
          duration-300
          group-hover:scale-110
        "
            >
                {icon}
            </div>

            <h3 className="text-lg font-semibold">
                {name}
            </h3>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {description}
            </p>
        </Card>
    );
}