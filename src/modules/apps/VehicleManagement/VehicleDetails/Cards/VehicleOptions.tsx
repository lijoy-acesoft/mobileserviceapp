import AppCard from "@crema/components/AppCard";
import AppScrollbar from "@crema/components/AppScrollbar";
import AppList from "@crema/components/AppList";

import Box from "@mui/material/Box";

import { Fonts } from "@crema/constants/AppEnums";

type Props2 = {
  vehicle: any;
};

const VehicleCell = ({ vehicle }: Props2) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        padding: "12px 20px",
      }}
      className="item-hover"
    >
      <Box
        sx={{
          mr: 4,
          mt: 1.5,
          height: 10,
          minWidth: 10,
          borderRadius: "50%",
          backgroundColor: vehicle.color,
        }}
      />
      <Box sx={{ fontSize: 14 }}>
        <Box
          component="h5"
          sx={{
            fontWeight: Fonts.MEDIUM,
            mb: 0.5,
          }}
        >
          {vehicle.title}
        </Box>
      </Box>
    </Box>
  );
};

type Props = {};

const Notifications = () => {
  return (
    <AppCard
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={"Vehicle Options"}
    >
      <AppScrollbar style={{ maxHeight: 280 }}>
        <AppList
          data={[
            { id: 1, title: "DVD Entertainment System", color: "red" },
            {
              id: 2,
              title: "Parking Sensors",
              color: "blue",
            },
            {
              id: 3,
              title: "Tinted Windows",
              color: "green",
            },
            {
              id: 4,
              title: "Upholstery",
              color: "brown",
            },
            {
              id: 5,
              title: "Climate Control",
              color: "blue",
            },
            {
              id: 6,
              title: "Interior Lighting",
              color: "orange",
            },
          ]}
          renderRow={(vehicle) => (
            <VehicleCell key={vehicle.id} vehicle={vehicle} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Notifications;
