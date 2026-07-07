import { TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";

export default function NotFoundContent() {
    return (
        <section className="flex items-center justify-center p-8">

            <div className="w-full max-w-md text-center">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-600/20">

                    <TriangleAlert
                        size={52}
                        className="text-violet-500"
                    />

                </div>

                <h1 className="mt-8 text-7xl font-black">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold">
                    Page Not Found
                </h2>

                <p className="mt-5 text-zinc-400">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="mt-10 flex flex-col gap-4">

                    <Link to="/">
                        <Button className="w-full">
                            Back to Home
                        </Button>
                    </Link>

                    <Link to="/login">
                        <Button
                            variant="secondary"
                            className="w-full"
                        >
                            Go to Login
                        </Button>
                    </Link>

                </div>

            </div>

        </section>
    );
}