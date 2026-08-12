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

    /*
    |--------------------------------------------------------------------------
    | GET PRACTICE
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (!slug) return;

        getPractice(slug)
            .then(setPractice)
            .catch((err) => {

                console.error(
                    "Failed to load practice:",
                    err
                );

            });

    }, [slug]);

    /*
    |--------------------------------------------------------------------------
    | RESTORE PRACTICE PROGRESS
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (!practice) return;

        const progressKey =
            `practice-${practice.id}`;

        const startKey =
            `practice-start-${practice.id}`;

        const saved =
            localStorage.getItem(progressKey);

        /*
        |--------------------------------------------------------------------------
        | RESTORE ANSWERS
        |--------------------------------------------------------------------------
        */

        if (saved) {

            try {

                const data = JSON.parse(saved);

                setCurrentQuestion(
                    data.currentQuestion || 1
                );

                setAnswers(
                    data.answers || {}
                );

            } catch (err) {

                console.error(
                    "Failed to restore practice:",
                    err
                );

                localStorage.removeItem(
                    progressKey
                );

            }

        }

        /*
        |--------------------------------------------------------------------------
        | PRACTICE START TIME
        |--------------------------------------------------------------------------
        |
        | Jika timestamp lama terlalu jauh (> 2 jam),
        | anggap sebagai abandoned attempt dan mulai ulang timer.
        |
        */

        const existingStart =
            localStorage.getItem(startKey);

        const now = Date.now();

        if (existingStart) {

            const start =
                Number(existingStart);

            const elapsed =
                now - start;

            const TWO_HOURS =
                2 * 60 * 60 * 1000;

            /*
            | Timestamp invalid
            */

            if (
                !Number.isFinite(start) ||
                start <= 0 ||
                elapsed < 0 ||
                elapsed > TWO_HOURS
            ) {

                localStorage.setItem(
                    startKey,
                    now.toString()
                );

            }

        } else {

            localStorage.setItem(
                startKey,
                now.toString()
            );

        }

    }, [practice]);

    /*
    |--------------------------------------------------------------------------
    | SAVE PRACTICE PROGRESS
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | LOADING
    |--------------------------------------------------------------------------
    */

    if (!practice) {

        return (

            <div className="p-8">

                <p className="text-zinc-400">

                    Loading practice...

                </p>

            </div>

        );

    }

    /*
    |--------------------------------------------------------------------------
    | CURRENT QUESTION
    |--------------------------------------------------------------------------
    */

    const question =
        practice.questions[currentQuestion - 1];

    /*
    |--------------------------------------------------------------------------
    | USER
    |--------------------------------------------------------------------------
    */

    const user = JSON.parse(

        localStorage.getItem("user") || "{}"

    );

    /*
    |--------------------------------------------------------------------------
    | FINISH PRACTICE
    |--------------------------------------------------------------------------
    */

    const handleFinish = async () => {

        if (!user?.id) {

            alert(
                "User session not found. Please login again."
            );

            return;

        }

        /*
        |--------------------------------------------------------------------------
        | START TIME
        |--------------------------------------------------------------------------
        */

        const startKey =
            `practice-start-${practice.id}`;

        let start =
            Number(
                localStorage.getItem(startKey)
            );

        /*
        |--------------------------------------------------------------------------
        | FALLBACK JIKA TIMESTAMP INVALID
        |--------------------------------------------------------------------------
        */

        if (
            !Number.isFinite(start) ||
            start <= 0 ||
            start > Date.now()
        ) {

            start = Date.now();

            localStorage.setItem(
                startKey,
                start.toString()
            );

        }

        /*
        |--------------------------------------------------------------------------
        | DURATION
        |--------------------------------------------------------------------------
        |
        | Backend menggunakan menit.
        |
        | 30 detik -> 1 menit
        | 1 menit 10 detik -> 2 menit
        |
        */

        const elapsedMs =
            Date.now() - start;

        const duration =
            Math.max(
                1,
                Math.ceil(
                    elapsedMs / 60000
                )
            );

        /*
        |--------------------------------------------------------------------------
        | ANSWERS
        |--------------------------------------------------------------------------
        */

        const payload = {

            userId: user.id,

            practiceId: practice.id,

            duration,

            answers:
                Object.entries(answers).map(
                    ([questionId, answer]) => ({

                        questionId,

                        answer,

                    })
                ),

        };

        console.log(
            "Submitting practice:",
            payload
        );

        try {

            const result =
                await submitPractice(
                    payload
                );

            console.log(
                "Submission result:",
                result
            );

            /*
            |--------------------------------------------------------------------------
            | CLEANUP
            |--------------------------------------------------------------------------
            */

            localStorage.removeItem(
                `practice-${practice.id}`
            );

            localStorage.removeItem(
                `practice-start-${practice.id}`
            );

            /*
            |--------------------------------------------------------------------------
            | PASS PRACTICE ID TO RESULT PAGE
            |--------------------------------------------------------------------------
            |
            | Ini memperbaiki error:
            | "Practice ID is missing."
            |
            */

            navigate(
                "/result",
                {

                    state: {

                        ...result,

                        practiceId:
                            practice.id,

                    },

                }
            );

        } catch (err) {

            console.error(
                "Submit practice failed:",
                err
            );

            alert(
                "Submit gagal. Silakan coba lagi."
            );

        }

    };

    /*
    |--------------------------------------------------------------------------
    | RENDER
    |--------------------------------------------------------------------------
    */

    return (

        <div className="mx-auto max-w-5xl space-y-8">

            {/* Back */}

            <BackButton />

            {/* Progress */}

            <ProgressBar
                current={currentQuestion}
                total={
                    practice.questions.length
                }
            />

            {/* Question */}

            <QuestionRenderer

                question={question}

                selected={
                    answers[question.id]
                }

                onSelect={(value) => {

                    setAnswers((prev) => ({

                        ...prev,

                        [question.id]:
                            value,

                    }));

                }}

            />

            {/* Navigation */}

            <QuestionNavigation

                current={currentQuestion}

                total={
                    practice.questions.length
                }

                onPrevious={() => {

                    setCurrentQuestion(
                        (prev) =>
                            Math.max(
                                prev - 1,
                                1
                            )
                    );

                }}

                onNext={() => {

                    setCurrentQuestion(
                        (prev) =>
                            Math.min(
                                prev + 1,
                                practice.questions.length
                            )
                    );

                }}

                onFinish={handleFinish}

            />

        </div>

    );

}