import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  Grid,
  Divider,
} from "@mui/material";

// Icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function UpgradeCTA() {
  return (
    <Box
      sx={{
        position: "relative",
        py: 12,
        px: 2,
        textAlign: "center",
        color: "#fff",
        background: "linear-gradient(135deg,#2563eb,#9333ea)",
        overflow: "hidden",
      }}
    >
      {/* Background dots */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Box sx={{ position: "relative", maxWidth: 900, mx: "auto" }}>
        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            lineHeight: 1.3,
            color: "#fff",
          }}
        >
          Ready to Upgrade Your{" "}
          <Box
            component="span"
            sx={{
              color: "#facc15",
            }}
          >
            Smart Infrastructure?
          </Box>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 5,
            fontSize: "1rem",
            opacity: 0.9,
            color: "#fff",
          }}
        >
          Transform your business with cutting-edge smart technology solutions.
          Join hundreds of satisfied clients who have revolutionized their
          operations with DENSA.
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "#fff",
              color: "#2563eb",
              fontWeight: 600,
              borderRadius: "999px",
              px: 3,
              py: 1.2,
              textTransform: "none",
              "&:hover": { bgcolor: "#f3f4f6" },
            }}
          >
            Schedule Free Consultation
          </Button>

          <Button
            variant="outlined"
            startIcon={<PhoneIcon />}
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1.2,
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "transparent",
              borderColor: "#fff",
              color: "#fff",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
                borderColor: "#fff",
              },
            }}
          >
            Call Now: (555) 123-4567
          </Button>
        </Stack>

        {/* Contact Info Boxes */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[
            {
              icon: <PhoneIcon sx={{ fontSize: 32 }} />,
              title: "Call Us",
              text: "Speak with our experts",
              sub: "+1 (555) 123-4567",
            },
            {
              icon: <EmailIcon sx={{ fontSize: 32 }} />,
              title: "Email Us",
              text: "Get detailed information",
              sub: "info@densa.io",
            },
            {
              icon: <EventAvailableIcon sx={{ fontSize: 32 }} />,
              title: "Schedule Demo",
              text: "See our solutions in action",
              sub: "Book Online",
            },
          ].map((item, i) => (
            <Grid key={i} item xs={12} sm={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  bgcolor: "transparent",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  height: "100%",
                  transition: "all .3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ opacity: 0.85, fontSize: 14, color: "#fff" }}>
                  {item.text}
                </Typography>
                <Typography
                  sx={{ mt: 1, fontWeight: 600, fontSize: 14, color: "#fff" }}
                >
                  {item.sub}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Divider line */}
        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.3)",
            mb: 4,
          }}
        />

        {/* Footer badges */}
        <Stack
          direction="row"
          spacing={6}
          justifyContent="center"
          sx={{ opacity: 0.85, fontSize: 14 }}
        >
          <Typography sx={{ color: "#fff" }}>Fortune 500</Typography>
          <Typography sx={{ color: "#fff" }}>ISO Certified</Typography>
          <Typography sx={{ color: "#fff" }}>24/7 Support</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
