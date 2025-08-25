import React from "react";
import CaseStudiesBanner from "../components/case-studies/CaseStudiesBanner";
import CaseStudiesGrid from "../components/case-studies/CaseStudiesGrid";
import BidMyJob from "../components/case-studies/BidMyJob";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";

export default function CaseStudies() {
  return (
    <>
      <Navbar />
      <CaseStudiesBanner />
      <CaseStudiesGrid />
      <BidMyJob />
      <ContactSection />
      <Footer />
    </>
  );
}
