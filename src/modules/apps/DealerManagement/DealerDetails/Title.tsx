import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ContactTitle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" fontWeight={600}>
        View Dealer
      </Typography>
    </Box>
  );
};

export default ContactTitle;
