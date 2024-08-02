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
            width: { md: "18%" },
            fontWeight: 600,
          }}
          component="span"
        >
          Project
        </Box>

        <Box
          sx={{
            mr: 3,
            width: { md: "18%" },
            fontWeight: 600,
          }}
          component="span"
        >
          Activity
        </Box>

        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "18%" },
            fontWeight: 600,
          }}
        >
          Per-Hour Cost (AED)
        </Box>

        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "17%" },
            fontWeight: 600,
          }}
        >
          Actual Hours
        </Box>
        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "20%" },
            fontWeight: 600,
          }}
        >
          Actual Total Cost
        </Box>
        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "20%" },
            fontWeight: 600,
          }}
        >
          Planned Hours
        </Box>
        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "20%" },
            fontWeight: 600,
          }}
        >
          Planned Total Cost
        </Box>
        <Box
          component="span"
          sx={{
            mr: 3,
            width: { md: "20%" },
            fontWeight: 600,
          }}
        >
          Cost Variance
        </Box>
      </Box>
    </ListItemWrapper>
  );
};

export default TableHeader;

TableHeader.defaultProps = {};
