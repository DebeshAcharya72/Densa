import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Email",
    value: "support@densa.io",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Phone",
    value: "+1 (647) 895-4414",
    gradient: "linear-gradient(135deg, #ec4899, #d946ef)",
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "WhatsApp",
    value: "+1 (647) 895-4414",
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
  },
];

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
};

const UrgentHelp = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        background: "linear-gradient(180deg, #faf5ff 0%, #f3e8ff 100%)",
        textAlign: "center",
      }}
    >
      {/* Top Warning Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <Box
          sx={{
            bgcolor: "rgba(244,63,94,0.1)",
            width: 80,
            height: 80,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 3,
            boxShadow: "0 0 20px rgba(244,63,94,0.3)",
          }}
        >
          <WarningAmberIcon sx={{ fontSize: 45, color: "#f43f5e" }} />
        </Box>
      </motion.div>

      {/* Heading */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Need Urgent Help?
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", mb: 6, maxWidth: 600, mx: "auto" }}
      >
        If your issue is critical, don’t wait. Reach us instantly through our
        direct support channels.
      </Typography>

      {/* Contact Options */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
          {contacts.map((contact, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    background: "#fff",
                    transition: "0.3s",
                    height: "100%",
                    "&:hover": {
                      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      background: contact.gradient,
                      width: 70,
                      height: 70,
                      borderRadius: "16px",
                      mx: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
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
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* CTA Button */}
      <motion.div whileHover={{ scale: 1.08 }}>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: 3,
            px: 5,
            py: 1.5,
            boxShadow: "0 8px 20px rgba(139,92,246,0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              boxShadow: "0 10px 25px rgba(124,58,237,0.4)",
            },
          }}
        >
          Talk to Our Support Team
        </Button>
      </motion.div>
    </Box>
  );
};

export default UrgentHelp;
