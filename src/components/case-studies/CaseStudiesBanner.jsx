import React from "react";
import { Box, Typography } from "@mui/material";

const CaseStudiesBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "250px",
        backgroundImage: `url("/images/case-studies-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(10,26,63,0.85), rgba(18,58,143,0.85))",
          zIndex: 1,
        }}
      />

      {/* Background subtle circles */}
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          top: "20%",
          left: "10%",
          filter: "blur(60px)",
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(0, 120, 255, 0.15)",
          bottom: "15%",
          right: "15%",
          filter: "blur(80px)",
          zIndex: 2,
        }}
      />

      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "rgba(255,255,255,0.95)",
          zIndex: 3,
        }}
      >
        Case Studies
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          marginTop: 1,
          color: "rgba(255,255,255,0.75)",
          zIndex: 3,
        }}
      >
        Successful PoE Lighting & Automation Projects
      </Typography>
    </Box>
  );
};

export default CaseStudiesBanner;
