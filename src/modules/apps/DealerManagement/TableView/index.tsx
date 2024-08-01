import AppList from "@crema/components/AppList";
import CustomListEmptyResult from "@crema/components/AppList/CustomListEmptyResult";
import DealerListSkeleton from "@crema/components/AppSkeleton/DealerListSkelton";
import { Hidden } from "@mui/material";
import ListItem from "./ListItem";
import ListItemMobile from "./ListItem/ListItemMobile";
import { DealerObjType } from "@crema/types/models/apps/Dealer";

type Props = {
  list: DealerObjType[];
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
          <DealerListSkeleton />
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
                placeholder={<DealerListSkeleton />}
              />
            }
            renderRow={(dealer) => (
              <ListItem
                key={dealer.dlr_code}
                dealer={dealer}
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
              placeholder={<DealerListSkeleton />}
            />
          }
          renderRow={(dealer) => (
            <ListItemMobile key={dealer.dlr_code} dealer={dealer} />
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
