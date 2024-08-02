import React, { useState, useRef } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  Typography,
  Paper,
  Card,
  CardMedia,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Grid
} from '@material-ui/core';
import { PhotoCamera, Close as CloseIcon } from '@mui/icons-material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#000',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    marginBottom: theme.spacing(2), // Add spacing between fields
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    marginBottom: theme.spacing(2), // Add spacing below the card
  },
  dialogImage: {
    width: '100%',
    height: 'auto',
  },
}));

const TableListing = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [fileName, setFileName] = useState('');
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);
  const classes = useStyles();

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
    setFileName(file ? file.name : '');
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
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Add Technician
        </Typography>
      </Grid>
      <Grid item xs={12}>
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
              

                <Box display="flex" justifyContent="center" marginTop={3}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TableListing;
