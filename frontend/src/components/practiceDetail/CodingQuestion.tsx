import { Play, Send } from "lucide-react";
import Button from "../ui/Button";

import type {
    PracticeQuestion,
} from "../../types/practice";

interface Props {
    question: PracticeQuestion;
}

export default function CodingQuestion({
    question,
}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                {question.question}

            </h2>

            <p className="mt-2 text-sm text-zinc-400">

                Language: {question.language}

            </p>

            <textarea
                defaultValue={question.starterCode}
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