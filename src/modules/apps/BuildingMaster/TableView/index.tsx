import AppList from "@crema/components/AppList";
import CustomListEmptyResult from "@crema/components/AppList/CustomListEmptyResult";
import CommonListSkeleton from "@crema/components/AppSkeleton/CommonListSkelton";
import { Hidden } from "@mui/material";
import ListItem from "./ListItem";
import ListItemMobile from "./ListItem/ListItemMobile";
import { BuildingMasterObj } from "@crema/types/models/apps/BuildingMaster";

type Props = {
  list: BuildingMasterObj[];
  loading: boolean;
  setToggleDetails: (show: boolean) => void;
  setToggleEdit: (show: boolean) => void;
  setToggleDelete: (show: boolean) => void;
};

const TableView = (props: Props) => {
  const { list, loading, setToggleDetails, setToggleEdit, setToggleDelete } =
    props;

  return (
    <>
      <Hidden smDown>
        {loading ? (
          <CommonListSkeleton />
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
              <CustomListEmptyResult
                loading={loading}
                placeholder={<CommonListSkeleton />}
              />
            }
            renderRow={(item) => (
              <ListItem
                key={item.building_code}
                item={item}
                setToggleDetails={setToggleDetails}
                setToggleEdit={setToggleEdit}
                setToggleDelete={setToggleDelete}
              />
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
            <CustomListEmptyResult
              loading={loading}
              placeholder={<CommonListSkeleton />}
            />
          }
          renderRow={(dealer) => (
            <ListItemMobile key={dealer.building_code} dealer={dealer} />
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
