import Button from "../../ui/Button";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIRecommendation() {

    const navigate = useNavigate();

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <p className="text-violet-400">
                AI Recommendation
            </p>

            <h2 className="mt-2 text-3xl font-bold">
                Redis Caching
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
                Based on your previous JWT practice, AI recommends practicing Redis Cache next.
            </p>

            <Button
                className="mt-8"
                onClick={() => navigate("/practice")}
            >
                <Sparkles size={18} />
                Generate Quiz
            </Button>

        </section>

    );

}