import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ItemMenu from "../ItemMenu";

import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";
import { VehicleObjType } from "@crema/types/models/apps/Vehicle";

const VehicleManagementListItemWrapper = styled(ListItem)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: "hidden",
    "&.rootCheck": {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      boxShadow: `0 3px 5px 0 ${alpha(theme.palette.common.black, 0.08)}`,
    },
    "& .conActionHoverHideRoot": {
      transition: "all 0.4s ease",
    },
    "&:hover": {
      "& .conActionHoverRoot": {
        opacity: 1,
        visibility: "visible",
        right: 0,
      },
      "& .conActionHoverHideRoot": {
        opacity: 0,
        visibility: "hidden",
      },
      "& .contactViewInfo": {
        [theme.breakpoints.up("sm")]: {
          width: "calc(100% - 114px)",
        },
      },
    },
  };
});

interface Props {
  dealer: VehicleObjType;
  [x: string]: any;
}
const VehicleManagementListItem = ({ dealer }: Props) => {
  return (
    <VehicleManagementListItemWrapper dense key={dealer.auction_no}>
      <Box
        sx={{
          width: { xs: "75%", sm: "80%", md: "100%" },
          display: "flex",
          alignItems: "center",
          p: 3,
        }}
      >
        <Box
          sx={{
            mr: 3,
            width: { md: "11%" },
          }}
          component="span"
        >
          {dealer.auction_no}
        </Box>

        <Box
          sx={{
            mr: 3,
            width: { md: "11%" },
          }}
          component="span"
        >
          {dealer.dealer_code}
        </Box>

        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "11%" },
          }}
        >
          {dealer.created_date}
        </Box>

        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "11%" },
          }}
        >
          {dealer.dealer}
        </Box>

        <Box
          component="span"
          sx={{
            width: { md: "11%" },
          }}
        >
          {dealer.delivery_status}
        </Box>

        <Box
          component="span"
          sx={{
            width: { md: "11%" },
          }}
        >
          {dealer.make}
        </Box>
        <Box
          component="span"
          sx={{
            width: { md: "11%" },
          }}
        >
          {dealer.model}
        </Box>
        <Box
          component="span"
          sx={{
            width: { md: "11%" },
          }}
        >
          {dealer.admin_name}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          component="span"
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <ItemMenu />
        </Box>
      </Box>
    </VehicleManagementListItemWrapper>
  );
};

export default VehicleManagementListItem;
