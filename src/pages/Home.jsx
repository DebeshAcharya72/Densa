import React from "react";
import HomeBanner from "../components/home/HomeBanner";
import Counter from "../components/home/Counter";
import AboutSection from "../components/home/AboutSection";
import SixCardsSection from "../components/home/SixCardsSection";
import IndustriesSection from "../components/home/IndustriesSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import CallToAction from "../components/home/CallToAction";
import Testimonials from "../components/home/Testimonials";
import TechnologyStack from "../components/home/TechnologyStack";
import UpgradeCTA from "../components/home/UpgradeCTA";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <Counter />
      <AboutSection />
      <SixCardsSection />
      <IndustriesSection />
      <WhyChooseSection />
      <CallToAction />
      <Testimonials />
      <TechnologyStack />
      <UpgradeCTA />
      <ContactSection />
      <Footer />
    </>
  );
}
