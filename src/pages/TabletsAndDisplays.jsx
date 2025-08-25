import React from "react";
import TabletsAndDisplaysBanner from "../components/tablets-and-displays/TabletsAndDisplaysBanner";
import HeroTwoCol from "../components/tablets-and-displays/HeroTwoCol";
import FeatureCard from "../components/tablets-and-displays/FeatureCard";
import PartnersSection from "../components/tablets-and-displays/PartnersSection";
import ProductShowcase from "../components/tablets-and-displays/ProductShowcase";
import HowItWorks from "../components/tablets-and-displays/HowItWorks";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";

export default function TabletsAndDisplays() {
  return (
    <>
      <Navbar />
      <TabletsAndDisplaysBanner />
      <HeroTwoCol />
      <FeatureCard />
      <PartnersSection />
      <ProductShowcase />
      <HowItWorks />
      <ContactSection />
      <Footer />
    </>
  );
}
