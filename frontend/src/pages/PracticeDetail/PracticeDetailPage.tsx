import { useNavigate } from "react-router-dom";
import {
    BackButton,
    ProgressBar,
    QuestionCard,
    QuestionNavigation,
    QuestionRenderer,
} from "../../components/practiceDetail";
import { useState } from "react";

export default function PracticeDetailPage() {
    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(1);
    return (

        <div className="mx-auto max-w-5xl space-y-8">

            <BackButton />
            
            <ProgressBar
                current={currentQuestion}
                total={10}
            />

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center">

                Waiting for practice data...

            </div>

            <QuestionNavigation

                current={currentQuestion}

                total={10}

                onPrevious={() =>
                    setCurrentQuestion(prev =>
                        Math.max(prev - 1, 1)
                    )
                }

                onNext={() =>
                    setCurrentQuestion(prev =>
                        prev + 1
                    )
                }

                onFinish={() =>
                    navigate("/result")
                }

            />
        </div>

    );

}