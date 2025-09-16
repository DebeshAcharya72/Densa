import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";

// Import Material UI Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import InsightsIcon from "@mui/icons-material/Insights";

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  backgroundImage: "url('/images/projectbanner.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(4),
}));

const Overlay = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(to right, rgba(252, 253, 253, 0.88) 0%, rgba(0, 51, 153, 0) 100%)",
  zIndex: 1,
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  maxWidth: "650px",
  color: "#000",
}));

const StatText = styled(Typography)(() => ({
  fontSize: "14px",
  color: "#333",
  display: "inline-flex",
  alignItems: "center",
  marginRight: "20px",
  fontWeight: 500,
}));

const ProjectHeroSection = () => {
  return (
    <BackgroundBox>
      <Overlay />

      <ContentBox>
        {/* Heading */}
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          Case Studies:{" "}
          <Typography
            component="span"
            sx={{
              color: "#2575fc",
              fontWeight: "bold",
              letterSpacing: "2.5px",
            }}
          >
            Transforming Smart Spaces
          </Typography>{" "}
          with Innovative Technology
        </Typography>

        {/* Subtext */}
        <Typography variant="body1" sx={{ color: "#11395cff", mb: 3 }}>
          Explore how our services and solutions deliver efficiency,
          sustainability, and innovation across industries.
        </Typography>

        {/* Buttons */}
        <Stack direction="row" spacing={2} mb={4}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg,#2575fc,#6a11cb)",
              color: "#fff",
              textTransform: "none",
              borderRadius: "6px",
              px: 3,
              py: 1.5,
            }}
          >
            Get a Free Consultation
          </Button>
        </Stack>

        {/* Stats Section with Icons */}
        <Stack direction="row" spacing={3}>
          <StatText>
            <CheckCircleIcon sx={{ fontSize: 20, color: "#2575fc", mr: 1 }} />
            100+ Projects Completed
          </StatText>
          <StatText>
            <WorkHistoryIcon sx={{ fontSize: 20, color: "#2575fc", mr: 1 }} />
            25+ Years Experience
          </StatText>
          <StatText>
            <InsightsIcon sx={{ fontSize: 20, color: "#2575fc", mr: 1 }} />
            Industry Leading Solutions
          </StatText>
        </Stack>
      </ContentBox>
    </BackgroundBox>
  );
};

export default ProjectHeroSection;
