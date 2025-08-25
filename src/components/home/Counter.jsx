import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "99.9%", label: "System Uptime" },
  { value: "24/7", label: "Support Available" },
  { value: "20+", label: "Years Experience" },
];

export default function Counter() {
  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        background: "linear-gradient(to bottom, #f9fafc, #ffffff)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "1200px" }}
      >
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: "16px",
                textAlign: "center",
                py: 4,
                px: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.value}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                {item.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
