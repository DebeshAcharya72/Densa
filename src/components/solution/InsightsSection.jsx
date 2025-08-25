import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Link,
  Grid,
} from "@mui/material";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const InsightsSection = () => {
  const insights = [
    {
      icon: <LightbulbIcon sx={{ fontSize: 40, color: "#fff", mb: 2 }} />,
      title: "How to Sell PoE Lighting",
      desc: "Discover proven strategies and insights from our CEO on successfully positioning Power over Ethernet lighting solutions in today’s competitive market.",
      link: "Learn More",
    },
    {
      icon: <ShowChartIcon sx={{ fontSize: 40, color: "#fff", mb: 2 }} />,
      title: "Top 3 Strategies",
      desc: "Our CTO shares the three most effective technical approaches for implementing scalable PoE lighting systems that deliver maximum ROI and performance.",
      link: "Learn More",
    },
    {
      icon: <WarningAmberIcon sx={{ fontSize: 40, color: "#fff", mb: 2 }} />,
      title: "Top 2 Pitfalls",
      desc: "Learn about the most common mistakes in PoE lighting deployments and how to avoid costly errors that can derail your smart building projects.",
      link: "Learn More",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f8fbff", py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {insights.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(180deg, #1a56db 0%, #0d47a1 100%)",
                  color: "#fff",
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  {item.icon}
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 3, color: "rgba(255,255,255,0.85)" }}
                  >
                    {item.desc}
                  </Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      fontWeight: 600,
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {item.link} &nbsp; →
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InsightsSection;
