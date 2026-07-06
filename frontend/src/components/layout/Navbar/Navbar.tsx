import Container from "../../ui/Container";
import Button from "../../ui/Button";
import ThemeToggle from "../../ui/ThemeToggle";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header
            className="
        sticky
        top-0
        z-50
        border-b
        border-zinc-200
        bg-white/80
        backdrop-blur
        dark:border-zinc-800
        dark:bg-zinc-950/80
      "
        >
            <Container>
                <div className="flex h-16 items-center justify-between">

                    <Logo />

                    <nav className="hidden items-center gap-8 lg:flex">
                        <NavLinks />
                    </nav>

                    <div className="flex items-center gap-3">

                        <ThemeToggle />

                        <Button
                            onClick={() =>
                                window.open(
                                    "https://github.com/davidkhasbiya/GITGUD",
                                    "_blank"
                                )
                            }
                        >
                            GitHub 
                        </Button>

                        <Link to="/login">
                            <Button>
                                Sign In
                            </Button>
                        </Link>

                        <MobileMenu />

                    </div>

                </div>
            </Container>
        </header>
    );
}