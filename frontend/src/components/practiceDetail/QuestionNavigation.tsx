import Button from "../ui/Button";
import { TriangleAlert } from "lucide-react";
import { useState } from "react";

interface Props {

    current: number;

    total: number;

    onPrevious: () => void;

    onNext: () => void;

    onFinish: () => void;

}

export default function QuestionNavigation({

    current,

    total,

    onPrevious,

    onNext,

    onFinish,

}: Props) {

    const isLast =
        current === total;

    const [openConfirm, setOpenConfirm] =
        useState(false);

    return (

        <section className="flex justify-between">

            <Button
                variant="secondary"
                onClick={onPrevious}
            >

                Previous

            </Button>

            <Button
                onClick={() => {

                    if (isLast) {

                        setOpenConfirm(true);

                        return;

                    }

                    onNext();

                }}
            >

                {isLast
                    ? "Finish"
                    : "Next"}

            </Button>
            {

                openConfirm && (

                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

                        <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                            <div className="mb-5 flex items-center gap-3">

                                <TriangleAlert
                                    className="text-yellow-400"
                                    size={26}
                                />

                                <h2 className="text-xl font-bold">
                                    Submit Practice?
                                </h2>

                            </div>

                            <p className="text-zinc-400">

                                Are you sure you want to submit your answers?

                                <br />

                                You won't be able to edit them afterwards.

                            </p>

                            <div className="mt-8 flex justify-end gap-3">

                                <Button
                                    variant="secondary"
                                    onClick={() =>
                                        setOpenConfirm(false)
                                    }
                                >
                                    Cancel
                                </Button>

                                <Button
                                    onClick={() => {

                                        setOpenConfirm(false);

                                        onFinish();

                                    }}
                                >
                                    Submit
                                </Button>

                            </div>

                        </div>

                    </div>

                )}
        </section>


    );

}