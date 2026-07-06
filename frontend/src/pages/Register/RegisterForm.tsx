import { useState } from "react";
import { Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";
import Divider from "../../components/auth/Divider";
import Input from "../../components/auth/Input";
import PasswordInput from "../../components/auth/PasswordInput";
import SocialButton from "../../components/auth/SocialButton";

import {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
} from "../../utils/validation";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const confirmError = validateConfirmPassword(
            password,
            confirmPassword
        );

        setErrors({
            email: emailError,
            password: passwordError,
            confirmPassword: confirmError,
        });

        if (emailError || passwordError || confirmError) return;

        console.log({
            name,
            email,
            password,
        });
    };

    return (
        <section className="flex items-center justify-center p-8">
            <div className="w-full max-w-md">

                <h2 className="text-4xl font-bold">
                    Create Account
                </h2>

                <p className="mt-3 text-zinc-500 dark:text-zinc-400">
                    Start your backend learning journey today.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6"
                >

                    <Input
                        label="Full Name"
                        placeholder="Ahmad David"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        icon={<User size={18} />}
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
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

                    <PasswordInput
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={errors.confirmPassword}
                    />

                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" />

                        I agree to the Terms & Privacy Policy
                    </label>

                    <Button className="w-full">
                        Create Account
                    </Button>

                </form>

                <div className="my-8">
                    <Divider />
                </div>

                <SocialButton />

                <p className="mt-8 text-center text-sm text-zinc-500">
                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="font-medium text-violet-500 hover:text-violet-400"
                    >
                        Sign In
                    </Link>
                </p>

            </div>
        </section>
    );
}