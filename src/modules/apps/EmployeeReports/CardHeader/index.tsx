import React from "react";
import Box from "@mui/material/Box";
import AppSelect from "@crema/components/AppSelect";
import AppDatePicker from "@crema/components/AppFormComponents/AppDateFieldRegular";
import { Hidden, FormControl, InputLabel } from "@mui/material";
import { useIntl } from "react-intl";
import AppsPagination from "@crema/components/AppsPagination";

type Props = {
  filterText: string;
  onSetFilterText: (filterText: string) => void;
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    data: number
  ) => void;
};

const DealerHeaderWithSearch = (props: Props) => {
  const { filterText, onSetFilterText, page, onPageChange } = props;

  const totalContacts = 6;

  const { messages } = useIntl();

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
        <FormControl sx={{ marginRight: 2, minWidth: 120, marginBlock: 5 }}>
          <InputLabel id="select-label">Select Employee</InputLabel>
          <AppSelect
            menus={["All Employees", "Employee 1", "Employee 2"]}
            defaultValue={"All Employees"}
            onChange={() => {}}
          />
        </FormControl>

        <FormControl sx={{ marginRight: 2 }}>
          <InputLabel shrink htmlFor="from-date">
            From Date
          </InputLabel>
          <AppDatePicker onChange={() => {}} />
        </FormControl>

        <FormControl>
          <InputLabel shrink htmlFor="to-date">
            To Date
          </InputLabel>
          <AppDatePicker onChange={() => {}} />
        </FormControl>
      </Box>
      <Hidden smDown>
        <AppsPagination
          sx={{ ml: 2 }}
          count={totalContacts}
          page={page}
          onPageChange={onPageChange}
        />
      </Hidden>
    </>
  );
};

export default DealerHeaderWithSearch;

DealerHeaderWithSearch.defaultProps = {
  checkedContacts: [],
  filterText: "",
  page: 0,
};
