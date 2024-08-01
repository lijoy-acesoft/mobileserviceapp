import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ItemMenu from "../ItemMenu";

import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";
import { DealerObjType } from "@crema/types/models/apps/Dealer";

const ListItemWrapper = styled(ListItem)(({ theme }) => {
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
  dealer: DealerObjType;
  setToggleDetails: (show: boolean) => void;
  setToggleEdit: (show: boolean) => void;
  setToggleDelete: (show: boolean) => void;
  [x: string]: any;
}
const DealerListItem = ({
  dealer,
  setToggleDetails,
  setToggleEdit,
  setToggleDelete,
}: Props) => {
  return (
    <ListItemWrapper dense key={dealer.dlr_code}>
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
            width: { md: "10%" },
          }}
          component="span"
        >
          {dealer.dlr_code}
        </Box>

        <Box
          sx={{
            mr: 3,
            width: { md: "15%" },
          }}
          component="span"
        >
          {dealer.dealership}
        </Box>

        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "15%" },
          }}
        >
          {dealer.admin_name}
        </Box>

        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "15%" },
          }}
        >
          {dealer.salesperson}
        </Box>

        <Box
          component="span"
          sx={{
            width: { md: "35%" },
          }}
        >
          {dealer.email}
        </Box>

        <Box
          component="span"
          sx={{
            width: { md: "15%" },
          }}
        >
          {dealer.province}
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
          <ItemMenu
            setToggleDetails={setToggleDetails}
            setToggleEdit={setToggleEdit}
            setToggleDelete={setToggleDelete}
            status={dealer.status}
          />
        </Box>
      </Box>
    </ListItemWrapper>
  );
};

export default DealerListItem;
