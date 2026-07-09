import { categories } from "../../data/challenges";
import { cn } from "../../lib/cn";

interface Props {

    value: string;

    onChange: (value: string) => void;

}

export default function ChallengeCategories({

    value,

    onChange,

}: Props) {

    return (

        <div className="flex flex-wrap gap-3">

            {categories.map((category) => (

                <button

                    key={category}

                    onClick={() => onChange(category)}

                    className={cn(

                        "rounded-full border px-5 py-2 transition",

                        value === category

                            ? "border-violet-500 bg-violet-600 text-white"

                            : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-violet-500"

                    )}

                >

                    {category}

                </button>

            ))}

        </div>

    );

}