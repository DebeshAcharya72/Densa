import React from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";

export default function AboutSection() {
  return (
    <Box sx={{ py: 8, px: 2, maxWidth: "1200px", mx: "auto" }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Gradient Card */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              height: 350,
              borderRadius: "20px",
              background: "linear-gradient(to bottom, #f5f5f5, #b4c0de)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <VisibilityIcon sx={{ color: "#3f51b5" }} />
            </IconButton>

            <IconButton
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <EmojiEventsIcon sx={{ color: "#2ecc71" }} />
            </IconButton>
          </Box>
        </Grid>

        {/* Right Content */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            About{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#6a11cb,#2575fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DENSA
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
          >
            For over two decades, DENSA has been at the forefront of smart
            technology innovation, transforming how businesses and organizations
            operate through intelligent automation, advanced security systems,
            and cutting-edge IoT solutions.
            <br />
            <br />
            Our expertise spans across smart building automation, PoE lighting
            systems, comprehensive security infrastructure, and
            blockchain-powered supply chain solutions. We don’t just implement
            technology — we create intelligent ecosystems that evolve with your
            needs.
          </Typography>

          {/* Feature Cards */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
                }}
              >
                <StarIcon sx={{ color: "#2962ff", mb: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  Mission
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  To revolutionize how businesses operate through intelligent
                  automation and cutting-edge technology solutions.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
                }}
              >
                <VisibilityIcon sx={{ color: "#2962ff", mb: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  Vision
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Creating a world where smart technology seamlessly integrates
                  with daily operations to enhance efficiency and security.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
                }}
              >
                <EmojiEventsIcon sx={{ color: "#2962ff", mb: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  Excellence
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Delivering premium solutions with uncompromising quality and
                  innovative approaches to complex challenges.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
                }}
              >
                <GroupsIcon sx={{ color: "#2962ff", mb: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  Partnership
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Building lasting relationships through trust, transparency,
                  and exceptional customer service and support.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
