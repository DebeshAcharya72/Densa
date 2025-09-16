import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import SmartBuildingAutomation from "../components/projects/SmartBuildingAutomation";
import LowVoltageSystems from "../components/projects/LowVoltageSystems";
import SecuritySurveillance from "../components/projects/SecuritySurveillance";
import RealWorldSection from "../components/projects/RealWorldSection";
import ContactSection from "../components/home/ContactSection";
import ProjectHeroSection from "../components/projects/ProjectHeroSection";

export default function Projects() {
  return (
    <>
      <Navbar />
      <ProjectHeroSection />
      <SmartBuildingAutomation />
      <LowVoltageSystems />
      <SecuritySurveillance />
      <RealWorldSection />
      <ContactSection />
      <Footer />
    </>
  );
}
