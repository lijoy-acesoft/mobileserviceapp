import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import { styled } from "@mui/material/styles";
import { alpha, ListItem } from "@mui/material";
import { ContactObjType2 } from "@crema/types/models/apps/Contact";

const ListItemWrapper = styled(ListItem)(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    fontSize: 14,
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 10,
    cursor: "pointer",
    overflow: "hidden",
    paddingLeft: 20,
    alignItems: "flex-start",
    "& .contactViewLeft": {
      alignItems: "flex-start",
    },
    "&.rootCheck": {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      boxShadow: `0 3px 5px 0 ${alpha(theme.palette.common.black, 0.08)}`,
    },
  };
});

interface Props {
  dealer: ContactObjType2;
  [x: string]: any;
}
const ListItemMobile = ({ dealer }: Props) => {
  return (
    <ListItemWrapper dense key={dealer.dlr_code}>
      <Box
        sx={{
          width: { xs: "75%", sm: "80%", md: "50%" },
          display: "flex",
          alignItems: "center",
        }}
        className="contactViewLeft"
      >
        <Box
          sx={{
            mr: 3,
            mt: 1,
          }}
          component="span"
        >
          {dealer.dealership}
        </Box>
        <Box sx={{ mr: 3, overflow: "hidden" }}>
          <Box
            sx={{
              fontWeight: Fonts.MEDIUM,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            component="p"
          >
            {dealer.admin_name}
          </Box>

          <Box
            component="p"
            sx={{
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {dealer.salesperson}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: { xs: "25%", sm: "20%", md: "50%" },
        }}
      >
        <span onClick={(event) => event.stopPropagation()}></span>
      </Box>
    </ListItemWrapper>
  );
};

export default ListItemMobile;
