import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const contacts = [
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: "#8b5cf6" }} />,
    title: "Email",
    value: "support@densa.io",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40, color: "#8b5cf6" }} />,
    title: "Phone",
    value: "+1 (647) 895-4414",
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: 40, color: "#8b5cf6" }} />,
    title: "WhatsApp",
    value: "+1 (647) 895-4414",
  },
];

const UrgentHelp = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 3,
        backgroundColor: "#f5f3ff",
        textAlign: "center",
      }}
    >
      {/* Top Warning Icon */}
      <Box
        sx={{
          bgcolor: "rgba(139,92,246,0.1)",
          width: 70,
          height: 70,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 2,
        }}
      >
        <WarningAmberIcon sx={{ fontSize: 40, color: "#f43f5e" }} />
      </Box>

      {/* Heading */}
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        Need Urgent Help?
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mb: 5, maxWidth: 600, mx: "auto" }}
      >
        If your issue is critical, don't wait. Reach us instantly through our
        direct support channels.
      </Typography>

      {/* Contact Options */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
        {contacts.map((contact, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: "rgba(139,92,246,0.1)",
                  width: 70,
                  height: 70,
                  borderRadius: 3,
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                {contact.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {contact.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {contact.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* CTA Button */}
      <Button
        variant="contained"
        sx={{
          background: "#f5f5f5",
          color: "#111",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: 2,
          px: 4,
          py: 1.5,
          "&:hover": {
            background: "#e5e5e5",
          },
        }}
      >
        Talk to Our Support Team
      </Button>
    </Box>
  );
};

export default UrgentHelp;
