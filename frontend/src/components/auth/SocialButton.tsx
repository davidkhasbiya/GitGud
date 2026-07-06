import { FcGoogle } from "react-icons/fc";

export default function SocialButton() {
    return (
        <button
            className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-zinc-700
                py-3
                transition
                hover:border-violet-500
                hover:bg-zinc-900
            "
        >
            <FcGoogle size={20} />

            <span>Continue with Google</span>
        </button>
    );
}