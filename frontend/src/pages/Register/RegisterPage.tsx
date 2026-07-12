import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AuthLayout from "../../layouts/AuthLayout";
import LoginHero from "../Login/LoginHero";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
    const { user, loading } = useAuth();

    if (loading) return null;

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }
    return (
        <AuthLayout>
            <LoginHero />
            <RegisterForm />
        </AuthLayout>
    );
}