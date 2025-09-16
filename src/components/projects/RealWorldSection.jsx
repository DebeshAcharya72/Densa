import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Typography,
  Chip,
  Button,
} from "@mui/material";

const sectionData = [
  {
    category: "Luxury Hospitality",
    title: "Resorts World Las Vegas Villa 66",
    description:
      "Complete smart automation and surveillance system for high-end resort villa",
    image: "/images/resortsworld1.jpg",
  },
  {
    category: "Commercial Real Estate",
    title: "Commercial Office Complex",
    description:
      "Energy-efficient building automation with advanced security integration",
    image: "/images/commercialoffice.jpg",
  },
  {
    category: "Restaurants & Hospitality",
    title: "Restaurant Chain Automation",
    description:
      "IoT-enabled kitchen management and customer experience systems",
    image: "/images/restaurantchain.jpg",
  },
  {
    category: "Educational Institutions",
    title: "University Campus Security",
    description: "Campus-wide surveillance and access control implementation",
    image: "/images/university.jpg",
  },
  {
    category: "Manufacturing & Retail",
    title: "Retail IoT Implementation",
    description: "Smart inventory management and customer analytics platform",
    image: "/images/retailiot.jpg",
  },
  {
    category: "Medical & Healthcare",
    title: "Healthcare Facility",
    description: "HIPAA-compliant security and monitoring systems",
    image: "/images/healthcare2.jpg",
  },
];

function CaseCard({ item }) {
  return (
    <Card
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.title}
          sx={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background:
              "linear-gradient(to top, rgba(5, 104, 253, 0.6), transparent)",
          }}
        />
        <Chip
          label={item.category}
          color="primary"
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            bgcolor: "primary.main",
            color: "white",
            fontWeight: 600,
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function RealWorldSection() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, bgcolor: "#f8f9ff" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 2,

          letterSpacing: "0.5px",
        }}
      >
        Real-World Implementations
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
      >
        See how we’ve transformed businesses across industries with our
        innovative technology solutions
      </Typography>

      <Grid container spacing={4}>
        {sectionData.map((item, idx) => (
          <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
            <CaseCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
