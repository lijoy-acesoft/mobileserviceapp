
import { TableCell, TableHead, TableRow,  } from "@mui/material";

type Props = {};


const TableHeader = (props: Props) => {
  return (
    <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Sub Category</TableCell>
                <TableCell align="left">Size</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Threshold</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Action</TableCell>

              </TableRow>
            </TableHead>
  );
};

export default TableHeader;

TableHeader.defaultProps = {};
