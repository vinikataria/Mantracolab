import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceHighlights from "./components/ServiceHighlights";
import FloatingContact from "./components/FloatingContact";
import ApproachSection from "./components/ApproachSection";
import ServicesGrid from "./components/ServicesGrid";
import ProcessSteps from "./components/ProcessSteps";
import ContactBanner from "./components/ContactBanner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-w-[320px] overflow-x-clip">
      <Navbar />
      <Hero />
      <ServiceHighlights />
      <ApproachSection />
      <ServicesGrid />
      <ProcessSteps />
      <ContactBanner />
      <Testimonials />
      <Footer />
      <FloatingContact />
    </main>
  );
}
