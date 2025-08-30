import React from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import { motion } from "framer-motion";

// Feature cards data
const features = [
  {
    title: "Mission",
    desc: "To revolutionize how businesses operate through intelligent automation and cutting-edge technology solutions.",
    icon: <StarIcon sx={{ color: "#fff", mb: 1 }} />,
    gradient: "linear-gradient(135deg, #a160e7ff, #76a2ecff)",
  },
  {
    title: "Vision",
    desc: "Creating a world where smart technology seamlessly integrates with daily operations to enhance efficiency and security.",
    icon: <VisibilityIcon sx={{ color: "#fff", mb: 1 }} />,
    gradient: "linear-gradient(135deg, #f77a61ff, #f8549eff)",
  },
  {
    title: "Excellence",
    desc: "Delivering premium solutions with uncompromising quality and innovative approaches to complex challenges.",
    icon: <EmojiEventsIcon sx={{ color: "#fff", mb: 1 }} />,
    gradient: "linear-gradient(135deg, #46d6fdff, #59a1faff)",
  },
  {
    title: "Partnership",
    desc: "Building lasting relationships through trust, transparency, and exceptional customer service and support.",
    icon: <GroupsIcon sx={{ color: "#fff", mb: 1 }} />,
    gradient: "linear-gradient(135deg, #f7ae54ff, #fcda45ff)",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function AboutSection() {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        mx: "auto",
        background: "#eeeef7ff",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Left Gradient Card */}
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Box
              sx={{
                height: 350,
                borderRadius: "20px",
                background: "linear-gradient(to bottom, #f5f5f5, #b4c0de)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src="/images/densa-home-about-bg.jpg"
                alt="About DENSA"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  transition: "transform 0.5s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <VisibilityIcon sx={{ color: "#3f51b5" }} />
              </IconButton>
              <IconButton
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  background: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <EmojiEventsIcon sx={{ color: "#2ecc71" }} />
              </IconButton>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Content */}
        <Grid size={{ xs: 12, md: 7 }}>
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                letterSpacing: "5px",
                // color: "#777474ff",
              }}
            >
              About{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg,#6a11cb,#2575fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DENSA
              </Box>
            </Typography>
          </motion.div>

          {/* Paragraph */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
            >
              For over two decades, DENSA has been at the forefront of smart
              technology innovation, transforming how businesses and
              organizations operate through intelligent automation, advanced
              security systems, and cutting-edge IoT solutions.
              <br />
              <br />
              Our expertise spans across smart building automation, PoE lighting
              systems, comprehensive security infrastructure, and
              blockchain-powered supply chain solutions. We don’t just implement
              technology — we create intelligent ecosystems that evolve with
              your needs.
            </Typography>
          </motion.div>

          {/* Feature Cards */}
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      borderRadius: "16px",
                      color: "#fff",
                      background: feature.gradient,
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.23)",
                    }}
                  >
                    {feature.icon}
                    <Typography variant="subtitle1" fontWeight="bold">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="inherit">
                      {feature.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
