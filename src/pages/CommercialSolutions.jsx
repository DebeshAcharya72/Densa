import React from "react";
import CommercialSolutionsBanner from "../components/commercial-solutions/CommercialSolutionsBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import ContactSection from "../components/home/ContactSection";
import CommercialSolutionsTrustedSection from "../components/commercial-solutions/CommercialSolutionsTrustedSection";
import WhyChooseUsOfDatabase from "../components/denton-drawing-database/WhyChooseUsOfDatabase";
import NumbersThatSpeak from "../components/commercial-solutions/NumbersThatSpeak";

export default function CommercialSolutions() {
  return (
    <>
      <Navbar />
      <CommercialSolutionsBanner />
      <CommercialSolutionsTrustedSection />
      <WhyChooseUsOfDatabase />
      <NumbersThatSpeak />
      <ContactSection />
      <Footer />
    </>
  );
}
