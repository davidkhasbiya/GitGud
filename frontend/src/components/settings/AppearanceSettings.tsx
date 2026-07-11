import Button from "../ui/Button";

import type {

    AppearanceSettings as AppearanceSettingsType,

} from "../../types/settings";

interface Props {

    appearance: AppearanceSettingsType;

}

export default function AppearanceSettings({

    appearance,

}: Props) {

    return (

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-2xl font-bold">

                Appearance

            </h2>

            <select
                defaultValue={appearance.theme}
                className="mt-6 w-full rounded-xl bg-zinc-950 p-4"
            >

                <option value="dark">

                    Dark

                </option>

                <option value="light">

                    Light

                </option>

                <option value="system">

                    System

                </option>

            </select>

            <Button className="mt-6">

                Save Theme

            </Button>

        </section>

    );

}