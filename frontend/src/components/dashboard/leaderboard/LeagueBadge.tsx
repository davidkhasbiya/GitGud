interface Props {
    league: string;
}

export default function LeagueBadge({
    league,
}: Props) {

    return (

        <span
            className="
                rounded-full
                bg-yellow-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-yellow-400
            "
        >
            🏆 {league}
        </span>

    );

}