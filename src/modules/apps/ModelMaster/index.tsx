import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Hidden, Paper, Table, TableContainer } from "@mui/material";
import TableView from "./TableView";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import AppsContainer from "@crema/components/AppsContainer";
import CardHeader from "./CardHeader/index";
import AppConfirmDialog from "@crema/components/AppConfirmDialog";
import { technicians } from "../dummydata/product";
import TableHeader from "./TableHeader";

const TableListing = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [filterText, onSetFilterText] = useState("");
  const [visaDays, onSetVisaDays] = useState("");
  const [page, setPage] = useState(0);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);

  const onBlockConfirm = () => {
    setToggleDelete(false);
  };

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  const filterTechnicians = () => {
    const currentDate = new Date();
    return technicians.filter((technician) => {
      if (visaDays) {
        const visaExpiryDate = new Date(technician.visaExpiryDate);
        if (isNaN(visaExpiryDate.getTime())) {
          return false;
        }
        const diffInTime = visaExpiryDate.getTime() - currentDate.getTime();
        const diffInDays = diffInTime / (1000 * 3600 * 24);
        return diffInDays <= Number(visaDays) && diffInDays >= 0;
      }
      return true;
    });
  };
  
  
  

  return (
    <AppsContainer
      title={"Add Technician" as string}
      onButtonClick={() => navigate('/apps/technician/create-technician')}
      isbutton
      buttontext="Create Technician"
    >
      <>
        <AppsHeader>
          <CardHeader
            filterText={filterText}
            onSetFilterText={onSetFilterText}
            visaDays={visaDays}
            onSetVisaDays={onSetVisaDays}
          />
        </AppsHeader>
        <TableContainer component={Paper}>
          <Table>
            <TableHeader />
            {filterTechnicians().map((technician, index) => (
              <TableView
                key={index}
                handleEditClick={() => setToggleEdit(!toggleEdit)}
                handleDeleteClick={() => setToggleDelete(!toggleDelete)}
                list={technician}
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
    </AppsContainer>
  );
};

export default TableListing;
