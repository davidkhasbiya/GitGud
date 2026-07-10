import {
    PracticeGeneratorForm,
    PracticeHistory,
    PracticeRecommendation,
} from "../../components/practice";

export default function PracticePage() {
    return (
        <div className="space-y-8">

            <PracticeGeneratorForm />

            <PracticeRecommendation />

            <PracticeHistory />

        </div>
    );
}