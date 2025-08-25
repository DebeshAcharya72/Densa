import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SecurityIcon from "@mui/icons-material/Security";

const SupportSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
        color: "#fff",
        px: 3,
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          bgcolor: "rgba(255,255,255,0.1)",
          p: 2,
          borderRadius: "50%",
          mb: 3,
        }}
      >
        <HeadsetMicIcon sx={{ fontSize: 40, color: "#fff" }} />
      </Box>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
        }}
      >
        We're Here to Help –{" "}
        <span style={{ opacity: 0.7 }}>Anytime, Anywhere!</span>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", mb: 4, opacity: 0.9 }}
      >
        At Densa, we understand that timely support is the backbone of great
        customer experience. Whether it's troubleshooting, product queries, or
        urgent help — our support team is always ready.
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          background: "#fff",
          color: "#6a11cb",
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
        Create a Support Ticket
      </Button>

      {/* Footer icons */}
      <Stack direction="row" spacing={4} sx={{ opacity: 0.9 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeIcon fontSize="small" />
          <Typography variant="body2">24/7 Support</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <SecurityIcon fontSize="small" />
          <Typography variant="body2">Secure & Private</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SupportSection;
