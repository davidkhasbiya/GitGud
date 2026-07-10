import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {

    const navigate = useNavigate();

    return (

        <button
            onClick={() => navigate("/practice")}
            className="
                flex
                items-center
                gap-2
                text-zinc-400
                transition
                hover:text-violet-400
            "
        >

            <ArrowLeft size={18} />

            Back to Practice

        </button>

    );

}