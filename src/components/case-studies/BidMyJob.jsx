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
import { motion } from "framer-motion";

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
        background: "#eeeef7",
        py: 6,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* Top Section */}
      <Grid container spacing={4} alignItems="center">
        {/* Left Icon Box */}
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box
              sx={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                p: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backdropFilter: "blur(6px)",
              }}
            >
              <PeopleOutlineIcon sx={{ fontSize: 100, color: "#4da6ff" }} />
            </Box>
          </motion.div>
        </Grid>

        {/* Right Text & Button */}
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              // color="white"
              gutterBottom
            >
              Bid My Job
            </Typography>
            <Typography
              variant="body1"
              // color="rgba(255,255,255,0.8)"
              mb={3}
              sx={{ maxWidth: "480px" }}
            >
              Click here for your quote and let our experts design the perfect
              automation solution for your project.
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  textTransform: "none",
                  background: "linear-gradient(90deg, #00c6ff, #0072ff)",
                  boxShadow: "0px 0px 15px rgba(0, 114, 255, 0.5)",
                }}
              >
                GET AN ESTIMATE →
              </Button>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>

      {/* Blog Section */}
      {/* Blog Section */}
      <Grid container spacing={3} mt={6}>
        {blogPosts.map((post, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "transparent",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.35)",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={post.image}
                  alt={post.title}
                />

                {/* Overlay text at bottom */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    color: "white",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {post.title}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BidMyJob;
