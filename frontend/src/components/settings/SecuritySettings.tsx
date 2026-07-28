import Button from "../ui/Button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function SecuritySettings() {

    const navigate = useNavigate();

    // const logout = () => {

    //     localStorage.removeItem("token");

    //     localStorage.removeItem("user");

    //     navigate("/login");

    // };

    const { logout } = useAuth();

    const handleLogout = () => {
        const confirmed = window.confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmed) return;

        logout();

        navigate("/login");
    };

    return (

        <section className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">

            <h2 className="text-2xl font-bold">

                Security

            </h2>

            <p className="mt-2 text-zinc-400">

                Logout from your account.

            </p>

            <Button
                className="mt-8 bg-red-600 hover:bg-red-500"
                onClick={handleLogout}
            >

                <LogOut size={18} />

                Logout

            </Button>

        </section>

    );

}