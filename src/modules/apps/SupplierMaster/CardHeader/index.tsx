import React from "react";
import Box from "@mui/material/Box";
import AppSearchBar from "@crema/components/AppSearchBar";
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
        <AppSearchBar
          iconPosition="right"
          overlap={false}
          value={filterText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onSetFilterText(event.target.value)
          }
          placeholder={messages["common.searchHere"] as string}
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
