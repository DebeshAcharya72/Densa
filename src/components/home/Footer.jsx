import React from "react";
import { Box, Typography, Link, Stack, IconButton } from "@mui/material";
import {
  LinkedIn,
  Twitter,
  Facebook,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #0a1f44, #102a72)",
        color: "white",
        px: { xs: 4, md: 12 },
        py: { xs: 6, md: 10 },
        position: "relative",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={6}
      >
        {/* Left Section */}
        <Box sx={{ maxWidth: 400 }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              D
            </Box>
            <Typography variant="h6" fontWeight="bold">
              DENSA.io
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.85)", mb: 3 }}
          >
            Leading technology solutions provider specializing in smart building
            automation, IoT integration, and enterprise security systems.
            Transforming businesses through innovative technology for over two
            decades.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton sx={{ bgcolor: "#0a66c2" }}>
              <LinkedIn sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton sx={{ bgcolor: "#1da1f2" }}>
              <Twitter sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton sx={{ bgcolor: "#1877f2" }}>
              <Facebook sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton sx={{ bgcolor: "#e1306c" }}>
              <Instagram sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton sx={{ bgcolor: "#34a853" }}>
              <Email sx={{ color: "#fff" }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Middle Section - Services */}
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 2, color: "#fff" }}
          >
            Services
          </Typography>
          <Stack spacing={1}>
            {[
              "Smart Building Automation",
              "PoE Lighting Solutions",
              "Security & Surveillance",
              "IoT Solutions",
              "Blockchain Supply Chain",
              "System Integration",
            ].map((service, i) => (
              <Link
                key={i}
                href="#"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  "&:hover": { color: "#fff" },
                }}
              >
                {service}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Right Section - Contact */}
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 2, color: "#fff" }}
          >
            Contact
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Phone fontSize="small" sx={{ color: "#00bcd4" }} />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Email fontSize="small" sx={{ color: "#4caf50" }} />
              <Typography variant="body2">info@densa.io</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOn fontSize="small" sx={{ color: "#f44336" }} />
              <Typography variant="body2">
                123 Technology Drive <br /> Innovation District, CA 94000
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Bottom Section */}
      <Box
        sx={{
          mt: 6,
          pt: 3,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
          © 2024 DENSA.io. All rights reserved. | Transforming businesses
          through smart technology.
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          mt={1}
          sx={{ color: "rgba(255,255,255,0.7)" }}
        >
          <Link href="#" underline="none" sx={{ color: "inherit" }}>
            Privacy Policy
          </Link>
          <Link href="#" underline="none" sx={{ color: "inherit" }}>
            Terms of Service
          </Link>
          <Link href="#" underline="none" sx={{ color: "inherit" }}>
            Cookie Policy
          </Link>
          <Link href="#" underline="none" sx={{ color: "inherit" }}>
            Sitemap
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
