import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

export default function ProfileActions() {

    const navigate = useNavigate();

    return (

        <section className="flex flex-wrap gap-4">

            <Button
                onClick={() => navigate("/settings")}
            >

                Edit Profile

            </Button>

            <Button
                variant="secondary"
                onClick={() => navigate("/settings")}
            >

                Change Password

            </Button>

        </section>

    );

}