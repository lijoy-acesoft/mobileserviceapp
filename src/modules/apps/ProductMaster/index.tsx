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
      floor_code: "000000001",
      floor_name: "Third Floor",
      building_code: "00000000001",
      building_name: "OJ4 Tower",
      site_code: "0000000001",
      site_name: "Head Office",
    },
    {
      floor_code: "000000002",
      floor_name: "Fourth Floor",
      building_code: "00000000002",
      building_name: "BST Plaza",
      site_code: "0000000002",
      site_name: "Branch Office A",
    },
    {
      floor_code: "000000003",
      floor_name: "Fifth Floor",
      building_code: "00000000003",
      building_name: "CST Center",
      site_code: "0000000003",
      site_name: "Branch Office B",
    },
    {
      floor_code: "000000004",
      floor_name: "Sixth Floor",
      building_code: "00000000004",
      building_name: "DST Building",
      site_code: "0000000004",
      site_name: "Branch Office C",
    },
    {
      floor_code: "000000005",
      floor_name: "Seventh Floor",
      building_code: "00000000005",
      building_name: "EST Tower",
      site_code: "0000000005",
      site_name: "Branch Office D",
    },
    {
      floor_code: "000000006",
      floor_name: "Eighth Floor",
      building_code: "00000000006",
      building_name: "FST Plaza",
      site_code: "0000000006",
      site_name: "Branch Office E",
    },
    {
      floor_code: "000000007",
      floor_name: "Ninth Floor",
      building_code: "00000000007",
      building_name: "GST Center",
      site_code: "0000000007",
      site_name: "Branch Office F",
    },
    {
      floor_code: "000000008",
      floor_name: "Tenth Floor",
      building_code: "00000000008",
      building_name: "HST Building",
      site_code: "0000000008",
      site_name: "Branch Office G",
    },
    {
      floor_code: "000000009",
      floor_name: "Eleventh Floor",
      building_code: "00000000009",
      building_name: "IST Tower",
      site_code: "0000000009",
      site_name: "Branch Office H",
    },
    {
      floor_code: "000000010",
      floor_name: "Twelfth Floor",
      building_code: "00000000010",
      building_name: "JST Plaza",
      site_code: "0000000010",
      site_name: "Branch Office I",
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
      title={"Product Master" as string}
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
        title={"Delete this Group?"}
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
