interface StepCardProps {
    number: number;
    title: string;
    description: string;
}

export default function StepCard({
    number,
    title,
    description,
}: StepCardProps) {
    return (
        <div
            className="
            relative
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900
            p-6
            transition
            duration-300
            hover:border-violet-500
            hover:-translate-y-1
        "
        >
            <div
                className="
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-violet-600
                text-lg
                font-bold
                text-white
            "
            >
                {number}
            </div>

            <h3 className="mb-2 text-xl font-semibold">
                {title}
            </h3>

            <p className="text-zinc-400">
                {description}
            </p>
        </div>
    );
}