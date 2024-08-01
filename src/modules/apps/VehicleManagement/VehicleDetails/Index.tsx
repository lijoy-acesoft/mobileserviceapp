import { Box, styled } from "@mui/system";
import { Grid } from "@mui/material";

import AuctionInfo from "./Cards/AuctionInfo";
import VehicleOptions from "./Cards/VehicleOptions";
import Disclosure from "./Cards/Disclosure";
import VehicleInformation from "./Cards/VehicleInformation";
import VehicleImages from "./Cards/VehicleImages";
import DamagePhotos from "./Cards/DamagePhotos";
import CarfaxStatus from "./Cards/CarfaxStatus";

const LayoutContainer = styled(Box)(() => ({
  overflow: "auto",
}));

const Index = () => {
  return (
    <LayoutContainer>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Grid
          item
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <CarfaxStatus />
          <VehicleOptions />
          <Disclosure />
        </Grid>
        <Grid
          item
          sm
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <AuctionInfo />
          <VehicleInformation />
        </Grid>
        <Grid
          item
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <VehicleImages />
          <DamagePhotos />
        </Grid>
        <Grid item sm={4}></Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default Index;
