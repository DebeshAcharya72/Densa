import React, { useState } from "react";
import { Box, Typography, Button, Paper, Chip } from "@mui/material";
import Grid from "@mui/material/Grid";
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
    <Box sx={{ py: 8, px: 2, maxWidth: "1200px", mx: "auto" }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 1 }}
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
        sx={{ color: "text.secondary", mb: 4, maxWidth: "700px", mx: "auto" }}
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
          <Button
            key={index}
            onClick={() => setActive(index)}
            startIcon={ind.icon}
            sx={{
              borderRadius: "30px",
              textTransform: "none",
              px: 3,
              py: 1,
              fontWeight: 500,
              backgroundColor: active === index ? "#2563eb" : "#fff",
              color: active === index ? "#fff" : "#374151",
              boxShadow:
                active === index
                  ? "0 4px 12px rgba(37,99,235,0.3)"
                  : "0 3px 8px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: active === index ? "#1e40af" : "#f9fafb",
              },
            }}
          >
            {ind.name}
          </Button>
        ))}
      </Box>

      {/* Content */}
      <Grid container spacing={4} alignItems="center">
        {/* Left Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {industry.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
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
              <Chip
                key={i}
                label={sol}
                sx={{
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  borderRadius: "8px",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  "& .MuiChip-label": { px: 2, py: 1 },
                }}
              />
            ))}
          </Box>

          {/* Stats */}
          <Grid container spacing={3}>
            {industry.stats.map((stat, i) => (
              <Grid size={{ xs: 4 }} key={i}>
                <Paper
                  sx={{
                    p: 2,
                    textAlign: "center",
                    borderRadius: "12px",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: stat.color }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Image Placeholder */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            sx={{
              height: 280,
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(180deg,#f3f4f6,#e5e7eb)",
              position: "relative",
              boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "#fff",
                p: 1.5,
                borderRadius: "12px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
              }}
            >
              <ApartmentIcon sx={{ color: "#2563eb", fontSize: 28 }} />
            </Box>
            <Typography variant="body2" color="text.secondary">
              [ Image / Illustration ]
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
