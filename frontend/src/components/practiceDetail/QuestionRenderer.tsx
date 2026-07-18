import QuestionCard from "./QuestionCard";
import CodingQuestion from "./CodingQuestion";

import type {
    PracticeQuestion,
} from "../../types/practice";

interface Props {

    question: PracticeQuestion;

    selected?: string;

    onSelect: (value: string) => void;

}

export default function QuestionRenderer({

    question,

    selected,

    onSelect,

}: Props) {

    switch (question.type) {

        case "multiple":

            return (

                <QuestionCard
                    question={question}
                    selected={selected}
                    onSelect={onSelect}
                />

            );

        case "coding":
            return (
                <CodingQuestion
                    question={question}
                    onSubmit={onSelect}
                />
            );

        default:

            return <p>Unknown Question</p>;

    }

}