import Button from "../ui/Button";

import type {

    SecuritySettings as SecuritySettingsType,

} from "../../types/settings";

interface Props {

    security: SecuritySettingsType;

}

export default function SecuritySettings({

    security,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Security

            </h2>

            <div className="mt-8 space-y-5">

                <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full rounded-xl bg-zinc-950 p-4"
                />

                <input
                    type="password"
                    placeholder="New Password"
                    className="w-full rounded-xl bg-zinc-950 p-4"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full rounded-xl bg-zinc-950 p-4"
                />

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        defaultChecked={security.twoFactorEnabled}
                    />

                    Enable Two Factor Authentication

                </label>

                <Button>

                    Update Password

                </Button>

            </div>

        </section>

    );

}