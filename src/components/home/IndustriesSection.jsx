import React, { useState } from "react";
import { Box, Typography, Button, Paper, Chip } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion, AnimatePresence } from "framer-motion";

import ApartmentIcon from "@mui/icons-material/Apartment";
import FactoryIcon from "@mui/icons-material/Factory";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";

const industries = [
  {
    name: "Commercial Real Estate",
    icon: <ApartmentIcon />,
    image: "/images/CommercialRealEstate.jpg",
    description:
      "Smart building solutions for office complexes, retail spaces, and mixed-use developments with integrated automation systems.",
    solutions: [
      "Energy Management",
      "Tenant Services",
      "Security Integration",
      "Space Optimization",
    ],
    stats: [
      { value: "200+", label: "Projects", color: "#2563eb" },
      { value: "35%", label: "Cost Savings", color: "#16a34a" },
      { value: "99.9%", label: "Uptime", color: "#9333ea" },
    ],
  },
  {
    name: "Manufacturing",
    icon: <FactoryIcon />,
    image: "/images/Manufacturing.jpg",
    description:
      "Automation, safety, and IoT-driven solutions to optimize manufacturing processes and operational efficiency.",
    solutions: [
      "Predictive Maintenance",
      "IoT Monitoring",
      "Energy Efficiency",
      "Production Control",
    ],
    stats: [
      { value: "150+", label: "Factories", color: "#2563eb" },
      { value: "40%", label: "Efficiency Boost", color: "#16a34a" },
      { value: "24/7", label: "Monitoring", color: "#9333ea" },
    ],
  },
  {
    name: "Education",
    icon: <SchoolIcon />,
    image: "/images/Education.jpg",
    description:
      "Smart campus solutions for schools and universities, enabling secure, efficient, and connected learning environments.",
    solutions: [
      "Smart Classrooms",
      "Access Control",
      "IoT Integration",
      "Campus Security",
    ],
    stats: [
      { value: "500+", label: "Campuses", color: "#2563eb" },
      { value: "20%", label: "Energy Savings", color: "#16a34a" },
      { value: "99.5%", label: "Reliability", color: "#9333ea" },
    ],
  },
  {
    name: "Healthcare",
    icon: <LocalHospitalIcon />,
    image: "/images/Healthcare.jpg",
    description:
      "Advanced automation and monitoring systems to support hospitals, clinics, and healthcare institutions.",
    solutions: [
      "Patient Monitoring",
      "Building Automation",
      "IoT Devices",
      "Energy Efficiency",
    ],
    stats: [
      { value: "300+", label: "Hospitals", color: "#2563eb" },
      { value: "45%", label: "Energy Savings", color: "#16a34a" },
      { value: "99.9%", label: "Uptime", color: "#9333ea" },
    ],
  },
  {
    name: "Retail",
    icon: <StorefrontIcon />,
    image: "/images/Retail.jpg",
    description:
      "IoT-driven retail automation, security, and energy-efficient solutions for shopping centers and retail outlets.",
    solutions: [
      "Energy Optimization",
      "AI Security",
      "Smart Lighting",
      "IoT Devices",
    ],
    stats: [
      { value: "400+", label: "Stores", color: "#2563eb" },
      { value: "30%", label: "Cost Savings", color: "#16a34a" },
      { value: "24/7", label: "Security", color: "#9333ea" },
    ],
  },
  {
    name: "Residential",
    icon: <HomeIcon />,
    image: "/images/Residential.jpg",
    description:
      "Smart residential solutions for modern living — integrated security, IoT, and energy management.",
    solutions: [
      "Smart Homes",
      "IoT Appliances",
      "Energy Savings",
      "Access Control",
    ],
    stats: [
      { value: "5K+", label: "Homes", color: "#2563eb" },
      { value: "25%", label: "Energy Savings", color: "#16a34a" },
      { value: "99.9%", label: "System Uptime", color: "#9333ea" },
    ],
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const industry = industries[active];

  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        maxWidth: "1300px",
        mx: "auto",
        backgroundColor: "#eeeef7",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 1,
          letterSpacing: "-0.5px",
        }}
      >
        Industries We{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(90deg,#6a11cb,#2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Serve
        </Box>
      </Typography>

      <Typography
        align="center"
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 6,
          maxWidth: "720px",
          mx: "auto",
          fontSize: "1.1rem",
        }}
      >
        Our technology solutions are trusted across diverse industries,
        delivering measurable results and operational excellence.
      </Typography>

      {/* Industry Tabs */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mb: 6,
        }}
      >
        {industries.map((ind, index) => (
          <motion.div whileHover={{ scale: 1.05 }} key={index}>
            <Button
              onClick={() => setActive(index)}
              startIcon={ind.icon}
              sx={{
                borderRadius: "40px",
                textTransform: "none",
                px: 3.5,
                py: 1.2,
                fontWeight: 600,
                fontSize: "0.95rem",
                background:
                  active === index
                    ? "linear-gradient(90deg,#2563eb,#1e40af)"
                    : "#fff",
                color: active === index ? "#fff" : "#374151",
                transition: "all 0.3s ease",
                boxShadow:
                  active === index
                    ? "0 6px 14px rgba(37,99,235,0.35)"
                    : "0 3px 8px rgba(0,0,0,0.08)",
                "&:hover": {
                  background:
                    active === index
                      ? "linear-gradient(90deg,#1e3a8a,#1e40af)"
                      : "#f9fafb",
                },
              }}
            >
              {ind.name}
            </Button>
          </motion.div>
        ))}
      </Box>

      {/* Content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {industry.name}
              </Typography>
              <Typography
                variant="body1"
                // color="text.secondary"
                sx={{ mb: 3, fontSize: "1.05rem" }}
              >
                {industry.description}
              </Typography>

              {/* Solutions */}
              <Typography fontWeight="bold" sx={{ mb: 1 }}>
                Key Solutions:
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
                  mb: 4,
                }}
              >
                {industry.solutions.map((sol, i) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    key={i}
                  >
                    <Chip
                      label={sol}
                      sx={{
                        background: "rgba(255,255,255,0.6)",
                        backdropFilter: "blur(6px)",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                        borderRadius: "10px",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        "& .MuiChip-label": { px: 2, py: 1 },
                      }}
                    />
                  </motion.div>
                ))}
              </Box>

              {/* Stats */}
              <Grid container spacing={3}>
                {industry.stats.map((stat, i) => (
                  <Grid size={{ xs: 4 }} key={i}>
                    <motion.div
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Paper
                        sx={{
                          p: 2.5,
                          textAlign: "center",
                          borderRadius: "14px",
                          background: stat.color,
                          color: "#fff",
                          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2">{stat.label}</Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Right Image Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                key={industry.image} // ensures animation when changing images
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Paper
                  sx={{
                    height: 320,
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(180deg,#f9fafb,#e5e7eb)",
                    position: "relative",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                    overflow: "hidden",
                  }}
                >
                  {/* Top-right floating icon */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      background: "#fff",
                      p: 2,
                      borderRadius: "14px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    {industry.icon}
                  </Box>

                  {/* Industry Image */}
                  <motion.img
                    src={industry.image}
                    alt={industry.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
