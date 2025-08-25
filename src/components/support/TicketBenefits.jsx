import React from "react";
import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import PeopleIcon from "@mui/icons-material/People";

const features = [
  {
    icon: <BoltIcon sx={{ fontSize: 40, color: "#f5b300" }} />,
    title: "Fast Response",
    desc: "Most tickets answered within 24 hours.",
  },
  {
    icon: <QueryStatsIcon sx={{ fontSize: 40, color: "#3b82f6" }} />,
    title: "Track in Real-Time",
    desc: "Stay updated on your request status.",
  },
  {
    icon: <TrackChangesIcon sx={{ fontSize: 40, color: "#22c55e" }} />,
    title: "Expert Guidance",
    desc: "Solutions from certified professionals.",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: "#8b5cf6" }} />,
    title: "Customer First",
    desc: "Priority handling for registered users.",
  },
];

const TicketBenefits = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 3,
        backgroundColor: "#f9f9ff",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 6 }}>
        Why Raise a Ticket With Us?
      </Typography>

      {/* Features Grid */}
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: "rgba(0,0,0,0.05)",
                  width: 70,
                  height: 70,
                  borderRadius: 3,
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                {feature.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {feature.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TicketBenefits;
