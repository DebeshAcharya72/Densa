import React from "react";
import { Box, Typography } from "@mui/material";

const CaseStudiesBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "250px",
        background: "linear-gradient(90deg, #0a1a3f, #123a8f)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        position: "relative",
      }}
    >
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
        }}
      />

      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "rgba(255,255,255,0.9)",
        }}
      >
        Case Studies
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          marginTop: 1,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        Successful PoE Lighting & Automation Projects
      </Typography>
    </Box>
  );
};

export default CaseStudiesBanner;
