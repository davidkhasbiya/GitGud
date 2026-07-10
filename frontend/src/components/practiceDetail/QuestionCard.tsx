import type { PracticeQuestion } from "../../types/practice";
import AnswerOption from "./AnswerOption";

interface Props {
    question: PracticeQuestion;
}

export default function QuestionCard({
    question,
}: Props) {
    const handleSelect = (option: string) => {

    };
    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <p className="text-violet-400">
                Multiple Choice
            </p>

            <h2>

                {question.question}

            </h2>

            <div className="mt-8 space-y-4">

                {question.options?.map((option) => (

                    <AnswerOption
                        key={option}
                        option={option}
                        selected={false}
                        onClick={() => handleSelect(option)}
                    />

                ))}

            </div>
        </section>

    );

}