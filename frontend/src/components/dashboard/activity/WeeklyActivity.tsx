interface Props {

    values: {

        day: string;

        count: number;

    }[];

}

export default function WeeklyActivity({

    values,

}: Props) {

    const max =

        Math.max(

            ...values.map(

                v => v.count

            ),

            1,

        );

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Weekly Activity

            </h2>

            <div className="mt-8 flex h-52 items-end justify-between gap-4">

                {values.map((item) => (

                    <div

                        key={item.day}

                        className="flex flex-1 flex-col items-center"

                    >

                        <div

                            className="w-full rounded-t-xl bg-violet-500"

                            style={{

                                height:

                                    `${(item.count/max)*160}px`,

                            }}

                        />

                        <p className="mt-3 text-sm text-zinc-500">

                            {item.day}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}