import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SecurityIcon from "@mui/icons-material/Security";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CampaignIcon from "@mui/icons-material/Campaign";

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive websites built with cutting-edge technologies",
    Icon: CodeIcon,
  },
  {
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications for iOS and Android",
    Icon: SmartphoneIcon,
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, intuitive designs that enhance user experience",
    Icon: DesignServicesIcon,
  },
  {
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect your digital assets",
    Icon: SecurityIcon,
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and migration services",
    Icon: CloudQueueIcon,
  },
  {
    title: "Digital Marketing",
    desc: "Strategic marketing campaigns to grow your online presence",
    Icon: CampaignIcon,
  },
];

const IconTile = ({ Icon }) => (
  <Avatar
    sx={{
      width: 56,
      height: 56,
      bgcolor: "rgba(63, 81, 181, 0.1)",
      color: "#3f51b5",
      boxShadow: "0 4px 12px rgba(63, 81, 181, 0.2)",
    }}
  >
    <Icon fontSize="medium" />
  </Avatar>
);

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const ServicesSectionOfDatabase = () => {
  return (
    <Box sx={{ bgcolor: "#f7f9fc", py: { xs: 6, sm: 8, md: 10 } }}>
      {/* Heading Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 800,
            color: "#1e2a5a",
            mb: 1,
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 650, mx: "auto" }}
        >
          Comprehensive digital solutions tailored to meet your unique business
          needs and drive sustainable growth.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          {services.map((s, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <motion.div
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                    borderRadius: "12px",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      p: 2,
                      textAlign: "left",
                      height: "100%",
                      background: "#fff",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CardContent sx={{ display: "flex", gap: 2 }}>
                      <IconTile Icon={s.Icon} />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: "#2c387e",
                            mb: 0.5,
                          }}
                        >
                          {s.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {s.desc}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesSectionOfDatabase;
