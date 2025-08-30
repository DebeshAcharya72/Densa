import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import SendIcon from "@mui/icons-material/Send";

export default function ContactSection() {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: "#eeeef7" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            mb: 1,
          }}
        >
          Get In{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Touch
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
            mb: 6,
            color: "text.secondary",
          }}
        >
          Ready to transform your business with smart technology solutions?
          Let’s discuss your project and explore how we can help you achieve
          your goals.
        </Typography>

        <Grid container spacing={4}>
          {/* LEFT COLUMN - Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              {[
                {
                  icon: <PhoneIcon sx={{ color: "#fff" }} />,
                  bg: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                  title: "Phone",
                  lines: [
                    "Main Office: +1 (555) 123-4567",
                    "Emergency: +1 (555) 987-6543",
                  ],
                },
                {
                  icon: <EmailIcon sx={{ color: "#fff" }} />,
                  bg: "linear-gradient(135deg,#22c55e,#16a34a)",
                  title: "Email",
                  lines: [
                    "General: info@densa.io",
                    "Support: support@densa.io",
                  ],
                },
                {
                  icon: <LocationOnIcon sx={{ color: "#fff" }} />,
                  bg: "linear-gradient(135deg,#a855f7,#7e22ce)",
                  title: "Office",
                  lines: [
                    "123 Technology Drive",
                    "Innovation District, CA 94000",
                  ],
                },
                {
                  icon: <AccessTimeIcon sx={{ color: "#fff" }} />,
                  bg: "linear-gradient(135deg,#f97316,#ea580c)",
                  title: "Business Hours",
                  lines: [
                    "Mon - Fri: 8:00 AM - 6:00 PM",
                    "24/7 Emergency Support",
                  ],
                },
              ].map((item, i) => (
                <Paper
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 3,
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      background: item.bg,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 0.5 }}
                    >
                      {item.title}
                    </Typography>
                    {item.lines.map((line, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              ))}

              {/* Visit Office (Map Placeholder) */}
              <Paper
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
                }}
              >
                <PlaceIcon sx={{ fontSize: 40, color: "red", mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Visit Our Office
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Interactive map integration
                </Typography>
              </Paper>
            </Stack>
          </Grid>

          {/* RIGHT COLUMN - Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              sx={{
                p: 4,
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
              }}
            >
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Full Name *"
                    defaultValue="John Doe"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email Address *"
                    defaultValue="john@company.com"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Company"
                    defaultValue="Your Company"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    defaultValue="+1 (555) 123 4567"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    select
                    fullWidth
                    label="Service Interest"
                    defaultValue=""
                  >
                    <MenuItem value="">Select a service</MenuItem>
                    <MenuItem value="iot">IoT Solutions</MenuItem>
                    <MenuItem value="blockchain">
                      Blockchain Integration
                    </MenuItem>
                    <MenuItem value="ai">AI & Automation</MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Project Details *"
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges you’re facing..."
                  />
                </Grid>
              </Grid>

              <Box textAlign="center" mt={4}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: "999px",
                    textTransform: "none",
                    fontWeight: 600,
                    background: "linear-gradient(to right,#2563eb,#9333ea)",
                    "&:hover": {
                      background: "linear-gradient(to right,#1d4ed8,#7e22ce)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
