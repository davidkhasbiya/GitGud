interface Props {
    option: string;
    selected: boolean;
    onClick: () => void;
}

export default function AnswerOption({
    option,
    selected,
    onClick,
}: Props) {

    return (

        <button
            onClick={onClick}
            className={`
                w-full
                rounded-xl
                border
                p-5
                text-left
                transition

                ${selected
                    ? "border-violet-500 bg-violet-500/10"
                    : "border-zinc-800 bg-zinc-900 hover:border-violet-500/40"
                }
            `}
        >

            {option}

        </button>

    );

}