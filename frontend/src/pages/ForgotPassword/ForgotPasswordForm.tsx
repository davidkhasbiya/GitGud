import { useState } from "react";
import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Button from "../../components/ui/Button";
import Input from "../../components/auth/Input";

import { validateEmail } from "../../utils/validation";

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        const emailError = validateEmail(email);

        setError(emailError);

        if (emailError) {
            toast.error("Please enter a valid email.");
            return;
        }

        setLoading(true);

        await new Promise((resolve) =>
            setTimeout(resolve, 1500)
        );

        toast.success("Password reset email sent!");
        setLoading(false);

    };

    return (

        <section className="flex items-center justify-center p-8">

            <div className="w-full max-w-md">

                <h2 className="text-4xl font-bold">
                    Forgot Password
                </h2>

                <p className="mt-3 text-zinc-400">
                    Enter your email address and we'll send you a password reset link.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6"
                >

                    <Input
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                        }}
                        error={error}
                        icon={<Mail size={18} />}
                    />

                    <Button
                        type="submit"
                        loading={loading}
                        className="w-full"
                    >
                        {loading
                            ? "Sending..."
                            : "Send Reset Link"}
                    </Button>

                </form>

                <p className="mt-8 text-center text-sm">

                    <Link
                        to="/login"
                        className="text-violet-500 hover:text-violet-400"
                    >
                        ← Back to Login
                    </Link>

                </p>

            </div>

        </section>

    );
}