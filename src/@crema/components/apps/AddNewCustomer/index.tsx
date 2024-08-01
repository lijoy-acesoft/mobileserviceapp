import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

const AddNewCustomer = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    accountNumber: '',
    branchCode: '',
    phone: '',
    email: '',
    emiratesId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    // Handle the form submission logic here
    console.log(formData);
    handleClose(!open);
  };

  return (
    <Dialog open={open} onClose={() => handleClose(!open)}>
      <DialogContent>
        <DialogContentText>
          Create New Customer
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Customer Name"
          name="customerName"
          type="text"
          fullWidth
          value={formData.customerName}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Account Number"
          name="accountNumber"
          type="text"
          fullWidth
          value={formData.accountNumber}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Branch Code"
          name="branchCode"
          type="text"
          fullWidth
          value={formData.branchCode}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Phone"
          name="phone"
          type="text"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Emirates ID"
          name="emiratesId"
          type="text"
          fullWidth
          value={formData.emiratesId}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(!open)} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewCustomer;
