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
import { motion } from "framer-motion";

const OneRowTwoColumnSection = () => {
  return (
    <Box
      sx={{
        background: "#eeeef7",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left: Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="/images/Dentondevice.jpg"
                alt="Lighting Controller"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
                }}
              />
            </motion.div>
          </Grid>

          {/* Right: Text + Features */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Chip
                label="Intelligent Control System"
                sx={{
                  bgcolor: "#fff",
                  color: "#1a56db",
                  fontWeight: 600,
                  borderRadius: "20px",
                  px: 2,
                  py: 0.5,
                  mb: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                }}
              />

              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                Denton DBI: Next Generation PoE <br /> Lighting Controller
              </Typography>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    height: "3px",
                    bgcolor: "#1a56db",
                    mb: 3,
                    borderRadius: "2px",
                  }}
                />
              </motion.div>

              <Typography
                variant="body1"
                sx={{
                  mb: 5,
                  color: "rgba(0,0,0,0.7)",
                  maxWidth: "500px",
                }}
              >
                Experience unparalleled control with our state-of-the-art
                Digital Building Intelligence system.
              </Typography>
            </motion.div>

            {/* Feature Cards */}
            <Grid container spacing={3}>
              {[
                {
                  icon: (
                    <MemoryIcon
                      sx={{ fontSize: 36, color: "#1a56db", mb: 1 }}
                    />
                  ),
                  title: "Smart Processing",
                  desc: "Advanced algorithms for optimal performance",
                },
                {
                  icon: (
                    <HubIcon sx={{ fontSize: 36, color: "#1a56db", mb: 1 }} />
                  ),
                  title: "Seamless Integration",
                  desc: "Connect with existing building systems",
                },
              ].map((feature, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        p: 2,
                        borderRadius: "16px",
                        boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0px 10px 30px rgba(26,86,219,0.25)",
                        },
                      }}
                    >
                      <CardContent>
                        {feature.icon}
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 700, mb: 1 }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(0,0,0,0.7)" }}
                        >
                          {feature.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OneRowTwoColumnSection;
