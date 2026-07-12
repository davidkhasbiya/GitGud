import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

interface Props {
    children: React.ReactNode;
}

export default function ProtectedRoute({
    children,
}: Props) {

    const {
        token,
        loading,
    } = useAuth();

    if (loading) {

        return (
            <div className="flex h-screen items-center justify-center">
                Loading...
            </div>
        );

    }

    if (!token) {

        return <Navigate to="/login" replace />;

    }

    return <>{children}</>;
}