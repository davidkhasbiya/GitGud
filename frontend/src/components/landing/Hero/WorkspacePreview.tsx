import Button from "../../ui/Button";
import Card from "../../ui/Card";

export default function WorkspacePreview() {
    return (
        <Card className="overflow-hidden p-0">

            <div className="border-b border-zinc-200 px-5 py-3 dark:border-zinc-800">

                <div className="flex items-center justify-between">

                    <div className="flex gap-2">

                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-400" />

                    </div>

                    <span className="text-xs text-zinc-500">
                        GITGUD Workspace
                    </span>

                </div>

            </div>

            <div className="space-y-5 p-6 font-mono text-sm">

                <div>

                    <p className="text-xs uppercase tracking-wider text-zinc-500">
                        Current Practice
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                        REST API Authentication
                    </h3>

                </div>

                <div className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900">

                    <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                        Build a JWT Authentication API using
                        Go and PostgreSQL.
                    </p>

                </div>

                <div className="grid grid-cols-2 gap-3">

                    <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">

                        <p className="text-xs text-zinc-500">
                            Difficulty
                        </p>

                        <p className="mt-1 font-semibold">
                            Intermediate
                        </p>

                    </div>

                    <div className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">

                        <p className="text-xs text-zinc-500">
                            AI Analysis
                        </p>

                        <p className="mt-1 font-semibold text-violet-400">
                            Enabled
                        </p>

                    </div>

                </div>

                <Button className="w-full">
                    Start Challenge
                </Button>

            </div>

        </Card>
    );
}