import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TableHeader from "./TableHeader";
import CardHeader from "./CardHeader";
import { Hidden } from "@mui/material";
import TableView from "./TableView";
import AppsPagination from "@crema/components/AppsPagination";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import AppsContent from "@crema/components/AppsContainer/AppsContent";
import AppsFooter from "@crema/components/AppsContainer/AppsFooter";
import AppsContainer from "@crema/components/AppsContainer";

const VehicleListing = () => {
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
      auction_no: "AN10521",
      dealer_code: "DE530",
      created_date: "14/02/2023",
      dealer: "Test Test",
      delivery_status: "TBD",
      make: "Honda",
      model: "civic",
      admin_name: "kai",
    },
    {
      auction_no: "AN10522",
      dealer_code: "DE530",
      created_date: "14/02/2023",
      dealer: "Test Test",
      delivery_status: "TBD",
      make: "Honda",
      model: "civic",
      admin_name: "kai",
    },
    {
      auction_no: "AN10523",
      dealer_code: "DE530",
      created_date: "14/02/2023",
      dealer: "Test Test",
      delivery_status: "TBD",
      make: "Honda",
      model: "civic",
      admin_name: "kai",
    },
    {
      auction_no: "AN10524",
      dealer_code: "DE530",
      created_date: "14/02/2023",
      dealer: "Test Test",
      delivery_status: "TBD",
      make: "Honda",
      model: "civic",
      admin_name: "kai",
    },
    {
      auction_no: "AN10525",
      dealer_code: "DE530",
      created_date: "14/02/2023",
      dealer: "Test Test",
      delivery_status: "TBD",
      make: "Honda",
      model: "civic",
      admin_name: "kai",
    },
    {
      auction_no: "AN10526",
      dealer_code: "DE530",
      created_date: "14/02/2023",
      dealer: "Test Test",
      delivery_status: "TBD",
      make: "Honda",
      model: "civic",
      admin_name: "kai",
    },
    {
      auction_no: "AN10527",
      dealer_code: "DE530",
      created_date: "14/02/2023",
      dealer: "Test Test",
      delivery_status: "TBD",
      make: "Honda",
      model: "civic",
      admin_name: "kai",
    },
  ];

  return (
    <AppsContainer title={"TBD Vehicles" as string}>
      <>
        <AppsHeader>
          <CardHeader
            filterText={filterText}
            onSetFilterText={onSetFilterText}
            page={page}
            onPageChange={onPageChange}
          />
        </AppsHeader>
        <AppsHeader>
          <TableHeader />
        </AppsHeader>
        <AppsContent>
          <TableView list={data} loading={loading} />
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
    </AppsContainer>
  );
};

export default VehicleListing;
