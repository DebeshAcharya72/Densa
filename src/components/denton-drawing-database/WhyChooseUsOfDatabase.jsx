import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Grade";
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  }),
};

const WhyChooseUsOfDatabase = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0f2340",
        background: "linear-gradient(180deg, #0f2340 0%, #081a30 100%)",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 800,
              letterSpacing: 0.5,
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.8)",
              mt: 1,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            We combine innovation, expertise, and dedication to deliver
            exceptional results that exceed expectations.
          </Typography>
        </Box>

        {/* Features */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((f, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <motion.div
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    boxShadow: "0 12px 32px #2573fb4d",
                    borderRadius: "12px",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: "center",
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,0.03)",
                      color: "#fff",
                      minHeight: "200px",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {/* Icon without circle */}
                    <f.Icon sx={{ fontSize: 48, color: "#2574fb" }} />

                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mt: 1.5, color: "#fff" }}
                    >
                      {f.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.75)",
                        mt: 1,
                        lineHeight: 1.6,
                      }}
                    >
                      {f.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUsOfDatabase;
