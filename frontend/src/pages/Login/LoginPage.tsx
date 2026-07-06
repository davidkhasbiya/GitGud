import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "./LoginForm";
import LoginHero from "./LoginHero";

export default function LoginPage() {
    return (
        <AuthLayout>
            <LoginHero />
            <LoginForm />
        </AuthLayout>
    );
}