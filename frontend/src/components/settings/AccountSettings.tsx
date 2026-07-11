import Button from "../ui/Button";

export default function AccountSettings() {

    return (

        <section className="rounded-2xl border border-red-500/30 bg-red-500/5 p-8">

            <h2 className="text-2xl font-bold text-red-400">

                Danger Zone

            </h2>

            <p className="mt-2 text-zinc-400">

                Logout or permanently delete your account.

            </p>

            <div className="mt-6 flex gap-4">

                <Button variant="secondary">

                    Logout

                </Button>

                <Button>

                    Delete Account

                </Button>

            </div>

        </section>

    );

}