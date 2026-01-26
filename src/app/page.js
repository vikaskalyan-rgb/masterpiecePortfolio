import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhatsAppButton from "./components/WhatsAppButton";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="flex min-h-screen flex-col bg-[#ffffff]">
        <Navbar />
        <div className="container mt-24 mx-auto px-4 py-0">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <TestimonialsSection />
          <EmailSection />
        </div>
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}