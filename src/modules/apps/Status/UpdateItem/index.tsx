import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, TextField, Checkbox, FormControlLabel } from "@mui/material";

const AddNewStatus = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    status: '',
    description: '',
  });


  const handleAdd = () => {
    // Handle the form submission logic here
    console.log(formData);
    handleClose(!open);
  };

  return (
    <Dialog open={open} onClose={() => handleClose(!open)}>
      <DialogContent>
        <DialogContentText>
          Update Status
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Status"
          name="status"
          type="text"
          fullWidth
          value={formData.status}
        />
        <TextField
          margin="dense"
          label="Description"
          name="description"
          type="text"
          multiline
          rows={4}
          fullWidth
          value={formData.description}
        />
      
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(!open)} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewStatus;
