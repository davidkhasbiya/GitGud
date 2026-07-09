import {
    ArrowLeft,
    Clock3,
    Trophy,
    BookOpen,
    PlayCircle,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/ui/Button";

export default function ChallengeDetailPage() {

    const navigate = useNavigate();

    const { id } = useParams();

    return (
        <div className="mx-auto max-w-6xl p-8">

            <button
                onClick={() => navigate(-1)}
                className="mb-8 flex items-center gap-2 text-zinc-400 transition hover:text-violet-400"
            >
                <ArrowLeft size={18} />
                Back
            </button>

            {/* Hero */}

            <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">

                <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-400">
                    Intermediate
                </span>

                <h1 className="mt-4 text-4xl font-bold">
                    {id?.replaceAll("-", " ")}
                </h1>

                <p className="mt-4 max-w-3xl text-zinc-400">
                    Learn how to build secure authentication using JWT,
                    refresh tokens, middleware, and authorization in Go Fiber.
                </p>

                <div className="mt-8 flex flex-wrap gap-6">

                    <div className="flex items-center gap-2">
                        <Clock3 size={18} />
                        45 Minutes
                    </div>

                    <div className="flex items-center gap-2">
                        <Trophy size={18} />
                        150 XP
                    </div>

                    <div className="flex items-center gap-2">
                        <BookOpen size={18} />
                        6 Lessons
                    </div>

                </div>

                <Button className="mt-8">
                    <PlayCircle size={18} />
                    Start Challenge
                </Button>

            </section>

            {/* Learning Objectives */}

            <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

                <h2 className="text-2xl font-bold">
                    Learning Objectives
                </h2>

                <ul className="mt-6 space-y-3 text-zinc-300">

                    <li>✅ Understand JWT structure</li>

                    <li>✅ Generate Access Token</li>

                    <li>✅ Generate Refresh Token</li>

                    <li>✅ Protect API using Middleware</li>

                    <li>✅ Handle Authorization</li>

                </ul>

            </section>

            {/* Modules */}

            <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

                <h2 className="text-2xl font-bold">
                    Modules
                </h2>

                <div className="mt-6 space-y-4">

                    <div className="rounded-xl bg-zinc-800 p-5">
                        1. JWT Introduction
                    </div>

                    <div className="rounded-xl bg-zinc-800 p-5">
                        2. Access Token
                    </div>

                    <div className="rounded-xl bg-zinc-800 p-5">
                        3. Refresh Token
                    </div>

                    <div className="rounded-xl bg-zinc-800 p-5">
                        4. Middleware
                    </div>

                    <div className="rounded-xl bg-zinc-800 p-5">
                        5. Authorization
                    </div>

                    <div className="rounded-xl bg-zinc-800 p-5">
                        6. Final Challenge
                    </div>

                </div>

            </section>

        </div>
    );
}