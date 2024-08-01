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

import AddItem from "./AddItem/index";
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
      company_group: "Alphabet Inc",
      site_code: "00000001",
      site_name: "Head Office",
      addresslineone: "California",
      addresslinetwo: "California",
      city: "Cali",
      sequence_prefix: "",
      site_email_id: "alphabetcali@google.com",
      is_active: true,
      created_by: "alphabet@google.com",
      created_date: "04-Mar-2024 16:01:20 PM",
      modified_by: "alphabet@google.com",
      modified_date: "04-Mar-2024 16:01:20 PM",
    },
    {
      company_group: "Alphabet Inc",
      site_code: "00000002",
      site_name: "New York Office",
      addresslineone: "New York",
      addresslinetwo: "New York",
      city: "New York",
      sequence_prefix: "",
      site_email_id: "alphabetny@google.com",
      is_active: true,
      created_by: "alphabet@google.com",
      created_date: "05-Mar-2024 10:15:30 AM",
      modified_by: "alphabet@google.com",
      modified_date: "05-Mar-2024 10:15:30 AM",
    },
    {
      company_group: "Alphabet Inc",
      site_code: "00000003",
      site_name: "Texas Office",
      addresslineone: "Texas",
      addresslinetwo: "Texas Office",
      city: "Austin",
      sequence_prefix: "",
      site_email_id: "alphabettexas@google.com",
      is_active: true,
      created_by: "alphabet@google.com",
      created_date: "06-Mar-2024 11:20:45 AM",
      modified_by: "alphabet@google.com",
      modified_date: "06-Mar-2024 11:20:45 AM",
    },
    {
      company_group: "Alphabet Inc",
      site_code: "00000004",
      site_name: "Florida Office",
      addresslineone: "Florida",
      addresslinetwo: "Florida",
      city: "Miami",
      sequence_prefix: "",
      site_email_id: "alphabetfl@google.com",
      is_active: true,
      created_by: "alphabet@google.com",
      created_date: "07-Mar-2024 14:35:50 PM",
      modified_by: "alphabet@google.com",
      modified_date: "07-Mar-2024 14:35:50 PM",
    },
    {
      company_group: "Alphabet Inc",
      site_code: "00000005",
      site_name: "Washington Office",
      addresslineone: "Washington",
      addresslinetwo: "Washington",
      city: "Seattle",
      sequence_prefix: "",
      site_email_id: "alphabetwa@google.com",
      is_active: true,
      created_by: "alphabet@google.com",
      created_date: "08-Mar-2024 09:45:00 AM",
      modified_by: "alphabet@google.com",
      modified_date: "08-Mar-2024 09:45:00 AM",
    },
    {
      company_group: "Alphabet Inc",
      site_code: "00000006",
      site_name: "Illinois Office",
      addresslineone: "Illinois",
      addresslinetwo: "Illinois",
      city: "Chicago",
      sequence_prefix: "",
      site_email_id: "alphabetil@google.com",
      is_active: true,
      created_by: "alphabet@google.com",
      created_date: "09-Mar-2024 13:55:10 PM",
      modified_by: "alphabet@google.com",
      modified_date: "09-Mar-2024 13:55:10 PM",
    },
    {
      company_group: "Alphabet Inc",
      site_code: "00000007",
      site_name: "Nevada Office",
      addresslineone: "Nevada",
      addresslinetwo: "Nevada",
      city: "Las Vegas",
      sequence_prefix: "",
      site_email_id: "alphabetnv@google.com",
      is_active: true,
      created_by: "alphabet@google.com",
      created_date: "10-Mar-2024 15:05:20 PM",
      modified_by: "alphabet@google.com",
      modified_date: "10-Mar-2024 15:05:20 PM",
    },
    {
      company_group: "Alphabet Inc",
      site_code: "00000008",
      site_name: "Massachusetts Office",
      addresslineone: "Massachusetts",
      addresslinetwo: "Massachusetts",
      city: "Boston",
      sequence_prefix: "",
      site_email_id: "alphabetma@google.com",
      is_active: true,
      created_by: "alphabet@google.com",
      created_date: "11-Mar-2024 08:15:30 AM",
      modified_by: "alphabet@google.com",
      modified_date: "11-Mar-2024 08:15:30 AM",
    },
    {
      company_group: "Alphabet Inc",
      site_code: "00000009",
      site_name: "Georgia Office",
      addresslineone: "Georgia",
      addresslinetwo: "Georgia",
      city: "Atlanta",
      sequence_prefix: "",
      site_email_id: "alphabetga@google.com",
      is_active: true,
      created_by: "alphabet@google.com",
      created_date: "12-Mar-2024 12:25:40 PM",
      modified_by: "alphabet@google.com",
      modified_date: "12-Mar-2024 12:25:40 PM",
    },
    {
      company_group: "Alphabet Inc",
      site_code: "00000010",
      site_name: "Colorado Office",
      addresslineone: "Colorado",
      addresslinetwo: "Colorado",
      city: "Denver",
      sequence_prefix: "",
      site_email_id: "alphabetco@google.com",
      is_active: true,
      created_by: "alphabet@google.com",
      created_date: "13-Mar-2024 17:35:50 PM",
      modified_by: "alphabet@google.com",
      modified_date: "13-Mar-2024 17:35:50 PM",
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
      title={"SiteMaster" as string}
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
