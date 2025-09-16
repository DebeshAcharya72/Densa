import React from "react";
import { Box, Typography, Paper, Grid, Chip, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SecuritySurveillance = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        background: "linear-gradient(135deg, #f5f7ff, #eef2f9)",
      }}
    >
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
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          },
        }}
      >
        {/* Title */}
        <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
          Security & Surveillance
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Organizations across industries require comprehensive security
          solutions to protect assets, personnel, and sensitive information.
        </Typography>

        {/* What It Is */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          What It Is
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          Advanced security and surveillance systems utilizing AI-powered
          cameras, real-time monitoring, and intelligent threat detection to
          ensure comprehensive protection.
        </Typography>

        {/* What We Do */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          What We Do
        </Typography>
        <Grid container spacing={2} mb={4}>
          {[
            "Install AI-powered cameras",
            "Automate alerts & incident reporting",
            "Access control systems",
            "Provide real-time monitoring dashboards",
            "Ensure data storage & compliance",
            "Perimeter security solutions",
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
            "24/7 comprehensive monitoring",
            "Enhanced asset protection",
            "Reduced security costs",
            "Rapid threat detection",
            "Compliance with regulations",
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
            "Manufacturing & retail",
            "Healthcare facilities",
            "Educational institutions",
            "Government buildings",
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

export default SecuritySurveillance;
