import React from "react";
import Box from "@mui/material/Box";
import AppSelect from "@crema/components/AppSelect";
import { Hidden } from "@mui/material";
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
        <AppSelect
          menus={["All Projects", "Project 1", "Project 2"]}
          defaultValue={"All Projects"}
          onChange={() => {}}
        />
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
