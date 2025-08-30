import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import PeopleIcon from "@mui/icons-material/People";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BoltIcon sx={{ fontSize: 40, color: "#f5b300" }} />,
    title: "Fast Response",
    desc: "Most tickets answered within 24 hours.",
  },
  {
    icon: <QueryStatsIcon sx={{ fontSize: 40, color: "#3b82f6" }} />,
    title: "Track in Real-Time",
    desc: "Stay updated on your request status.",
  },
  {
    icon: <TrackChangesIcon sx={{ fontSize: 40, color: "#22c55e" }} />,
    title: "Expert Guidance",
    desc: "Solutions from certified professionals.",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: "#8b5cf6" }} />,
    title: "Customer First",
    desc: "Priority handling for registered users.",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
};

const TicketBenefits = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        background: "linear-gradient(180deg, #f9f9ff 0%, #eef2ff 100%)",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 6 }}>
          Why Raise a Ticket With Us?
        </Typography>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <motion.div variants={cardVariants} whileHover={{ scale: 1.05 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    transition: "0.3s",
                    minHeight: "160px",
                    background: "#fff",
                    "&:hover": {
                      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "rgba(0,0,0,0.04)",
                      width: 72,
                      height: 72,
                      borderRadius: "20%",
                      mx: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 1, color: "#555" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {feature.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default TicketBenefits;
