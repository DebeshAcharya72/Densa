import React, { useState } from "react";
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
    highlight: false,
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
  const [selectedPlan, setSelectedPlan] = useState(null);

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
        {plans.map((plan, index) => {
          const isHighlighted = plan.highlight || selectedPlan === index;

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                onClick={() => setSelectedPlan(index)}
                sx={{
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  height: 480, // ✅ fixed card height
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: isHighlighted
                    ? "0 4px 20px rgba(0,0,0,0.2)"
                    : "0 2px 10px rgba(0,0,0,0.05)",
                  border: isHighlighted ? "2px solid #2563eb" : "none",
                  "&:hover": {
                    boxShadow: "0 4px 25px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    {/* Badge */}
                    {plan.badge && (
                      <Box
                        sx={{
                          background: isHighlighted ? "#2563eb" : "#6366f1",
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
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
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
                    <Box sx={{ textAlign: "left", mt: 2 }}>
                      {plan.features.map((feature, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 1,
                          }}
                        >
                          <CheckIcon
                            fontSize="small"
                            sx={{ color: "green", mr: 1 }}
                          />
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  {/* Button (always at bottom) */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: "10px",
                      mt: 3,
                      backgroundColor:
                        plan.buttonColor === "primary"
                          ? "#2563eb"
                          : plan.buttonColor === "secondary"
                          ? "#6366f1"
                          : "#e5e7eb",
                      color:
                        plan.buttonColor === "grey" ? "#111827" : "#ffffff",
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
          );
        })}
      </Grid>
    </Box>
  );
}
