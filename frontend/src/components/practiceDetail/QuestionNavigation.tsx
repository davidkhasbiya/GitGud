import Button from "../ui/Button";

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

    return (

        <section className="flex justify-between">

            <Button
                variant="secondary"
                onClick={onPrevious}
            >

                Previous

            </Button>

            <Button
                onClick={
                    isLast
                        ? onFinish
                        : onNext
                }
            >

                {isLast
                    ? "Finish"
                    : "Next"}

            </Button>

        </section>

    );

}