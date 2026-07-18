import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, Save } from "lucide-react";
import type { PracticeQuestion } from "../../types/practice";
import { toast } from "sonner";
interface Props {
    question: PracticeQuestion;
    onSubmit: (code: string) => void;
}

export default function CodingQuestion({
    question,
    onSubmit,
}: Props) {

    const [code, setCode] = useState(
        question.starterCode || ""
    );

    const [output, setOutput] = useState("");

    const handleRun = () => {

        // Dummy dulu
        setOutput(
            "Program executed successfully.\n\n(Output dummy)"
        );

    };

    return (

        <div className="space-y-6">

            <div>

                <h2 className="text-2xl font-bold">
                    {question.question}
                </h2>

                {question.explanation && (

                    <p className="mt-2 text-zinc-400">
                        {question.explanation}
                    </p>

                )}

            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-800">

                <Editor
                    height="450px"
                    defaultLanguage="go"
                    theme="vs-dark"
                    value={code}
                    onChange={(value) =>
                        setCode(value || "")
                    }
                    options={{
                        minimap: {
                            enabled: false,
                        },
                        fontSize: 15,
                        automaticLayout: true,
                    }}
                />

            </div>

            <div className="flex justify-end gap-3">

                <button
                    onClick={handleRun}
                    className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800"
                >
                    <Play size={16} />
                    Run
                </button>

                <button
                    onClick={() => {

                        onSubmit(code);

                        toast.success(
                            "Answer saved successfully."
                        );

                    }}
                    className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
                >
                    <Save size={16} />

                    Save Answer

                </button>

            </div>

            {output && (

                <div className="rounded-xl border border-zinc-800 bg-black p-4">

                    <p className="mb-2 font-semibold">
                        Output
                    </p>

                    <pre className="whitespace-pre-wrap text-green-400">
                        {output}
                    </pre>

                </div>

            )}

        </div>

    );

}