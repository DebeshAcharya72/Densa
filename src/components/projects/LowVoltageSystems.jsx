import React from "react";
import { Box, Typography, Paper, Grid, Chip, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const LowVoltageSystems = () => {
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
            boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
          },
        }}
      >
        {/* Title */}
        <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
          Low Voltage Systems
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Residential and commercial properties need reliable, efficient
          electrical systems that support modern technology requirements.
        </Typography>

        {/* What It Is */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          What It Is
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          Low voltage systems use less than 50 volts of electricity and include
          essential technologies like doorbells, security systems, intercoms,
          and home theaters.
        </Typography>

        {/* What We Do */}
        <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
          What We Do
        </Typography>
        <Grid container spacing={2} mb={4}>
          {[
            "Structured wiring installation",
            "Audio, video & stereo systems",
            "Central vacuum systems",
            "Cable, internet & TV setup",
            "IP phone setup & services",
            "Home theater design",
            "Intercoms & communication solutions",
            "Auto alarms & GPS systems",
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
            "Enhanced home entertainment",
            "Increased property value",
            "Future-proof infrastructure",
            "Improved communication systems",
            "Energy-efficient solutions",
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
            "Residential homes & luxury estates",
            "Commercial offices",
            "Restaurants & hospitality",
            "Educational institutions",
            "Medical facilities",
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

export default LowVoltageSystems;
