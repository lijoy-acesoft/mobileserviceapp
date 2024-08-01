import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";

const PersonalDetails = () => {
  return (
    <Box
      sx={{
        pb: 5,
      }}
    >
      <div>
        <Box
          sx={{
            mb: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              fontSize: "10px",
              color: "gray",
            }}
          >
            Dealership Name
          </label>
          <Typography>Rivers Motors</Typography>
        </Box>

        <Box
          sx={{
            mb: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              fontSize: "10px",
              color: "gray",
            }}
          >
            Address
          </label>
          <Typography>456, Sunnyside Drive</Typography>
        </Box>

        <Box
          sx={{
            mb: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              fontSize: "10px",
              color: "gray",
            }}
          >
            Dealership Sale Person First Name
          </label>
          <Typography>Mathew</Typography>
        </Box>

        <Box
          sx={{
            mb: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              fontSize: "10px",
              color: "gray",
            }}
          >
            Omvic Number
          </label>
          <Typography>452012305</Typography>
        </Box>
        <Box
          sx={{
            mb: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              fontSize: "10px",
              color: "gray",
            }}
          >
            Default Dealer Make
          </label>
          <Typography>BMW</Typography>
        </Box>
        <Box
          sx={{
            mb: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              fontSize: "10px",
              color: "gray",
            }}
          >
            Province
          </label>
          <Typography>ON</Typography>
        </Box>
      </div>
    </Box>
  );
};

export default PersonalDetails;
