import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const products = [
  {
    title: "Connected Lighting Gateway",
    price: "$299.99",
    image: "/images/gateway.jpg",
  },
  {
    title: "Managed LED Kits",
    price: "$299.99",
    image: "/images/led-kits.jpg",
  },
  {
    title: "Relay Module",
    price: "$299.99",
    image: "/images/relay-module.jpg",
  },
  {
    title: "Demo Kit",
    price: "$299.99",
    image: "/images/demo-kit.jpg",
  },
  {
    title: "Smart Sensors",
    price: "$299.99",
    image: "/images/sensors.jpg",
  },
  {
    title: "Control Panel",
    price: "$299.99",
    image: "/images/control-panel.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, textAlign: "center" }}>
      {/* Section Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 1,
          background: "linear-gradient(90deg, #4a1267, #198754)",
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
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
