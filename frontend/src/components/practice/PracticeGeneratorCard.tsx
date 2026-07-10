import Button from "../ui/Button";
import { Sparkles } from "lucide-react";

export default function PracticeGeneratorForm() {
    return (
        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">

            <p className="font-medium text-violet-400">
                AI Practice Generator
            </p>

            <h2 className="mt-2 text-3xl font-bold">
                Generate Coding Practice
            </h2>

            <p className="mt-2 text-zinc-400">
                Describe what you want to practice and let AI create a personalized coding quiz.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

                <input
                    placeholder="Topic (JWT, Redis, Docker...)"
                    className="rounded-xl bg-zinc-900 p-4 outline-none"
                />

                <select className="rounded-xl bg-zinc-900 p-4">

                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>

                </select>

                <select className="rounded-xl bg-zinc-900 p-4">

                    <option>5 Questions</option>
                    <option>10 Questions</option>
                    <option>20 Questions</option>

                </select>

                <select className="rounded-xl bg-zinc-900 p-4">

                    <option>Go</option>
                    <option>JavaScript</option>
                    <option>Python</option>

                </select>

            </div>

            <textarea
                placeholder="Additional instruction (optional)"
                className="mt-4 h-32 w-full rounded-xl bg-zinc-900 p-4 outline-none"
            />

            <Button className="mt-6">

                <Sparkles size={18} />

                Generate Practice

            </Button>

        </section>
    );
}