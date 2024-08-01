import AppList from "@crema/components/AppList";
import ListEmptyResult from "@crema/components/AppList/CustomListEmptyResult";
import VehicleListSkelton from "@crema/components/AppSkeleton/VehicleListSkelton";
import { Hidden } from "@mui/material";
import ListItem from "./ListItem";
import ListItemMobile from "./ListItem/ListItemMobile";
import { TBDVehicleObjType } from "@crema/types/models/apps/TBDVehicle";

type Props = {
  list: TBDVehicleObjType[];
  loading: boolean;
};

const TableView = (props: Props) => {
  const { list, loading } = props;

  return (
    <>
      <Hidden smDown>
        {loading ? (
          <VehicleListSkelton />
        ) : (
          <AppList
            data={list}
            animation="transition.slideUpIn"
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<VehicleListSkelton />}
              />
            }
            renderRow={(dealer) => (
              <ListItem key={dealer.auction_no} dealer={dealer} />
            )}
          />
        )}
      </Hidden>

      <Hidden smUp>
        <AppList
          data={list}
          animation="transition.slideUpIn"
          sx={{
            p: 2,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
          ListEmptyComponent={
            <ListEmptyResult
              loading={loading}
              placeholder={<VehicleListSkelton />}
            />
          }
          renderRow={(dealer) => (
            <ListItemMobile key={dealer.auction_no} dealer={dealer} />
          )}
        />
      </Hidden>
    </>
  );
};

export default TableView;

TableView.defaultProps = {
  list: [],
};
