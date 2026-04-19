import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Vision from "@/components/Vision";
import ProblemReveal from "@/components/ProblemReveal";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import UGC from "@/components/UGC";
import ComparisonTable from "@/components/ComparisonTable";
import AudiencesVisual from "@/components/AudiencesVisual";
import Packages from "@/components/Packages";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <Vision />
      <ProblemReveal />
      <FeatureDeepDive />
      <ProductShowcase />
      <Testimonials />
      <UGC />
      <ComparisonTable />
      <AudiencesVisual />
      <Packages />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsApp />
    </div>
  );
}
