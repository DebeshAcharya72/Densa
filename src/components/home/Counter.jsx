import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

// MUI icons
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const stats = [
  {
    value: "100+",
    label: "Projects Completed",
    icon: <WorkOutlineIcon sx={{ fontSize: 30, color: "#2575fc" }} />,
  },
  {
    value: "99.9%",
    label: "System Uptime",
    icon: <CloudDoneIcon sx={{ fontSize: 30, color: "#6a11cb" }} />,
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: <HeadsetMicIcon sx={{ fontSize: 30, color: "#ff9800" }} />,
  },
  {
    value: "20+",
    label: "Years Experience",
    icon: <AccessTimeIcon sx={{ fontSize: 30, color: "#4caf50" }} />,
  },
  {
    value: "35%+",
    label: "Energy Project Savings",
    icon: <EnergySavingsLeafIcon sx={{ fontSize: 30, color: "#00bcd4" }} />,
  },
  {
    value: "AI",
    label: "Expert Support for Productivity",
    icon: <SmartToyIcon sx={{ fontSize: 30, color: "#9c27b0" }} />,
  },
];

// Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Counter() {
  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        background: "#eeeef7ff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ width: "100%" }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {stats.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              // sx={{ width: 250 }}
            >
              <motion.div variants={cardVariants}>
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: "16px",
                    textAlign: "center",
                    py: 2,
                    px: 2,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    background: "linear-gradient(135deg, #f1f1f3ff, #d9d8daff)",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-5px) scale(1.02)" },
                  }}
                >
                  {/* Icon */}
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>

                  {/* Value */}
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Montserrat', sans-serif",
                      background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 1,
                    }}
                  >
                    {item.value}
                  </Typography>

                  {/* Label */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
