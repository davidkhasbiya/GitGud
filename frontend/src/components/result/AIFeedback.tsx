interface Props {
    feedback: string;
    strengths: string[];
    improvements: string[];
}

export default function AIFeedback({
    feedback,
    strengths,
    improvements,
}: Props) {

    return (

        <section className="rounded-2xl bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                AI Feedback

            </h2>

            <p className="mt-4 leading-7 text-zinc-400">

                {feedback}

            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">

                <div>

                    <h3 className="font-semibold text-emerald-400">

                        Strengths

                    </h3>

                    <ul className="mt-4 space-y-2">

                        {strengths.map((item) => (

                            <li key={item}>

                                • {item}

                            </li>

                        ))}

                    </ul>

                </div>

                <div>

                    <h3 className="font-semibold text-orange-400">

                        Needs Improvement

                    </h3>

                    <ul className="mt-4 space-y-2">

                        {improvements.map((item) => (

                            <li key={item}>

                                • {item}

                            </li>

                        ))}

                    </ul>

                </div>

            </div>

        </section>

    );

}