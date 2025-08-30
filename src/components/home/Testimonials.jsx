import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Avatar,
  Chip,
  Rating,
  IconButton,
} from "@mui/material";
import { ArrowBack, ArrowForward, FormatQuote } from "@mui/icons-material";

const testimonials = [
  {
    quote:
      "The IoT implementation and blockchain supply chain solution revolutionized our operations. Real-time tracking and automated workflows increased our efficiency by 60%.",
    rating: 5,
    projectType: "IoT & Blockchain Integration",
    result: "60% Efficiency Gain",
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Advanced Manufacturing Inc.",
    avatar: "", // replace with actual image
  },
  {
    quote:
      "Smart building automation gave us unprecedented control over energy management and space optimization. Huge cost savings achieved.",
    rating: 5,
    projectType: "Smart Building Automation",
    result: "35% Cost Savings",
    name: "Sophia Martinez",
    role: "Facilities Director",
    company: "Global Real Estate Co.",
    avatar: "",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[index];

  return (
    <Box sx={{ textAlign: "center", py: 8, px: 2, position: "relative" }}>
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 1,
          "& span": {
            background: "linear-gradient(90deg, #2563eb, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        }}
      >
        Client <span>Success Stories</span>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          maxWidth: "700px",
          mx: "auto",
          mb: 5,
        }}
      >
        Don’t just take our word for it. Here’s what industry leaders say about
        working with DENSA and the transformative results they’ve achieved.
      </Typography>

      {/* Testimonial Card */}
      <Card
        sx={{
          p: { xs: 3, md: 5 },
          maxWidth: "950px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Prev Arrow */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: -25,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "&:hover": { bgcolor: "#f3f4f6" },
          }}
        >
          <ArrowBack />
        </IconButton>

        {/* Left Section */}
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <FormatQuote sx={{ fontSize: 48, color: "#2563eb", mb: 2 }} />
          <Typography
            variant="h6"
            sx={{ mb: 2, fontStyle: "italic", lineHeight: 1.6 }}
          >
            "{testimonial.quote}"
          </Typography>

          {/* Stars */}
          <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />

          {/* Chips */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
            <Chip
              label={testimonial.projectType}
              sx={{
                bgcolor: "#eef2ff",
                color: "#3730a3",
                fontWeight: "bold",
                borderRadius: "8px",
                px: 1,
              }}
            />
            <Chip
              label={testimonial.result}
              sx={{
                bgcolor: "#ecfdf5",
                color: "#065f46",
                fontWeight: "bold",
                borderRadius: "8px",
                px: 1,
              }}
            />
          </Box>
        </Box>

        {/* Right Section */}
        <Box sx={{ textAlign: "center", ml: { md: 4 }, mt: { xs: 4, md: 0 } }}>
          <Avatar
            src={testimonial.avatar}
            sx={{ width: 90, height: 90, mx: "auto", mb: 2 }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {testimonial.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {testimonial.role}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {testimonial.company}
          </Typography>
        </Box>

        {/* Next Arrow */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: -25,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "&:hover": { bgcolor: "#f3f4f6" },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Card>

      {/* Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 1.5 }}>
        {testimonials.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: i === index ? 22 : 10,
              height: 10,
              borderRadius: "999px",
              bgcolor:
                i === index
                  ? "linear-gradient(90deg,#2563eb,#9333ea)"
                  : "#d1d5db",
              background:
                i === index
                  ? "linear-gradient(90deg,#2563eb,#9333ea)"
                  : "#d1d5db",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
