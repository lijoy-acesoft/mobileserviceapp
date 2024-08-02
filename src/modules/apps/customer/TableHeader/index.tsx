import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { alpha, TableCell, TableHead, TableRow } from "@mui/material";

type Props = {};


const TableHeader = (props: Props) => {
 return(
  <TableHead>
  <TableRow>
    <TableCell>customer code</TableCell>
    <TableCell>customer name</TableCell>
    <TableCell>phone</TableCell>
    <TableCell>email</TableCell>    
    <TableCell>emiratesID</TableCell>
    <TableCell>address</TableCell>
    <TableCell>Action</TableCell>


  </TableRow>
</TableHead>
 )
};

export default TableHeader;

TableHeader.defaultProps = {};