import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

import { generatePractice } from "../../services/aiService";

export default function PracticeGeneratorForm() {

    const navigate = useNavigate();

    const [track, setTrack] = useState("go");

    const [difficulty, setDifficulty] =
        useState("Easy");

    const [topic, setTopic] =
        useState("");

    const [questionCount, setQuestionCount] =
        useState(5);

    const [loading, setLoading] =
        useState(false);

    const handleGenerate = async () => {

        try {

            setLoading(true);

            const result =
                await generatePractice({

                    track,

                    difficulty,

                    topic,

                    questionCount,

                });

            navigate(`/practice/${result.slug}`);

        } catch (err) {

            console.error(err);

            alert("Generate Practice gagal.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">

            <p className="font-medium text-violet-400">
                AI Practice Generator
            </p>

            <h2 className="mt-2 text-3xl font-bold">
                Generate Coding Practice
            </h2>

            <p className="mt-2 text-zinc-400">
                Let AI create personalized programming questions.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

                <input

                    value={topic}

                    onChange={(e) => setTopic(e.target.value)}

                    placeholder="JWT, Docker, Redis..."

                    className="rounded-xl bg-zinc-900 p-4"

                />

                <select

                    value={difficulty}

                    onChange={(e) => setDifficulty(e.target.value)}

                    className="rounded-xl bg-zinc-900 p-4"

                >

                    <option>Easy</option>

                    <option>Medium</option>

                    <option>Hard</option>

                </select>

                <select

                    value={questionCount}

                    onChange={(e) =>

                        setQuestionCount(

                            Number(e.target.value)

                        )

                    }

                    className="rounded-xl bg-zinc-900 p-4"

                >

                    <option value={5}>5 Questions</option>

                    <option value={10}>10 Questions</option>

                    <option value={20}>20 Questions</option>

                </select>

                <select

                    value={track}

                    onChange={(e) => setTrack(e.target.value)}

                    className="rounded-xl bg-zinc-900 p-4"

                >

                    <option value="go">Go</option>

                    <option value="javascript">
                        JavaScript
                    </option>

                    <option value="python">
                        Python
                    </option>

                </select>

            </div>

            <div className="mt-6">

                <Button
                    loading={loading}
                    onClick={handleGenerate}
                    className="w-full md:w-auto"
                >
                    Generate Practice
                </Button>

            </div>

        </section>

    );

}