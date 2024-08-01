import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TableHeader from "./TableHeader";
import { Hidden } from "@mui/material";
import TableView from "./TableView";
import AppsPagination from "@crema/components/AppsPagination";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import AppsHeaderLight from "@crema/components/AppsContainer/AppsHeaderLight";
import AppsContent from "@crema/components/AppsContainer/AppsContent";
import AppsFooter from "@crema/components/AppsContainer/AppsFooter";
import AppsContainer from "@crema/components/AppsContainer";
import CardHeader from "./CardHeader/index";

import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem";

import AppConfirmDialog from "@crema/components/AppConfirmDialog";

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

  const data = [
    {
      name: "Admin",
      start_date: "10",
      deadline: "10",
      customer: "Test comment",
    },
    {
      name: "CNC",
      start_date: "10",
      deadline: "10",
      customer: "Test comment",
    },
    {
      name: "Drilling",
      start_date: "10",
      deadline: "10",
      customer: "Test comment",
    },
    {
      name: "Grinding",
      start_date: "10",
      deadline: "10",
      customer: "Test comment",
    },
    {
      name: "Assembly",
      start_date: "10",
      deadline: "10",
      customer: "Test comment",
    },
  ];

  const handleUpdateClose = () => {
    setToggleEdit(false);
  };

  const handleCreateClose = () => {
    setToggleCreate(false);
  };

  return (
    <AppsContainer
      title={"Tasks" as string}
      subtitle="Project 1"
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
        <AppsHeaderLight>
          <TableHeader />
        </AppsHeaderLight>
        <AppsContent>
          <TableView
            list={data}
            loading={loading}
            setToggleDetails={setToggleDetails}
            setToggleEdit={setToggleEdit}
            setToggleDelete={setToggleDelete}
          />
        </AppsContent>

        <Hidden smUp>
          <AppsFooter>
            <AppsPagination
              count={totalContacts}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        </Hidden>
      </>

      <AppConfirmDialog
        open={toggleDelete}
        onDeny={setToggleDelete}
        onConfirm={onBlockConfirm}
        title={"Delete this Task?"}
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
