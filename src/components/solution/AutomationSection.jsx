import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";

import CalculateIcon from "@mui/icons-material/Calculate";

const AutomationSection = () => {
  return (
    <Box sx={{ bgcolor: "#eeeef7", py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Fully Connected Automation & Intelligence
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ mb: 3, color: "rgba(0,0,0,0.65)" }}
            >
              PoE Automation is Far More than Just Lighting
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 2, color: "rgba(0,0,0,0.8)" }}
            >
              Transform your building into an intelligent ecosystem where
              lighting, HVAC, security, and IoT devices work seamlessly
              together. Our integrated platform delivers unprecedented control
              and efficiency through a single network infrastructure.
            </Typography>

            <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.8)" }}>
              Experience the future of building automation with real-time
              monitoring, predictive maintenance, and adaptive controls that
              respond to occupancy, daylight, and environmental conditions.
            </Typography>
          </Grid>

          {/* Right Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                p: 3,
                borderRadius: "16px",
                boxShadow: "0px 6px 24px rgba(0,0,0,0.1)",
                textAlign: "center",
                background: "#ffffff63",
              }}
            >
              <CardContent>
                <CalculateIcon sx={{ fontSize: 40, color: "#1a56db", mb: 2 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1, color: "#58585eff" }}
                >
                  Ready to Get Started?
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 3, color: "rgba(0,0,0,0.7)" }}
                >
                  Get a personalized estimate for your PoE lighting and
                  automation project.
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#1a56db",
                    fontWeight: 600,
                    py: 1.2,
                    borderRadius: "26px",
                    "&:hover": { bgcolor: "#1541a1" },
                  }}
                >
                  Get an Estimate
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AutomationSection;
