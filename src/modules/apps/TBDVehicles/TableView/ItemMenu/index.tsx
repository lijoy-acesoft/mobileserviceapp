import IntlMessages from "@crema/helpers/IntlMessages";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { ImBlocked } from "react-icons/im";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AppTooltip from "@crema/components/AppTooltip";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

const DealerActionHoverWrapper = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: -30,
    top: "50%",
    zIndex: 1,
    transform: "translateY(-50%)",
    transition: "all 0.4s ease",
    opacity: 0,
  };
});

interface Props {}

const ItemMenu = (props: Props) => {
  return (
    <Box
      component="span"
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        position: "relative",
      }}
    >
      <span className="conActionHoverHideRoot">
        <AppTooltip title={<IntlMessages id="common.more" />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
              padding: 2,
              "& .MuiSvgIcon-root": {
                fontSize: 22,
              },
            }}
            size="large"
          >
            <MoreVertIcon />
          </IconButton>
        </AppTooltip>
      </span>

      <DealerActionHoverWrapper className="conActionHoverRoot">
        <IconButton
          sx={{
            color: (theme) => theme.palette.info.light,
            padding: 2,
            "& .MuiSvgIcon-root": {
              fontSize: 22,
            },
          }}
          size="large"
        >
          <IoIosInformationCircleOutline size={25} />
        </IconButton>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
            padding: 2,
            "& .MuiSvgIcon-root": {
              fontSize: 22,
            },
          }}
          size="large"
        >
          <EditOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
            padding: 2,
            "& .MuiSvgIcon-root": {
              fontSize: 22,
            },
          }}
          size="large"
        >
          <ImBlocked size={18} />
        </IconButton>
      </DealerActionHoverWrapper>
    </Box>
  );
};

export default ItemMenu;
