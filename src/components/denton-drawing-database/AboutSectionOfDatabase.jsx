import React from "react";
import { Box, Card, CardMedia, Grid, Typography, Stack } from "@mui/material";

/**
 * AboutSectionOfDatabase
 * - Left: heading, two description paragraphs, and a 3-column stats row (500+, 98%, 10+)
 * - Right: rounded image card with subtle elevation
 * - Responsive two-column layout that stacks on small screens
 * - All-in-one file (no extra components)
 */

const bullets = [
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
];

const AboutSectionOfDatabase = () => {
  return (
    <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: "background.default" }}>
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        {/* Left column: text content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 800, mb: 2, lineHeight: 1.15 }}
          >
            About Our Company
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 2.5,
              fontSize: 16,
              lineHeight: 1.75,
              maxWidth: 560,
            }}
          >
            With over a decade of experience in digital innovation, we've helped
            hundreds of businesses transform their online presence and achieve
            their goals. Our team of experts combines creativity with technical
            excellence to deliver solutions that make a difference.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 3,
              fontSize: 16,
              lineHeight: 1.75,
              maxWidth: 560,
            }}
          >
            We believe in building long-term partnerships with our clients,
            providing ongoing support and strategic guidance to ensure continued
            success in the digital landscape.
          </Typography>

          {/* Stats row (three items) */}
          <Grid container spacing={4} sx={{ mt: 1 }}>
            {bullets.map((b, idx) => (
              <Grid item xs={12} sm={4} key={idx}>
                <Stack direction="column" spacing={0.5}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, color: "#1e2a5a" }}
                  >
                    {b.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    {b.label}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right column: image in rounded card */}
        <Grid item xs={12} md={6}>
          <Card
            elevation={6}
            sx={{
              width: "100%",
              maxWidth: 520,
              mx: "auto",
              borderRadius: 4,
              overflow: "hidden",
              background: "#fff",
              // optional to mimic screenshot padding around image
              p: 0,
            }}
          >
            <CardMedia
              component="img"
              src="/images/modern-corporate-office.jpg"
              alt="Office workspace"
              sx={{ height: 320, width: "100%", objectFit: "cover" }}
            />
          </Card>
        </Grid>
      </Grid>

      {/* Optional subtle bottom spacing to match screenshot flow */}
      <Box sx={{ height: 40 }} />
    </Box>
  );
};

export default AboutSectionOfDatabase;
