import Box from "@mui/material/Box";

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "75%", sm: "80%", md: "100%" },
            display: "flex",
            p: 3,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "10%",
              fontWeight: 600,
            }}
            component="span"
          >
            DLR Code
          </Box>

          <Box
            sx={{
              width: "14%",
              fontWeight: 600,
            }}
            component="span"
          >
            Dealership Name
          </Box>

          <Box
            component="span"
            sx={{
              fontWeight: 600,
              width: "14%",
            }}
          >
            Admin Name
          </Box>

          <Box
            component="span"
            sx={{
              width: "20%",
              fontWeight: 600,
            }}
          >
            DLR Salesperson Name
          </Box>

          <Box
            component="span"
            sx={{
              width: "25%",
              fontWeight: 600,
            }}
          >
            Email
          </Box>
          <Box
            component="span"
            sx={{
              mr: 3,
              width: { md: "15%" },
              fontWeight: 600,
            }}
          >
            Province
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TableHeader;

TableHeader.defaultProps = {};
