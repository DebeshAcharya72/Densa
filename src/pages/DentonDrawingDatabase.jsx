import React from "react";
import HeroTransform from "../components/denton-drawing-database/HeroTransform";
import AboutSectionOfDatabase from "../components/denton-drawing-database/AboutSectionOfDatabase";
import ServicesSectionOfDatabase from "../components/denton-drawing-database/ServicesSectionOfDatabase";
import WhyChooseUsOfDatabase from "../components/denton-drawing-database/WhyChooseUsOfDatabase";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";

export default function DentonDrawingDatabase() {
  return (
    <>
      <Navbar />
      <HeroTransform />
      <AboutSectionOfDatabase />
      <ServicesSectionOfDatabase />
      <WhyChooseUsOfDatabase />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}
