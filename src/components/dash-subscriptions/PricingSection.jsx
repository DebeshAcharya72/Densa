import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const plans = [
  {
    title: "Free Forever",
    subtitle: "Perfect for personal pilots and small teams getting started",
    price: "$0",
    features: [
      "Schedule display",
      "Basic room booking",
      "Limited branding",
      "Community support",
    ],
    buttonText: "Start Free",
    buttonColor: "grey",
    highlight: false,
  },
  {
    title: "Business Plan",
    subtitle: "Most Popular",
    price: "$3.99",
    per: "/ month",
    features: [
      "Full schedule display",
      "Room & resource booking",
      "Meeting checks",
      "Basic branding",
      "Admin dashboard",
      "Email support",
    ],
    buttonText: "Get Business",
    buttonColor: "primary",
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "Enterprise Plan",
    subtitle: "Best for organizations",
    price: "$8",
    per: "/ month",
    features: [
      "All Business features",
      "Priority support",
      "Custom branding",
      "SSO & advanced security",
      "Analytics & reporting",
      "Dedicated onboarding",
    ],
    buttonText: "Contact Us",
    buttonColor: "secondary",
    highlight: false,
    badge: "Best for organizations",
  },
];

export default function PricingSection() {
  return (
    <Box sx={{ textAlign: "center", py: 6, background: "#f9fafb" }}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold">
        Choose Your Plan
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Start free and scale with your team
      </Typography>

      {/* Pricing Cards */}
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                p: 2,
                boxShadow: plan.highlight
                  ? "0 4px 20px rgba(0,0,0,0.15)"
                  : "0 2px 10px rgba(0,0,0,0.05)",
                border: plan.highlight ? "2px solid #2563eb" : "none",
              }}
            >
              <CardContent>
                {/* Badge */}
                {plan.badge && (
                  <Box
                    sx={{
                      background: plan.highlight ? "#2563eb" : "#6366f1",
                      color: "white",
                      display: "inline-block",
                      px: 2,
                      py: 0.5,
                      borderRadius: "20px",
                      fontSize: 12,
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    {plan.badge}
                  </Box>
                )}

                {/* Title */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {plan.title}
                </Typography>

                {/* Subtitle */}
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {plan.subtitle}
                </Typography>

                {/* Price */}
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ mt: 2, mb: 1 }}
                >
                  {plan.price}
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {plan.per}
                  </Typography>
                </Typography>

                {/* Features */}
                <Box sx={{ textAlign: "left", mt: 2, mb: 3 }}>
                  {plan.features.map((feature, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <CheckIcon
                        fontSize="small"
                        sx={{ color: "green", mr: 1 }}
                      />
                      {feature}
                    </Typography>
                  ))}
                </Box>

                {/* Button */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "10px",
                    backgroundColor:
                      plan.buttonColor === "primary"
                        ? "#2563eb"
                        : plan.buttonColor === "secondary"
                        ? "#6366f1"
                        : "#e5e7eb",
                    color: plan.buttonColor === "grey" ? "#111827" : "#ffffff",
                    fontWeight: "bold",
                    py: 1.2,
                    "&:hover": {
                      backgroundColor:
                        plan.buttonColor === "primary"
                          ? "#1e40af"
                          : plan.buttonColor === "secondary"
                          ? "#4f46e5"
                          : "#d1d5db",
                    },
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
