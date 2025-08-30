import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const CommercialSolutionsBanner = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        px: 3,
        position: "relative",
        backgroundImage: `linear-gradient(
          rgba(11, 18, 117, 0.56), 
          rgba(1, 1, 59, 0.8)
        ), url("/images/commercialBG.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "#fff",
        }}
      >
        Build the Future Together —
        <br />
        <span style={{ opacity: 0.7 }}>Where Vision Meets Action</span>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", mb: 4, opacity: 0.9, color: "#fff" }}
      >
        Empowering businesses with cutting-edge solutions, innovative
        technology, and unparalleled expertise to drive success in the digital
        age.
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          background: "#ffffffde",
          color: "#2574fb",
          fontWeight: "bold",
          borderRadius: 2,
          textTransform: "none",
          px: 4,
          py: 1.5,
          mb: 4,
          "&:hover": {
            background: "#f5f5f5",
          },
        }}
      >
        Get Start Today
      </Button>
    </Box>
  );
};

export default CommercialSolutionsBanner;
