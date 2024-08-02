import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";
import { ProjectReportType } from "@crema/types/models/apps/ProjectReport";
import { TiDeleteOutline } from "react-icons/ti";
import { RiEditCircleLine } from "react-icons/ri";

type Props = {
  list: any;
  index?: boolean;
  setToggleDetails?: (show: boolean) => void;
  handleDeleteClick: any;
  handleEditClick: any;
};

const TableView = (props: Props) => {
  const { list, index, setToggleDetails, handleDeleteClick, handleEditClick } = props;
console.log(list.customerName)
  return (
    <TableBody>
 
        <TableRow key={list.statusId}>
          <TableCell>{list.statusId}</TableCell>
          <TableCell>{list.status}</TableCell>
          <TableCell>{list.description}</TableCell>
          <TableCell align="left">
        <IconButton
          onClick={handleEditClick}
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

TableView.defaultProps = {
  list: [],
};
