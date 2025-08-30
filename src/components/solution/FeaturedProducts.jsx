import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";

const products = [
  {
    title: "Connected Lighting Gateway",
    price: "$299.99",
    image: "/images/ConnectedLightingGateway.jpg",
  },
  {
    title: "Managed LED Kits",
    price: "$299.99",
    image: "/images/ManagedLEDKits.jpg",
  },
  {
    title: "Relay Module",
    price: "$299.99",
    image: "/images/RelayModule.jpg",
  },
  {
    title: "Demo Kit",
    price: "$299.99",
    image: "/images/DemoKit.jpg",
  },
  {
    title: "Smart Sensors",
    price: "$299.99",
    image: "/images/SmartSensors.jpg",
  },
  {
    title: "Control Panel",
    price: "$299.99",
    image: "/images/ControlPanel.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.2, // stagger by index
    },
  }),
};

export default function FeaturedProducts() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, textAlign: "center" }}>
      {/* Section Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 1,
          background: "linear-gradient(90deg, #2320e9ff, #294c99ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Featured Products
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={5}>
        Professional-grade PoE lighting and automation solutions
      </Typography>

      {/* Product Grid */}
      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                sx={{
                  borderRadius: "16px",
                  background:
                    "linear-gradient(180deg, #f8faff 0%, #e9efff 100%)", // 🔹 Card background color changed
                  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {product.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#1976d2", fontWeight: "bold", mt: 1 }}
                  >
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
