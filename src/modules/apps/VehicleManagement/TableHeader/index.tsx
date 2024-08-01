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
              width: "11%",
              fontWeight: 600,
            }}
            component="span"
          >
            Action No
          </Box>

          <Box
            sx={{
              width: "16%",
              fontWeight: 600,
            }}
            component="span"
          >
            Dealer Code
          </Box>

          <Box
            component="span"
            sx={{
              fontWeight: 600,
              width: "14%",
            }}
          >
            Created At
          </Box>

          <Box
            component="span"
            sx={{
              width: "11%",
              fontWeight: 600,
            }}
          >
            Dealer
          </Box>

          <Box
            component="span"
            sx={{
              width: "14%",
              fontWeight: 600,
            }}
          >
            Delivery Status
          </Box>
          <Box
            component="span"
            sx={{
              mr: 3,
              width: { md: "11%" },
              fontWeight: 600,
            }}
          >
            Make
          </Box>
          <Box
            component="span"
            sx={{
              mr: 3,
              width: { md: "11%" },
              fontWeight: 600,
            }}
          >
            Model
          </Box>
          <Box
            component="span"
            sx={{
              mr: 3,
              width: { md: "11%" },
              fontWeight: 600,
            }}
          >
            Admin Name
          </Box>
          <Box
            component="span"
            sx={{
              mr: 3,
              width: { md: "11%" },
              fontWeight: 600,
              textAlign: "end",
            }}
          >
            Action
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TableHeader;

TableHeader.defaultProps = {};
