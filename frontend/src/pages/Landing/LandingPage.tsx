import MainLayout from "../../layouts/MainLayout";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/landing/Footer/Footer";
import Hero from "../../components/landing/Hero/Hero";
import Technology from "../../components/landing/Technology/Technology";
import Features from "../../components/landing/Features/Features";
import Workflow from "../../components/landing/Workflow/Workflow";
import CTA from "../../components/landing/CTA/CTA";

export default function LandingPage() {
    return (
        <MainLayout>
            <Navbar />

            <main>
                <Hero />
                <Technology />
                <Features />
                <Workflow />
                <CTA />
            </main>

            <Footer />
        </MainLayout>
    );
}