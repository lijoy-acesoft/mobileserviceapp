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
import DealerDetails from "./DealerDetails";
import UpdateDealer from "./DealerUpdate";
import CreateDealer from "./DealerCreate";
import AppConfirmDialog from "@crema/components/AppConfirmDialog";

const DealerListing = () => {
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
      dlr_code: "DE501",
      dealership: "Luxe Motors",
      admin_name: "Samantha",
      salesperson: "Emily Stone",
      email: "emily@luxemotors.com",
      province: "BC",
      status: "blocked",
    },
    {
      dlr_code: "DE502",
      dealership: "Prestige Auto",
      admin_name: "John",
      salesperson: "Liam Neeson",
      email: "liam@prestigeauto.com",
      province: "AB",
      status: "blocked",
    },
    {
      dlr_code: "DE503",
      dealership: "Velocity Cars",
      admin_name: "Mark",
      salesperson: "Jane Doe",
      email: "jane@velocitycars.com",
      province: "QC",
      status: "available",
    },
    {
      dlr_code: "DE504",
      dealership: "Elite Drive",
      admin_name: "Lucas",
      salesperson: "Nora Fatehi",
      email: "nora@elitedrive.com",
      province: "MB",
      status: "available",
    },
    {
      dlr_code: "DE505",
      dealership: "AutoLux",
      admin_name: "Sophie",
      salesperson: "Chris Evans",
      email: "chris@autolux.com",
      province: "SK",
      status: "available",
    },
    {
      dlr_code: "DE506",
      dealership: "Imperial Motors",
      admin_name: "Oliver",
      salesperson: "Megan Fox",
      email: "megan@imperialmotors.com",
      province: "NS",
      status: "available",
    },
    {
      dlr_code: "DE507",
      dealership: "Supreme Autos",
      admin_name: "Ella",
      salesperson: "Tom Hardy",
      email: "tom@supremeautos.com",
      province: "NL",
      status: "available",
    },
    {
      dlr_code: "DE508",
      dealership: "Horizon Cars",
      admin_name: "Jack",
      salesperson: "Scarlett Johansson",
      email: "scarlett@horizoncars.com",
      province: "PE",
      status: "available",
    },
    {
      dlr_code: "DE509",
      dealership: "Dynasty Wheels",
      admin_name: "Mia",
      salesperson: "Hugh Jackman",
      email: "hugh@dynastywheels.com",
      province: "NB",
      status: "available",
    },
    {
      dlr_code: "DE510",
      dealership: "Future Rides",
      admin_name: "Leo",
      salesperson: "Angelina Jolie",
      email: "angelina@futurerides.com",
      province: "NT",
      status: "available",
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
      title={"Dealer Management" as string}
      isbutton
      buttontext="Create Dealer"
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
        <AppsHeader>
          <TableHeader />
        </AppsHeader>
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
      <DealerDetails
        isShowDetail={toggleDetails}
        onShowDetail={setToggleDetails}
      />
      <UpdateDealer
        isAddContact={toggleEdit}
        handleAddContactClose={handleUpdateClose}
      />
      <CreateDealer
        isAddContact={toggleCreate}
        handleAddContactClose={handleCreateClose}
      />
      <AppConfirmDialog
        open={toggleDelete}
        onDeny={setToggleDelete}
        onConfirm={onBlockConfirm}
        title={"Block dealer Kate Williams?"}
        dialogTitle={"Confirm"}
      />
    </AppsContainer>
  );
};

export default DealerListing;
