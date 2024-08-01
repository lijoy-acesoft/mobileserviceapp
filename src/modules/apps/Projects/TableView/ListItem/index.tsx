import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ItemMenu from "../ItemMenu";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";
import { ProjectsObj } from "@crema/types/models/apps/Projects";
import { LabelOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
    cursor: "pointer",
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
  item: ProjectsObj;
  setToggleDetails: (show: boolean) => void;
  setToggleEdit: (show: boolean) => void;
  setToggleDelete: (show: boolean) => void;
  [x: string]: any;
}
const DealerListItem = ({
  item,
  setToggleDetails,
  setToggleEdit,
  setToggleDelete,
}: Props) => {
  const navigate = useNavigate();

  function getRandomDeepColor() {
    const deepColors = [
      "rgb(0, 0, 139)", // Deep Blue
      "rgb(0, 100, 0)", // Deep Green
      "rgb(139, 0, 0)", // Deep Red
      "rgb(148, 0, 211)", // Deep Violet
      "rgb(101, 67, 33)", // Deep Brown
    ];

    const randomIndex = Math.floor(Math.random() * deepColors.length);
    return deepColors[randomIndex];
  }

  return (
    <ListItemWrapper
      dense
      key={item.name}
      onClick={() => navigate("/apps/projects/1/tasks")}
    >
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
            width: { md: "20%" },
          }}
          component="span"
        >
          {item.name}
        </Box>

        <Box
          sx={{
            mr: 3,
            width: { md: "20%" },
          }}
          component="span"
        >
          {item.start_date}
        </Box>
        <Box
          sx={{
            mr: 3,
            width: { md: "20%" },
          }}
          component="span"
        >
          {item.deadline}
        </Box>
        <Box
          sx={{
            mr: 3,
            width: { md: "20%" },
          }}
          component="span"
        >
          {item.customer}
        </Box>
        <Box
          sx={{
            mr: 3,
            width: { md: "20%" },
          }}
          component="span"
        >
          6
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
          <span className="conActionHoverHideRoot">
            <LabelOutlined
              sx={{
                ml: 2,
                color: getRandomDeepColor(),
              }}
            />
          </span>
          <ItemMenu
            setToggleDetails={setToggleDetails}
            setToggleEdit={setToggleEdit}
            setToggleDelete={setToggleDelete}
          />
        </Box>
      </Box>
    </ListItemWrapper>
  );
};

export default DealerListItem;
