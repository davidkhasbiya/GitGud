import Button from "../../ui/Button";

import {

    Sparkles,

} from "lucide-react";

import { useNavigate } from "react-router-dom";

interface Props {

    recommendation: string;

}

export default function DashboardRecommendation({

    recommendation,

}: Props) {

    const navigate = useNavigate();

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-zinc-900 p-8">

            <p className="text-violet-400">

                AI Recommendation

            </p>

            <h2 className="mt-3 text-3xl font-bold">

                {recommendation}

            </h2>

            <p className="mt-4 text-zinc-400">

                Based on your latest coding performance,

                GitGud recommends practicing this topic next.

            </p>

            <Button

                className="mt-8"

                onClick={()=>

                    navigate("/practice")

                }

            >

                <Sparkles size={18}/>

                Generate Practice

            </Button>

        </section>

    );

}