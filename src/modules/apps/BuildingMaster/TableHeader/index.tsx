import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";

type Props = {};

const ListItemWrapper = styled(ListItem)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
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

const TableHeader = (props: Props) => {
  return (
    <ListItemWrapper dense>
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
            width: { md: "17%" },
            fontWeight: 600,
          }}
          component="span"
        >
          Building Code
        </Box>

        <Box
          sx={{
            mr: 3,
            width: { md: "16%" },
            fontWeight: 600,
          }}
          component="span"
        >
          Buildng Name
        </Box>

        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "15%" },
            fontWeight: 600,
          }}
        >
          Site Code
        </Box>

        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "17%" },
            fontWeight: 600,
          }}
        >
          Site Name
        </Box>

        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "15%" },
            fontWeight: 600,
          }}
        >
          Company Group
        </Box>
      </Box>
    </ListItemWrapper>
  );
};

export default TableHeader;

TableHeader.defaultProps = {};
