import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { FiFacebook, FiTwitter } from "react-icons/fi";

const OtherDetails = () => {
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
            Manager Phone Number
          </label>
          <Typography>1801023510</Typography>
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
            Dealership Sales Person Last Name
          </label>
          <Typography>Thomas</Typography>
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
            Dealership Sales Person Email Address
          </label>
          <Typography>mathewherringt@gmail.com</Typography>
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
            HST Number
          </label>
          <Typography>3541562</Typography>
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
            City
          </label>
          <Typography>London</Typography>
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
            Postal Code
          </label>
          <Typography>N5Y4T8</Typography>
        </Box>
      </div>
    </Box>
  );
};

export default OtherDetails;
