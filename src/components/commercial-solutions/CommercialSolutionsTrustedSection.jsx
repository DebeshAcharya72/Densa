import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Stack,
  Button,
  LinearProgress,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";

const stats = [
  { icon: <CheckCircleIcon />, text: "10+ years of industry expertise" },
  { icon: <CheckCircleIcon />, text: "24/7 dedicated customer support" },
  { icon: <CheckCircleIcon />, text: "99.9% uptime guarantee" },
  { icon: <CheckCircleIcon />, text: "ISO certified security standards" },
];

const progressBars = [
  {
    icon: <VerifiedIcon />,
    title: "Quality Assurance",
    desc: "Rigorous testing processes",
    value: 90,
  },
  {
    icon: <TrendingUpIcon />,
    title: "Performance",
    desc: "Optimized for speed",
    value: 95,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const CommercialSolutionsTrustedSection = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 3, sm: 5, md: 10 }, bgcolor: "#f5f7ff" }}>
      <Grid container spacing={8} alignItems="center">
        {/* Left Section */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
              Trusted by Industry <br /> Leaders Worldwide
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
              We've been at the forefront of digital transformation, helping
              thousands of companies achieve their goals through innovative
              solutions and exceptional service. Our commitment to excellence
              has made us the go-to partner for businesses of all sizes.
            </Typography>

            <Stack spacing={2} mb={4}>
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      {item.icon}
                    </Avatar>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {item.text}
                    </Typography>
                  </Stack>
                </motion.div>
              ))}
            </Stack>

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #6a5af9, #8e8ef7)",
                color: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(45deg, #8e8ef7, #6a5af9)",
                },
              }}
            >
              Learn Our Story
            </Button>
          </motion.div>
        </Grid>

        {/* Right Section */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Stack spacing={4}>
            {progressBars.map((bar, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                    p: 3,
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0px 15px 35px rgba(0,0,0,0.15)",
                    },
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: "primary.main" }}>{bar.icon}</Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {bar.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {bar.desc}
                      </Typography>
                    </Box>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={bar.value}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      "& .MuiLinearProgress-bar": {
                        background: "linear-gradient(90deg, #6a5af9, #8e8ef7)",
                      },
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommercialSolutionsTrustedSection;
