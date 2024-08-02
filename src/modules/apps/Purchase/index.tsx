import React, { useState } from 'react';
import {
  Container, Grid, Typography, TextField, Select, MenuItem, FormControl,
  InputLabel, Checkbox, FormControlLabel, RadioGroup, Radio, Button, Box,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton
} from '@mui/material';
import { format } from 'date-fns';
import AddIcon from '@mui/icons-material/Add';
import AddNewCustomer from '@crema/components/apps/AddNewCustomer';

const CheckoutPage = () => {
  const [extraTaxEnabledTech, setExtraTaxEnabledTech] = useState(false);
  const [newAccessory, setNewAccessory] = useState('');
  const [newAccessoryQty, setNewAccessoryQty] = useState('');
  const [accessoryDetails, setAccessoryDetails] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [customCustomer, setCustomCustomer] = useState('');
  const [useCustomCustomer, setUseCustomCustomer] = useState(false);
  const [openCreateCustomer, setOpenCreateCustomer] = useState(false);

  // Dummy Data
  const dummyData = {
    customers: ['John Doe', 'Jane Smith', 'Mike Johnson'],
    itemDetails: 'Laptop Repair',
    issueDate: format(new Date(), 'yyyy-MM-dd'),
    invoiceNo: 'INV-12345',
    servicedBy: ['Technician A', 'Technician B'],
    statuses: ['In Progress', 'Completed', 'Pending'],
    positions: ['Front Desk', 'Repair Center'],
    problems: ['Yes', 'No'],
    faults: ['Screen Issue', 'Battery Issue'],
    inventoryItems: [
      { name: 'Screen', price: 100 },
      { name: 'Battery', price: 50 },
    ],
    accessories: [
      { name: 'Charger', price: 30 },
      { name: 'Case', price: 20 },
    ],
  };

  const handleAddAccessory = () => {
    setAccessoryDetails([...accessoryDetails, { name: newAccessory, qty: parseInt(newAccessoryQty, 10) }]);
    setNewAccessory('');
    setNewAccessoryQty('');
  };

  const calculateTotal = () => {
    let total = 0;

    accessoryDetails.forEach(accessory => {
      const item = dummyData.accessories.find(a => a.name === accessory.name);
      if (item) {
        total += item.price * accessory.qty;
      }
    });
    return total;
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Sales</Typography>

      <Box component="section" mb={4} mt={4}>
        <Typography variant="h6" gutterBottom>Item and Customer Detail</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={5}>
            <FormControl fullWidth>
              <InputLabel>Customer</InputLabel>
              <Select
                value={selectedCustomer}
                onChange={(e) => {
                  setSelectedCustomer(e.target.value);
                  setCustomCustomer(''); // Clear custom customer name
                }}
                displayEmpty
              >
                {/* <MenuItem value="" disabled>Select Customer</MenuItem> */}
                {dummyData.customers.map((customer) => (
                  <MenuItem key={customer} value={customer}>{customer}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenCreateCustomer(true)}
              sx={{
                height: 56,
                minWidth: 35,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AddIcon />
            </Button>
          </Grid>
          <Grid item xs={12} sm={1} textAlign="center">
            <Typography>or</Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              label="Custom Customer Name"
              value={customCustomer}
              onChange={(e) => {
                setCustomCustomer(e.target.value);
                setSelectedCustomer(''); // Clear selected customer
              }}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Invoice No." value={dummyData.invoiceNo} fullWidth disabled />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField label="Date" value={format(new Date(), 'yyyy-MM-dd')} fullWidth disabled />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Time" value={format(new Date(), 'HH:mm')} fullWidth disabled />
          </Grid> */}
        </Grid>
      </Box>

      <Box component="section" mb={4}>
        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h2" gutterBottom>Product</Typography>
          <FormControlLabel
            control={<Checkbox checked={extraTaxEnabledTech} onChange={() => setExtraTaxEnabledTech(!extraTaxEnabledTech)} />}
            label="Add Tax"
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Products</InputLabel>
              <Select value={newAccessory} onChange={(e) => setNewAccessory(e.target.value)}>
                {dummyData.accessories.map((item) => (
                  <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Qty" value={newAccessoryQty} onChange={(e) => setNewAccessoryQty(e.target.value)} fullWidth />
          </Grid>
          <Grid item xs={12} mb={3}>
            <Button variant="contained" onClick={handleAddAccessory}>Add</Button>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="subtitle1">Added Product</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Name</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price per Unit</TableCell>
                      <TableCell>Total Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {accessoryDetails.map((accessory, index) => {
                      const item = dummyData.accessories.find(a => a.name === accessory.name);
                      const totalPrice = item ? item.price * accessory.qty : 0;
                      return (
                        <TableRow key={index}>
                          <TableCell>{accessory.name}</TableCell>
                          <TableCell>{accessory.qty}</TableCell>
                          <TableCell>{item ? item.price : 0}</TableCell>
                          <TableCell>{totalPrice}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box component="section" mb={4}>
        <Typography variant="h6" gutterBottom>Other</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Total Qty" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <RadioGroup row>
                <FormControlLabel value="inclusive" control={<Radio />} label="Inclusive" />
                <FormControlLabel value="exclusive" control={<Radio />} label="Exclusive" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Amount" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Advance" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Discount" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Tax (5%)" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Grand Total" fullWidth value={calculateTotal()} disabled />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Select Status</InputLabel>
              <Select
                displayEmpty
              >
                <MenuItem value="" disabled>Select Status</MenuItem>
                <MenuItem value="completed">Payment Completed</MenuItem>
                <MenuItem value="pending">Payment Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">Print</Button>
            <Button variant="contained" color="primary" style={{ marginLeft: 8 }}>Save</Button>
          </Grid>
        </Grid>
      </Box>

      <AddNewCustomer open={openCreateCustomer} handleClose={() => setOpenCreateCustomer(false)} />
    </Container>
  );
};

export default CheckoutPage;
