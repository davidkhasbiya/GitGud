import { ShieldCheck } from "lucide-react";

export default function ForgotPasswordHero() {
    return (
        <section className="hidden items-center justify-center bg-gradient-to-br from-violet-600 via-violet-700 to-zinc-950 p-16 text-white lg:flex">

            <div className="max-w-md">

                <ShieldCheck
                    size={72}
                    className="mb-8"
                />

                <h1 className="text-5xl font-bold leading-tight">
                    Recover Your Account
                </h1>

                <p className="mt-6 text-lg text-violet-100">
                    Don't worry. Enter your email address and
                    we'll send you a password reset link.
                </p>

            </div>

        </section>
    );
}