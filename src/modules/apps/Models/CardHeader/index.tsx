import React from "react";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import AppSearchBar from "@crema/components/AppSearchBar";
import AppsPagination from "@crema/components/AppsPagination";

const AppHeader = ({
  filterText,
  onSetFilterText,
  
  page,
  rowsPerPage,
  handleChangePage,
  count
}) => {
  return (
    <AppsHeader>
      <AppSearchBar
        iconPosition="right"
        overlap={false}
        value={filterText}
        onChange={(event) => onSetFilterText(event.target.value)}
        placeholder="Search Here"
      />
      {/* <AppsPagination
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
      /> */}
    </AppsHeader>
  );
};

export default AppHeader;
