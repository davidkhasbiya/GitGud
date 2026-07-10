import Button from "../../ui/Button";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardHero() {
    const navigate = useNavigate();

    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
                ? "Good Afternoon"
                : "Good Evening";

    return (
        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-10">

            <p className="text-violet-400">
                {greeting}
            </p>

            <h1 className="mt-3 text-5xl font-bold">
                Ready to Practice?
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                Generate personalized coding quizzes using AI based on any topic you want.
            </p>

            <Button
                className="mt-8"
                onClick={() => navigate("/practice")}
            >
                <Sparkles size={18} />
                Generate Practice
            </Button>

        </section>
    );
}