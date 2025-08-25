import React from "react";
import ContactUsSection from "../components/contact/ContactUsSection";
import Navbar from "../components/Navbar";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <ContactUsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
