import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";

// MUI icons
import MemoryIcon from "@mui/icons-material/Memory";
import WifiIcon from "@mui/icons-material/Wifi";
import SecurityIcon from "@mui/icons-material/Security";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import BoltIcon from "@mui/icons-material/Bolt";
import LanIcon from "@mui/icons-material/Lan";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const items = [
  {
    title: "IoT Processors",
    subtitle: "Advanced edge computing",
    icon: <MemoryIcon sx={{ fontSize: 22, color: "#fff" }} />,
    iconGrad: "linear-gradient(135deg,#3b82f6,#7c3aed)",
    cardGrad: "linear-gradient(180deg,#e8f0ff,#e9eefb)",
    shadow: "rgba(59,130,246,.35)",
  },
  {
    title: "Wireless Protocols",
    subtitle: "Multi-standard connectivity",
    icon: <WifiIcon sx={{ fontSize: 22, color: "#fff" }} />,
    iconGrad: "linear-gradient(135deg,#10b981,#22c55e)",
    cardGrad: "linear-gradient(180deg,#eafbf2,#e6f6ee)",
    shadow: "rgba(16,185,129,.35)",
  },
  {
    title: "Cybersecurity",
    subtitle: "Enterprise-grade protection",
    icon: <SecurityIcon sx={{ fontSize: 22, color: "#fff" }} />,
    iconGrad: "linear-gradient(135deg,#ef4444,#fb7185)",
    cardGrad: "linear-gradient(180deg,#feecec,#fff3f3)",
    shadow: "rgba(239,68,68,.35)",
  },
  {
    title: "Blockchain",
    subtitle: "Distributed ledger technology",
    icon: <CurrencyBitcoinIcon sx={{ fontSize: 22, color: "#fff" }} />,
    iconGrad: "linear-gradient(135deg,#8b5cf6,#a855f7)",
    cardGrad: "linear-gradient(180deg,#f2eaff,#f6f2ff)",
    shadow: "rgba(139,92,246,.35)",
  },
  {
    title: "Cloud Integration",
    subtitle: "Scalable infrastructure",
    icon: <CloudQueueIcon sx={{ fontSize: 22, color: "#fff" }} />,
    iconGrad: "linear-gradient(135deg,#06b6d4,#22d3ee)",
    cardGrad: "linear-gradient(180deg,#e6fbff,#e9faff)",
    shadow: "rgba(6,182,212,.35)",
  },
  {
    title: "PoE Technology",
    subtitle: "Power over Ethernet",
    icon: <BoltIcon sx={{ fontSize: 22, color: "#fff" }} />,
    iconGrad: "linear-gradient(135deg,#f59e0b,#f97316)",
    cardGrad: "linear-gradient(180deg,#fff3df,#fff6e9)",
    shadow: "rgba(245,158,11,.35)",
  },
  {
    title: "Network Infrastructure",
    subtitle: "High-performance networking",
    icon: <LanIcon sx={{ fontSize: 22, color: "#fff" }} />,
    iconGrad: "linear-gradient(135deg,#6366f1,#60a5fa)",
    cardGrad: "linear-gradient(180deg,#edf0ff,#e9f0ff)",
    shadow: "rgba(99,102,241,.35)",
  },
  {
    title: "AI Surveillance",
    subtitle: "Intelligent monitoring",
    icon: <CameraAltIcon sx={{ fontSize: 22, color: "#fff" }} />,
    iconGrad: "linear-gradient(135deg,#f43f5e,#fb7185)",
    cardGrad: "linear-gradient(180deg,#ffeaf1,#fff2f6)",
    shadow: "rgba(244,63,94,.35)",
  },
];

function TechCard({ title, subtitle, icon, iconGrad, cardGrad, shadow }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "18px",
        background: cardGrad,
        height: "100%",
        boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
        position: "relative",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 36px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* tilted badge */}
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: "14px",
          background: iconGrad,
          display: "grid",
          placeItems: "center",
          transform: "rotate(-15deg)",
          boxShadow: `0 8px 18px ${shadow}`,
          mb: 2.5,
        }}
      >
        <Box sx={{ transform: "rotate(15deg)" }}>{icon}</Box>
      </Box>

      <Typography sx={{ fontWeight: 700, mb: 0.5, color: "#0f172a" }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {subtitle}
      </Typography>
    </Paper>
  );
}

export default function TechnologyStack() {
  return (
    <Box
      sx={{
        position: "relative",
        py: 8,
        px: 2,
        overflow: "hidden",
        // subtle diamond pattern background (no images)
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(135deg, rgba(37,99,235,.08) 25%, transparent 25%),\
             linear-gradient(225deg, rgba(37,99,235,.08) 25%, transparent 25%),\
             linear-gradient(45deg, rgba(147,51,234,.06) 25%, transparent 25%),\
             linear-gradient(315deg, rgba(147,51,234,.06) 25%, transparent 25%)",
          backgroundPosition: "24px 0, 24px 0, 0 24px, 0 24px",
          backgroundSize: "72px 72px",
          pointerEvents: "none",
          opacity: 0.45,
        },
      }}
    >
      {/* Title */}
      <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
        Our{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(90deg,#2563eb,#9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Technology Stack
        </Box>
      </Typography>

      {/* Subtitle */}
      <Typography
        align="center"
        variant="body1"
        sx={{
          color: "text.secondary",
          maxWidth: 760,
          mx: "auto",
          mb: 6,
        }}
      >
        Powered by cutting-edge technologies and industry-leading platforms to
        deliver robust, scalable, and future-ready solutions.
      </Typography>

      {/* Cards */}
      <Grid container spacing={3} sx={{ maxWidth: 1200, mx: "auto" }}>
        {items.map((it, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <TechCard {...it} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
