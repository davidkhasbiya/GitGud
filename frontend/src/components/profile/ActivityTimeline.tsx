import type {
    Activity,
} from "../../types/profile";

interface Props {

    activities: Activity[];

}

export default function ActivityTimeline({

    activities,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Recent Activity

            </h2>

            <div className="mt-8 space-y-5">

                {activities.map(activity => (

                    <div
                        key={activity.id}
                        className="border-l-2 border-violet-500 pl-5"
                    >

                        <h3>

                            {activity.title}

                        </h3>

                        <p className="mt-1 text-sm text-zinc-500">

                            {activity.date}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}