import Box from "@mui/material/Box";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Button, Tooltip, Typography } from "@mui/material";

const ContactActions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          transition: "all 0.5s ease",
        }}
        className="btn-action-view"
      >
        <Tooltip
          title="Download Vehicles Sold/Purchased Report in CSV"
          placement="left-start"
        >
          <Button
            variant="contained"
            style={{
              marginRight: "8px",
            }}
          >
            <FaCloudDownloadAlt color="white" size={24} />
            <Typography
              sx={{
                ml: 2,
              }}
            >
              Download
            </Typography>
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ContactActions;
