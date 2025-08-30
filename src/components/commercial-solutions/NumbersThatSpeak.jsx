import React from "react";
import { Box, Grid, Typography, Avatar, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const stats = [
  { icon: <TrackChangesIcon />, value: "1,000+", label: "Projects Completed" },
  { icon: <AccessTimeIcon />, value: "99.9%", label: "Uptime Guarantee" },
  { icon: <PeopleIcon />, value: "24/7", label: "Customer Support" },
  { icon: <EmojiEventsIcon />, value: "15+", label: "Industry Awards" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const NumbersThatSpeak = () => {
  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 3, md: 10 },
        textAlign: "center",
        bgcolor: "#eeeef7",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Numbers That Speak
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 8 }}>
          Our achievements reflect our commitment to excellence and customer
          satisfaction.
        </Typography>
      </motion.div>

      <Grid container spacing={6} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 15px 35px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "primary.main",
                    width: 60,
                    height: 60,
                    mb: 2,
                    background: "linear-gradient(135deg, #6a5af9, #8e8ef7)",
                  }}
                >
                  {stat.icon}
                </Avatar>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, mb: 1, color: "#6a5af9" }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {stat.label}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NumbersThatSpeak;
