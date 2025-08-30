import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          textAlign: "center",
          p: { xs: 4, md: 6 },
          borderRadius: "20px",
          background: "linear-gradient(90deg, #2563eb, #9333ea)",
          color: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
          >
            Ready to Transform Your Business?
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Join hundreds of satisfied clients who have revolutionized their
            operations with DENSA&apos;s smart technology solutions.
          </Typography>
        </motion.div>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            sx={{
              background: "white",
              color: "#2563eb",
              fontWeight: "bold",
              borderRadius: "999px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontSize: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              "&:hover": {
                background: "#f1f5f9",
              },
            }}
          >
            Get Started Today
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
}
