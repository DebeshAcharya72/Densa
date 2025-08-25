import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const caseStudies = [
  {
    title: "Inka Games",
    subtitle: "Entertainment Complex - Lima, Peru",
    desc: "Complete PoE lighting automation system",
    image: "/images/inka.jpg",
  },
  {
    title: "Hudson Bar & Grill",
    subtitle: "Restaurant Chain - North America",
    desc: "Smart lighting and climate control",
    image: "/images/hudson.jpg",
  },
  {
    title: "Resorts World",
    subtitle: "Luxury Resort - Caribbean",
    desc: "Integrated automation infrastructure",
    image: "/images/resorts.jpg",
  },
  {
    title: "Tech Innovation Hub",
    subtitle: "Office Complex - Silicon Valley",
    desc: "Advanced PoE network solutions",
    image: "/images/tech.jpg",
  },
  {
    title: "Green Valley Mall",
    subtitle: "Shopping Center - Miami, FL",
    desc: "Energy-efficient lighting system",
    image: "/images/greenvalley.jpg",
  },
  {
    title: "Metropolitan Hospital",
    subtitle: "Healthcare Facility - New York",
    desc: "Critical infrastructure automation",
    image: "/images/hospital.jpg",
  },
];

const CaseStudiesGrid = () => {
  return (
    <Box
      sx={{
        // width: "100%",
        background: "linear-gradient(90deg, #0a1a3f, #123a8f)",
        py: 6,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Grid container spacing={3}>
        {caseStudies.map((study, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              sx={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={study.image}
                alt={study.title}
              />
              <CardContent
                sx={{ backgroundColor: "rgba(14,30,64,0.9)", color: "white" }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {study.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {study.subtitle}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                  {study.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CaseStudiesGrid;
