import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import HubIcon from "@mui/icons-material/Hub";

const OneRowTwoColumnSection = () => {
  return (
    <Box sx={{ bgcolor: "#f8fbff", py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left: Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/images/device.png" // <-- Replace with your image path
              alt="Lighting Controller"
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
              }}
            />
          </Grid>

          {/* Right: Text + Features */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip
              label="Intelligent Control System"
              sx={{
                bgcolor: "#e8f0ff",
                color: "#1a56db",
                fontWeight: 600,
                borderRadius: "20px",
                px: 2,
                py: 0.5,
                mb: 2,
              }}
            />

            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 2, color: "#0d1b2a" }}
            >
              Denton DBI: Next Generation PoE <br /> Lighting Controller
            </Typography>

            {/* Blue underline */}
            <Box
              sx={{
                width: "50px",
                height: "3px",
                bgcolor: "#1a56db",
                mb: 3,
              }}
            />

            <Typography
              variant="body1"
              sx={{
                mb: 5,
                color: "rgba(0,0,0,0.7)",
                maxWidth: "500px",
              }}
            >
              Experience unparalleled control with our state-of-the-art Digital
              Building Intelligence system.
            </Typography>

            {/* Feature Cards */}
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    p: 2,
                    borderRadius: "16px",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent>
                    <MemoryIcon
                      sx={{ fontSize: 36, color: "#1a56db", mb: 1 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 1, color: "#0d1b2a" }}
                    >
                      Smart Processing
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      Advanced algorithms for optimal performance
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    p: 2,
                    borderRadius: "16px",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent>
                    <HubIcon sx={{ fontSize: 36, color: "#1a56db", mb: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 1, color: "#0d1b2a" }}
                    >
                      Seamless Integration
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      Connect with existing building systems
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OneRowTwoColumnSection;
