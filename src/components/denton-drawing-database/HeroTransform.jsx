import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";

/**
 * Exact-like UI: "Transform Your Digital Vision" hero
 * - Full-width blue gradient background
 * - Large white heading with emphasis on "Digital Vision" in orange
 * - Subheading centered
 * - Primary orange CTA with subtle elevation
 * - Self-contained, no external deps beyond MUI
 */

const HeroTransform = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // gradient: left to right or top to bottom; adjust to match screenshot
        background:
          "linear-gradient(135deg, #0b58d6 0%, #1e3a93 50%, #0b1d6b 100%)",
        // fallback for very old browsers
        // backgroundColor: '#0a3d91',
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          color: "white",
          maxWidth: 860,
          px: 3,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 800,
            letterSpacing: 0.2,
            mb: 2,
            // Use a stacked span to color the emphasized part
          }}
        >
          Transform Your&nbsp;
          <Box
            component="span"
            sx={{
              color: "#f7a82e", // orange emphasis
              fontWeight: 800,
              // slight text-shadow to mimic depth
              textShadow: "0 2px 0 rgba(0,0,0,0.05)",
            }}
          >
            Digital Vision
          </Box>
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            opacity: 0.95,
            mb: 4,
            fontSize: { xs: 15, sm: 16, md: 17 },
            maxWidth: 640,
            mx: "auto",
          }}
        >
          We create exceptional digital experiences that drive growth, engage
          audiences, and deliver measurable results for your business.
        </Typography>

        <Stack direction="row" justifyContent="center">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#ff6b2c",
              color: "white",
              textTransform: "none",
              fontWeight: 700,
              boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
              "&:hover": {
                backgroundColor: "#ff8236",
                boxShadow: "0 6px 20px rgba(0,0,0,0.28)",
              },
            }}
          >
            Get Started Today
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroTransform;
