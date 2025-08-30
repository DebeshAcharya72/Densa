import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const features = [
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
    title: "Enterprise Security",
    desc: "Advanced security features and compliance standards",
  },
  {
    icon: <BarChartIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
    title: "Analytics & Insights",
    desc: "Comprehensive reporting and data visualization",
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
    title: "Full Customization",
    desc: "Complete control over branding and functionality",
  },
];

export default function WhyBuyLicense() {
  return (
    <Box sx={{ textAlign: "center", py: 8, background: "#f8fbff" }}>
      {/* Heading */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Why Buy a License?
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
      >
        Access powerful, customizable features designed for teams of any size.
        From flexible scheduling to branded experiences, our licenses scale with
        you. Try before you buy with a 30-day trial.
      </Typography>

      {/* Feature Cards */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
        {features.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
              }}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{ color: "#666" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Button */}
      <Button
        variant="contained"
        size="large"
        sx={{
          background: "#2563eb",
          borderRadius: 2,
          px: 4,
          py: 1.5,
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": { background: "#1d4ed8" },
        }}
      >
        Try Free for 30 Days →
      </Button>
    </Box>
  );
}
