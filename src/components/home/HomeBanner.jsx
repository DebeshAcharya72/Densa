import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom theme to approximate the design
const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter", // you can replace with 'Roboto', 'Montserrat', or your preferred font
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 800,
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.15,
    },
    body1: {
      color: "#5e6b78",
    },
  },
  palette: {
    primary: {
      main: "#1e66ff", // blue for CTA
    },
    secondary: {
      main: "#6b7280",
    },
  },
});

const DecorativeSVGs = () => (
  <Box
    aria-label="decorative-background"
    sx={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      overflow: "hidden",
      zIndex: 0,
    }}
  >
    {/* Soft diagonal dashed curves to resemble the image */}
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      style={{ opacity: 0.8 }}
    >
      <defs>
        <linearGradient id="gradBlue" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#37d3ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1e66ff" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M0,350 C180,300 360,420 540,380 C720,340 900,260 1080,300"
        fill="none"
        stroke="url(#gradBlue)"
        strokeWidth="3"
        strokeDasharray="6 16"
      />
      <path
        d="M0,420 C180,360 360,480 540,440 C720,400 900,320 1080,360"
        fill="none"
        stroke="url(#gradBlue)"
        strokeWidth="2"
        strokeDasharray="6 14"
        opacity={0.6}
      />
    </svg>
  </Box>
);

const HomeBanner = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "#f7fbff",
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DecorativeSVGs />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              pt: 8,
              pb: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              sx={{
                fontSize: { xs: "48px", sm: "64px", md: "72px" },
                letterSpacing: "-0.5px",
                marginBottom: 2,
                background:
                  "linear-gradient(92deg, #0b3dff 20%, #4c7aff 60%, #1e66ff 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Empowering Smart
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(92deg, #1e66ff 0%, #7a6aff 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Spaces
              </span>
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "28px", sm: "34px" },
                fontWeight: 700,
                color: "#1f2b3a",
                mb: 3,
              }}
            >
              with Innovative Technology
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: 720,
                fontSize: { xs: 16, sm: 18 },
                lineHeight: 1.6,
                color: "#5f6b78",
              }}
            >
              Transform your spaces with cutting-edge IoT solutions, PoE
              lighting systems, advanced security infrastructure, and
              blockchain-powered supply chain automation.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 4,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  paddingX: 4,
                  paddingY: 1.75,
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Explore Solutions
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  paddingX: 3,
                  paddingY: 1.75,
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Schedule Demo
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HomeBanner;
