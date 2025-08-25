import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Avatar,
  SvgIcon,
} from "@mui/material";
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
      width: 42,
      height: 42,
      bgcolor: "rgba(100, 149, 237, 0.15)",
      color: "#3f51b5",
      mb: 1,
    }}
  >
    <Icon fontSize="medium" />
  </Avatar>
);

const ServicesSectionOfDatabase = () => {
  return (
    <Box sx={{ bgcolor: "#f7f9fc", py: { xs: 6, sm: 8, md: 10 } }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 800 }}>
          Our Services
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Comprehensive digital solutions tailored to meet your unique business
          needs and drive sustainable growth.
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          {services.map((s, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                }}
              >
                <CardContent
                  sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                >
                  <IconTile Icon={s.Icon} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {s.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {s.desc}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesSectionOfDatabase;
