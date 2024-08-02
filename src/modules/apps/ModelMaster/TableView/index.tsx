import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";
import { TiDeleteOutline } from "react-icons/ti";
import { RiEditCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

type Props = {
  list: any;
  index?: boolean;
  setToggleDetails?: (show: boolean) => void;
  handleDeleteClick: any;
  handleEditClick: any;
};

const TableView = (props: Props) => {
  const { list, index, setToggleDetails, handleDeleteClick, handleEditClick } = props;
  const navigate = useNavigate();

  const handleEditNavigation = () => {
    navigate(`/apps/technician/${list?.employeeCode}/update-technician`);
  };

  return (
    <TableBody>
      <TableRow key={list?.employeeCode}>
        <TableCell>{list?.employeeCode}</TableCell>
        <TableCell>{list?.employeeName}</TableCell>
        <TableCell>{list?.nationality}</TableCell>
        <TableCell>{list?.designation}</TableCell>
        <TableCell>{list?.joiningDate}</TableCell>
        <TableCell>{list?.mobileNo}</TableCell>
        <TableCell>{list?.email}</TableCell>
        <TableCell>{list?.visaNumber}</TableCell>
        <TableCell>{list?.visaExpiryDate}</TableCell>
        <TableCell>{list?.activeStatus ? 'Active' : 'Inactive'}</TableCell>
        <TableCell align="left">
          <IconButton
            onClick={handleEditNavigation}
            sx={{
              color: (theme) => theme.palette.primary.dark,
              padding: 2,
              "& .MuiSvgIcon-root": {
                fontSize: 22,
              },
            }}
            size="large"
          >
            <RiEditCircleLine size={25} />
          </IconButton>
          <IconButton
            onClick={handleDeleteClick}
            sx={{
              color: (theme) => theme.palette.error.light,
              padding: 2,
              "& .MuiSvgIcon-root": {
                fontSize: 22,
              },
            }}
            size="large"
          >
            <TiDeleteOutline size={28} />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableView;
