interface Props {
    current: number;
    total: number;
}

export default function ProgressBar({
    current,
    total,
}: Props) {

    const progress = (current / total) * 100;

    return (

        <section>

            <div className="mb-3 flex justify-between">

                <span>
                    Question {current} of {total}
                </span>

                <span>
                    {Math.round(progress)}%
                </span>

            </div>

            <div className="h-2 rounded-full bg-zinc-800">

                <div
                    className="h-full rounded-full bg-violet-500"
                    style={{
                        width: `${progress}%`,
                    }}
                />

            </div>

        </section>

    );

}