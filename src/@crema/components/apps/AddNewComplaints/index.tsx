import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, TextField, Checkbox, FormControlLabel } from "@mui/material";

const AddNewComplaint = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    complaint: '',
    description: '',
    isActive:false
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
          Create New Complaint
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Complaints"
          name="complaints"
          type="text"
          fullWidth
          value={formData.complaint}
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
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewComplaint;
