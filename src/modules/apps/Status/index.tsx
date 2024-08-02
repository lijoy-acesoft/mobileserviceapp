import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TableHeader from "./TableHeader";
import { Hidden, Paper, Table, TableContainer } from "@mui/material";
import TableView from "./TableView";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";

import AppsContainer from "@crema/components/AppsContainer";
import CardHeader from "./CardHeader/index";
import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem";

import AppConfirmDialog from "@crema/components/AppConfirmDialog";
import { statusDetails } from "../dummydata/product";

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
  });

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
    <AppsContainer title={"Status" as string}
      onButtonClick={()=>setToggleCreate(!toggleCreate)}
      isbutton
      buttontext="Create Status"
    >
      <>
        <AppsHeader>
          <CardHeader
            filterText={filterText}
            onSetFilterText={onSetFilterText}
            page={page}
            rowsPerPage={null}
            handleChangePage={null}
            count={null}
          />
        </AppsHeader>
        <TableContainer component={Paper}>
          <Table>
            <TableHeader />
            {statusDetails.map((statusDetail,index)=>(
              <TableView
              handleEditClick={()=>setToggleEdit(!toggleEdit)}
              handleDeleteClick={()=>setToggleDelete(!toggleDelete)}
              list={statusDetail}
              />
            ))}
            
          </Table>
        </TableContainer>
      </>

      <AppConfirmDialog
        open={toggleDelete}
        onDeny={setToggleDelete}
        onConfirm={onBlockConfirm}
        title={"Delete this Customer?"}
        dialogTitle={"Confirm"}
      />
      <AddItem open={toggleCreate} handleClose={handleCreateClose} />
      <UpdateItem
        open={toggleEdit}
        handleClose={handleUpdateClose}
      />
    </AppsContainer>
  );
};

export default TableListing;
