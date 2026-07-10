import Button from "../../ui/Button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RecentPractice() {

    const navigate = useNavigate();

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <p className="text-violet-400">
                Last Practice
            </p>

            <h2 className="mt-2 text-3xl font-bold">
                JWT Authentication
            </h2>

            <p className="mt-2 text-zinc-400">
                Continue your unfinished AI generated practice.
            </p>

            <div className="mt-8">

                <div className="flex justify-between text-sm">

                    <span>Progress</span>

                    <span>6 / 10 Questions</span>

                </div>

                <div className="mt-3 h-2 rounded-full bg-zinc-800">

                    <div
                        className="h-full rounded-full bg-violet-500"
                        style={{
                            width: "60%",
                        }}
                    />

                </div>

            </div>

            <Button
                className="mt-8"
                onClick={() => navigate("/practice/current")}
            >
                Continue Practice
                <ArrowRight size={18} />
            </Button>

        </section>

    );

}