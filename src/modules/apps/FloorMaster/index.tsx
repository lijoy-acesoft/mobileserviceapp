import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Hidden, Paper, Table, TableBody, TableContainer, TableRow, TableCell } from "@mui/material";
import TableHeader from "./TableHeader";
import { categories as data } from "../dummydata/product";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";

import AppsContainer from "@crema/components/AppsContainer";
import CardHeader from "./CardHeader/index";
import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem";
import AppConfirmDialog from "@crema/components/AppConfirmDialog";
import TableContent from "./TableView";

const TableListing = () => {
  const { pathname } = useLocation();

  const [filterText, onSetFilterText] = useState("");

  const [page, setPage] = useState(0);

  const totalContacts = 6;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [toggleDetails, setToggleDetails] = useState(false);
  const [toggleCreate, setToggleCreate] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);

  const onBlockConfirm = () => {
    setToggleDelete(false);
  };

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    value: number
  ) => {
    setPage(value);
  };



  const handleUpdateClose = () => {
    setToggleEdit(false);
  };

  const handleCreateClose = () => {
    setToggleCreate(false);
  };

  return (
    <AppsContainer
      title={"Category" as string}
      isbutton
      buttontext="Create New"
      onButtonClick={() => setToggleCreate(true)}
    >
      <>
        <AppsHeader>
          <CardHeader
            filterText={filterText}
            onSetFilterText={onSetFilterText}
            page={page}
            onPageChange={onPageChange}
          />
        </AppsHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHeader />
            <TableBody>
              {data.map((row, index:any) => {
                return (
                  <TableContent
                    index={index}
                    row={row}
                    handleEditClick={() => setToggleEdit(!toggleEdit)}
                    handleDeleteClick={() => setToggleDelete(!toggleDelete)}
                  />)
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </>

      <AppConfirmDialog
        open={toggleDelete}
        onDeny={setToggleDelete}
        onConfirm={onBlockConfirm}
        title={"Are You Sure You want to disable this Category ?"}
        dialogTitle={"Confirm"}
      />
      <AddItem toggleAdd={toggleCreate} handleAddClose={handleCreateClose} />
      <UpdateItem
        toggleUpdate={toggleEdit}
        handleUpdateClose={handleUpdateClose}
      />
    </AppsContainer>
  );
};

export default TableListing;

