import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PowerIcon from "@mui/icons-material/Power";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = [
  {
    icon: <PowerIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Power + Data via One Cable",
    description:
      "Connect your Ethernet cable carrying both power and data to our converter",
  },
  {
    icon: <BoltIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Connect to Device",
    description:
      "Plug the USB-C output directly into your tablet, display, or device",
  },
  {
    icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Reliable Long-Distance Performance",
    description: "Enjoy stable power and connectivity up to 100 meters away",
  },
];

const HowItWorks = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0A2463",
        color: "#fff",
        textAlign: "center",
        py: 8,
        px: 8,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 1, color: "#fff" }}
      >
        How It <span style={{ color: "#00BFFF" }}>Works</span>
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, color: "#fff" }}>
        Simple, efficient, and reliable - get your devices powered in three easy
        steps
      </Typography>

      {/* Steps */}
      <Grid container spacing={6} justifyContent="center">
        {steps.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Icon Circle */}
              <Box
                sx={{
                  backgroundColor: "#00BFFF",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                {step.icon}
              </Box>

              {/* Step Number */}
              {/* <Box
                sx={{
                  backgroundColor: "#00BFFF",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: 14,
                }}
              >
                {index + 1}
              </Box> */}

              {/* Title */}
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {step.title}
              </Typography>

              {/* Description */}
              <Typography variant="body2">{step.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
