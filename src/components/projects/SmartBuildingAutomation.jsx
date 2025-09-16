import React from "react";
import { Box, Typography, Paper, Grid, Chip, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SmartBuildingAutomation = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        background: "linear-gradient(135deg, #f5f7ff, #eef2f9)",
      }}
    >
      {/* Section Heading */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(90deg, #4b6cb7, #182848)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Technology Solutions in Action
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="700px"
          mx="auto"
        >
          Discover how our specialized services transform businesses across
          industries through real-world implementations and proven results.
        </Typography>
      </Box>

      {/* Card Section */}
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          backgroundColor: "#fff",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
          },
        }}
      >
        {/* Title */}
        <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
          Smart Building Automation
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          A commercial real estate company sought to reduce energy costs while
          ensuring 24/7 monitoring of its buildings.
        </Typography>

        {/* What It Is */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          What It Is
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          Smart Building Automation integrates IoT sensors and automation
          systems to control lighting, HVAC, and security for better efficiency
          and user comfort.
        </Typography>

        {/* What We Do */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          What We Do
        </Typography>
        <Grid container spacing={2} mb={4}>
          {[
            "IoT sensor installation",
            "Smart lighting controls",
            "Predictive maintenance alerts",
            "HVAC automation systems",
            "Energy monitoring dashboards",
            "Mobile app integration",
          ].map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <CheckCircleIcon color="success" />
                <Typography variant="body2">{item}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* The Benefits */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          The Benefits to You
        </Typography>
        <Grid container spacing={2} mb={4}>
          {[
            "Lower energy bills",
            "Smarter monitoring & control",
            "Scalable solutions for future upgrades",
            "Greater safety and security",
            "Seamless user experience",
          ].map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <FiberManualRecordIcon color="primary" sx={{ fontSize: 10 }} />
                <Typography variant="body2">{item}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Applicable Partners */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          Applicable Partners
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {[
            "Commercial real estate",
            "Office buildings",
            "Manufacturing facilities",
            "Educational institutions",
            "Healthcare facilities",
          ].map((partner, index) => (
            <Chip
              key={index}
              label={partner}
              variant="outlined"
              sx={{
                mb: 1,
                borderRadius: "16px",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#fff",
                  borderColor: "primary.main",
                },
              }}
            />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default SmartBuildingAutomation;
