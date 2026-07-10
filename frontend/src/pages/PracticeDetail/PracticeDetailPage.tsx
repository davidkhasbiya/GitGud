import {
    BackButton,
    ProgressBar,
    QuestionCard,
    QuestionNavigation,
    QuestionRenderer,
} from "../../components/practiceDetail";

export default function PracticeDetailPage() {

    return (

        <div className="mx-auto max-w-5xl space-y-8">

            <BackButton />

            <ProgressBar
                current={1}
                total={10}
            />

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center">

                Waiting for practice data...

            </div>

            <QuestionNavigation />

        </div>

    );

}