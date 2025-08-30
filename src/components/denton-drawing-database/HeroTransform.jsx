import React from "react";
import { Box, Button, Typography, Container, Stack } from "@mui/material";

const HeroTransform = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url("/images/futuristic-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0, 51, 153, 0.8) 0%, rgba(0, 51, 153, 0) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 2, maxWidth: "lg" }}>
        <Box sx={{ maxWidth: "700px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#fff",
            }}
          >
            Transform Your <br /> Digital Vision
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 3,
              mb: 4,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 400,
              maxWidth: "600px",
            }}
          >
            We create exceptional digital experiences that drive growth, engage
            audiences, and deliver measurable results for your business.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#1a56db",
                borderRadius: 10,
                fontWeight: 600,
                px: 3,
                py: 1.5,
                "&:hover": { bgcolor: "#1541a1" },
              }}
            >
              Get Started Today
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroTransform;
