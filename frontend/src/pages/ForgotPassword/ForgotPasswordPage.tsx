import AuthLayout from "../../layouts/AuthLayout";
import LoginHero from "../Login/LoginHero";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function ForgotPasswordPage() {
    return (
        <AuthLayout>
            <LoginHero />
            <ForgotPasswordForm />
        </AuthLayout>
    );
}