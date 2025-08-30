import React from "react";
import {
  Box,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
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
        background: "linear-gradient(180deg, #3067c7ff, #062d96ff)",
        color: "white",
        px: { xs: 4, md: 12 },
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Glow Effect */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(106,130,251,0.15)",
          filter: "blur(120px)",
        }}
      />

      {/* Main Footer Content */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "flex-start" }}
        spacing={8}
        position="relative"
        zIndex={1}
      >
        {/* Left Section */}
        <Box sx={{ maxWidth: 420 }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                background: "linear-gradient(135deg, #2574fb, #2575fc)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
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
            sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, mb: 3 }}
          >
            Leading technology solutions provider specializing in smart building
            automation, IoT integration, and enterprise security systems.
            Transforming businesses through innovative technology for over two
            decades.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            {[
              { icon: <LinkedIn />, bg: "#2574fb" },
              { icon: <Twitter />, bg: "#2574fb" },
              { icon: <Facebook />, bg: "#2574fb" },
              { icon: <Instagram />, bg: "#2574fb" },
              { icon: <Email />, bg: "#2574fb" },
            ].map((item, i) => (
              <IconButton
                key={i}
                sx={{
                  bgcolor: item.bg,
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {React.cloneElement(item.icon, { sx: { color: "#fff" } })}
              </IconButton>
            ))}
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
          <Stack spacing={1.5} sx={{ fontFamily: "'Montserrat', sans-serif" }}>
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
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.95rem",
                  transition: "0.3s",
                  "&:hover": { color: "#fff", pl: 1 },
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
              <Phone fontSize="small" sx={{ color: "#fff" }} />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Email fontSize="small" sx={{ color: "#fff" }} />
              <Typography variant="body2">info@densa.io</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOn fontSize="small" sx={{ color: "#fff" }} />
              <Typography variant="body2">
                123 Technology Drive <br /> Innovation District, CA 94000
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Divider */}
      <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.2)" }} />

      {/* Bottom Section */}
      <Box textAlign="center" position="relative" zIndex={1}>
        <Typography
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.7)", mb: 1 }}
        >
          © 2024 DENSA.io. All rights reserved. | Transforming businesses
          through smart technology.
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.9rem",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {[
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "Sitemap",
          ].map((item, i) => (
            <Link
              key={i}
              href="#"
              underline="none"
              sx={{
                color: "inherit",
                transition: "0.3s",
                "&:hover": { color: "#fff" },
              }}
            >
              {item}
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
