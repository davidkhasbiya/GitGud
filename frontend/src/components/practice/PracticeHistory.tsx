import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function PracticeHistory() {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Recent Practices

            </h2>

            <div className="mt-6 space-y-4">

                <div className="rounded-xl bg-zinc-950 p-5">

                    <div className="flex items-center justify-between">

                        <div>

                            <h3 className="font-semibold">

                                JWT Authentication

                            </h3>

                            <p className="text-sm text-zinc-400">

                                Score 84%

                            </p>

                        </div>

                        <Button>

                            Continue

                            <ArrowRight size={18} />

                        </Button>

                    </div>

                </div>

            </div>

        </section>

    );

}