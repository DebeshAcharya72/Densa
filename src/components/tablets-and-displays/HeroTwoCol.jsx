import React from "react";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Shield";
import WirelessIcon from "@mui/icons-material/Wifi";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Bullet = ({ icon: Icon, text }) => (
  <Stack direction="row" alignItems="flex-start" spacing={1.5} sx={{ mb: 1 }}>
    <Icon sx={{ color: "#1e88e5", mt: "6px" }} />
    <Typography variant="body1" sx={{ color: "text.secondary" }}>
      {text}
    </Typography>
  </Stack>
);

const HeroTwoCol = ({
  titleTop = "The Ultimate",
  titleBottom = "PoE to USB-C Converter",
  subtitle = "Transform your infrastructure with our innovative Power over Ethernet solutions. Deliver both power and data through a single cable, eliminating the need for additional power adapters and installation complexity.",
  bullets = [
    {
      icon: ShieldIcon,
      text: "Universal Compatibility — Works with iPad, Surface, Galaxy Tab, and more",
    },
    {
      icon: LocalShippingIcon,
      text: "Extended Range — Reliable power delivery up to 100 meters",
    },
    {
      icon: WirelessIcon,
      text: "Professional Grade — Built for commercial and industrial applications",
    },
  ],
  ctaText = "Learn More",
  ctaHref = "#learn",
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f6f8fb",
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative soft blobs */}
      <Box
        sx={{
          position: "absolute",
          width: 240,
          height: 240,
          borderRadius: "50%",
          left: -60,
          top: -60,
          background:
            "radial-gradient(circle at 30% 30%, rgba(30,144,255,.55), rgba(30,144,255,0) 60%)",
          filter: "blur(1px)",
        }}
        aria-label="decorative blob"
      />
      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          right: -120,
          bottom: -120,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 70% 40%, rgba(60, 180, 255, .45), rgba(60, 180, 255, 0) 60%)",
          filter: "blur(1px)",
        }}
        aria-label="decorative blob"
      />
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left: Card with gradient device illustration */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                bgcolor: "background.paper",
                boxShadow: "0 20px 50px rgba(30, 60, 100, 0.15)",
                p: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: 260, md: 320 },
              }}
            >
              <Box
                sx={{
                  width: "92%",
                  height: "78%",
                  borderRadius: 3,
                  bgcolor: "linear-gradient(#0b2a66, #082a6b)",
                  background:
                    "linear-gradient(135deg, #0b2a66 0%, #0a2a7a 60%, #0a1b4a 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "inset 0 0 40px rgba(255,255,255,.08)",
                }}
              >
                <Box
                  sx={{
                    width: 92,
                    height: 92,
                    borderRadius: 2,
                    bgcolor: "#1e88e5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 20px rgba(30,144,255,.6)",
                  }}
                >
                  <WirelessIcon sx={{ color: "#fff", fontSize: 40 }} />
                </Box>
              </Box>

              {/* small floating badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: -14,
                  right: -14,
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  bgcolor: "#1e88e5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  boxShadow: "0 6px 18px rgba(30,144,255,.5)",
                }}
                aria-label="badge"
              >
                <ShieldIcon sx={{ fontSize: 22 }} />
              </Box>
            </Box>
          </Grid>

          {/* Right: Text and bullets */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 800, mb: 2, lineHeight: 1.15 }}
            >
              <span style={{ color: "#0b2a66" }}>{titleTop}</span>{" "}
              <span style={{ color: "#1e88e5" }}>{titleBottom}</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: 3, maxWidth: 60 + "ch" }}
            >
              {subtitle}
            </Typography>

            <Box sx={{ mb: 3 }}>
              {bullets.map((b, idx) => (
                <Bullet key={idx} icon={b.icon} text={b.text} />
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              href={ctaHref}
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 999,
                px: 4,
                py: 1.6,
                bgcolor: "#0b2a66",
                "&:hover": {
                  bgcolor: "#0a2560",
                  boxShadow: "0 12px 28px rgba(12, 60, 138, .4)",
                },
              }}
            >
              {ctaText}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroTwoCol;
