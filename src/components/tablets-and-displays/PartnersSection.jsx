import React from "react";
import { Box, Container, Typography } from "@mui/material";

const partners = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },

  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },

  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
  },
];

const PartnersSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#eeeef7",
        py: { xs: 6, md: 10 },
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container>
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          <Box component="span">Top Designers </Box>
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

        {/* Sliding Logos */}
        <Box
          sx={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
            width: "100%",
          }}
        >
          {/* Infinite sliding effect */}
          <Box
            sx={{
              display: "flex",
              animation: "slide 25s linear infinite",
              "@keyframes slide": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
          >
            {/* Duplicate logos for smooth infinite loop */}
            {[...partners, ...partners].map((partner, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "120px", sm: "150px", md: "180px" },
                  mx: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={partner.logo}
                  alt={partner.name}
                  sx={{
                    padding: 8,
                    maxHeight: "50px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      filter: "grayscale(0%)",
                      transform: "scale(1.08)", // 👈 scale logo itself
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PartnersSection;
