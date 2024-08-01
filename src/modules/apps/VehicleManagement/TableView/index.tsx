import AppList from "@crema/components/AppList";
import ListEmptyResult from "@crema/components/AppList/CustomListEmptyResult";
import VehicleListSkeleton from "@crema/components/AppSkeleton/VehicleListSkelton";
import { Hidden } from "@mui/material";
import VehicleListItem from "./VehicleListItem";
import VehicleListItemMobile from "./VehicleListItem/VehicleListItemMobile";
import { VehicleObjType } from "@crema/types/models/apps/Vehicle";

type Props = {
  list: VehicleObjType[];
  loading: boolean;
};

const TableView = (props: Props) => {
  const { list, loading } = props;

  return (
    <>
      <>
        <Hidden smDown>
          {loading ? (
            <VehicleListSkeleton />
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
                  placeholder={<VehicleListSkeleton />}
                />
              }
              renderRow={(dealer) => (
                <VehicleListItem key={dealer.auction_no} dealer={dealer} />
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
                placeholder={<VehicleListSkeleton />}
              />
            }
            renderRow={(dealer) => (
              <VehicleListItemMobile key={dealer.auction_no} dealer={dealer} />
            )}
          />
        </Hidden>
      </>
    </>
  );
};

export default TableView;

TableView.defaultProps = {
  list: [],
};
