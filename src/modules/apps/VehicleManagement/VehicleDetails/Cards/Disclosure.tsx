import React from "react";
import AppCard from "@crema/components/AppCard";
import { Box, Button } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import AppAnimate from "@crema/components/AppAnimate";

type OrderSummaryProps = {};

const Disclosure: React.FC<OrderSummaryProps> = () => {
  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppCard
        title={
          <Box fontSize={16} fontWeight={Fonts.BOLD}>
            Disclosure
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
          <Box sx={{ color: "text.secondary" }}>Windshield: </Box>
          <Box>Normal</Box>
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
          <Box sx={{ color: "text.secondary" }}>Tire: </Box>
          <Box>Excellent</Box>
        </Box>
      </AppCard>
    </AppAnimate>
  );
};

export default Disclosure;
