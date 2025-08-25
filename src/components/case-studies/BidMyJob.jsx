import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const blogPosts = [
  {
    title: "Making the Decision to Upgrade to PoE Connected Automation",
    image: "/images/datacenter.jpg",
  },
  {
    title: "Future-Proofing Your Infrastructure with Smart Automation",
    image: "/images/robot.jpg",
  },
];

const BidMyJob = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #0a1a3f, #123a8f)",
        py: 6,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* Top Section */}
      <Grid container spacing={4} alignItems="center">
        {/* Left Icon Box */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "12px",
              p: 6,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PeopleOutlineIcon sx={{ fontSize: 100, color: "#4da6ff" }} />
          </Box>
        </Grid>

        {/* Right Text & Button */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
            Bid My Job
          </Typography>
          <Typography variant="body1" color="rgba(255,255,255,0.8)" mb={3}>
            Click here for your quote and let our experts design the perfect
            automation solution for your project.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              textTransform: "none",
              background: "linear-gradient(90deg, #00c6ff, #0072ff)",
            }}
          >
            GET AN ESTIMATE →
          </Button>
        </Grid>
      </Grid>

      {/* Blog Section */}
      <Grid container spacing={3} mt={6}>
        {blogPosts.map((post, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Card
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                background: "transparent",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={post.image}
                alt={post.title}
              />
              <CardContent
                sx={{
                  // position: "absolute",
                  bottom: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                  width: "100%",
                  color: "white",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {post.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BidMyJob;
