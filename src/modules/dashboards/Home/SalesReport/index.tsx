import React from "react";
import AppCard from "@crema/components/AppCard";
import SalesChart from "./SalesChart";
import AppSelect from "@crema/components/AppSelect";
import { useIntl } from "react-intl";
import IntlMessages from "@crema/helpers/IntlMessages";
import { alpha, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

const DotActionItem = styled("div")(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    lineHeight: 1,
    paddingBottom: 2,
    fontSize: 12,
    color: theme.palette.text.secondary,
    "&:not(:first-of-type)": {
      marginLeft: 16,
      paddingLeft: 16,
      borderLeft: `solid 1px ${alpha(theme.palette.text.secondary, 0.2)}`,
    },
    "& .dot-icon": {
      height: 10,
      width: 10,
      marginRight: 4,
      marginTop: 3,
      borderRadius: "50%",
    },
  };
});

const SalesReport = () => {
  const { messages } = useIntl();

  const theme = useTheme();

  const handleSelectionType = () => {};

  return (
    <AppCard
      sxStyle={{ position: "relative" }}
      title={"Location Occupancy Dashboard"}
      action={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              flexWrap: "wrap",
              mr: 2,
            }}
          >
            <DotActionItem>
              <span
                style={{ backgroundColor: theme.palette.secondary.main }}
                className="dot-icon"
              />
              Occupied
            </DotActionItem>
            <DotActionItem>
              <span
                style={{ backgroundColor: theme.palette.primary.main }}
                className="dot-icon"
              />
              Empty
            </DotActionItem>
          </Box>
        </Box>
      }
    >
      <SalesChart />
    </AppCard>
  );
};

export default SalesReport;
