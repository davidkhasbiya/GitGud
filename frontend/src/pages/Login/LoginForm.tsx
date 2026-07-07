import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Button from "../../components/ui/Button";
import Divider from "../../components/auth/Divider";
import Input from "../../components/auth/Input";
import PasswordInput from "../../components/auth/PasswordInput";
import SocialButton from "../../components/auth/SocialButton";
import { validateEmail, validatePassword } from "../../utils/validation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        setErrors({
            email: emailError,
            password: passwordError,
        });

        if (emailError || passwordError) return;
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");

        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.success("Login successful!");

        setLoading(false);
    };


    return (
        <section className="flex items-center justify-center p-8">

            <div className="w-full max-w-md">

                <h2 className="text-4xl font-bold">
                    Welcome Back
                </h2>

                <p className="mt-3 text-zinc-500 dark:text-zinc-400">
                    Sign in to continue your learning journey.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6"
                >

                    <Input
                        label="Email"
                        placeholder="you@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={errors.email}
                        icon={<Mail size={18} />}
                    />

                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={errors.password}
                    />

                    <div className="flex items-center justify-between text-sm">

                        <label className="flex items-center gap-2">

                            <input type="checkbox" />

                            Remember me

                        </label>

                        <Link
                            to="/forgot-password"
                            className="text-violet-500 hover:text-violet-400"
                        >
                            Forgot password?
                        </Link>

                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        loading={loading}
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </Button>

                </form>

                <div className="my-8">
                    <Divider />
                </div>

                <SocialButton />

                <p className="mt-8 text-center text-sm text-zinc-500">

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="font-medium text-violet-500 hover:text-violet-400"
                    >
                        Create Account
                    </Link>

                </p>

            </div>

        </section>
    );
}