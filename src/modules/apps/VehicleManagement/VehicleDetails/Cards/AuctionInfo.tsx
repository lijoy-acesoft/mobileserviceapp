import React from "react";
import AppCard from "@crema/components/AppCard";
import { Box, Button } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import AppAnimate from "@crema/components/AppAnimate";

type OrderSummaryProps = {};

const AuctionInfo: React.FC<OrderSummaryProps> = () => {
  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppCard
        title={
          <Box fontSize={16} fontWeight={Fonts.BOLD}>
            Auction Information
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
          <Box sx={{ color: "text.secondary" }}>Auction Number: </Box>
          <Box>AN10521</Box>
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
          <Box sx={{ color: "text.secondary" }}>Auction Type: </Box>
          <Box>INVENTORY</Box>
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
          <Box sx={{ color: "text.secondary" }}>Owner Dealer Code: </Box>
          <Box>DE530</Box>
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
          <Box sx={{ color: "text.secondary" }}>Owner Name: </Box>
          <Box>Thomas Jacob</Box>
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
          <Box sx={{ color: "text.secondary" }}>VIN Number: </Box>
          <Box>4J5DF44G5H4H5</Box>
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
          <Box sx={{ color: "text.secondary" }}>Reserve Price: </Box>
          <Box>$215</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            my: 4,
          }}
        >
          <Button variant="outlined">Bill Of Sale</Button>
        </Box>
      </AppCard>
    </AppAnimate>
  );
};

export default AuctionInfo;
