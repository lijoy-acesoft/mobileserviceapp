import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, RadioGroup, Radio, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { format } from 'date-fns';

const CheckoutPage = () => {
  const [directDelivery, setDirectDelivery] = useState(false);
  const [deliveryWithoutInvoice, setDeliveryWithoutInvoice] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [problemSolved, setProblemSolved] = useState('');
  const [servicedBy, setServicedBy] = useState('');
  const [faultIn, setFaultIn] = useState('');
  const [inventoryProducts, setInventoryProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');
  const [newQty, setNewQty] = useState('');
  const [inclusive, setInclusive] = useState(true);
  const [dataVisible, setDataVisible] = useState(false);
  const [extraTaxEnabledTech, setExtraTaxEnabledTech]: any = useState()
  const [extraTaxEnabledInv, setExtraTaxEnabledInv]: any = useState()
  const [extraTaxEnabledAcc, setExtraTaxEnabledAcc]: any = useState()

  const [technicianDetails, setTechnicianDetails] = useState([
    { name: 'Technician A', task: 'Screen Repair', timeWorked: 2, perHourCost: 50, totalCost: 100 },
    { name: 'Technician B', task: 'Battery Replacement', timeWorked: 1, perHourCost: 60, totalCost: 60 },
  ]);
  const [newAccessory, setNewAccessory] = useState('');
  const [newAccessoryQty, setNewAccessoryQty] = useState('');
  const [accessoryDetails, setAccessoryDetails] = useState([]);

  // Dummy Data
  const dummyData = {
    customer: 'John Doe',
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

  const handleFetchData = () => {
    // Simulate data fetching and set data visibility
    setDataVisible(true);
  };

  const handleAddInventoryProduct = () => {
    setInventoryProducts([...inventoryProducts, { name: newProduct, qty: parseInt(newQty, 10) }]);
    setNewProduct('');
    setNewQty('');
  };

  const handleAddAccessory = () => {
    setAccessoryDetails([...accessoryDetails, { name: newAccessory, qty: parseInt(newAccessoryQty, 10) }]);
    setNewAccessory('');
    setNewAccessoryQty('');
  };

  const calculateTotal = () => {
    let total = 0;
    inventoryProducts.forEach(product => {
      const item = dummyData.inventoryItems.find(i => i.name === product.name);
      if (item) {
        total += item.price * product.qty;
      }
    });
    accessoryDetails.forEach(accessory => {
      const item = dummyData.accessories.find(a => a.name === accessory.name);
      if (item) {
        total += item.price * accessory.qty;
      }
    });
    technicianDetails.forEach(technician => {
      total += technician.totalCost;
    });
    return total;
  };

  const handleTechnicianChange = (index, field, value) => {
    const updatedDetails = technicianDetails.map((detail, i) =>
      i === index ? { ...detail, [field]: value, totalCost: detail.timeWorked * (field === 'perHourCost' ? value : detail.perHourCost) } : detail
    );
    setTechnicianDetails(updatedDetails);
  };


  const handleDeleteInventoryProduct = (index) => {
    const updatedProducts = inventoryProducts.filter((_, i) => i !== index);
    setInventoryProducts(updatedProducts);
  };


  const handleDeleteAccessory = (index) => {
    const updatedAccessories = accessoryDetails.filter((_, i) => i !== index);
    setAccessoryDetails(updatedAccessories);
  };


  return (
    <Container>
      <Typography variant="h2" gutterBottom>Check-Out </Typography>

      <Box component="section" mb={4}>
        <Typography variant="h6" gutterBottom>Item and Customer Detail</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} sx={{ mt: 3, mb: 5 }}>
            <TextField label="Barcode" fullWidth sx={{ mt: 3 }} />
            <Button variant="contained" onClick={handleFetchData} sx={{ mt: 3 }}>Submit</Button>
          </Grid>
          {dataVisible && (
            <>
              <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
                <FormControlLabel
                  control={<Checkbox checked={directDelivery} onChange={() => setDirectDelivery(!directDelivery)} />}
                  label="Direct Delivery"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Issue Date" value={dummyData.issueDate} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Customer" value={dummyData.customer} fullWidth disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Item Details" value={dummyData.itemDetails} fullWidth disabled />
              </Grid>
            </>
          )}
        </Grid>
      </Box>

      {dataVisible && (
        <Box component="section" mb={4}>
          <Typography variant="h6" gutterBottom>Service Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Invoice No." value={dummyData.invoiceNo} fullWidth disabled />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField label="Date" value={format(new Date(), 'yyyy-MM-dd')} fullWidth disabled />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Time" value={format(new Date(), 'HH:mm')} fullWidth disabled />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Current Status</InputLabel>
                <Select value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)}>
                  {dummyData.statuses.map((status) => (
                    <MenuItem key={status} value={status}>{status}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Current Position</InputLabel>
                <Select value={currentPosition} onChange={(e) => setCurrentPosition(e.target.value)}>
                  {dummyData.positions.map((position) => (
                    <MenuItem key={position} value={position}>{position}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Problem Solved</InputLabel>
                <Select value={problemSolved} onChange={(e) => setProblemSolved(e.target.value)}>
                  {dummyData.problems.map((problem) => (
                    <MenuItem key={problem} value={problem}>{problem}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Serviced By</InputLabel>
                <Select value={servicedBy} onChange={(e) => setServicedBy(e.target.value)}>
                  {dummyData.servicedBy.map((technician) => (
                    <MenuItem key={technician} value={technician}>{technician}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Fault In</InputLabel>
                <Select value={faultIn} onChange={(e) => setFaultIn(e.target.value)}>
                  {dummyData.faults.map((fault) => (
                    <MenuItem key={fault} value={fault}>{fault}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid> */}
            <Grid item xs={12}>
              <TextField label="Service Report" multiline rows={4} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Report to Customer" multiline rows={4} fullWidth />
            </Grid>
          </Grid>
        </Box>
      )}

      {dataVisible && (
        <>
          <Box component="section" mb={4}>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h2" gutterBottom>Technician Details</Typography>
              <FormControlLabel
                control={<Checkbox checked={extraTaxEnabledTech} onChange={() => setExtraTaxEnabledTech(!extraTaxEnabledTech)} />}
                label="Add Tax"
              />
            </Grid>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Technician Name</TableCell>
                    <TableCell>Task</TableCell>
                    <TableCell>Time Worked</TableCell>
                    <TableCell>Per Hour Cost</TableCell>
                    <TableCell>Total Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {technicianDetails.map((technician, index) => (
                    <TableRow key={index}>
                      <TableCell>{technician.name}</TableCell>
                      <TableCell>{technician.task}</TableCell>
                      <TableCell>{technician.timeWorked} hrs</TableCell>
                      <TableCell>
                        <TextField
                          type="number"
                          value={technician.perHourCost}
                          onChange={(e) => handleTechnicianChange(index, 'perHourCost', parseInt(e.target.value, 10))}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          type="number"
                          value={technician.totalCost}
                          onChange={(e) => handleTechnicianChange(index, 'totalCost', parseInt(e.target.value, 10))}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box component="section" mb={4}>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h2" gutterBottom>Spare Parts</Typography>
              <FormControlLabel
                control={<Checkbox checked={extraTaxEnabledTech} onChange={() => setExtraTaxEnabledTech(!extraTaxEnabledTech)} />}
                label="Add Tax"
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Products</InputLabel>
                  <Select value={newProduct} onChange={(e) => setNewProduct(e.target.value)}>
                    {dummyData.inventoryItems.map((item) => (
                      <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Qty" value={newQty} onChange={(e) => setNewQty(e.target.value)} fullWidth />
              </Grid>
              <Grid item xs={12} mb={3}>
                <Button variant="contained" onClick={handleAddInventoryProduct}>Add</Button>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography variant="subtitle1">Added Spare Parts</Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Quantity</TableCell>
                          <TableCell>Price per Unit</TableCell>
                          <TableCell>Total Price</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {inventoryProducts.map((product, index) => {
                          const item = dummyData.inventoryItems.find(i => i.name === product.name);
                          const totalPrice = item ? item.price * product.qty : 0;
                          return (
                            <TableRow key={index}>
                              <TableCell>{product.name}</TableCell>
                              <TableCell>{product.qty}</TableCell>
                              <TableCell>{item ? item.price : 0}</TableCell>
                              <TableCell>{totalPrice}</TableCell>
                              <TableCell>
                              <Button onClick={() => handleDeleteInventoryProduct(index)}>Delete</Button>
                            </TableCell>
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
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h2" gutterBottom>Accessory</Typography>
              <FormControlLabel
                control={<Checkbox checked={extraTaxEnabledTech} onChange={() => setExtraTaxEnabledTech(!extraTaxEnabledTech)} />}
                label="Add Tax"
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Accessory</InputLabel>
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
                  <Typography variant="subtitle1">Added Accessories</Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Accessory Name</TableCell>
                          <TableCell>Quantity</TableCell>
                          <TableCell>Price per Unit</TableCell>
                          <TableCell>Total Price</TableCell>
                          <TableCell>Action</TableCell>
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
                              <TableCell>
                                <Button onClick={() => handleDeleteAccessory(index)}>Delete</Button>
                              </TableCell>
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

        </>
      )}

      {dataVisible && (
        <Box component="section" mb={4}>
          <Typography variant="h6" gutterBottom>Other</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Total Qty" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                >
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
      )}
    </Container>
  );
};

export default CheckoutPage;
