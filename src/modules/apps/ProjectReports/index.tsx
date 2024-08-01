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
      id: 1,
      activity: "Admin",
      employee: "Employee 1",
      per_hour_cost: 5,
      actual_hours: 10,
      actual_total_cost: 50,
      planned_hours: 12,
      planned_total_cost: 60,
      cost_variance: 10,
    },
    {
      id: 2,
      activity: "CNC",
      employee: "Employee 2",
      per_hour_cost: 30,
      actual_hours: 8,
      actual_total_cost: 240,
      planned_hours: 6,
      planned_total_cost: 180,
      cost_variance: -60,
    },
    {
      id: 3,
      activity: "Drilling",
      employee: "Employee 3",
      per_hour_cost: 15,
      actual_hours: 10,
      actual_total_cost: 150,
      planned_hours: 14,
      planned_total_cost: 210,
      cost_variance: -60,
    },
    {
      id: 4,
      activity: "Grinding",
      employee: "Employee 4",
      per_hour_cost: 25,
      actual_hours: 5,
      actual_total_cost: 125,
      planned_hours: 3,
      planned_total_cost: 75,
      cost_variance: 50,
    },
    {
      id: 5,
      activity: "Assembly",
      employee: "Employee 5",
      per_hour_cost: 20,
      actual_hours: 10,
      actual_total_cost: 200,
      planned_hours: 10,
      planned_total_cost: 200,
      cost_variance: 0,
    },
    {
      id: 6,
      activity: "Painting",
      employee: "Employee 6",
      per_hour_cost: 18,
      actual_hours: 7,
      actual_total_cost: 126,
      planned_hours: 6,
      planned_total_cost: 108,
      cost_variance: -18,
    },
    {
      id: 7,
      activity: "Welding",
      employee: "Employee 7",
      per_hour_cost: 22,
      actual_hours: 12,
      actual_total_cost: 264,
      planned_hours: 10,
      planned_total_cost: 220,
      cost_variance: -44,
    },
    {
      id: 8,
      activity: "Inspection",
      employee: "Employee 8",
      per_hour_cost: 12,
      actual_hours: 5,
      actual_total_cost: 60,
      planned_hours: 7,
      planned_total_cost: 84,
      cost_variance: 24,
    },
    {
      id: 9,
      activity: "Packaging",
      employee: "Employee 9",
      per_hour_cost: 10,
      actual_hours: 8,
      actual_total_cost: 80,
      planned_hours: 6,
      planned_total_cost: 60,
      cost_variance: -20,
    },
    {
      id: 10,
      activity: "Logistics",
      employee: "Employee 10",
      per_hour_cost: 14,
      actual_hours: 9,
      actual_total_cost: 126,
      planned_hours: 8,
      planned_total_cost: 112,
      cost_variance: -14,
    },
  ];

  const handleUpdateClose = () => {
    setToggleEdit(false);
  };

  const handleCreateClose = () => {
    setToggleCreate(false);
  };

  return (
    <AppsContainer title={"Project Reports" as string}>
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
        title={"Delete this Project?"}
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
