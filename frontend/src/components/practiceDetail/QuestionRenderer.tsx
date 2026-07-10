import QuestionCard from "./QuestionCard";
import CodingQuestion from "./CodingQuestion";

import type {
    PracticeQuestion,
} from "../../types/practice";

interface Props {
    question: PracticeQuestion;
}

export default function QuestionRenderer({
    question,
}: Props) {

    switch (question.type) {

        case "multiple-choice":

            return (

                <QuestionCard
                    question={question}
                />

            );

        case "coding":

            return (

                <CodingQuestion
                    question={question}
                />

            );

        default:

            return (

                <p>
                    Unknown Question Type
                </p>

            );

    }

}