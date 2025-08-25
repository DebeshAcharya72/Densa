import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

const discounts = [
  { qty: "1-4 devices", price: "$47.88" },
  { qty: "5-9 devices", price: "$43.09", discount: "10% off" },
  { qty: "10-19 devices", price: "$38.30", discount: "20% off" },
  { qty: "20+ devices", price: "$33.52", discount: "30% off" },
];

export default function VolumeDiscounts() {
  return (
    <Box sx={{ textAlign: "center", py: 6, background: "#fff" }}>
      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <span style={{ color: "green" }}>〰</span> Volume Discounts
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
        Save more with more devices
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Optimal pricing for larger teams and multiple devices
      </Typography>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 600, mx: "auto", borderRadius: 3, boxShadow: 3 }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#f1f5ff" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Price per device per year
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {discounts.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.qty}</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  {row.price}
                  {row.discount && (
                    <Chip
                      label={row.discount}
                      size="small"
                      sx={{
                        ml: 2,
                        background: "#d1fae5",
                        color: "#065f46",
                        fontWeight: "bold",
                        borderRadius: "8px",
                      }}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Footer */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 2, fontStyle: "italic" }}
      >
        Prices shown are per device per year
      </Typography>
    </Box>
  );
}
