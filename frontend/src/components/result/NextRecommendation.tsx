import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
    title: string;
    reason: string;
}

export default function NextRecommendation({
    title,
    reason,
}: Props) {

    const navigate = useNavigate();

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">

            <p className="text-violet-400">

                Next Recommendation

            </p>

            <h2 className="mt-3 text-3xl font-bold">

                {title}

            </h2>

            <p className="mt-4 text-zinc-400">

                {reason}

            </p>

            <Button
                className="mt-8"
                onClick={() => navigate("/practice")}
            >

                Generate Practice

                <ArrowRight size={18} />

            </Button>

        </section>

    );

}