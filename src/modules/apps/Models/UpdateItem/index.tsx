import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, TextField, Checkbox, FormControlLabel, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const AddNewModel = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    selectedCompany: '',
    modelName: '',
    modelDescription: '',
    isActive: false,
  });

  const companies = [ {name:"Apple",id:1},{name:"Samsung",id:2},{name:"HTC",id:3},{name:"RedMi",id:4}]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
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
          Update Model
        </DialogContentText>
        <FormControl fullWidth margin="dense">
          <InputLabel>Company</InputLabel>
          <Select
            name="selectedCompany"
            value={formData.selectedCompany}
            onChange={handleChange}
            fullWidth
          >
            {companies.map((company) => (
              <MenuItem key={company.id} value={company.name}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Model Name"
          name="modelName"
          type="text"
          fullWidth
          value={formData.modelName}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Model Description"
          name="modelDescription"
          type="text"
          multiline
          rows={4}
          fullWidth
          value={formData.modelDescription}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              color="primary"
            />
          }
          label="Do you want to activate this brand now?"
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

export default AddNewModel;
