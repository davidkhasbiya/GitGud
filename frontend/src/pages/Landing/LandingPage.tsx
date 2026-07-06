import MainLayout from "../../layouts/MainLayout";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";

import Hero from "../../components/landing/Hero/Hero";
import Technology from "../../components/landing/Technology/Technology";


export default function LandingPage() {
    return (
        <MainLayout>
            <Navbar />

            <main>
                <Hero />
                <Technology />
            </main>

            <Footer />
        </MainLayout>
    );
}