import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SecurityIcon from "@mui/icons-material/Security";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const AvailableFeatures = () => {
  const left = [
    {
      icon: <AccessTimeIcon fontSize="inherit" />,
      label: "Advanced scheduling",
    },
    {
      icon: <SecurityIcon fontSize="inherit" />,
      label: "Role-based access control",
    },
    {
      icon: <ColorLensIcon fontSize="inherit" />,
      label: "Branding & customization",
    },
  ];

  const right = [
    {
      icon: <LocationOnIcon fontSize="inherit" />,
      label: "Room & resource management",
    },
    {
      icon: <BarChartIcon fontSize="inherit" />,
      label: "Data analytics & dashboards",
    },
    {
      icon: <SupportAgentIcon fontSize="inherit" />,
      label: "Priority support (Enterprise)",
    },
  ];

  // Sub-component: single feature row (inlined)
  const FeatureRow = ({ icon, label }) => (
    <ListItem sx={{ px: 0, py: 1.1 }} disableGutters>
      <ListItemAvatar sx={{ minWidth: 0, mr: 2 }}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "rgba(33, 150, 243, 0.12)",
            color: "#1e88e5",
          }}
        >
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {label}
          </Typography>
        }
      />
      <IconButton aria-label="available" sx={{ color: "#22c55e" }}>
        <CheckCircleIcon fontSize="small" />
      </IconButton>
    </ListItem>
  );

  return (
    <Box sx={{ py: 6, bgcolor: "background.default" }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 1 }}>
        Available Features
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ color: "text.secondary", mb: 4 }}
      >
        Everything you need to manage your team efficiently
      </Typography>

      <Card
        elevation={3}
        sx={{
          mx: "auto",
          width: { xs: "92%", md: 860 },
          borderRadius: 2,
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.92) 100%), #fff",
          overflow: "hidden",
        }}
      >
        <CardContent sx={{ pt: 3, pb: 3 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <List disablePadding>
                {left.map((f, idx) => (
                  <FeatureRow key={idx} icon={f.icon} label={f.label} />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List disablePadding>
                {right.map((f, idx) => (
                  <FeatureRow key={idx} icon={f.icon} label={f.label} />
                ))}
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AvailableFeatures;
