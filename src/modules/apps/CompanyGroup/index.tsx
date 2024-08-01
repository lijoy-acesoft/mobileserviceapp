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
import FilterModal from "./Filters/Index";

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

  const [toggleFilter, setToggleFilter] = useState(false);
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
      group_code: "000000001",
      group_name: "HSC Contracting LLC",
      is_active: true,
      created_by: "admin@bioware.com",
      created_date: "04-Mar-2024 16:04:4 PM",
      modified_by: "Admin@bioware.com",
      modified_date: "06-Mar-2024 16:04:4 PM",
    },
    {
      group_code: "000000002",
      group_name: "Fromsoftware",
      is_active: false,
      created_by: "admin@fromsoft.com",
      created_date: "04-Mar-2024 16:04:4 PM",
      modified_by: "Admin@fromsoft.com",
      modified_date: "06-Mar-2024 16:04:4 PM",
    },
    {
      group_code: "000000003",
      group_name: "Redsky Inc",
      is_active: true,
      created_by: "admin@redsky.com",
      created_date: "04-Mar-2024 16:04:4 PM",
      modified_by: "Admin@redsky.com",
      modified_date: "06-Mar-2024 16:04:4 PM",
    },
    {
      group_code: "000000004",
      group_name: "Bethesda Pvt Ltd",
      is_active: true,
      created_by: "admin@bethesda.com",
      created_date: "04-Mar-2024 16:04:4 PM",
      modified_by: "Admin@bethesda.com",
      modified_date: "06-Mar-2024 16:04:4 PM",
    },
    {
      group_code: "000000005",
      group_name: "Alphabet",
      is_active: true,
      created_by: "admin@alphabet.com",
      created_date: "04-Mar-2024 16:04:4 PM",
      modified_by: "Admin@alphabet.com",
      modified_date: "06-Mar-2024 16:04:4 PM",
    },
    {
      group_code: "000000006",
      group_name: "Microsoft",
      is_active: true,
      created_by: "admin@microsoft.com",
      created_date: "04-Mar-2024 16:04:4 PM",
      modified_by: "Admin@microsoft.com",
      modified_date: "06-Mar-2024 16:04:4 PM",
    },
  ];

  const handleUpdateClose = () => {
    setToggleEdit(false);
  };

  const handleCreateClose = () => {
    setToggleCreate(false);
  };

  const handleFilterClose = () => {
    setToggleFilter(false);
  };

  return (
    <AppsContainer
      title={"Company Group" as string}
      isbutton
      buttontext="Create Group"
      onButtonClick={() => setToggleCreate(true)}
      onButton2Click={() => setToggleFilter(true)}
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
        title={"Delete this Group?"}
        dialogTitle={"Confirm"}
      />
      <AddItem toggleAdd={toggleCreate} handleAddClose={handleCreateClose} />
      <UpdateItem
        toggleUpdate={toggleEdit}
        handleUpdateClose={handleUpdateClose}
      />
      <FilterModal open={toggleFilter} handleClose={handleFilterClose} />
    </AppsContainer>
  );
};

export default TableListing;
