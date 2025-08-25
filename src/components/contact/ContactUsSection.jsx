import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ContactUsSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #4facfe, #6a82fb)",
        color: "white",
        textAlign: "center",
        py: 10,
      }}
    >
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Contact Us
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          opacity: 0.9,
        }}
      >
        We'd love to hear from you. Reach out anytime and let's start a
        conversation.
      </Typography>

      {/* Buttons */}
      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #4facfe, #6a82fb)",
            color: "#fff",
            fontWeight: "bold",
            px: 3,
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(90deg, #6a82fb, #4facfe)",
            },
          }}
        >
          Get a Free Quote →
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: "rgba(255,255,255,0.5)",
            color: "white",
            px: 3,
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": {
              borderColor: "white",
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          View Our Work
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUsSection;
