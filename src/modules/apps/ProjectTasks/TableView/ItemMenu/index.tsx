import IntlMessages from "@crema/helpers/IntlMessages";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { CiCircleMore } from "react-icons/ci";
import { RiEditCircleLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import AppTooltip from "@crema/components/AppTooltip";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

const ActionHoverWrapper = styled("div")(() => {
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

interface Props {
  setToggleDetails?: (show: boolean) => void;
  setToggleEdit: (show: boolean) => void;
  setToggleDelete: (show: boolean) => void;
}

const ItemMenu = (props: Props) => {
  const { setToggleDetails, setToggleEdit, setToggleDelete } = props;
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

      <ActionHoverWrapper className="conActionHoverRoot">
        {setToggleDetails && (
          <IconButton
            onClick={() => setToggleDetails(true)}
            sx={{
              color: (theme) => theme.palette.success.dark,
              padding: 2,
              "& .MuiSvgIcon-root": {
                fontSize: 22,
              },
            }}
            size="large"
          >
            <CiCircleMore size={28} />
          </IconButton>
        )}
        <IconButton
          onClick={() => setToggleEdit(true)}
          sx={{
            color: (theme) => theme.palette.primary.dark,
            padding: 2,
            "& .MuiSvgIcon-root": {
              fontSize: 22,
            },
          }}
          size="large"
        >
          <RiEditCircleLine size={25} />
        </IconButton>
        <IconButton
          onClick={() => setToggleDelete(true)}
          sx={{
            color: (theme) => theme.palette.error.light,
            padding: 2,
            "& .MuiSvgIcon-root": {
              fontSize: 22,
            },
          }}
          size="large"
        >
          <TiDeleteOutline size={28} />
        </IconButton>
      </ActionHoverWrapper>
    </Box>
  );
};

export default ItemMenu;
