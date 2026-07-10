import { TrendingUp } from "lucide-react";

export default function ProgressHero() {

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-10">

            <div className="flex items-center gap-3">

                <TrendingUp
                    size={30}
                    className="text-violet-400"
                />

                <div>

                    <h1 className="text-4xl font-bold">

                        Progress

                    </h1>

                    <p className="mt-2 text-zinc-400">

                        Track your coding practice performance and AI skill analysis.

                    </p>

                </div>

            </div>

        </section>

    );

}