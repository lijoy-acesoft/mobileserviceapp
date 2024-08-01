
import { TableCell, TableHead, TableRow, } from "@mui/material";

type Props = {};


const TableHeader = (props: Props) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">Category Id</TableCell>
        <TableCell align="left">Category</TableCell>
        <TableCell align="left">Description</TableCell>
        <TableCell align="left">Action</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;

TableHeader.defaultProps = {};
