import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramsSection";
import CampusSection from "./components/CampusSection";
import AdmissionsSection from "./components/AdmissionsSection";
import FacultySection from "./components/FacultySection";
import EventsSection from "./components/EventsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <AdmissionsSection />
      <CampusSection />
      <FacultySection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
