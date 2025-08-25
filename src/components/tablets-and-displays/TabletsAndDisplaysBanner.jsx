import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";

const TabletsAndDisplaysBanner = ({
  title = "Tablets And Displays",
  subtitle = "Power your devices efficiently with our innovative PoE to USB-C solutions. Professional-grade connectivity for modern workspaces.",
  ctaText = "Explore Solutions",
  ctaHref = "#",
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // gradient background
        background:
          "linear-gradient(135deg, #0b2a66 0%, #0a1b4a 60%, #0a1b4a 100%)",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          top: "8%",
          left: "-40px",
          background: "rgba(97, 165, 255, 0.25)",
          filter: "blur(2px)",
        }}
        aria-label="decorative circle"
      />
      <Box
        sx={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",
          bottom: "-40px",
          right: "6%",
          background: "rgba(36, 173, 255, 0.25)",
          filter: "blur(2px)",
        }}
        aria-label="decorative circle"
      />
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.6rem", sm: "4rem", md: "4.5rem" },
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            maxWidth: "60ch",
            mx: "auto",
            opacity: 0.95,
            mb: 4,
            fontWeight: 500,
            fontSize: { xs: "1rem", sm: "1.125rem" },
          }}
        >
          {subtitle}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href={ctaHref}
          size="large"
          sx={{
            borderRadius: 999,
            px: 4,
            py: 1.4,
            boxShadow: "0 6px 20px rgba(30,144,255,0.4)",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 12px 28px rgba(30,144,255,0.5)",
            },
          }}
        >
          {ctaText}
        </Button>
      </Container>
    </Box>
  );
};

export default TabletsAndDisplaysBanner;
