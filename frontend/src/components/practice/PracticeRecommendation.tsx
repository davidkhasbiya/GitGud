import Button from "../ui/Button";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PracticeRecommendation() {

    const navigate = useNavigate();

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 p-8">

            <div className="flex items-center gap-2 text-violet-400">

                <Sparkles size={18} />

                <span className="font-semibold">
                    AI Practice Generator
                </span>

            </div>

            <h2 className="mt-3 text-3xl font-bold">

                Create a Personalized Coding Challenge

            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">

                Generate programming exercises tailored to your
                preferred language, topic, difficulty, and number
                of questions. Every practice is uniquely created by
                AI to help you improve your coding skills.

            </p>

            <Button
                className="mt-8"
                onClick={() => navigate("/practice")}
            >

                <Sparkles size={18} />

                Generate New Practice

            </Button>

        </section>

    );

}