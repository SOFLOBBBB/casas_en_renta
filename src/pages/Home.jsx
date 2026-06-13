import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BenefitsSection from "../components/BenefitsSection";
import PropertiesSection from "../components/PropertiesSection";
import PropertyDetail from "../components/PropertyDetail";
import IncludedServices from "../components/IncludedServices";
import RequirementsSection from "../components/RequirementsSection";
import LocationSection from "../components/LocationSection";
import NearbyServicesSection from "../components/NearbyServicesSection";
import ContactSection from "../components/ContactSection";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export default function Home() {
  const [activeProperty, setActiveProperty] = useState(null);

  return (
    <div className="min-h-screen bg-cream-50 text-slate-blue-800">
      <Navbar />
      <main>
        <Hero />
        <BenefitsSection />
        <PropertiesSection onOpenProperty={setActiveProperty} />
        <IncludedServices />
        <RequirementsSection />
        <LocationSection />
        <NearbyServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <PropertyDetail
        property={activeProperty}
        onClose={() => setActiveProperty(null)}
      />
    </div>
  );
}
