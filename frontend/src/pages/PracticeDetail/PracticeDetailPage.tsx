import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    BackButton,
    ProgressBar,
    QuestionNavigation,
    QuestionRenderer,
} from "../../components/practiceDetail";

import { getPractice } from "../../services/practiceService";

import type { Practice } from "../../types/practice";
import { submitPractice } from "../../services/submissionService";

export default function PracticeDetailPage() {

    const navigate = useNavigate();

    const { slug } = useParams();

    const [practice, setPractice] =
        useState<Practice | null>(null);

    const [currentQuestion, setCurrentQuestion] =
        useState(1);

    const [answers, setAnswers] =
        useState<Record<string, string>>({});

    useEffect(() => {

        if (!slug) return;

        getPractice(slug)
            .then(setPractice)
            .catch(console.error);

    }, [slug]);

    if (!practice) {

        return <p>Loading...</p>;

    }

    const question =
        practice.questions[currentQuestion - 1];

    const user = JSON.parse(
        localStorage.getItem("user") || "{}"
    );

    return (

        <div className="mx-auto max-w-5xl space-y-8">

            <BackButton />

            <ProgressBar
                current={currentQuestion}
                total={practice.questions.length}
            />

            <QuestionRenderer
                question={question}
                selected={answers[question.id]}
                onSelect={(value) =>
                    setAnswers((prev) => ({
                        ...prev,
                        [question.id]: value,
                    }))
                }
            />

            <QuestionNavigation
                current={currentQuestion}
                total={practice.questions.length}
                onPrevious={() =>
                    setCurrentQuestion((prev) =>
                        Math.max(prev - 1, 1)
                    )
                }
                onNext={() =>
                    setCurrentQuestion((prev) =>
                        Math.min(
                            prev + 1,
                            practice.questions.length
                        )
                    )
                }
                onFinish={async () => {

                    const payload = {
                        userId: user.id,
                        practiceId: practice.id,
                        answers: Object.entries(answers).map(
                            ([questionId, answer]) => ({
                                questionId,
                                answer,
                            })
                        ),
                    };

                    try {

                        const result = await submitPractice(
                            payload
                        );

                        navigate(
                            "/result",
                            {
                                state: result,
                            }
                        );

                    } catch (err) {

                        console.error(err);

                        alert("Submit gagal.");

                    }

                }}
            />

        </div>

    );

}