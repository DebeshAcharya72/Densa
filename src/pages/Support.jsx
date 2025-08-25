import React from "react";
import SupportSection from "../components/support/SupportSection";
import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import TicketBenefits from "../components/support/TicketBenefits";
import SupportSteps from "../components/support/SupportSteps";
import UrgentHelp from "../components/support/UrgentHelp";

export default function Support() {
  return (
    <>
      <Navbar />
      <SupportSection />
      <TicketBenefits />
      <SupportSteps />
      <UrgentHelp />
      <Footer />
    </>
  );
}
