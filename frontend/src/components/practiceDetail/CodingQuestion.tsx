import { Play, Send } from "lucide-react";
import Button from "../ui/Button";

import type {
    PracticeQuestion,
} from "../../types/practice";

interface Props {

    question: PracticeQuestion;

    value?: string;

    onChange?: (value: string) => void;

}

export default function CodingQuestion({

    question,

    value,

    onChange,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <p className="font-medium text-violet-400">

                Coding Challenge

            </p>

            <h2 className="mt-3 text-2xl font-bold">

                {question.question}

            </h2>

            <textarea
                value={value ?? question.starterCode ?? ""}
                onChange={(e) =>
                    onChange?.(e.target.value)
                }
                className="
                    mt-6
                    h-80
                    w-full
                    rounded-xl
                    border
                    border-zinc-700
                    bg-zinc-950
                    p-4
                    font-mono
                    text-sm
                    outline-none
                "
            />

            <div className="mt-6 flex gap-4">

                <Button variant="secondary">

                    <Play size={18} />

                    Run

                </Button>

                <Button>

                    <Send size={18} />

                    Submit

                </Button>

            </div>

        </section>

    );

}