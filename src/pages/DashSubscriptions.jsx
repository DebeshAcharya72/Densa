import React from "react";
import DashSubscriptionsBanner from "../components/dash-subscriptions/DashSubscriptionsBanner";
import PricingSection from "../components/dash-subscriptions/PricingSection";
import VolumeDiscounts from "../components/dash-subscriptions/VolumeDiscounts";
import WhyBuyLicense from "../components/dash-subscriptions/WhyBuyLicense";
import CustomizableFeatures from "../components/dash-subscriptions/CustomizableFeatures";
import AvailableFeatures from "../components/dash-subscriptions/AvailableFeatures";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";

export default function DashSubscriptions() {
  return (
    <>
      <Navbar />
      <DashSubscriptionsBanner />
      <PricingSection />
      <VolumeDiscounts />
      <WhyBuyLicense />
      <CustomizableFeatures />
      <AvailableFeatures />
      <ContactSection />
      <Footer />
    </>
  );
}
