import type {
    PracticeQuestion,
} from "../../types/practice";

import AnswerOption from "./AnswerOption";

interface Props {

    question: PracticeQuestion;

    selected?: string;

    onSelect: (value: string) => void;

}

export default function QuestionCard({

    question,

    selected,

    onSelect,

}: Props) {

    const options = [

        question.optionA,

        question.optionB,

        question.optionC,

        question.optionD,

    ].filter(Boolean) as string[];

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <p className="font-medium text-violet-400">

                Multiple Choice

            </p>

            <h2 className="mt-3 text-2xl font-bold">

                {question.question}

            </h2>

            <div className="mt-8 space-y-4">

                {options.map((option) => (

                    <AnswerOption
                        key={option}
                        option={option}
                        selected={selected === option}
                        onClick={() => onSelect(option)}
                    />

                ))}

            </div>

        </section>

    );

}