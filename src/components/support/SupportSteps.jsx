import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = [
  {
    number: "01",
    icon: <LoginIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Login or Sign Up",
    desc: "Access your account securely.",
  },
  {
    number: "02",
    icon: <ConfirmationNumberIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Create a Ticket",
    desc: "Share your issue in detail.",
  },
  {
    number: "03",
    icon: <TrackChangesIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Track Updates",
    desc: "Get notified as we resolve.",
  },
  {
    number: "04",
    icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Get Solutions",
    desc: "Receive fast, reliable assistance.",
  },
];

const SupportSteps = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 3,
        backgroundColor: "#eeeef7",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 6 }}>
        Getting Support is Simple
      </Typography>

      {/* Steps Grid */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {steps.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Stack spacing={2} alignItems="center">
              {/* Circle with step number */}
              <Box
                sx={{
                  position: "relative",
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  backgroundColor: "#2574fb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                {step.icon}
                <Box
                  sx={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    backgroundColor: "#4284f7ff",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 30,
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                  }}
                >
                  {step.number}
                </Box>
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#555" }}
              >
                {step.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", maxWidth: 220 }}
              >
                {step.desc}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      {/* Footer text */}
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mt: 6, maxWidth: 700, mx: "auto" }}
      >
        No more waiting on long calls – everything is transparent, simple, and
        quick.
      </Typography>
    </Box>
  );
};

export default SupportSteps;
