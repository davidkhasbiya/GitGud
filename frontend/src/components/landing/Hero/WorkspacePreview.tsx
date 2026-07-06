import Button from "../../ui/Button";
import Card from "../../ui/Card";

export default function WorkspacePreview() {
    return (
        <Card className="overflow-hidden p-0">

            <div className="border-b border-zinc-200 px-5 py-3 dark:border-zinc-800">
                <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                    <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>
            </div>

            <div className="space-y-4 p-6 font-mono text-sm">

                <p className="text-zinc-500">
                    Topic
                </p>

                <h3 className="text-xl font-semibold">
                    REST API Authentication
                </h3>

                <div className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900">
                    <code>
                        Build a JWT Authentication API
                        using Go and PostgreSQL.
                    </code>
                </div>

                <Button className="w-full">
                    Generate Challenge
                </Button>

            </div>

        </Card>
    );
}