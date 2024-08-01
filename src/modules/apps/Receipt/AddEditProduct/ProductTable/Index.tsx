import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TableHeader from "./TableHeader";
import TableView from "./TableView";
import AppsHeaderLight from "@crema/components/AppsContainer/AppsHeaderLight";
import AppsContent from "@crema/components/AppsContainer/AppsContent";
import AppsContainer from "@crema/components/AppsContainer";

import ProductDrawer from "../AddProduct/Index";

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

  const data = [];

  const handleUpdateClose = () => {
    setToggleEdit(false);
  };

  const handleCreateClose = () => {
    setToggleCreate(false);
  };

  return (
    <AppsContainer
      title={"Products" as string}
      isbutton
      buttontext="Create New"
      onButtonClick={() => setToggleCreate(true)}
    >
      <>
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
      </>
      <ProductDrawer open={toggleCreate} onClose={handleCreateClose} />
    </AppsContainer>
  );
};

export default TableListing;
