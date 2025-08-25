import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const products = [
  {
    title: "PoE+ USB-C Converter",
    desc: "45W power delivery with data passthrough for tablets and displays",
    features: ["45W Power", "Data Sync", "Universal Compatibility"],
    price: "$89",
  },
  {
    title: "PoE++ USB-C Hub",
    desc: "90W high-power solution for demanding devices and multi-port needs",
    features: ["90W Power", "Multiple Ports", "Industrial Grade"],
    price: "$149",
  },
  {
    title: "PoE Mini Converter",
    desc: "Compact 25W solution perfect for small devices and tight spaces",
    features: ["25W Power", "Compact Design", "Easy Install"],
    price: "$59",
  },
  {
    title: "PoE Splitter Kit",
    desc: "Complete solution with mounting hardware and cables included",
    features: ["Complete Kit", "Mount Hardware", "All Cables"],
    price: "$199",
  },
];

export default function ProductShowcase() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, textAlign: "center" }}>
      {/* Section Heading */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Find Your{" "}
        <Box component="span" sx={{ color: "#00aaff" }}>
          Solution
        </Box>
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
        Choose from our range of professional-grade PoE to USB-C converters,
        designed for every use case and power requirement.
      </Typography>

      {/* Product Cards */}
      <Grid container spacing={4} justifyContent="center">
        {products.map((product, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                },
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 1, color: "#0c1c5c" }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {product.desc}
                </Typography>

                <List dense disablePadding>
                  {product.features.map((feature, i) => (
                    <ListItem key={i} sx={{ py: 0 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckCircleIcon
                          fontSize="small"
                          sx={{ color: "#00aaff" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mt: 3, color: "#00aaff" }}
                >
                  {product.price}
                </Typography>
              </CardContent>

              <Box sx={{ p: 2, pt: 0 }}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: "bold",
                    background: "linear-gradient(90deg,#00aaff,#0077ff)",
                    "&:hover": {
                      background: "linear-gradient(90deg,#0077ff,#005fcc)",
                    },
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
