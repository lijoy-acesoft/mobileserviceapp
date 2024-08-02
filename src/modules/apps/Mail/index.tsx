import React, { useState } from 'react';
import {
  Container, Grid, Typography, TextField, Box, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress,
  Button,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { serviceDummyData as dummyData } from '../dummydata/product';

const ServiceDetailPage = () => {
  const [currentBarcode, setCurrentBarcode] = useState('');
  const [dataVisible, setDataVisible] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const handleFetchData = () => {
    const foundData = dummyData.find((data) => data.barcode === currentBarcode);
    if (foundData) {
      setCurrentData(foundData);
      setDataVisible(true);
    } else {
      setDataVisible(false);
    }
  };


  const steps = ['Check-In', 'Work In Progress', 'Work Finished', 'Delivered'];
  const statusIndex = steps.indexOf(currentData?.currentStatus);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Service Details</Typography>

      <Box component="section" mb={4}>
        <Typography variant="h6" gutterBottom>Item and Customer Detail</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Barcode"
              value={currentBarcode}
              onChange={(e) => setCurrentBarcode(e.target.value)}
              fullWidth
              sx={{ mt: 3 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
            <Button variant="contained" onClick={handleFetchData} sx={{ mt: 3 }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>

      {dataVisible && currentData && (
        <>
            <Box mb={5} sx={{ width: '100%' }}>
            <Typography mb={3} variant="subtitle1">Progress : {currentData.currentStatus}</Typography>
            <Stepper alternativeLabel activeStep={statusIndex}>
              {steps.map((label, index) => (
                <Step key={label} completed={index <= statusIndex}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <Box component="section" mb={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Issue Date" value={currentData.issueDate} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Customer" value={currentData.customer} fullWidth disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Item Details" value={currentData.itemDetails} fullWidth disabled />
              </Grid>
            </Grid>
          </Box>

          <Box component="section" mb={4}>
            <Typography variant="h6" gutterBottom>Service Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Invoice No." value={currentData.invoiceNo} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Current Status" value={currentData.currentStatus} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Current Position" value={currentData.currentPosition} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Problem Solved" value={currentData.problemSolved} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Serviced By" value={currentData.servicedBy.join(', ')} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Fault In" value={currentData.faultIn} fullWidth disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Service Report" value={currentData.serviceReport} multiline rows={4} fullWidth disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Report to Customer" value={currentData.reportToCustomer} multiline rows={4} fullWidth disabled />
              </Grid>
            </Grid>
          </Box>

          <Box component="section" mb={4}>
            <Typography variant="h6" gutterBottom>Technician Details</Typography>
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
                  {currentData.technicians.map((technician, index) => (
                    <TableRow key={index}>
                      <TableCell>{technician.name}</TableCell>
                      <TableCell>{technician.task}</TableCell>
                      <TableCell>{technician.timeWorked}</TableCell>
                      <TableCell>{technician.perHourCost}</TableCell>
                      <TableCell>{technician.totalCost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box component="section" mb={4}>
            <Typography variant="h6" gutterBottom>Spare Parts Details</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Part Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentData.spareParts.map((part, index) => (
                    <TableRow key={index}>
                      <TableCell>{part.name}</TableCell>
                      <TableCell>{part.qty}</TableCell>
                      <TableCell>{part.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      )}
    </Container>
  );
};

export default ServiceDetailPage;
