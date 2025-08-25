import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import BusinessIcon from "@mui/icons-material/Business";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SecurityIcon from "@mui/icons-material/Security";
import MemoryIcon from "@mui/icons-material/Memory";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import SettingsIcon from "@mui/icons-material/Settings";

const services = [
  {
    title: "Smart Building Automation",
    icon: <BusinessIcon sx={{ fontSize: 36, color: "#2962ff" }} />,
    description:
      "Comprehensive building management systems that optimize energy efficiency, comfort, and operational ease through intelligent automation.",
    points: [
      "HVAC Optimization",
      "Centralized Control",
      "Lighting Automation",
      "Access Control",
    ],
    color: "linear-gradient(135deg, #dbeafe, #eef2ff)",
  },
  {
    title: "PoE Lighting Solutions",
    icon: <LightbulbIcon sx={{ fontSize: 36, color: "#f59e0b" }} />,
    description:
      "Provide power-efficient lighting fixtures with seamless control, advanced monitoring, and enhanced flexibility.",
    points: [
      "LED Integration",
      "Dimming Controls",
      "Remote Monitoring",
      "Predictive Maintenance",
    ],
    color: "linear-gradient(135deg, #fef3c7, #fff7ed)",
  },
  {
    title: "Security & Surveillance",
    icon: <SecurityIcon sx={{ fontSize: 36, color: "#ef4444" }} />,
    description:
      "Advanced security solutions including AI-enabled surveillance, access control, and cybersecurity systems for comprehensive protection.",
    points: [
      "AI Surveillance",
      "Access Control",
      "Cybersecurity",
      "Emergency Response",
    ],
    color: "linear-gradient(135deg, #fee2e2, #fef2f2)",
  },
  {
    title: "IoT Solutions",
    icon: <MemoryIcon sx={{ fontSize: 36, color: "#22c55e" }} />,
    description:
      "End-to-end IoT solutions that enable seamless data exchange, predictive analytics, and scalable applications for digital transformation.",
    points: [
      "Device Integration",
      "Data Analytics",
      "Cloud Connectivity",
      "Real-Time Monitoring",
    ],
    color: "linear-gradient(135deg, #dcfce7, #f0fdf4)",
  },
  {
    title: "Blockchain Supply Chain",
    icon: <CurrencyBitcoinIcon sx={{ fontSize: 36, color: "#a855f7" }} />,
    description:
      "Blockchain-powered supply chain automation ensuring transparency, traceability, and efficient logistics operations.",
    points: [
      "Transparent Tracking",
      "Smart Contracts",
      "Secure Transactions",
      "Fraud Prevention",
    ],
    color: "linear-gradient(135deg, #f3e8ff, #faf5ff)",
  },
  {
    title: "System Integration",
    icon: <SettingsIcon sx={{ fontSize: 36, color: "#06b6d4" }} />,
    description:
      "Seamless integration of disparate systems into a unified, efficient digital ecosystem.",
    points: [
      "ERP Integration",
      "API Development",
      "Data Synchronization",
      "Automation Workflows",
    ],
    color: "linear-gradient(135deg, #cffafe, #ecfeff)",
  },
];

export default function SixCardsSection() {
  return (
    <Box sx={{ py: 8, px: 2, maxWidth: "1200px", mx: "auto" }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 1 }}
      >
        Our{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(90deg,#6a11cb,#2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Services
        </Box>
      </Typography>

      <Typography
        align="center"
        variant="body1"
        sx={{ color: "text.secondary", mb: 6, maxWidth: "700px", mx: "auto" }}
      >
        Comprehensive technology solutions designed to transform your business
        operations and drive efficiency across all sectors through intelligent
        automation.
      </Typography>

      {/* Service Cards */}
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Paper
              sx={{
                p: 3,
                borderRadius: "16px",
                background: service.color,
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                },
              }}
            >
              {/* Icon */}
              <Box sx={{ mb: 2 }}>{service.icon}</Box>

              {/* Title */}
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {service.title}
              </Typography>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {service.description}
              </Typography>

              {/* Bullet Points */}
              <List dense>
                {service.points.map((point, i) => (
                  <ListItem key={i} sx={{ py: 0 }}>
                    <ListItemText
                      primary={point}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>

              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  fontWeight: "bold",
                  color: "#2563eb",
                  cursor: "pointer",
                }}
              >
                Learn More →
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
