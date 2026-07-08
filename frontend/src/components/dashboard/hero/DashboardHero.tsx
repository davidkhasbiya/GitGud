export default function DashboardHero() {

    const username = "Ahmad";

    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
                ? "Good Afternoon"
                : "Good Evening";

    return (
        <section className="space-y-8">

            <div>

                <h1 className="text-5xl font-bold">
                    {greeting},{" "}
                    <span className="text-violet-400">
                        {username}
                    </span>
                </h1>

                <p className="mt-3 text-zinc-400">
                    Finish today's mission and keep your streak alive.
                </p>

            </div>

            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">

                <p className="text-sm text-violet-400">
                    Today's Goal
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                    JWT Authentication
                </h2>

                <div className="mt-5">

                    <div className="mb-2 flex justify-between">

                        <span>Progress</span>

                        <span>62%</span>

                    </div>

                    <div className="h-2 rounded-full bg-zinc-800">

                        <div
                            className="h-full rounded-full bg-violet-500"
                            style={{
                                width: "62%",
                            }}
                        />

                    </div>

                </div>

            </div>
        </section>
    )
}