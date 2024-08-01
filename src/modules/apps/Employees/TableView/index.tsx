import { useNavigate } from "react-router-dom";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { RiEditCircleLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";

const TableContent = ({ index, row, handleDeleteClick, handleEditClick }) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    // Replace this with the path you want to navigate to
    navigate(`/app/product/product_detail/1`);
  };

  const handleActionClick = (event, action) => {
    event.stopPropagation(); // Stop the event from propagating to the row click event

    if (action === "edit") {
      handleEditClick(row);
    } else if (action === "delete") {
      handleDeleteClick(row);
    }
  };

  return (
    <TableRow
      key={index}
      onClick={handleRowClick}
      style={{ 
        cursor: 'pointer',
        backgroundColor: row.threshold > row.quantity ? 'rgba(255, 0, 0, 0.1)' : 'transparent'
      }}
    >
      <TableCell align="left">
        <img src={row.imageUrl} alt={row.productName} style={{ width: 50, height: 50 }} />
      </TableCell>
      <TableCell align="left">{row.productName}</TableCell>
      <TableCell>{row.description}</TableCell>
      <TableCell>{row.category}</TableCell>
      <TableCell>{row.subCategory}</TableCell>
      <TableCell>{row.size}</TableCell>
      <TableCell>{row.quantity}</TableCell>
      <TableCell>{row.threshold}</TableCell>
      <TableCell>{row.price}</TableCell>
      <TableCell align="left">
        <IconButton
          onClick={(event) => handleActionClick(event, "edit")}
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
          onClick={(event) => handleActionClick(event, "delete")}
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
