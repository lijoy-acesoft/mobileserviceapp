import React from "react";
import AppCard from "@crema/components/AppCard";
import { Box } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import AppAnimate from "@crema/components/AppAnimate";

type OrderSummaryProps = {};

const CarFaxStatus: React.FC<OrderSummaryProps> = () => {
  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppCard
        title={
          <Box fontSize={16} fontWeight={Fonts.BOLD}>
            Carfax Details
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
          <Box sx={{ color: "text.secondary" }}>Status: </Box>
          <Box>Clean</Box>
        </Box>
      </AppCard>
    </AppAnimate>
  );
};

export default CarFaxStatus;
