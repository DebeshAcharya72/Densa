import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";

export default function DashSubscriptionsBanner() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        flexDirection: "column",
        px: 2,
        position: "relative",
        backgroundImage: `url("/images/CustomizedLicense.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
            "linear-gradient(180deg, rgba(37, 100, 235, 0.56) 0%, rgba(30, 64, 175, 0.3) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#fff" }}
        >
          DASH Customized License
        </Typography>

        {/* Subheading */}
        <Typography variant="h6" sx={{ mb: 4 }}>
          Flexible licensing for teams of all sizes
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: "12px",
            backgroundColor: "white",
            color: "#2563eb",
            textTransform: "none",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#f1f5f9",
            },
          }}
        >
          Start Free Trial →
        </Button>
      </Container>
    </Box>
  );
}
