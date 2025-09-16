import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Fade } from "@mui/material";

const HomeBanner = () => {
  const slides = [
    {
      title: (
        <>
          Empowering Smart Spaces
          <br />
          <span style={{ opacity: 0.7 }}>with Innovative Technology</span>
        </>
      ),
      subtitle:
        "Transform your spaces with cutting-edge IoT solutions, PoE lighting systems, advanced security infrastructure, and blockchain-powered supply chain automation.",
      button: "Explore Solutions",
      background: "/images/densa-home-background.jpg",
    },
    {
      title: "Smart & Scalable Solutions",
      subtitle:
        "From lighting and energy to automation and AI-powered analytics — discover how our solutions enhance efficiency and sustainability.",
      button: "View Solutions",
      background: "/images/solutions-bg.jpg",
    },
    {
      title: "Projects & Products",
      subtitle:
        "Explore our successful projects and innovative products that are transforming industries and redefining smart spaces.",
      button: "See Projects",
      background: "/images/projects-bg.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto change slides every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {slides.map((slide, index) => (
        <Fade
          in={index === current}
          timeout={1000}
          key={index}
          mountOnEnter
          unmountOnExit
        >
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#fff",

              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              backgroundImage: `linear-gradient(
                rgba(11, 18, 117, 0.56), 
                rgba(1, 1, 59, 0.8)
              ), url(${slide.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "opacity 1s ease-in-out",
            }}
          >
            {/* Title */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: "#fff",
              }}
            >
              {slide.title}
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body1"
              sx={{ maxWidth: "600px", mb: 4, opacity: 0.9, color: "#fff" }}
            >
              {slide.subtitle}
            </Typography>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                background: "#ffffffde",
                color: "#2574fb",
                fontWeight: "bold",
                borderRadius: 2,
                textTransform: "none",
                px: 4,
                py: 1.5,
                mb: 4,
                "&:hover": {
                  background: "#f5f5f5",
                },
              }}
            >
              {slide.button}
            </Button>
          </Box>
        </Fade>
      ))}
    </Box>
  );
};

export default HomeBanner;
