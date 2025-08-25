import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import GroupIcon from "@mui/icons-material/Group";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const features = [
  {
    icon: <BrushIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Branding",
    desc: "Colors, logos, fonts",
    bg: "linear-gradient(135deg, #ec4899, #8b5cf6)",
  },
  {
    icon: <TuneIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "UI Tweaks",
    desc: "Buttons, menus, layout",
    bg: "linear-gradient(135deg, #06b6d4, #3b82f6)",
  },
  {
    icon: <NotificationsActiveIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Notifications",
    desc: "Custom templates & triggers",
    bg: "linear-gradient(135deg, #f59e0b, #f97316)",
  },
  {
    icon: <GroupIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Access & Roles",
    desc: "Permissions & onboarding",
    bg: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    icon: <InsertDriveFileIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: "Data Export",
    desc: "Reports & formats",
    bg: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
];

export default function CustomizableFeatures() {
  return (
    <Box sx={{ textAlign: "center", py: 8, background: "#fff" }}>
      {/* Heading */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Customizable Features
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 600, mx: "auto", mb: 6 }}
      >
        Tailor DASH to match your organization's needs
      </Typography>

      {/* Feature Cards */}
      <Grid container spacing={3} justifyContent="center">
        {features.map((item, i) => (
          <Grid item xs={12} sm={6} md={2.4} key={i}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                  background: item.bg,
                }}
              >
                {item.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
