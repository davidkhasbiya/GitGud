import AuthLayout from "../../layouts/AuthLayout";
import LoginHero from "../Login/LoginHero";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
    return (
        <AuthLayout>
            <LoginHero />
            <RegisterForm />
        </AuthLayout>
    );
}