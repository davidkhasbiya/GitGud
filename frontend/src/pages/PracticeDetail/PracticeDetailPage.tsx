import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    BackButton,
    ProgressBar,
    QuestionNavigation,
    QuestionRenderer,
} from "../../components/practiceDetail";

import { getPractice } from "../../services/practiceService";
import { submitPractice } from "../../services/submissionService";

import type { Practice } from "../../types/practice";

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

    useEffect(() => {

        if (!practice) return;

        const saved = localStorage.getItem(
            `practice-${practice.id}`
        );

        if (saved) {

            const data = JSON.parse(saved);

            setCurrentQuestion(
                data.currentQuestion || 1
            );

            setAnswers(
                data.answers || {}
            );
        }

        const startKey =
            `practice-start-${practice.id}`;

        if (!localStorage.getItem(startKey)) {

            localStorage.setItem(
                startKey,
                Date.now().toString()
            );

        }

    }, [practice]);

    useEffect(() => {

        if (!practice) return;

        localStorage.setItem(

            `practice-${practice.id}`,

            JSON.stringify({

                currentQuestion,

                answers,

            })

        );

    }, [

        practice,

        currentQuestion,

        answers,

    ]);

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

                    const start = Number(

                        localStorage.getItem(

                            `practice-start-${practice.id}`

                        )

                    );

                    const duration = Math.max(

                        1,

                        Math.ceil(

                            (Date.now() - start) / 60000

                        )

                    );

                    const payload = {

                        userId: user.id,

                        practiceId: practice.id,

                        duration,

                        answers: Object.entries(answers).map(

                            ([questionId, answer]) => ({

                                questionId,

                                answer,

                            })

                        ),

                    };

                    try {

                        const result =
                            await submitPractice(payload);

                        localStorage.removeItem(
                            `practice-${practice.id}`
                        );

                        localStorage.removeItem(
                            `practice-start-${practice.id}`
                        );

                        navigate("/result", {

                            state: result,

                        });

                    } catch (err) {

                        console.error(err);

                        alert("Submit gagal.");

                    }

                }}
            />

        </div>

    );

}