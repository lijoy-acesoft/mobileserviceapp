import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { alpha, TableCell, TableHead, TableRow } from "@mui/material";

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Employee Code</TableCell>
        <TableCell>Employee Name</TableCell>
        <TableCell>Nationality</TableCell>
        <TableCell>Designation</TableCell>
        <TableCell>Joining Date</TableCell>
        <TableCell>Mobile No</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>visa no</TableCell>
        <TableCell>visa exp</TableCell>
        <TableCell>Active Status</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;

TableHeader.defaultProps = {};
