import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LightingAutomation from "./pages/LightingAutomation";
import TabletsAndDisplays from "./pages/TabletsAndDisplays";
import CaseStudies from "./pages/CaseStudies";
import DashSubscriptions from "./pages/DashSubscriptions";
import DentonDrawingDatabase from "./pages/DentonDrawingDatabase";

import Support from "./pages/Support";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lighting-automation" element={<LightingAutomation />} />
      <Route path="/tablets-and-displays" element={<TabletsAndDisplays />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/dash-subscriptions" element={<DashSubscriptions />} />
      <Route path="/support" element={<Support />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route
        path="/denton-drawing-database"
        element={<DentonDrawingDatabase />}
      />
    </Routes>
  );
}

export default App;
