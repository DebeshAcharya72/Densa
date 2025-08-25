import React from "react";
import SolutionBanner from "../components/solution/SolutionBanner";
import OneRowTwoColumnSection from "../components/solution/OneRowTwoColumnSection";
import InsightsSection from "../components/solution/InsightsSection";
import AutomationSection from "../components/solution/AutomationSection";
import FeaturedProducts from "../components/solution/FeaturedProducts";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";

export default function Solutions() {
  return (
    <>
      <Navbar />
      <SolutionBanner />
      <OneRowTwoColumnSection />
      <InsightsSection />
      <AutomationSection />
      <FeaturedProducts />
      <ContactSection />
      <Footer />
    </>
  );
}
