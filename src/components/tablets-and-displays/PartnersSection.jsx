import React from "react";
import { Box, Container, Typography, Grid, Link, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const partners = [
  "Microsoft",
  "Apple",
  "Samsung",
  "Intel",
  "Google",
  "Adobe",
  "Cisco",
  "VMware",
];

const PartnersSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f9fafc",
        py: { xs: 6, md: 10 },
        textAlign: "center",
      }}
    >
      <Container>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          <Box component="span" sx={{ color: "#0c0c3d" }}>
            Top Designers{" "}
          </Box>
          <Box
            component="span"
            sx={{
              background: "linear-gradient(to right, #007bff, #00c6ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Powered over Ethernet
          </Box>
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: 6, maxWidth: "600px", mx: "auto" }}
        >
          Trusted by industry leaders worldwide for their critical
          infrastructure needs
        </Typography>

        {/* Partners Grid */}
        <Grid container spacing={4} justifyContent="center">
          {partners.map((partner, index) => (
            <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#4b4f65",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#007bff",
                    transform: "scale(1.08)",
                  },
                }}
              >
                {partner}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* CTA Link */}
        <Stack direction="row" justifyContent="center" mt={6}>
          <Link
            href="#"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: 600,
              color: "#007bff",
              fontSize: "1rem",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            See Our Partners <ArrowForwardIcon sx={{ ml: 0.5, fontSize: 20 }} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default PartnersSection;
