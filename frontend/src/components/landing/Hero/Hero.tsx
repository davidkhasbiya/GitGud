import Container from "../../ui/Container";
import Section from "../../ui/Section";

import HeroContent from "./HeroContent";
import WorkspacePreview from "./WorkspacePreview";

export default function Hero() {
    return (
        <Section id="hero">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <HeroContent />
                    <WorkspacePreview />
                </div>
            </Container>
        </Section>
    );
}