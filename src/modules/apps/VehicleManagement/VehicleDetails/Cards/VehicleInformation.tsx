import React from "react";
import AppCard from "@crema/components/AppCard";
import { Box, Button } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import AppAnimate from "@crema/components/AppAnimate";

type OrderSummaryProps = {};

const VehicleInformation: React.FC<OrderSummaryProps> = () => {
  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppCard
        title={
          <Box fontSize={16} fontWeight={Fonts.BOLD}>
            Vehicle Information
          </Box>
        }
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mt: 2,
            mb: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Year: </Box>
          <Box>2010</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mb: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Make: </Box>
          <Box>Mercedes-Benz</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mb: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Model: </Box>
          <Box>M-Class</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mb: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Trim: </Box>
          <Box>ML350</Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            my: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Mileage: </Box>
          <Box>124815</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            my: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Transmission: </Box>
          <Box>7A OD</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            my: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Drivetrain: </Box>
          <Box>RWD</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            my: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Cylinders: </Box>
          <Box>V6</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            my: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Passenger: </Box>
          <Box>5</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            my: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Int Color: </Box>
          <Box>Grey</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            my: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Ext Color: </Box>
          <Box>White</Box>
        </Box>
      </AppCard>
    </AppAnimate>
  );
};

export default VehicleInformation;
