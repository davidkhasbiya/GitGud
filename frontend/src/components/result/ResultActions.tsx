import Button from "../ui/Button";
import { RotateCcw, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ResultActions() {

    const navigate = useNavigate();

    return (

        <section className="flex flex-wrap gap-4">

            <Button
                onClick={() => navigate("/practice")}
            >

                <RotateCcw size={18} />

                Practice Again

            </Button>

            <Button
                variant="secondary"
                onClick={() => navigate("/dashboard")}
            >

                <LayoutDashboard size={18} />

                Dashboard

            </Button>

        </section>

    );

}