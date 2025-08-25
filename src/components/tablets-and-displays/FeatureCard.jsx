import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

import SmartphoneIcon from "@mui/icons-material/Smartphone";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import MemoryIcon from "@mui/icons-material/Memory";
import DevicesIcon from "@mui/icons-material/Devices";
import SensorsIcon from "@mui/icons-material/Sensors";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

const features = [
  {
    icon: <SmartphoneIcon sx={{ fontSize: 40 }} />,
    title: "PoE for USB Type C",
    desc: "Perfect for iPad Pro, Surface Pro, and Galaxy Tab devices",
  },
  {
    icon: <DisplaySettingsIcon sx={{ fontSize: 40 }} />,
    title: "Display Solutions",
    desc: "Power digital signage and interactive displays efficiently",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 40 }} />,
    title: "Mini PCs & NUCs",
    desc: "Intel NUC, Raspberry Pi, and other compact computers",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 40 }} />,
    title: "Mobile Devices",
    desc: "Android tablets, phones, and portable devices",
  },
  {
    icon: <SensorsIcon sx={{ fontSize: 40 }} />,
    title: "IoT Devices",
    desc: "Smart sensors, cameras, and connected equipment",
  },
  {
    icon: <PointOfSaleIcon sx={{ fontSize: 40 }} />,
    title: "POS Systems",
    desc: "Point-of-sale terminals and payment processing units",
  },
];

const FeatureCard = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9fbff" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          We Support{" "}
          <span style={{ color: "#1976d2" }}>
            Apple iPad, Microsoft Surface, Samsung Galaxy, Intel NUC, Raspberry
            Pi
          </span>
          , and more
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{ maxWidth: "800px", mx: "auto", mb: 6 }}
        >
          Our versatile PoE to USB-C solutions work with a wide range of
          devices, making deployment simple and cost-effective across your
          entire infrastructure.
        </Typography>

        {/* Feature Cards */}
        <Grid container spacing={4}>
          {features.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                  color: "#fff",
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureCard;
