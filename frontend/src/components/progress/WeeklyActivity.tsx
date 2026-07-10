interface Props {

    values: number[];

}

export default function WeeklyActivity({

    values,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Weekly Activity

            </h2>

            <div className="mt-8 flex h-40 items-end justify-between gap-3">

                {values.map((value, index) => (

                    <div
                        key={index}
                        className="flex-1 rounded-t-lg bg-violet-500"
                        style={{
                            height: `${value}%`,
                        }}
                    />

                ))}

            </div>

        </section>

    );

}