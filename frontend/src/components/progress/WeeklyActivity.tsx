import type {

    WeeklyActivity as WeeklyActivityType,

} from "../../types/progress";

interface Props {

    values: WeeklyActivityType[];

}

export default function WeeklyActivity({

    values,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Weekly Activity

            </h2>

            <div className="mt-8 flex h-48 items-end justify-between gap-3">

                {values.map((item) => (

                    <div

                        key={item.day}

                        className="flex flex-1 flex-col items-center"

                    >

                        <div

                            className="w-full rounded-t-lg bg-violet-500"

                            style={{

                                height: `${Math.max(

                                    item.count * 20,

                                    8

                                )}px`,

                            }}

                        />

                        <span className="mt-2 text-xs text-zinc-500">

                            {item.day}

                        </span>

                    </div>

                ))}

            </div>

        </section>

    );

}