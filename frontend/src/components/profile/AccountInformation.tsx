interface Props {

    profile: any;

}

export default function AccountInformation({
    profile,
}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Account Information

            </h2>

            <div className="mt-8 space-y-6">

                <Info
                    title="Name"
                    value={profile.name}
                />

                <Info
                    title="Email"
                    value={profile.email}
                />

                <Info
                    title="Member Since"
                    value={profile.joinedAt}
                />

            </div>

        </section>

    );

}

function Info({
    title,
    value,
}: {
    title: string;
    value: string;
}) {

    return (

        <div>

            <p className="text-sm text-zinc-500">

                {title}

            </p>

            <h3 className="mt-1 text-lg font-semibold">

                {value}

            </h3>

        </div>

    );

}