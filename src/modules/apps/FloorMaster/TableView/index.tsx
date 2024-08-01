import { IconButton, TableCell, TableRow } from "@mui/material";
import { RiEditCircleLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";

const TableContent = ({ index, row, handleDeleteClick, handleEditClick }: any) => {
  console.log(row, "index123");
  return (
    <TableRow key={index}>
            <TableCell align="left">{row.id}</TableCell>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell>{row.description}</TableCell>
      <TableCell align="left">
        <IconButton
          onClick={() => handleEditClick(row)}
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
          onClick={() => handleDeleteClick(row)}
          sx={{
            color: (theme) => theme.palette.error.light,
            padding: 2,
            "& .MuiSvgIcon-root": {
              fontSize: 22,
            },
          }}
          size="large"
        >
          <TiDeleteOutline size={25} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableContent;
