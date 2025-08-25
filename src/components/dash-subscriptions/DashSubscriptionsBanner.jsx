import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";

export default function DashSubscriptionsBanner() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(180deg, #2563eb 0%, #1e40af 100%)",
        color: "white",
        flexDirection: "column",
        px: 2,
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          DASH Customized License
        </Typography>

        {/* Subheading */}
        <Typography variant="h6" sx={{ mb: 4 }}>
          Flexible licensing for teams of all sizes
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: "12px",
            backgroundColor: "white",
            color: "#2563eb",
            textTransform: "none",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#f1f5f9",
            },
          }}
        >
          Start Free Trial →
        </Button>
      </Container>
    </Box>
  );
}
