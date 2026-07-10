import Button from "../ui/Button";
import { Sparkles } from "lucide-react";

export default function PracticeRecommendation() {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <p className="text-violet-400">

                AI Recommendation

            </p>

            <h2 className="mt-2 text-3xl font-bold">

                Redis Cache

            </h2>

            <p className="mt-4 text-zinc-400">

                Based on your previous JWT practice, AI recommends Redis Cache as your next topic.

            </p>

            <Button className="mt-8">

                <Sparkles size={18} />

                Generate Practice

            </Button>

        </section>

    );

}