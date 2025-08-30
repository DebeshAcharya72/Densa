import React from "react";
import { Box, Button, Typography, Container, Stack } from "@mui/material";

const TabletsAndDisplaysBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url("/images/TabletsBanner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0, 51, 153, 0.8) 0%, rgba(0, 51, 153, 0) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 2, maxWidth: "lg" }}>
        <Box sx={{ maxWidth: "700px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#fff",
            }}
          >
            Tablets <br /> And Displays
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 3,
              mb: 4,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 400,
              maxWidth: "600px",
            }}
          >
            Power your devices efficiently with our innovative PoE to USB-C
            solutions. Professional-grade connectivity for modern workspaces.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#1a57dba1",
                borderRadius: 10,
                fontWeight: 600,
                px: 3,
                py: 1.5,
                "&:hover": { bgcolor: "#1541a1" },
              }}
            >
              EXPLORE SOLUTIONS
            </Button>

            {/* <Button
              variant="contained"
              sx={{
                bgcolor: "rgba(0,0,0,0.6)",
                fontWeight: 600,
                px: 3,
                py: 1.5,
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
              }}
            >
              Watch Demo
            </Button> */}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default TabletsAndDisplaysBanner;
