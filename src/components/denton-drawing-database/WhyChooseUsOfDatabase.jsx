import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Stack,
  Paper,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Grade"; // premium badge icon
import FlashOnIcon from "@mui/icons-material/FlashOn";
import GroupIcon from "@mui/icons-material/Group";
import SecurityIcon from "@mui/icons-material/Security";

const features = [
  {
    title: "Premium Quality",
    desc: "We deliver exceptional results with meticulous attention to detail.",
    Icon: StarIcon,
  },
  {
    title: "Fast Delivery",
    desc: "Quick turnaround times without compromising on quality.",
    Icon: FlashOnIcon,
  },
  {
    title: "Expert Team",
    desc: "Experienced professionals with proven track records.",
    Icon: GroupIcon,
  },
  {
    title: "Secure & Reliable",
    desc: "Enterprise-grade security and reliability you can trust.",
    Icon: SecurityIcon,
  },
];

const IconCircle = ({ Icon }) => (
  <Avatar
    sx={{
      bgcolor: "orange.500",
      width: 54,
      height: 54,
      mb: 1.5,
    }}
  >
    <Icon sx={{ color: "white" }} />
  </Avatar>
);

const WhyChooseUsOfDatabase = () => {
  return (
    <Box sx={{ bgcolor: "#0f2340" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontWeight: 800, letterSpacing: 0.2 }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}
          >
            We combine innovation, expertise, and dedication to deliver
            exceptional results that exceed expectations.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {features.map((f, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  bgcolor: "#0e2342",
                  color: "#fff",
                  height: "100%",
                }}
              >
                <IconCircle Icon={f.Icon} />
                <Typography variant="h6" sx={{ fontWeight: 700, mt: 1.5 }}>
                  {f.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.85)", mt: 1 }}
                >
                  {f.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUsOfDatabase;
