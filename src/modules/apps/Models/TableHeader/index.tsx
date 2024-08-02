import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { alpha, TableCell, TableHead, TableRow } from "@mui/material";

type Props = {};


const TableHeader = (props: Props) => {
 return(
  <TableHead>
  <TableRow>
    <TableCell>Model Id</TableCell>
    <TableCell>Brand name</TableCell>
    <TableCell>Model name</TableCell>
    <TableCell>Description</TableCell>
    <TableCell>Status</TableCell>    
    <TableCell>Action</TableCell>


  </TableRow>
</TableHead>
 )
};

export default TableHeader;

TableHeader.defaultProps = {};
