import React from "react";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import AppSearchBar from "@crema/components/AppSearchBar";
import { TextField } from "@mui/material";

const CardHeader = ({ filterText, onSetFilterText, visaDays, onSetVisaDays }) => {
  return (
    <AppsHeader>
      <AppSearchBar
        iconPosition="right"
        overlap={false}
        value={filterText}
        onChange={(event) => onSetFilterText(event.target.value)}
        placeholder="Search Here"
      />
      <TextField
        label="Days to Visa Expire"
        variant="outlined"
        type="number"
        value={visaDays}
        onChange={(event) => onSetVisaDays(event.target.value)}
        placeholder="Enter days"
        style={{ marginLeft: 16 }}
      />
    </AppsHeader>
  );
};

export default CardHeader;
