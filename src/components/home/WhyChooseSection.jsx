import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SecurityIcon from "@mui/icons-material/Security";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const stats = [
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: "#6366f1" }} />,
    value: "20+",
    label: "Years Experience",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#ec4899" }} />,
    value: "1000+",
    label: "Projects Completed",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: "#22c55e" }} />,
    value: "50+",
    label: "Expert Team Members",
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: "#06b6d4" }} />,
    value: "99.9%",
    label: "System Uptime",
  },
];

const features = [
  {
    icon: <HeadsetMicIcon sx={{ fontSize: 32, color: "#6366f1" }} />,
    title: "24/7 Support",
    desc: "Round-the-clock monitoring and support to ensure your systems operate at peak performance.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 32, color: "#ec4899" }} />,
    title: "Enterprise Security",
    desc: "Military-grade security protocols and compliance with industry standards and regulations.",
  },
  {
    icon: <AutoGraphIcon sx={{ fontSize: 32, color: "#22c55e" }} />,
    title: "Scalable Solutions",
    desc: "Future-ready technology that grows with your business and adapts to changing requirements.",
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 32, color: "#06b6d4" }} />,
    title: "Proven Excellence",
    desc: "Industry recognition and certifications demonstrating our commitment to quality and innovation.",
  },
];

export default function WhyChooseSection() {
  return (
    <Box sx={{ py: 8, px: 2, maxWidth: "1200px", mx: "auto" }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 1 }}
      >
        Why Choose{" "}
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

      {/* Subtitle */}
      <Typography
        align="center"
        variant="body1"
        sx={{ color: "text.secondary", mb: 6, maxWidth: "800px", mx: "auto" }}
      >
        We combine technical expertise with business acumen to deliver solutions
        that not only meet your current needs but position you for future
        success.
      </Typography>

      {/* Stats Section */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
        {stats.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": { transform: "translateY(-6px)" },
              }}
            >
              <Box sx={{ mb: 2 }}>{stat.icon}</Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 1, color: "#111827" }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Features Section */}
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
            <Paper
              sx={{
                p: 4,
                borderRadius: "16px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                transition: "0.3s",
                "&:hover": { transform: "translateY(-6px)" },
              }}
            >
              {feature.icon}
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.desc}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
