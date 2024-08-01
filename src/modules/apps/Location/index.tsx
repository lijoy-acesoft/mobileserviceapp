import React, { useState, useRef } from 'react';
import { TextField, MenuItem, Button, Typography, Paper, Card, CardMedia, Box, Dialog, DialogContent, IconButton, Grid } from '@material-ui/core';
import { PhotoCamera, Close as CloseIcon } from '@mui/icons-material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TableListing = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);

  const initialValues = {
    employeeName: '',
    employeeCode: '',
    designation: '',
    nationality: '',
    dob: '',
    maritalStatus: '',
    qualification: '',
    gender: '',
    bloodGroup: '',
    salaryPackage: '',
    joiningDate: '',
    salaryType: '',
    terminationDate: '',
    mobile: '',
    phone: '',
    address: '',
    email: '',
    remarks: '',
    dailyWorkingHours: '',
    weeklyOtPayRate: '',
    active: true,
    bankName: '',
    bankAc: '',
    branch: '',
    branchCode: '',
    contract: '',
    insurance: '',
    details: '',
    passportNumber: '',
    passportExpiry: '',
    emiratesId: '',
    emiratesExpiry: '',
    visaNumber: '',
    visaExpiry: '',
  };

  const validationSchema = Yup.object().shape({
    employeeName: Yup.string().required('Employee Name is required'),
    // Add other validation rules here
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleImageClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container xs={12}>
      <Typography variant="h4" align="center" gutterBottom>
        Service Entry
      </Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            // Handle form submission
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Card variant="outlined" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
                    {imagePreview ? (
                      <CardMedia
                        component="img"
                        style={{ width: 250, height: 230, objectFit: 'cover', borderRadius: '4px', cursor: 'pointer' }}
                        image={imagePreview}
                        alt="Preview"
                        onClick={handleImageClick}
                      />
                    ) : (
                      <Box style={{ display: 'flex', alignItems: 'center', width: 250, height: 240, border: '1px dashed gray', borderRadius: '4px', justifyContent: 'center' }}>
                        <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                          No image selected
                        </Typography>
                      </Box>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        handleImageChange(e);
                        setFieldValue("image", e.currentTarget.files[0]);
                      }}
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                    />
                    <div style={{ marginTop: '16px' }}>
                      <Button
                        variant="contained"
                        startIcon={<PhotoCamera />}
                        onClick={handleClick}
                        style={{ marginRight: '8px' }}
                      >
                        Upload
                      </Button>
                      <Button variant="contained" onClick={() => setImagePreview(null)}>Clear</Button>
                    </div>
                    {fileName && (
                      <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                        {fileName}
                      </Typography>
                    )}
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Field as={TextField} name="employeeName" label="Employee Name" fullWidth />
                  <ErrorMessage name="employeeName" component="div" />
                  <Field as={TextField} name="employeeCode" label="Employee Code" fullWidth />
                  <Field as={TextField} select name="nationality" label="Nationality" fullWidth>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                  </Field>
                  <Field as={TextField} name="dob" label="Date of Birth" type="date" fullWidth InputLabelProps={{ shrink: true }} />
                  <Field as={TextField} name="maritalStatus" label="Marital Status" fullWidth />
                  <Field as={TextField} name="gender" label="Gender" fullWidth />
                </Grid>

                <Grid item xs={12} md={4}>
                  <Field as={TextField} select name="designation" label="Designation" fullWidth>
                    <MenuItem value="Manager">Manager</MenuItem>
                    <MenuItem value="Developer">Developer</MenuItem>
                    <MenuItem value="Designer">Designer</MenuItem>
                  </Field>
                  <Field as={TextField} name="qualification" label="Qualification" fullWidth />
                  <Field as={TextField} name="joiningDate" label="Joining Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
                  <Field as={TextField} name="salaryPackage" label="Salary Package" fullWidth />
                  <Field as={TextField} name="salaryType" label="Salary Type" fullWidth />
                  <Field as={TextField} name="terminationDate" label="Termination Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
                </Grid>
              </Grid>

              <Dialog open={open} onClose={handleClose} maxWidth="lg">
                <DialogContent style={{ position: 'relative' }}>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    style={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: '#000',
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <img src={imagePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
                </DialogContent>
              </Dialog>

              <Grid container spacing={3} style={{ marginTop: '16px' }}>
                <Grid item xs={12}>
                  <Typography variant="h6">Salary Account Details</Typography>
                  <Field as={TextField} name="bankName" label="Bank Name" fullWidth />
                  <Field as={TextField} name="bankAc" label="Bank A/c No" fullWidth />
                  <Field as={TextField} name="branch" label="Branch" fullWidth />
                  <Field as={TextField} name="branchCode" label="Branch Code" fullWidth />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6">Statutory Details</Typography>
                  <Field as={TextField} name="contract" label="Contract" fullWidth />
                  <Field as={TextField} name="insurance" label="Insurance" fullWidth />
                  <Field as={TextField} name="details" label="Details" fullWidth />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6">Other Details</Typography>
                  <Field as={TextField} name="passportNumber" label="Passport Number" fullWidth />
                  <Field as={TextField} name="passportExpiry" label="Expiry Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
                  <Field as={TextField} name="emiratesId" label="Emirates ID" fullWidth />
                  <Field as={TextField} name="emiratesExpiry" label="Expiry Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
                  <Field as={TextField} name="visaNumber" label="Visa Number" fullWidth />
                  <Field as={TextField} name="visaExpiry" label="Expiry Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
                </Grid>

                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default TableListing;
