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

import { motion } from "framer-motion";

const features = [
  {
    icon: <SmartphoneIcon sx={{ fontSize: 40 }} />,
    title: "PoE for USB Type C",
    desc: "Perfect for iPad Pro, Surface Pro, and Galaxy Tab devices",
    bg: "/images/PoEforUSBTypeC.jpg",
  },
  {
    icon: <DisplaySettingsIcon sx={{ fontSize: 40 }} />,
    title: "Display Solutions",
    desc: "Power digital signage and interactive displays efficiently",
    bg: "/images/DisplaySolutions.jpg",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 40 }} />,
    title: "Mini PCs & NUCs",
    desc: "Intel NUC, Raspberry Pi, and other compact computers",
    bg: "/images/MiniPCs&NUCs.jpg",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 40 }} />,
    title: "Mobile Devices",
    desc: "Android tablets, phones, and portable devices",
    bg: "/images/MobileDevices.jpg",
  },
  {
    icon: <SensorsIcon sx={{ fontSize: 40 }} />,
    title: "IoT Devices",
    desc: "Smart sensors, cameras, and connected equipment",
    bg: "/images/IoTDevices.jpg",
  },
  {
    icon: <PointOfSaleIcon sx={{ fontSize: 40 }} />,
    title: "POS Systems",
    desc: "Point-of-sale terminals and payment processing units",
    bg: "/images/POSSystems.jpg",
  },
];

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const FeatureCard = () => {
  return (
    <Box
      sx={{ py: 10, background: "linear-gradient(180deg, #f4f7fb, #e9f1fa)" }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            mb: 2,
            background: "linear-gradient(90deg, #1976d2, #42a5f5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          We Support{" "}
          <span style={{ color: "#1976d2" }}>
            Apple iPad, Microsoft Surface, Samsung Galaxy, Intel NUC, Raspberry
            Pi
          </span>{" "}
          and more
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{ maxWidth: "800px", mx: "auto", mb: 8 }}
        >
          Our versatile PoE to USB-C solutions work with a wide range of
          devices, making deployment simple and cost-effective across your
          infrastructure.
        </Typography>

        {/* Feature Cards */}
        <Grid container spacing={4}>
          {features.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  borderRadius: "20px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Card
                  sx={{
                    textAlign: "center",
                    borderRadius: "20px",
                    color: "#fff",
                    // height: "100%",
                    height: 220,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Background Image */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${item.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      zIndex: 0,
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom right, #2573fb96, rgba(6, 20, 66, 0.45))",
                      transition: "0.3s",
                      zIndex: 1,
                      "&:hover": {
                        background:
                          "linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.35))",
                      },
                    }}
                  />

                  {/* Content */}
                  <CardContent sx={{ position: "relative", zIndex: 2, p: 4 }}>
                    <Box
                      sx={{
                        mb: 3,
                        width: 70,
                        height: 70,
                        mx: "auto",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(6px)",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureCard;
